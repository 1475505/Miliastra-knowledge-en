import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useNavigate } from 'react-router-dom'

const HOYO_URL_RE = /act\.hoyoverse\.com\/ys\/ugc\/tutorial\/(?:course\/)?detail\/(\w+)/

interface Props {
  content: string
  localDocIds?: Set<string>
  docLocalPath?: string
}

function resolveAssetUrl(docLocalPath: string | undefined, assetPath: string): string {
  if (!assetPath || /^(?:[a-z]+:|\/\/|#|\/)/i.test(assetPath)) return assetPath
  if (!docLocalPath) return assetPath

  return `/api/docs/asset?docPath=${encodeURIComponent(docLocalPath)}&assetPath=${encodeURIComponent(assetPath)}`
}

export function MarkdownViewer({ content, localDocIds, docLocalPath }: Props) {
  const navigate = useNavigate()

  // Strip frontmatter before rendering
  const cleaned = content.replace(/^---[\s\S]*?---\n*/, '')

  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, children }) {
            if (href) {
              const match = href.match(HOYO_URL_RE)
              if (match) {
                const docId = match[1]
                if (localDocIds?.has(docId)) {
                  return (
                    <a
                      href={`/docs/${docId}`}
                      onClick={(e) => {
                        e.preventDefault()
                        navigate(`/docs/${docId}`)
                      }}
                    >
                      {children}
                    </a>
                  )
                }
              }
              return (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              )
            }
            return <a>{children}</a>
          },
          img({ src, alt }) {
            if (!src) return null
            return <img src={resolveAssetUrl(docLocalPath, src)} alt={alt || ''} loading="lazy" />
          },
        }}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  )
}
