#!/usr/bin/env node
/**
 * 后处理脚本：清理爬取后的 Markdown 文件
 *
 * 对 tutorial 文件：
 *   - 剥离 nav 头（保留从第一个非"Tutorial"一级标题开始的内容）
 *   - 删除页脚（HoYoverse 版权/链接行）
 *   - 用 catalog title 修正 frontmatter title 字段
 *
 * 对 guide 文件：
 *   - 全部删除（hoyoverse guide 页面是 JS SPA，Jina 只能取到默认的
 *     Update Log 页，186 个文件内容完全相同，没有使用价值）
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const KNOWLEDGE_DIR = path.join(__dirname, '..');
const CONFIG_DIR = path.join(KNOWLEDGE_DIR, 'config');

// HoYoverse 页脚特征行（出现即截断）
const FOOTER_MARKERS = [
  /^\[Home\]\(https:\/\/hoyoverse\.com\/\)/,
  /^Copyright © COGNOSPHERE/,
];

// nav 中的"装饰性"文本行（非链接，非标题），可删除
const NAV_TEXT_PATTERNS = [
  /^!\[Image \d+\]\(/,                  // 顶部 banner 图片
  /^ General Guide $/,
  /^ Tutorial $/,
  /^ FAQ $/,
  /^Wander the Thousand Stars/,
  /^ Topic Highlights $/,
  /^ Academy Guide $/,
  /^ New Version Feature Tutorial $/,
  /^ Concept Overview $/,
  /^ Must-See Beginner's Guide $/,
  /^ Advanced Examples $/,
  /^ Create a Party Mini-Game $/,
  /^ Video Tutorial $/,
  /^ All Tutorials $/,
];

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) meta[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }
  return { meta, body: match[2] };
}

function buildFrontmatter(meta: Record<string, string>): string {
  const lines = Object.entries(meta).map(([k, v]) => `${k}: ${v}`);
  return `---\n${lines.join('\n')}\n---\n`;
}

/**
 * 剥离 tutorial 文件的 nav 头和页脚
 * 策略：找到第一个"真实内容"的 # 标题（不是 "# Tutorial" 或 site-wide 标题）
 */
