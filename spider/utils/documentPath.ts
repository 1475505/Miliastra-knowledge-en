import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export interface MarkdownPathInput {
  id: string;
  title: string;
  scope: string;
}

// EN/SEA 版本的 scope → 目录映射
// spider 位于 Miliastra-knowledge-en/spider/，输出到同仓库的 official/ 目录
const SCOPE_DIRECTORY_MAP: Record<string, string[]> = {
  guide: ['official', 'guide'],
  tutorial: ['official', 'tutorial'],
};

// 知识库根目录：从 spider/utils/ 上两级 = Miliastra-knowledge-en/
export const KNOWLEDGE_BASE_DIR = path.join(__dirname, '..', '..');

export function sanitizeDocumentTitle(title: string): string {
  return title
    .replace(/[<>:"/\\|?*]/g, '_')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

function resolveScopeDirectory(scope: string): string[] {
  return SCOPE_DIRECTORY_MAP[scope] || ['official', scope];
}

export function buildRelativeMarkdownPath(input: MarkdownPathInput): string {
  const safeTitle = sanitizeDocumentTitle(input.title);
  return path.join(...resolveScopeDirectory(input.scope), `${input.id}_${safeTitle}.md`);
}

export function buildAbsoluteMarkdownPath(knowledgeDir: string, input: MarkdownPathInput): string {
  return path.join(knowledgeDir, buildRelativeMarkdownPath(input));
}
