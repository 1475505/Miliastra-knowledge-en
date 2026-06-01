import express from 'express'
import cors from 'cors'
import path from 'path'
import fs from 'fs'

const app = express()
const PORT = process.env.PORT || 3001

// DATA_ROOT: in dev, server/index.ts is at docs-site/server/ → ../../ = workspace root
// In prod, dist/server.js is at docs-site/dist/ → ../../ = workspace root
const DATA_ROOT = process.env.DATA_ROOT
  ? path.resolve(process.env.DATA_ROOT)
  : path.resolve(__dirname, '../..')

const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  app.use(express.static(path.join(__dirname, 'public')))
} else {
  app.use(cors({ origin: 'http://localhost:5173' }))
}

// ─── Helpers ────────────────────────────────────────────────────────────────

interface DocEntry {
  id: string
  title: string
  url: string
  scope: string
  updated_at: string
  localPath: string
}

interface DocTocEntry {
  id: string
  title: string
  available: boolean
}

interface DocTocSection {
  section: string
  id: string
  entries: DocTocEntry[]
}

function normalizeDocTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]/g, '')
}

function readFrontmatterTitle(localPath: string): string | null {
  try {
    const abs = path.resolve(DATA_ROOT, localPath)
    if (!abs.startsWith(path.resolve(DATA_ROOT)) || !fs.existsSync(abs)) return null
    const content = fs.readFileSync(abs, 'utf-8')
    const fm = parseFrontmatter(content)
    return fm.title?.trim() || null
  } catch {
    return null
  }
}

function extractDocIdsFromText(text: string): string[] {
  const ids = new Set<string>()
  const re = /act\.hoyoverse\.com\/ys\/ugc\/tutorial\/(?:course\/)?detail\/([\w-]+)/g
  let match: RegExpExecArray | null
  while ((match = re.exec(text)) !== null) ids.add(match[1])
  return [...ids]
}

function parseFrontmatter(content: string): Record<string, string> {
  const result: Record<string, string> = {}
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return result
  const lines = match[1].split('\n')
  for (const line of lines) {
    const sep = line.indexOf(': ')
    if (sep === -1) continue
    result[line.slice(0, sep)] = line.slice(sep + 2)
  }
  return result
}

function loadTranslationEntries(): DocEntry[] {
  const dir = path.join(DATA_ROOT, 'official/translation')
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const content = fs.readFileSync(path.join(dir, f), 'utf-8')
      const fm = parseFrontmatter(content)
      return {
        id: fm.id || f.split('_')[0],
        title: fm.title || f.replace('.md', ''),
        url: fm.url || '',
        scope: fm.scope || 'guide',
        updated_at: fm.translatedAt || '',
        localPath: path.join('official/translation', f),
      }
    })
}

const TUTORIAL_TITLE_OVERRIDES: Record<string, string> = {
  mh76jr0msx4g: '[Creator Tip] Inspiration Incentive Program Overview',
  mhu04t9rm1xm: 'Miliastra Dev Team Sharing (1) | Gameplay Design Exchange',
  mhyrrdiy2zis: 'Player Tutorial',
}

const TUTORIAL_SECTION_ORDER = [
  'Academy Essentials',
  'New Features',
  'General Concepts',
  'Beginner Must-Read',
  'Advanced Examples',
  'Party Game Walkthrough',
  'Video Tutorials',
] as const

const TUTORIAL_SECTION_LABELS: Record<(typeof TUTORIAL_SECTION_ORDER)[number], string> = {
  'Academy Essentials': 'academy-essentials',
  'New Features': 'new-features',
  'General Concepts': 'general-concepts',
  'Beginner Must-Read': 'beginner-must-read',
  'Advanced Examples': 'advanced-examples',
  'Party Game Walkthrough': 'party-game-walkthrough',
  'Video Tutorials': 'video-tutorials',
}

