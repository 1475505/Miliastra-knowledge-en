export interface DocEntry {
  id: string
  title: string
  url: string
  scope: 'guide' | 'tutorial'
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
