#!/usr/bin/env node
/**
 * URL 生成脚本 - EN/SEA 版本
 * 直接解析 Hoyoverse SEA 官方 JSON 目录，无需爬虫
 *
 * Sources:
 *   guide    → knowledge/sea/en-us catalog (English)
 *   tutorial → course/sea/zh-cn catalog (Chinese SEA)
 */

import { URLEntry, URLConfig } from './types.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import { buildRelativeMarkdownPath } from './utils/documentPath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

interface CatalogItem {
  updated_at: string;
  title: string;
  path_id: string;
  real_id: string;
  children: CatalogItem[];
  article_type: number;
}

// EN/SEA 目录配置
const CATALOG_SOURCES = {
  guide: {
    jsonUrl: 'https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/catalog.json',
    baseUrl: 'https://act.hoyoverse.com/ys/ugc/tutorial/detail/',
    name: 'Comprehensive Guide (EN)',
  },
  tutorial: {
    jsonUrl: 'https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/zh-cn/catalog.json',
    baseUrl: 'https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/',
    name: 'Tutorial (SEA ZH-CN)',
  },
};

class URLGenerator {
  async fetchCatalogAndExtract(scope: string): Promise<URLEntry[]> {
    const source = CATALOG_SOURCES[scope as keyof typeof CATALOG_SOURCES];
    if (!source) {
      console.error(`⚠️  Unknown scope: ${scope}`);
      return [];
    }

    console.log(`\n🔍 Fetching catalog ${source.name}: ${source.jsonUrl}`);

    try {
      const response = await fetch(source.jsonUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json() as CatalogItem[];
      const entries = this.parseCatalogItems(data, scope, source.baseUrl);
      console.log(`   📊 Parsed: ${entries.length} entries`);
      return entries;
    } catch (error) {
      console.error(`   ✗ Failed to fetch catalog: ${(error as Error).message}`);
      return [];
    }
  }

  private parseCatalogItems(items: CatalogItem[], scope: string, baseUrl: string): URLEntry[] {
    const entries: URLEntry[] = [];
    for (const item of items) {
      if (item.real_id) {
        const url = `${baseUrl}${item.real_id}`;
        entries.push({ id: item.real_id, title: item.title, url, uniqueId: url, scope, updated_at: item.updated_at });
      }
      if (item.children?.length > 0) {
        entries.push(...this.parseCatalogItems(item.children, scope, baseUrl));
      }
    }
    return entries;
  }

  async generate(scopes: string[] = ['guide', 'tutorial']) {
    console.log(`🚀 Generating URL list from JSON catalogs\n`);
    console.log(`📋 Scopes: ${scopes.join(', ')}\n`);

    const allEntries: URLEntry[] = [];

    for (const scope of scopes) {
      const entries = await this.fetchCatalogAndExtract(scope);
      allEntries.push(...entries);
      await this.saveScopeConfig(entries, scope);
    }

    console.log('\n📊 Statistics:');
    for (const scope of scopes) {
      console.log(`   ${scope}: ${allEntries.filter(e => e.scope === scope).length}`);
    }
    console.log(`   Total: ${allEntries.length}`);

    await this.generateTitleJson(allEntries);
    console.log(`\n✅ Done (${allEntries.length} entries)\n`);
  }

  // 配置文件保存到 Miliastra-knowledge-en/config/
  private async saveScopeConfig(entries: URLEntry[], scope: string) {
    const configDir = path.join(__dirname, '..', 'config');
    await fs.mkdir(configDir, { recursive: true });

    entries.sort((a, b) => a.title.localeCompare(b.title));

    const entriesWithLocalPath: URLEntry[] = entries.map(entry => ({
      ...entry,
      localPath: buildRelativeMarkdownPath(entry),
    }));

    const config: URLConfig = {
      entries: entriesWithLocalPath,
      metadata: {
        source: scope,
        extractedAt: new Date().toISOString(),
        totalCount: entriesWithLocalPath.length,
        scopes: { [scope]: entriesWithLocalPath.length },
      },
    };

    const outputPath = path.join(configDir, `urls-${scope}.json`);
    await fs.writeFile(outputPath, JSON.stringify(config, null, 2), 'utf-8');
    console.log(`   ✓ Written - ${scope}: ${outputPath} (${entriesWithLocalPath.length} entries)`);
  }

  private async generateTitleJson(allEntries: URLEntry[]) {
    const configDir = path.join(__dirname, '..', 'config');

    const titles = allEntries
      .map(entry => ({
        title: entry.title,
        localPath: entry.localPath || buildRelativeMarkdownPath(entry),
      }))
      .sort((a, b) => a.title.localeCompare(b.title, 'en'));

    const titleConfig = {
      titles,
      metadata: { generatedAt: new Date().toISOString(), totalCount: titles.length },
    };

    const outputPath = path.join(configDir, 'title.json');
    await fs.writeFile(outputPath, JSON.stringify(titleConfig, null, 2), 'utf-8');
    console.log(`   ✓ Written title.json: ${outputPath} (${titles.length} entries)`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const typeArg = args.find(a => a.startsWith('--type='))?.split('=')[1];
  const scopes = typeArg ? [typeArg] : ['guide', 'tutorial'];

  try {
    await new URLGenerator().generate(scopes);
  } catch (error) {
    console.error(`\n❌ ${(error as Error).message}\n`);
    process.exit(1);
  }
}

main().catch(error => {
  console.error('❌ Uncaught error:', error);
  process.exit(1);
});
