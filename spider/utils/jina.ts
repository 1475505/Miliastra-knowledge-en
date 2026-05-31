/**
 * Jina AI Reader 集成模块
 * 使用 r.jina.ai 将网页转换为 Markdown，无需额外 SDK
 *
 * API 文档: https://jina.ai/reader/
 * 速率限制:
 *   - 无 API Key: ~20 RPM
 *   - 有免费 API Key: ~200 RPM
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { buildAbsoluteMarkdownPath, KNOWLEDGE_BASE_DIR } from './documentPath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const JINA_BASE_URL = 'https://r.jina.ai/';

export interface JinaFetchResult {
  success: boolean;
  title: string;
  content: string;
  fileSaved?: boolean;
  error?: string;
}

/**
 * 解析 r.jina.ai 响应体
 * 响应格式:
 *   Title: ...
 *   URL Source: ...
 *   Markdown Content:
 *   ...actual content...
 */
function parseJinaResponse(raw: string): { title: string; content: string } {
  const titleMatch = raw.match(/^Title:\s*(.+)$/m);
  const contentMatch = raw.match(/Markdown Content:\s*\n([\s\S]+)$/);

  return {
    title: titleMatch?.[1]?.trim() || 'Untitled',
    content: contentMatch?.[1]?.trim() || raw.trim(),
  };
}

/**
 * 通过 r.jina.ai 获取单个页面的 Markdown 内容
 */
export async function fetchWithJina(url: string, apiKey?: string): Promise<{ title: string; content: string }> {
  const jinaUrl = JINA_BASE_URL + url;

  const headers: Record<string, string> = {
    'X-Return-Format': 'markdown',
    'Accept': 'text/plain',
  };
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  const response = await fetch(jinaUrl, { headers });
  if (!response.ok) {
    throw new Error(`Jina fetch failed: ${response.status} ${response.statusText} for ${url}`);
  }

  const raw = await response.text();
  return parseJinaResponse(raw);
}

/**
 * 爬取单个文档并保存到 Miliastra-knowledge-en/official/{scope}/
 */
export async function scrapeAndSave(options: {
  id: string;
  title: string;
  url: string;
  scope: string;
  apiKey?: string;
  force?: boolean;
  since?: Date;
}): Promise<JinaFetchResult> {
  const { id, title, url, scope, apiKey, force, since } = options;

  // 计算目标文件路径
  const filePath = buildAbsoluteMarkdownPath(KNOWLEDGE_BASE_DIR, { id, title, scope });

  // 检查文件是否已存在
  if (!force) {
    try {
      await fs.access(filePath);
      if (since) {
        const existing = await fs.readFile(filePath, 'utf-8');
        const crawledAtMatch = existing.match(/^crawledAt:\s*(.+)$/m);
        if (crawledAtMatch) {
          const crawledAt = new Date(crawledAtMatch[1].trim());
          if (!isNaN(crawledAt.getTime()) && crawledAt > since) {
            return { success: true, title, content: '', fileSaved: false };
          }
        }
      } else {
        // 文件已存在且未指定 --since，跳过
        return { success: true, title, content: '', fileSaved: false };
      }
    } catch {
      // 文件不存在，继续爬取
    }
  }

  // 通过 Jina 获取内容
  const fetched = await fetchWithJina(url, apiKey);
  const finalTitle = fetched.title || title;
  const content = fetched.content;

  if (!content) {
    return { success: false, title: finalTitle, content: '', error: 'Empty content returned from Jina' };
  }

  // 构建 frontmatter
  const frontmatterLines = [
    `id: ${id}`,
    `title: ${finalTitle}`,
    `url: ${url}`,
    `language: en`,
    `scope: ${scope}`,
    `crawledAt: ${new Date().toISOString()}`,
  ];
  const markdownContent = `---\n${frontmatterLines.join('\n')}\n---\n\n${content}`;

  // 保存文件
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, markdownContent, 'utf-8');

  return { success: true, title: finalTitle, content, fileSaved: true };
}
