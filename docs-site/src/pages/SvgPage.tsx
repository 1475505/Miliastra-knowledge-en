import { useEffect, useRef, useState, useCallback } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import type { SvgEntry, SvgSection } from '../types'
import { fetchDocIds, fetchDocList, fetchSvgContent, fetchSvgIndex } from '../api'

const HOYO_URL_RE = /act\.hoyoverse\.com\/ys\/ugc\/tutorial\/(?:course\/)?detail\/(\w+)/
const CRAFTSPEOPLE_ACADEMY_URL = 'https://act.hoyoverse.com/ys/ugc/tutorial/index.html?utm_source=ugc&utm_medium=creatorcenter&utm_campaign=tbicon&lang=en-us'

export function SvgPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [index, setIndex] = useState<SvgSection[]>([])
  const [localDocIds, setLocalDocIds] = useState<Set<string>>(new Set())
  const [docTitles, setDocTitles] = useState<Map<string, string>>(new Map())
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [relatedOpen, setRelatedOpen] = useState(false)
  const [zoom, setZoom] = useState(0.85)
  const [svgContent, setSvgContent] = useState('')
  const [svgLoading, setSvgLoading] = useState(false)
  const [svgError, setSvgError] = useState('')
  const [loading, setLoading] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const svgWrapRef = useRef<HTMLDivElement>(null)

  // Current entry derived from id param
  const currentEntry: SvgEntry | null = (() => {
    for (const section of index) {
      for (const entry of section.entries) {
        if (String(entry.id) === id) return entry
      }
    }
    return null
  })()

  useEffect(() => {
    Promise.all([
      fetchSvgIndex(),
      fetchDocIds(),
      fetchDocList('guide'),
      fetchDocList('tutorial'),
    ]).then(([idx, ids, guide, tutorial]) => {
      setIndex(idx)
      setLocalDocIds(new Set(ids))
      const titleMap = new Map<string, string>()
      ;[...guide, ...tutorial].forEach(d => titleMap.set(d.id, d.title))
      setDocTitles(titleMap)
      setLoading(false)
    })
  }, [])

  // Load SVG content when entry changes
  useEffect(() => {
    if (!currentEntry?.hasSvg) {
      setSvgContent('')
      return
    }
    setSvgLoading(true)
    setSvgError('')
    fetchSvgContent(currentEntry.svgFile)
      .then(text => {
        setSvgContent(text)
        setSvgLoading(false)
        if (scrollRef.current) scrollRef.current.scrollTo({ top: 0 })
      })
      .catch(() => {
        setSvgError('Failed to load SVG')
        setSvgLoading(false)
      })
  }, [currentEntry?.svgFile])

  // Resize SVG to match zoom
  useEffect(() => {
    if (!svgWrapRef.current || !svgContent) return
    const svgEl = svgWrapRef.current.querySelector('svg')
    if (!svgEl) return
    const vb = svgEl.getAttribute('viewBox')
    const baseW = vb ? parseFloat(vb.split(/\s+/)[2]) : 1200
    svgEl.style.width = `${baseW * zoom}px`
    svgEl.style.height = 'auto'
    svgEl.style.display = 'block'
    svgEl.style.borderRadius = '10px'
    svgEl.style.boxShadow = '0 2px 8px rgba(37,99,235,0.10)'
  }, [svgContent, zoom])

  // Intercept SVG link clicks
  const handleSvgClick = useCallback(
    (e: React.MouseEvent) => {
      const anchor = (e.target as Element).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') || anchor.getAttribute('xlink:href')
      if (!href) return
      const match = href.match(HOYO_URL_RE)
      if (match && localDocIds.has(match[1])) {
        e.preventDefault()
        navigate(`/docs/${match[1]}`)
        return
      }
      if (href.startsWith('http')) {
        e.preventDefault()
        window.open(href, '_blank', 'noopener,noreferrer')
      }
    },
    [localDocIds, navigate]
  )

  const toggleSection = (section: string) => {
    setCollapsed(prev => {
      const next = new Set(prev)
      if (next.has(section)) next.delete(section)
      else next.add(section)
      return next
    })
  }

  const zoomIn = () => setZoom(z => Math.min(3, +(z + 0.1).toFixed(2)))
  const zoomOut = () => setZoom(z => Math.max(0.2, +(z - 0.1).toFixed(2)))
  const zoomReset = () => setZoom(0.85)

  return (
    <div className="page-layout">
      {/* ── Sidebar ── */}
      <aside className={`sidebar${sidebarOpen ? '' : ' collapsed'}`}>
        <div className="sidebar-header">Contents</div>
        <div className="sidebar-content">
          {loading ? (
            <div className="loading" style={{ padding: 20 }}>
              <div className="spinner" /> Loading...
            </div>
          ) : (
            index.map(section => (
              <div key={section.section}>
                <div
                  className="sidebar-section-header"
                  onClick={() => toggleSection(section.section)}
                >
                  <span>{section.section}</span>
                  <span className={`sidebar-section-chevron${collapsed.has(section.section) ? '' : ' open'}`}>▶</span>
                </div>
                {!collapsed.has(section.section) && (
                  <div className="sidebar-entries">
                    {section.entries.map(entry => (
                      <div
                        key={`${section.section}-${entry.id}`}
                        className={`sidebar-entry${entry.hasSvg ? ' has-svg' : ''}${String(entry.id) === id ? ' active' : ''}`}
                        onClick={() => navigate(`/svg/${entry.id}`)}
                        title={entry.description}
                      >
                        <span className="sidebar-entry-num">{entry.id.toString().padStart(2, '0')}</span>
                        <span className="sidebar-entry-dot" />
                        <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {entry.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="main-content">
        {/* Toolbar */}
        <div className="toolbar">
          <button
            className={`toolbar-btn${sidebarOpen ? ' active' : ''}`}
            onClick={() => setSidebarOpen(v => !v)}
            title="Toggle sidebar"
          >
            ☰
          </button>
          <div className="toolbar-divider" />
          <div className="toolbar-zoom">
            <button className="toolbar-btn" onClick={zoomOut} disabled={zoom <= 0.2}>－</button>
            <span className="toolbar-zoom-label">{Math.round(zoom * 100)}%</span>
            <button className="toolbar-btn" onClick={zoomIn} disabled={zoom >= 3}>＋</button>
            <button className="toolbar-btn" onClick={zoomReset} title="Reset zoom">⟳</button>
          </div>
          {currentEntry?.hasSvg && (
            <>
              <div className="toolbar-divider" />
              <a
                className="toolbar-btn"
                href={`/api/svg/file/${currentEntry.svgFile}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                ↗ Full screen
              </a>
            </>
          )}
          <div className="toolbar-spacer" />
          {currentEntry && (
            <button
              className={`toolbar-btn${relatedOpen ? ' active' : ''}`}
              onClick={() => setRelatedOpen(v => !v)}
            >
              📎 Related Docs
            </button>
          )}
        </div>

        {/* SVG area */}
        <div className="svg-layout">
          <div className="svg-scroll-area" ref={scrollRef}>
            {!id ? (
              <div className="svg-empty">
                <div style={{ fontSize: 36, marginBottom: 12 }}>🗺</div>
                <div>Select an entry from the sidebar</div>
                <div style={{ fontSize: 12, marginTop: 6, color: 'var(--text-muted)' }}>
                  Blue dots indicate entries with an SVG diagram
                </div>
              </div>
            ) : loading ? (
              <div className="loading">
                <div className="spinner" /> Loading...
              </div>
            ) : svgLoading ? (
              <div className="loading">
                <div className="spinner" /> Loading SVG...
              </div>
            ) : svgError ? (
              <div className="svg-empty">
                <div className="error-msg">{svgError}</div>
              </div>
            ) : !currentEntry?.hasSvg ? (
              <div className="svg-empty">
                <div className="svg-unavailable-icon">🚧</div>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>{currentEntry?.title ?? `Entry #${id}`}</div>
                <div style={{ fontSize: 13 }}>No visual map available for this entry</div>
              </div>
            ) : (
              <div
                className="svg-wrapper"
                ref={svgWrapRef}
                onClick={handleSvgClick}
                dangerouslySetInnerHTML={{ __html: svgContent }}
              />
            )}
          </div>

          {/* Related docs panel */}
          <aside className={`related-panel${relatedOpen ? '' : ' hidden'}`}>
            <div className="related-panel-header">
              <span>Related Docs</span>
              <button className="related-panel-close" onClick={() => setRelatedOpen(false)}>✕</button>
            </div>
            <div className="related-panel-content">
              {currentEntry?.relatedDocIds.length === 0 ? (
                <div className="related-empty">
                  <div style={{ marginBottom: 8 }}>No related docs</div>
                  <a href={CRAFTSPEOPLE_ACADEMY_URL} target="_blank" rel="noopener noreferrer">
                    CraftsPeople Academy ↗
                  </a>
                </div>
              ) : (
                currentEntry?.relatedDocIds.map(docId => (
                  <Link key={docId} className="related-item" to={`/docs/${docId}`}>
                    📄 {docTitles.get(docId) ?? docId}
                  </Link>
                ))
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
