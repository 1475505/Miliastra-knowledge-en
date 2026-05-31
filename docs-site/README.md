# Miliastra Knowledge Base — Docs Site

面向 Miliastra 沙盒编辑器的文档站。

## 功能

- **一图流** (`/svg`) — 按章节浏览 SVG 一页流图，支持缩放、可折叠目录、相关文档面板
- **文档** (`/docs`) — 浏览所有指南/教程 Markdown 文档，支持搜索；hoyoverse 外链自动路由到本站

## 本地开发

```bash
npm install
npm run dev
# 前端：http://localhost:5173
# API：  http://localhost:3001
```

## 生产构建

```bash
npm run build   # 编译前端到 dist/public/ + 打包服务端到 dist/server.js
npm start       # node dist/server.js
```

## Railway 部署

1. 在 Railway 创建新项目，连接此仓库
2. **Root Directory** 设置为 `docs-site`
3. 环境变量（可选）：
   - `PORT` — 默认 3001
   - `DATA_ROOT` — 数据根目录，默认为 `docs-site` 父目录（即仓库根）

Railway 会自动执行 `railway.toml` 中的 `buildCommand` 和 `startCommand`。
