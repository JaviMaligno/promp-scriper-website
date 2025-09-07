import { MarkdownPage } from '@/components/MarkdownPage'
import { readMarkdownFromPublic } from '@/lib/md'

interface PageProps {
  readonly content: string
  readonly lastUpdated?: string
}

export async function getStaticProps() {
  const { content, lastUpdated } = readMarkdownFromPublic('Data Handling Policy.md')
  return { props: { content, lastUpdated } }
}

export default function DataHandlingPolicy({ content, lastUpdated }: PageProps) {
  return (
    <MarkdownPage
      title="Data Handling Policy"
      description="Data Handling Policy for Prompt Scripter."
      path="/data-handling-policy"
      content={content}
      lastUpdated={lastUpdated}
    />
  )
}
