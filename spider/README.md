# Miliastra-knowledge-en Spider

英文/东南亚官方文档知识库爬虫，使用 [r.jina.ai](https://r.jina.ai/) 抓取官方页面并保存为 Markdown。

---

## 环境要求

| 工具 | 版本要求 | 说明 |
|------|---------|------|
| Node.js | ≥ 18 | 需要原生 `fetch` 支持 |
| npm | ≥ 9 | 随 Node.js 附带 |

安装 Node.js 推荐使用 [nvm](https://github.com/nvm-sh/nvm)：

```bash
nvm install 20
nvm use 20
```

---

## 快速开始（How to Get Started）

```bash
# 1. 进入 spider 目录
cd spider

# 2. 安装依赖
npm install

# 3. 配置环境变量（可选，但强烈推荐）
cp .env.example .env
# 编辑 .env，填入 JINA_API_KEY（免费申请：https://jina.ai/）

# 4. 生成 URL 目录（从官方 CDN 拉取 catalog）
npm run crawl

# 5. 全量抓取文档
npm run scrape -- --clean --since=2020.01.01
```

完成后，文档会保存到：
- `../official/guide/`   — 官方指南（186 篇）
- `../official/tutorial/` — 官方教程（76 篇）

---

## 结构

```
Miliastra-knowledge-en/
├── config/
│   ├── urls-guide.json       # Guide 条目列表（由 crawl 生成）
│   ├── urls-tutorial.json    # Tutorial 条目列表（由 crawl 生成）
│   └── title.json            # 标题映射表
├── official/
│   ├── guide/                # 官方指南 Markdown（由 scrape 生成）
│   └── tutorial/             # 官方教程 Markdown（由 scrape 生成）
└── spider/
    ├── crawl.ts              # 拉取 catalog JSON，生成 config/urls-*.json
    ├── scrape.ts             # 读 config，调用 r.jina.ai 保存 Markdown
    ├── types.ts              # 共享类型
    ├── utils/
    │   ├── documentPath.ts   # 路径计算工具
    │   └── jina.ts           # Jina Reader 封装
    ├── package.json
    ├── .env.example
    └── .gitignore
```

## 命令参考

### 1. 生成 URL 目录（`npm run crawl`）

从 Hoyoverse 官方 CDN 拉取 catalog JSON，生成 `config/urls-*.json`。

```bash
npm run crawl                     # 生成 guide + tutorial
npm run crawl -- --type=guide     # 只生成 guide
npm run crawl -- --type=tutorial  # 只生成 tutorial
```

### 2. 抓取文档（`npm run scrape`）

读取 `config/urls-*.json`，调用 [r.jina.ai](https://r.jina.ai/) 抓取并保存 Markdown。

```bash
# 常用组合
npm run scrape                           # 增量（只抓 updated_at > 2025.10.01 的条目）
npm run scrape -- --since=2024.01.01     # 抓取指定日期之后更新的
npm run scrape -- --clean --since=2020.01.01  # 全量（先清空目录，再重抓所有）
npm run scrape -- --scope=guide          # 只处理 guide
npm run scrape -- --force                # 强制重新抓取（忽略本地文件）
npm run scrape -- --test --limit=5       # 测试模式（只处理前 N 条）
npm run scrape -- --delay=1000           # 自定义请求间隔(ms)
```

| 参数 | 默认值 | 说明 |
|------|--------|------|
| `--clean` | 关 | 爬取前删除对应 scope 的输出目录 |
| `--since=YYYY.MM.DD` | 2025.10.01 | config 过滤日期（只处理更新日期 > 此值的条目） |
| `--force` | 关 | 忽略已存在的本地文件，强制重新抓取 |
| `--scope=guide\|tutorial` | 全部 | 只处理指定 scope |
| `--delay=N` | 3000(无key)/600(有key) | 请求间隔（毫秒） |
| `--test` | 关 | 测试模式 |
| `--limit=N` | 5 | 测试模式下处理的条数 |

### Jina API Key（可选）

| 状态 | 速率 | 默认 delay | 262 条预估用时 |
|------|------|-----------|--------------|
| 无 Key | ~20 RPM | 3000ms | ~13 分钟 |
| 有 Key (免费) | ~200 RPM | 600ms | ~2.5 分钟 |

免费 Key 申请：<https://jina.ai/>

填写方式：将 key 写入 `spider/.env`：
```
JINA_API_KEY=jina_xxxxxxxxxxxx
```

---

## 定期更新流程

### 方案 A：增量更新（推荐，周期 ≥ 1 周）

```bash
# 1. 刷新目录（获取新增/改动的条目）
npm run crawl

# 2. 只抓取近期更新的文档（将日期改为上次更新日期）
npm run scrape -- --since=2025.10.01
```

- `updated_at` 由官方 catalog JSON 提供，可靠性取决于官方维护质量。
- 如果官方没有及时更新 `updated_at`，可适当调早 `--since` 日期（扩大范围）。

### 方案 B：全量重建（内容大改、或出现大量错误时）

```bash
npm run crawl
npm run scrape -- --clean --since=2020.01.01
```

全量重建会删除并重新创建 `official/guide/` 和 `official/tutorial/`。

---

## 生成的 Markdown 格式

每个文件包含 frontmatter + 正文：

```markdown
---
id: mhkgc6r6vjba
title: Ability Unit Effect
url: https://act.hoyoverse.com/ys/ugc/tutorial/detail/mhkgc6r6vjba
language: en
scope: guide
crawledAt: 2026-05-31T15:00:00.000Z
---

# Ability Unit Effect
...
```

文件命名规则：`{id}_{sanitized_title}.md`（特殊字符替换为 `_`）

---

## Catalog 来源

| Scope | Catalog JSON | 基础 URL |
|-------|-------------|---------|
| guide | `https://act-webstatic.hoyoverse.com/ugc-tutorial/knowledge/sea/en-us/catalog.json` | `https://act.hoyoverse.com/ys/ugc/tutorial/detail/` |
| tutorial | `https://act-webstatic.hoyoverse.com/ugc-tutorial/course/sea/zh-cn/catalog.json` | `https://act.hoyoverse.com/ys/ugc/tutorial/course/detail/` |