const TUTORIAL_ACADEMY_TITLES = new Set([
  '关卡导出',
  '更新日志',
  '学习导览&读前须知',
  '创作者中心入驻指引',
  '【奇匠小贴士】灵感激励计划一页流',
])

const TUTORIAL_VIDEO_TITLE_PATTERNS = [
  /^交互界面的搭建$/,
  /^信号$/,
  /^元件的制作$/,
  /^全局计时器$/,
  /^制作我的第一个奇域组件$/,
  /^基础功能逻辑&玩法流程$/,
  /^如何在千星奇域开启创作之旅$/,
  /^定时器$/,
  /^建成我的第一个奇域$/,
  /^新手入门系列视频教程$/,
  /^流程逻辑设置$/,
  /^玩家节点图搭建$/,
  /^玩法功能进阶实例$/,
  /^玩法整合：/,
  /^组件设置：/,
  /^编辑器通识$/,
  /^自定义变量的设置与变化$/,
  /^项目案例实战$/,
]

function loadDocEntries(): DocEntry[] {
  const guidePath = path.join(DATA_ROOT, 'config/urls-guide.json')
  const tutorialPath = path.join(DATA_ROOT, 'config/urls-tutorial.json')
  const guide: DocEntry[] = JSON.parse(fs.readFileSync(guidePath, 'utf-8')).entries
  const tutorial: DocEntry[] = JSON.parse(fs.readFileSync(tutorialPath, 'utf-8')).entries
  return [...guide, ...tutorial].map(entry => {
    const titleFromSource = readFrontmatterTitle(entry.localPath) || entry.title
    const title = TUTORIAL_TITLE_OVERRIDES[entry.id] || titleFromSource
    return { ...entry, title }
  })
}

function classifyTutorialSection(rawTitle: string): (typeof TUTORIAL_SECTION_ORDER)[number] {
  const title = rawTitle.trim()
  if (/^1\./.test(title)) return 'General Concepts'
  if (/^2\./.test(title)) return 'Beginner Must-Read'
  if (/^3\./.test(title)) return 'Advanced Examples'
  if (/^4\./.test(title)) return 'Party Game Walkthrough'
  if (TUTORIAL_ACADEMY_TITLES.has(title)) return 'Academy Essentials'
  if (TUTORIAL_VIDEO_TITLE_PATTERNS.some(pattern => pattern.test(title))) return 'Video Tutorials'
  return 'New Features'
}

function loadTutorialToc(): DocTocSection[] {
  const tutorialPath = path.join(DATA_ROOT, 'config/urls-tutorial.json')
  const tutorialEntries: DocEntry[] = JSON.parse(fs.readFileSync(tutorialPath, 'utf-8')).entries
  const sections = new Map<string, DocTocSection>()

  for (const section of TUTORIAL_SECTION_ORDER) {
    sections.set(section, {
      section,
      id: TUTORIAL_SECTION_LABELS[section],
      entries: [],
    })
  }

  for (const entry of tutorialEntries) {
    const sectionName = classifyTutorialSection(entry.title)
    const section = sections.get(sectionName)
    if (!section) continue
    const title = TUTORIAL_TITLE_OVERRIDES[entry.id] || readFrontmatterTitle(entry.localPath) || entry.title
    section.entries.push({
      id: entry.id,
      title,
      available: true,
    })
  }

  return TUTORIAL_SECTION_ORDER
    .map(section => sections.get(section)!)
    .filter(section => section.entries.length > 0)
}

