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

function loadDocEntries(): DocEntry[] {
  const guidePath = path.join(DATA_ROOT, 'config/urls-guide.json')
  const tutorialPath = path.join(DATA_ROOT, 'config/urls-tutorial.json')
  const guide: DocEntry[] = JSON.parse(fs.readFileSync(guidePath, 'utf-8')).entries
  const tutorial: DocEntry[] = JSON.parse(fs.readFileSync(tutorialPath, 'utf-8')).entries
  return [...guide, ...tutorial]
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

function parseSvgIndex(content: string, availableSvgs: Set<string>, allDocs: DocEntry[]): SvgSection[] {
  const lines = content.split('\n')
  const sections: SvgSection[] = []
  let current: SvgSection | null = null
  const seenIds = new Set<number>()   // deduplicate across Version Update sections

  for (const line of lines) {
    // Stop at H1 update-log sections (e.g. "# Version Update: ...")
    if (/^# .+/.test(line) && !/^# Content/.test(line)) break

    const sectionMatch = line.match(/^## (.+)$/)
    if (sectionMatch) {
      current = { section: sectionMatch[1].trim(), entries: [] }
      sections.push(current)
      continue
    }
    const entryMatch = line.match(/^(\d+)-(.+)$/)
    if (entryMatch && current) {
      const entryId = parseInt(entryMatch[1])
      if (seenIds.has(entryId)) continue
      seenIds.add(entryId)
      const rawTitle = entryMatch[2].trim()
      const parenMatch = rawTitle.match(/^(.+?)\s*\((.+)\)$/)
      const title = parenMatch ? parenMatch[1].trim() : rawTitle
      const description = parenMatch ? parenMatch[2].trim() : undefined
      const svgFile = titleToSvgFilename(`${entryMatch[1]}-${rawTitle}`)

      // Find related docs by title matching
      const normalTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '')
      const relatedDocIds = allDocs
        .filter(d => {
          const norm = d.title.toLowerCase().replace(/[^a-z0-9]/g, '')
          if (!norm || !normalTitle) return false
          return norm === normalTitle || norm.includes(normalTitle) || normalTitle.includes(norm)
        })
        .map(d => d.id)

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
  return sections
}

// ─── Routes ─────────────────────────────────────────────────────────────────

app.get('/api/svg/index', (_req, res) => {
  try {
    const content = fs.readFileSync(path.join(DATA_ROOT, 'derived/svg_index.md'), 'utf-8')
    const svgDir = path.join(DATA_ROOT, 'derived/svg')
    const files = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'))
    const availableSvgs = new Set(files.map(f => f.replace('.svg', '')))
    const allDocs = loadDocEntries()
    const index = parseSvgIndex(content, availableSvgs, allDocs)
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
      const data = JSON.parse(fs.readFileSync(path.join(DATA_ROOT, 'config/urls-guide.json'), 'utf-8'))
      res.json(data.entries)
    } else if (scope === 'tutorial') {
      const data = JSON.parse(fs.readFileSync(path.join(DATA_ROOT, 'config/urls-tutorial.json'), 'utf-8'))
      res.json(data.entries)
    } else {
      res.status(400).json({ error: 'Invalid scope' })
    }
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
    const allDocs = loadDocEntries()
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
