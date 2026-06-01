import { useEffect, useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { DocEntry, DocTocSection } from '../types'
import { fetchDoc, fetchDocIds, fetchDocList, fetchDocToc } from '../api'
import { MarkdownViewer } from '../components/MarkdownViewer'

type Scope = 'guide' | 'tutorial'

export function DocsPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [scope, setScope] = useState<Scope>('guide')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [guideToc, setGuideToc] = useState<DocTocSection[]>([])
  const [tutorialToc, setTutorialToc] = useState<DocTocSection[]>([])
  const [localDocIds, setLocalDocIds] = useState<Set<string>>(new Set())
  const [listLoading, setListLoading] = useState(true)
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')

  const [docContent, setDocContent] = useState('')
  const [docMeta, setDocMeta] = useState<DocEntry | null>(null)
  const [docLoading, setDocLoading] = useState(false)
  const [docError, setDocError] = useState('')

  useEffect(() => {
    Promise.all([
      fetchDocToc('guide'),
      fetchDocToc('tutorial'),
      fetchDocIds(),
    ]).then(([guide, tutorial, ids]) => {
      setGuideToc(guide)
      setTutorialToc(tutorial)
      setLocalDocIds(new Set(ids))
      setListLoading(false)
    })
  }, [])

  // When id param changes, load doc
  useEffect(() => {
    if (!id) {
      setDocContent('')
      setDocMeta(null)
      return
    }
    setDocLoading(true)
    setDocError('')
    fetchDoc(id)
      .then(({ content, meta }) => {
        setDocContent(content)
        setDocMeta(meta)
        setDocLoading(false)
      })
      .catch(() => {
        setDocError('Failed to load document')
        setDocLoading(false)
      })
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev)
      if (next.has(sectionId)) next.delete(sectionId)
      else next.add(sectionId)
      return next
    })
  }

  // Total available guide docs count
  const guideTotalAvailable = useMemo(
    () => guideToc.reduce((n, s) => n + s.entries.filter(e => e.available).length, 0),
    [guideToc]
  )

  // Filtered guide entries (flat) when searching
  const guideFiltered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return null
    const entries: { id: string; title: string; section: string }[] = []
    for (const section of guideToc) {
      for (const e of section.entries) {
        if (e.available && e.title.toLowerCase().includes(q)) {
          entries.push({ ...e, section: section.section })
        }
      }
    }
    return entries
  }, [guideToc, search])

  const tutorialDocs = useMemo(
    () => tutorialToc.flatMap(section => section.entries.map(entry => ({
      id: entry.id,
      title: entry.title,
      url: '',
      scope: 'tutorial' as const,
      updated_at: '',
      localPath: '',
    }))),
    [tutorialToc]
  )

  // Filtered tutorial entries when searching
  const tutorialFiltered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return tutorialDocs
    return tutorialDocs.filter(d => d.title.toLowerCase().includes(q))
  }, [tutorialDocs, search])

  const renderGroupedToc = (sections: DocTocSection[]) => sections.map(section => {
    const available = section.entries.filter(e => e.available)
    if (available.length === 0 && !section.id) return null
    const sectionKey = section.id || section.section
    const isCollapsed = collapsedSections.has(sectionKey)
    return (
      <div key={sectionKey}>
        {section.entries.length === 0 ? (
          <div
            className={`sidebar-entry has-svg${section.id === id ? ' active' : ''}`}
            onClick={() => section.id && navigate(`/docs/${section.id}`)}
            title={section.section}
          >
            <span className="sidebar-entry-dot" />
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{section.section}</span>
          </div>
        ) : (
          <>
            <div
              className="sidebar-section-header"
              onClick={() => toggleSection(sectionKey)}
            >
              <span>{section.section}</span>
              <span className={`sidebar-section-chevron${isCollapsed ? '' : ' open'}`}>▶</span>
            </div>
            {!isCollapsed && (
              <div className="sidebar-entries">
                {available.map(e => (
                  <div
                    key={e.id}
                    className={`sidebar-entry has-svg${e.id === id ? ' active' : ''}`}
                    onClick={() => navigate(`/docs/${e.id}`)}
                    title={e.title}
                  >
                    <span className="sidebar-entry-dot" />
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.title}</span>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    )
  })

  return (
    <div className="page-layout">
      {/* ── Sidebar ── */}
      <aside className={`sidebar${sidebarOpen ? '' : ' collapsed'}`}>
        <div className="tab-bar">
          <button
            className={`tab-btn${scope === 'guide' ? ' active' : ''}`}
            onClick={() => setScope('guide')}
          >
            Guide
          </button>
          <button
            className={`tab-btn${scope === 'tutorial' ? ' active' : ''}`}
            onClick={() => setScope('tutorial')}
          >
            Tutorial
          </button>
        </div>

        <div className="sidebar-search">
          <div className="sidebar-search-wrap">
            <span className="sidebar-search-icon">🔍</span>
            <input
              type="search"
              placeholder="Search docs…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="sidebar-content">
          {listLoading ? (
            <div className="loading" style={{ padding: 20 }}>
              <div className="spinner" />
            </div>
          ) : scope === 'guide' ? (
            /* ── Guide: grouped TOC or flat search results ── */
            guideFiltered ? (
              guideFiltered.length === 0 ? (
                <div style={{ padding: '16px', fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>No results</div>
              ) : (
                guideFiltered.map(e => (
                  <div
                    key={e.id}
                    className={`sidebar-entry has-svg${e.id === id ? ' active' : ''}`}
                    onClick={() => navigate(`/docs/${e.id}`)}
                    title={e.title}
                  >
                    <span className="sidebar-entry-dot" />
                    <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.title}</span>
                  </div>
                ))
              )
            ) : (
              renderGroupedToc(guideToc)
            )
          ) : (
            tutorialFiltered.length === 0 ? (
              <div style={{ padding: '16px', fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>No results</div>
            ) : search.trim() ? (
              tutorialFiltered.map(doc => (
                <div
                  key={doc.id}
                  className={`sidebar-entry has-svg${doc.id === id ? ' active' : ''}`}
                  onClick={() => navigate(`/docs/${doc.id}`)}
                  title={doc.title}
                >
                  <span className="sidebar-entry-dot" />
                  <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{doc.title}</span>
                </div>
              ))
            ) : (
              renderGroupedToc(tutorialToc)
            )
          )}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="docs-layout">
        <div className="docs-main">
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
              <span>{scope === 'guide' ? 'Guide' : 'Tutorial'} directory</span>
            </div>
          </div>

          <div className="docs-scroll">
            {!id ? (
              <div className="docs-empty">
                <div className="docs-empty-icon">📚</div>
                <div style={{ fontWeight: 500, fontSize: 15 }}>Select a document from the sidebar</div>
                <div style={{ fontSize: 13 }}>
                  {guideTotalAvailable} guides · {tutorialDocs.length} tutorials
                </div>
              </div>
            ) : docLoading ? (
              <div className="loading" style={{ flex: 1 }}>
                <div className="spinner" /> Loading...
              </div>
            ) : docError ? (
              <div className="docs-article">
                <div className="error-msg">{docError}</div>
              </div>
            ) : (
              <article className="docs-article">
                <div className="docs-article-header">
                  <h1 className="docs-article-title">{docMeta?.title}</h1>
                  <div className="docs-article-meta">
                    <span>Updated {docMeta?.updated_at?.slice(0, 10)}</span>
                    {docMeta?.url && (
                      <a href={docMeta.url} target="_blank" rel="noopener noreferrer">
                        View source ↗
                      </a>
                    )}
                  </div>
                </div>
                <MarkdownViewer content={docContent} localDocIds={localDocIds} />
              </article>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