function loadGuideToc(): DocTocSection[] {
  const translations = loadTranslationEntries()
  const translationSection = translations.length > 0 ? [{
    section: 'Translation',
    id: 'translation',
    entries: translations.map(e => ({ id: e.id, title: e.title, available: true })),
  }] : []
  const toc = JSON.parse(fs.readFileSync(path.join(DATA_ROOT, 'config/guide-toc.json'), 'utf-8'))
  const allDocs = loadDocEntries()
  const availableIds = new Set(allDocs.map((d: DocEntry) => d.id))
  const enriched = toc.map((section: { section: string; id: string; entries: { id: string; title: string }[] }) => ({
    ...section,
    entries: section.entries.map(e => ({ ...e, available: availableIds.has(e.id) })),
  }))
  const beforeYouReadIdx = enriched.findIndex((s: DocTocSection) => s.id === 'mhhvwcrb9v92' || s.section === 'Before You Read')
  const insertAt = beforeYouReadIdx >= 0 ? beforeYouReadIdx + 1 : enriched.length
  enriched.splice(insertAt, 0, ...translationSection)
  return enriched
}

function titleToSvgFilename(rawTitle: string): string {
  // Strip number prefix "01-", "02-", etc.
  const noPrefix = rawTitle.replace(/^\d+-/, '').trim()
  // Strip parenthetical description
  const noParens = noPrefix.replace(/\s*\([^)]*\)\s*$/, '').trim()
  // Replace spaces and special chars with underscores
  return noParens.replace(/[\s,]+/g, '_').replace(/[^\w-]/g, '')
}

interface SvgEntry {
  id: number
  title: string
  description?: string
  svgFile: string
  hasSvg: boolean
  relatedDocIds: string[]
}

interface SvgSection {
  section: string
  entries: SvgEntry[]
}