function stripTutorialNav(body: string): string {
  const lines = body.split('\n');

  // 1. 找到内容起始行：第一个 # 标题不是 "# Tutorial" / "# Genshin Impact..."
  let contentStart = -1;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^# /.test(line) &&
        line !== '# Tutorial' &&
        !line.startsWith('# Genshin Impact Miliastra')) {
      contentStart = i;
      break;
    }
  }

  if (contentStart === -1) {
    // 没找到真实内容 # 标题 → 尝试面包屑定位
    for (let i = 0; i < lines.length; i++) {
      if (/\]\(https?:\/\/act\.hoyoverse\.com\/ys\/ugc\/tutorial\/course\/home/.test(lines[i])) {
        for (let j = i + 1; j < lines.length; j++) {
          if (/^# /.test(lines[j])) { contentStart = j; break; }
        }
        break;
      }
    }
  }

  if (contentStart === -1) {
    // 仍未找到 → 降级：文章内容可能以 ## 开头，找 nav 结束后第一个 ## 标题
    // nav 结束标志：最后一个纯导航链接行之后
    let lastNavLine = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (/^!\[Image \d+\]\(/.test(line)) lastNavLine = i;
      if (NAV_TEXT_PATTERNS.some(re => re.test(line))) lastNavLine = i;
      if (/^\[.+\]\(https?:\/\/act\.hoyoverse\.com\/ys\/ugc\/tutorial\/(detail|course)\//.test(line)) lastNavLine = i;
    }
    if (lastNavLine >= 0) {
      for (let i = lastNavLine + 1; i < lines.length; i++) {
        if (/^##? /.test(lines[i])) { contentStart = i; break; }
      }
    }
  }

  if (contentStart === -1) return body; // 找不到，保留原内容

  // 2. 找页脚起始行
  let footerStart = lines.length;
  for (let i = contentStart; i < lines.length; i++) {
    if (FOOTER_MARKERS.some(re => re.test(lines[i]))) {
      // 往回找最近的空行作为分割点
      let j = i - 1;
      while (j > contentStart && lines[j].trim() === '') j--;
      footerStart = j + 1;
      break;
    }
  }

  const content = lines.slice(contentStart, footerStart).join('\n').trimEnd();
  return '\n' + content + '\n';
}

async function loadCatalogTitles(scope: string): Promise<Map<string, string>> {
  const map = new Map<string, string>();
  try {
    const raw = await fs.readFile(path.join(CONFIG_DIR, `urls-${scope}.json`), 'utf-8');
    const config = JSON.parse(raw);
    for (const entry of config.entries ?? []) {
      if (entry.id && entry.title) map.set(entry.id, entry.title);
    }
  } catch { /* ignore */ }
  return map;
}

async function processGuideFiles(): Promise<void> {
  const guideDir = path.join(KNOWLEDGE_DIR, 'official', 'guide');
  const catalogTitles = await loadCatalogTitles('guide');

  let files: string[];
  try {
    files = (await fs.readdir(guideDir)).filter(f => f.endsWith('.md'));
  } catch {
    console.log('   ⚠️  official/guide/ not found, skipping');
    return;
  }

  console.log(`\n📁 Guide: processing ${files.length} files`);
  let fixed = 0, skipped = 0;

  for (const file of files) {
    const filePath = path.join(guideDir, file);
    const raw = await fs.readFile(filePath, 'utf-8');
    const { meta, body } = parseFrontmatter(raw);

    // 剥离 nav（与 tutorial 相同的策略）
    const cleanedBody = stripTutorialNav(body);

    // 修正 title：优先用正文第一个 # 标题（英文，排除 nav 标题），其次用 catalog title
    const NAV_TITLES = new Set(['Genshin Impact Miliastra Wonderland: General Guide', 'Tutorial']);
    const h1Match = cleanedBody.match(/^# (.+)$/m);
    const h1Title = h1Match ? h1Match[1].trim() : '';
    const articleTitle = (h1Title && !NAV_TITLES.has(h1Title))
      ? h1Title
      : (catalogTitles.get(meta.id ?? '') ?? '');

    const bodyUnchanged = cleanedBody === body;
    const titleUnchanged = !articleTitle || meta.title === articleTitle;

    if (bodyUnchanged && titleUnchanged) {
      skipped++;
      continue;
    }

    if (articleTitle) meta.title = articleTitle;

    const newContent = buildFrontmatter(meta) + cleanedBody;
    await fs.writeFile(filePath, newContent, 'utf-8');
    fixed++;
  }

  console.log(`   ✓ Cleaned: ${fixed} | Already clean: ${skipped}`);
}

async function processTutorialFiles(): Promise<void> {
  const tutorialDir = path.join(KNOWLEDGE_DIR, 'official', 'tutorial');
  const catalogTitles = await loadCatalogTitles('tutorial');

  let files: string[];
  try {
    files = (await fs.readdir(tutorialDir)).filter(f => f.endsWith('.md'));
  } catch {
    console.log('   ⚠️  official/tutorial/ not found, skipping');
    return;
  }

  console.log(`\n📁 Tutorial: processing ${files.length} files`);
  let fixed = 0, skipped = 0;

  for (const file of files) {
    const filePath = path.join(tutorialDir, file);
    const raw = await fs.readFile(filePath, 'utf-8');
    const { meta, body } = parseFrontmatter(raw);

    // 剥离 nav
    const cleanedBody = stripTutorialNav(body);

    // 修正 title：优先用正文第一个 # 标题（英文，排除 nav 标题），其次用 catalog title
    const NAV_TITLES = new Set(['Genshin Impact Miliastra Wonderland: General Guide', 'Tutorial']);
    const h1Match = cleanedBody.match(/^# (.+)$/m);
    const h1Title = h1Match ? h1Match[1].trim() : '';
    const articleTitle = (h1Title && !NAV_TITLES.has(h1Title))
      ? h1Title
      : (catalogTitles.get(meta.id ?? '') ?? '');

    const bodyUnchanged = cleanedBody === body;
    const titleUnchanged = !articleTitle || meta.title === articleTitle;

    if (bodyUnchanged && titleUnchanged) {
      skipped++;
      continue;
    }

    if (articleTitle) meta.title = articleTitle;

    const newContent = buildFrontmatter(meta) + cleanedBody;
    await fs.writeFile(filePath, newContent, 'utf-8');
    fixed++;
  }

  console.log(`   ✓ Cleaned: ${fixed} | Already clean: ${skipped}`);
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const scopeArg = args.find(a => a.startsWith('--scope='))?.split('=')[1];

  console.log('🧹 Post-processing crawled Markdown files\n');
  if (dryRun) console.log('⚠️  Dry-run mode (no files changed)\n');

  if (!scopeArg || scopeArg === 'guide') await processGuideFiles();
  if (!scopeArg || scopeArg === 'tutorial') await processTutorialFiles();

  console.log('\n✅ Done\n');
}

main().catch(err => { console.error('❌', err); process.exit(1); });
