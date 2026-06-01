import type { DocEntry, SvgSection, DocTocSection } from './types'

const BASE = ''

export async function fetchSvgIndex(): Promise<SvgSection[]> {
  const r = await fetch(`${BASE}/api/svg/index`)
  if (!r.ok) throw new Error('Failed to fetch SVG index')
  return r.json()
}

export async function fetchSvgContent(name: string): Promise<string> {
  const r = await fetch(`${BASE}/api/svg/file/${encodeURIComponent(name)}`)
  if (!r.ok) throw new Error('SVG not found')
  return r.text()
}

export async function fetchDocList(scope: 'guide' | 'tutorial' | 'translation'): Promise<DocEntry[]> {
  const r = await fetch(`${BASE}/api/docs/list/${scope}`)
  if (!r.ok) throw new Error('Failed to fetch doc list')
  return r.json()
}

export async function fetchDocIds(): Promise<string[]> {
  const r = await fetch(`${BASE}/api/docs/ids`)
  if (!r.ok) return []
  return r.json()
}

export async function fetchDoc(id: string): Promise<{ content: string; meta: DocEntry }> {
  const r = await fetch(`${BASE}/api/docs/${encodeURIComponent(id)}`)
  if (!r.ok) throw new Error('Doc not found')
  return r.json()
}

export async function fetchDocToc(scope: 'guide' | 'tutorial' = 'guide'): Promise<DocTocSection[]> {
  const r = await fetch(`${BASE}/api/docs/toc?scope=${encodeURIComponent(scope)}`)
  if (!r.ok) throw new Error('Failed to fetch doc TOC')
  return r.json()
}
