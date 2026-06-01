export interface DocEntry {
  id: string
  title: string
  url: string
  scope: 'guide' | 'tutorial' | 'translation'
  updated_at: string
  localPath: string
}

export interface SvgEntry {
  id: number
  title: string
  description?: string
  svgFile: string
  hasSvg: boolean
  relatedDocIds: string[]
}

export interface SvgSection {
  section: string
  entries: SvgEntry[]
}

export interface DocTocEntry {
  id: string
  title: string
  available: boolean
}

export interface DocTocSection {
  section: string
  id: string
  entries: DocTocEntry[]
}
