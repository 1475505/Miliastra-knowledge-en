/**
 * 通用类型定义 - EN 版本
 */

export interface URLEntry {
  id: string;
  title: string;
  url: string;
  scope: string;
  uniqueId: string;
  localPath?: string;
  updated_at?: string;
}

export interface URLConfig {
  entries: URLEntry[];
  metadata: {
    source: string;
    extractedAt: string;
    totalCount: number;
    scopes: Record<string, number>;
  };
}

export interface CrawlConfig {
  entries: URLEntry[];
  metadata?: {
    source?: string;
    extractedAt?: string;
    totalCount?: number;
    scopes?: Record<string, number>;
  };
}

export interface ScrapeResult {
  success: boolean;
  markdown: string;
  metadata: {
    title: string;
    description?: string;
    language?: string;
    sourceURL?: string;
  };
  error?: string;
}

export interface URLExtractResult {
  entries: URLEntry[];
  totalPages: number;
  completedPages: number;
}
