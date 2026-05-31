import { useEffect, useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { DocEntry } from '../types'
import { fetchDoc, fetchDocIds, fetchDocList } from '../api'
import { MarkdownViewer } from '../components/MarkdownViewer'

type Scope = 'guide' | 'tutorial'

export function DocsPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [scope, setScope] = useState<Scope>('guide')
  const [guideDocs, setGuideDocs] = useState<DocEntry[]>([])
  const [tutorialDocs, setTutorialDocs] = useState<DocEntry[]>([])
  const [localDocIds, setLocalDocIds] = useState<Set<string>>(new Set())
  const [listLoading, setListLoading] = useState(true)
  const [search, setSearch] = useState('')

  const [docContent, setDocContent] = useState('')
  const [docMeta, setDocMeta] = useState<DocEntry | null>(null)
  const [docLoading, setDocLoading] = useState(false)
  const [docError, setDocError] = useState('')

  useEffect(() => {
    Promise.all([
      fetchDocList('guide'),
      fetchDocList('tutorial'),
      fetchDocIds(),
    ]).then(([guide, tutorial, ids]) => {
      setGuideDocs(guide)
      setTutorialDocs(tutorial)
      setLocalDocIds(new Set(ids))
      setListLoading(false)
    })
  }, [])

  // When id param changes, infer scope and load doc
  useEffect(() => {
    if (!id) {
      setDocContent('')
      setDocMeta(null)
      return
    }
    // Auto-switch scope tab based on which list contains this id
    if (tutorialDocs.find(d => d.id === id)) setScope('tutorial')
    else setScope('guide')

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

  const currentList = scope === 'guide' ? guideDocs : tutorialDocs

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return currentList
    return currentList.filter(d => d.title.toLowerCase().includes(q))
  }, [currentList, search])

  return (
    <div className="page-layout">
      {/* ── Sidebar ── */}
      <aside className="sidebar">
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
          ) : filtered.length === 0 ? (
            <div style={{ padding: '16px', fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
              No results
            </div>
          ) : (
            filtered.map(doc => (
              <div
                key={doc.id}
                className={`sidebar-entry has-svg${doc.id === id ? ' active' : ''}`}
                onClick={() => navigate(`/docs/${doc.id}`)}
                title={doc.title}
              >
                <span className="sidebar-entry-dot" />
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {doc.title}
                </span>
              </div>
            ))
          )}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="docs-layout">
        <div className="docs-main">
          {!id ? (
            <div className="docs-empty">
              <div className="docs-empty-icon">📚</div>
              <div style={{ fontWeight: 500, fontSize: 15 }}>Select a document from the sidebar</div>
              <div style={{ fontSize: 13 }}>
                {guideDocs.length} guides · {tutorialDocs.length} tutorials
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
  )
}
