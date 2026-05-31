#!/usr/bin/env node
/**
 * 主爬虫脚本 - EN/SEA 版本
 * 使用 r.jina.ai 获取文档内容，保存到 Miliastra-knowledge-en
 *
 * 速率限制:
 *   无 API Key  → 20 RPM (3000ms 间隔)
 *   有 API Key  → 200 RPM (300ms 间隔，保守取 600ms)
 */

import { URLEntry, CrawlConfig } from './types.js';
import { scrapeAndSave } from './utils/jina.js';
import { KNOWLEDGE_BASE_DIR } from './utils/documentPath.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

async function main() {
  console.log('🔧 Document Crawler (EN/SEA) — powered by r.jina.ai\n');

  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const clean = args.includes('--clean');
  const testMode = args.includes('--test');
  const limitArg = args.find(a => a.startsWith('--limit='))?.split('=')[1];
  const sinceArg = args.find(a => a.startsWith('--since='))?.split('=')[1];
  const delayArg = args.find(a => a.startsWith('--delay='))?.split('=')[1];
  const scopeArg = args.find(a => a.startsWith('--scope='))?.split('=')[1];

  const testLimit = limitArg ? parseInt(limitArg, 10) : 5;
  const apiKey = process.env.JINA_API_KEY;

  // 请求间隔：有 API Key 时默认 600ms，否则 3000ms
  const delay = delayArg ? parseInt(delayArg, 10) : (apiKey ? 600 : 3000);

  // 配置筛选日期（只爬取比此日期更新的文档）
  const defaultSince = '2025.10.01';
  const configFilterStr = sinceArg || defaultSince;
  const configFilterDate = new Date(configFilterStr.replace(/\./g, '-'));

  if (isNaN(configFilterDate.getTime())) {
    console.error(`❌ Invalid date: ${configFilterStr} (use YYYY.MM.DD)`);
    process.exit(1);
  }

  const sinceDate = sinceArg ? configFilterDate : undefined;

  console.log(`🔑 Jina API Key: ${apiKey ? 'provided' : 'not set (rate limited to ~20 RPM)'}`);
  console.log(`⏱️  Request delay: ${delay}ms`);
  console.log(`🔄 Force re-crawl: ${force ? 'Yes' : 'No'}`);
  console.log(`�️  Clean output dirs: ${clean ? 'Yes' : 'No'}`);
  console.log(`�📅 Config filter date: ${configFilterStr}`);
  if (sinceDate) console.log(`📅 Re-crawl files older than: ${configFilterStr}`);
  console.log(`🧪 Test mode: ${testMode ? `Yes (first ${testLimit})` : 'No'}\n`);

  // 读取 config/ 目录下 urls-*.json（支持 --scope= 过滤）
  const configDir = path.join(__dirname, '..', 'config');
  let configFiles: string[];
  try {
    const all = await fs.readdir(configDir);
    configFiles = all
      .filter(f => f.startsWith('urls-') && f.endsWith('.json'))
      .filter(f => !scopeArg || f === `urls-${scopeArg}.json`);
  } catch {
    console.error(`❌ config/ directory not found. Run 'npm run crawl' first.`);
    process.exit(1);
  }

  if (configFiles.length === 0) {
    console.error(`❌ No urls-*.json files found in config/. Run 'npm run crawl' first.`);
    process.exit(1);
  }

  console.log(`📁 Config files: ${configFiles.join(', ')}\n`);

  // --clean: 删除对应 scope 的输出目录
  if (clean) {
    const scopes = new Set(configFiles.map(f => f.replace('urls-', '').replace('.json', '')));
    console.log(`🗑️  Cleaning output directories: ${[...scopes].join(', ')}`);
    for (const scope of scopes) {
      const dir = path.join(KNOWLEDGE_BASE_DIR, 'official', scope);
      try {
        await fs.rm(dir, { recursive: true, force: true });
        console.log(`   ✓ Deleted ${path.relative(KNOWLEDGE_BASE_DIR, dir)}`);
      } catch (e) {
        console.warn(`   ⚠ Could not delete ${dir}: ${(e as Error).message}`);
      }
    }
    console.log();
  }

  // 加载并筛选条目
  let allEntries: URLEntry[] = [];
  for (const file of configFiles) {
    const raw = await fs.readFile(path.join(configDir, file), 'utf-8');
    const config: CrawlConfig = JSON.parse(raw);
    if (!config.entries?.length) continue;

    const filtered = config.entries.filter(e => {
      if (!e.updated_at) return false;
      return new Date(e.updated_at) > configFilterDate;
    });

    console.log(`📖 ${file}: ${config.entries.length} total → ${filtered.length} after filter`);
    allEntries.push(...filtered);
  }

  if (allEntries.length === 0) {
    console.log(`\n⚠️  No entries pass the filter date ${configFilterStr}. Use an earlier --since date or omit it.`);
    process.exit(0);
  }

  // 测试模式截断
  const entries = testMode ? allEntries.slice(0, testLimit) : allEntries;
  if (testMode) {
    console.log(`\n🧪 Test mode: processing first ${entries.length} of ${allEntries.length} entries`);
  } else {
    console.log(`\n📋 Processing ${entries.length} entries`);
  }

  // Scope 统计
  const scopeStats: Record<string, number> = {};
  entries.forEach(e => { scopeStats[e.scope] = (scopeStats[e.scope] || 0) + 1; });
  console.log(`   ${Object.entries(scopeStats).map(([k, v]) => `${k}: ${v}`).join(' | ')}\n`);

  // 爬取
  let successCount = 0, skippedCount = 0, failCount = 0;
  const startTime = Date.now();

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const progress = `[${i + 1}/${entries.length}]`;

    console.log(`\n${progress} [${entry.scope}] ${entry.title}`);
    console.log(`   URL: ${entry.url}`);

    try {
      const result = await scrapeAndSave({
        id: entry.id,
        title: entry.title,
        url: entry.url,
        scope: entry.scope,
        apiKey,
        force,
        since: sinceDate,
      });

      if (!result.success) {
        failCount++;
        console.error(`   ✗ Failed: ${result.error}`);
      } else if (!result.fileSaved) {
        skippedCount++;
        console.log(`   ⏭️  Skipped (already up to date)`);
        continue; // 跳过的条目不等待
      } else {
        successCount++;
        console.log(`   ✓ Saved`);
      }
    } catch (err) {
      failCount++;
      console.error(`   ✗ Error: ${(err as Error).message}`);
    }

    // 速率限制等待（实际发起了网络请求后才等待）
    if (i < entries.length - 1) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ Complete`);
  console.log(`   Success: ${successCount} | Skipped: ${skippedCount} | Failed: ${failCount}`);
  console.log(`   Duration: ${duration}s`);
  if (successCount > 0) {
    console.log(`   Avg speed: ${(successCount / parseFloat(duration)).toFixed(2)} docs/sec`);
  }

  if (testMode) {
    console.log(`\n🧪 Test done. Run without --test to process all ${allEntries.length} entries.`);
  }
}

main().catch(err => { console.error('❌ Uncaught error:', err); process.exit(1); });
