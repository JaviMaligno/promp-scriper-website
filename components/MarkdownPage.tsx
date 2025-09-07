import { SeoHead } from '@/components/SeoHead'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

interface MarkdownPageProps {
  readonly title: string
  readonly description: string
  readonly path: string
  readonly content: string
  readonly lastUpdated?: string
  readonly noindex?: boolean
}

export function MarkdownPage({ title, description, path, content, lastUpdated, noindex }: MarkdownPageProps) {
  return (
    <>
      <SeoHead title={title} description={description} path={path} noindex={noindex} />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        {lastUpdated && (
          <p className="text-sm text-gray-500 mb-6">Last updated: {new Date(lastUpdated).toISOString().slice(0, 10)}</p>
        )}
        <article
          className="prose prose-slate
            prose-headings:font-semibold prose-h1:text-3xl sm:prose-h1:text-4xl
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-li:my-1
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-pre:bg-gray-50 prose-pre:rounded-lg prose-pre:p-4
            prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'append' }],
            ]}
            components={{
              a: ({ href, children, ...props }: any) => {
                const isExternal = href && /^(https?:)?\/\//.test(href)
                return (
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    {...props}
                  >
                    {children}
                  </a>
                )
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  )
}