function parseSvgIndex(
  content: string,
  availableSvgs: Set<string>,
  allDocs: DocEntry[],
  svgRelations: Map<string, string[]>
): SvgSection[] {
  const lines = content.split('\n')
  const sections: SvgSection[] = []
  const topSections: SvgSection[] = []
  let current: SvgSection | null = null
  let afterContentList = false
  let inTopSection = false
  const seenIds = new Set<number>()

  for (const line of lines) {
    // Enter content list
    if (!afterContentList && /^# Content/.test(line)) {
      afterContentList = true
      continue
    }
    // H1 headings after Content List are top sections (e.g. # Version Update: Luna 7)
    if (afterContentList && /^#\s+(.+)$/.test(line)) {
      const sectionName = line.match(/^#\s+(.+)$/)![1].trim()
      current = { section: sectionName, entries: [] }
      topSections.push(current)
      inTopSection = true
      continue
    }
    if (/^## (.+)$/.test(line)) {
      current = { section: line.match(/^## (.+)$/)![1].trim(), entries: [] }
      sections.push(current)
      inTopSection = false
      continue
    }
    const entryMatch = line.match(/^(\d+)-(.+)$/)
    if (entryMatch && current) {
      const entryId = parseInt(entryMatch[1])
      // Deduplicate across regular sections but allow duplicate display in top sections
      if (!inTopSection) {
        if (seenIds.has(entryId)) continue
        seenIds.add(entryId)
      }
      const rawTitle = entryMatch[2].trim()
      const parenMatch = rawTitle.match(/^(.+?)\s*\((.+)\)$/)
      const title = parenMatch ? parenMatch[1].trim() : rawTitle
      const description = parenMatch ? parenMatch[2].trim() : undefined
      const svgFile = titleToSvgFilename(`${entryMatch[1]}-${rawTitle}`)

      const explicit = svgRelations.get(svgFile) || []
      const normalTitle = normalizeDocTitle(title)
      const fallback = allDocs
        .filter(d => {
          const norm = normalizeDocTitle(d.title)
          if (!norm || !normalTitle) return false
          return norm === normalTitle || norm.includes(normalTitle) || normalTitle.includes(norm)
        })
        .map(d => d.id)
      const relatedDocIds = [...new Set([...explicit, ...fallback])]

      current.entries.push({
        id: entryId,
        title,
        description,
        svgFile,
        hasSvg: availableSvgs.has(svgFile),
        relatedDocIds,
      })
    }
  }
  return [...topSections, ...sections]
}

// ─── Routes ─────────────────────────────────────────────────────────────────

app.get('/api/svg/index', (_req, res) => {
  try {
    const content = fs.readFileSync(path.join(DATA_ROOT, 'derived/svg_index.md'), 'utf-8')
    const svgDir = path.join(DATA_ROOT, 'derived/svg')
    const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'))
    const availableSvgs = new Set(files.map(f => f.replace('.svg', '')))
    const allDocs = loadDocEntries()
    const allDocIds = new Set(allDocs.map(d => d.id))
    const svgRelations = new Map<string, string[]>()

    for (const file of files) {
      const svgPath = path.join(svgDir, file)
      const svgText = fs.readFileSync(svgPath, 'utf-8')
      const ids = extractDocIdsFromText(svgText).filter(id => allDocIds.has(id))
      if (ids.length > 0) svgRelations.set(file.replace('.svg', ''), ids)
    }

    const index = parseSvgIndex(content, availableSvgs, allDocs, svgRelations)
    res.json(index)
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.get('/api/svg/file/:name', (req, res) => {
  const { name } = req.params
  if (!/^[\w-]+$/.test(name)) return res.status(400).json({ error: 'Invalid name' })
  const svgPath = path.resolve(DATA_ROOT, 'derived/svg', `${name}.svg`)
  if (!svgPath.startsWith(path.resolve(DATA_ROOT))) return res.status(403).json({ error: 'Forbidden' })
  if (!fs.existsSync(svgPath)) return res.status(404).json({ error: 'Not found' })
  res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8')
  res.sendFile(svgPath)
})

app.get('/api/docs/list/:scope', (req, res) => {
  const { scope } = req.params
  try {
    if (scope === 'guide') {
      res.json(loadDocEntries().filter(d => d.scope === 'guide'))
    } else if (scope === 'tutorial') {
      res.json(loadDocEntries().filter(d => d.scope === 'tutorial'))
    } else if (scope === 'translation') {
      res.json(loadTranslationEntries())
    } else {
      res.status(400).json({ error: 'Invalid scope' })
    }
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.get('/api/docs/toc', (req, res) => {
  try {
    const scope = req.query.scope === 'tutorial' ? 'tutorial' : 'guide'
    res.json(scope === 'tutorial' ? loadTutorialToc() : loadGuideToc())
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.get('/api/docs/ids', (_req, res) => {
  try {
    // Only include English-available scopes (guide + translation).
    // Tutorial docs are mostly untranslated Chinese and should open externally.
    const guidePath = path.join(DATA_ROOT, 'config/urls-guide.json')
    const guide: DocEntry[] = JSON.parse(fs.readFileSync(guidePath, 'utf-8')).entries
    const translationDir = path.join(DATA_ROOT, 'official/translation')
    const translationIds: string[] = fs.existsSync(translationDir)
      ? fs.readdirSync(translationDir)
          .filter(f => f.endsWith('.md'))
          .map(f => f.split('_')[0])
      : []
    const ids = [...guide.map(d => d.id), ...translationIds]
    res.json([...new Set(ids)])
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

app.get('/api/docs/:id', (req, res) => {
  const { id } = req.params
  if (!/^[\w-]+$/.test(id)) return res.status(400).json({ error: 'Invalid ID' })
  try {
    const allDocs = [...loadDocEntries(), ...loadTranslationEntries()]
    const entry = allDocs.find(d => d.id === id)
    if (!entry) return res.status(404).json({ error: 'Not found' })
    const docPath = path.resolve(DATA_ROOT, entry.localPath)
    if (!docPath.startsWith(path.resolve(DATA_ROOT))) return res.status(403).json({ error: 'Forbidden' })
    const content = fs.readFileSync(docPath, 'utf-8')
    res.json({ content, meta: entry })
  } catch (err) {
    res.status(500).json({ error: String(err) })
  }
})

// SPA fallback in production
if (isProd) {
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`   DATA_ROOT: ${DATA_ROOT}`)
})
