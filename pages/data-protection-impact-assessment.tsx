import { MarkdownPage } from '@/components/MarkdownPage'
import { readMarkdownFromPublic } from '@/lib/md'

interface PageProps {
  readonly content: string
  readonly lastUpdated?: string
}

export async function getStaticProps() {
  const { content, lastUpdated } = readMarkdownFromPublic('Data Protection Impact Assessment.md')
  return { props: { content, lastUpdated } }
}

export default function DPIA({ content, lastUpdated }: PageProps) {
  return (
    <MarkdownPage
      title="Data Protection Impact Assessment"
      description="DPIA for Prompt Scripter."
      path="/data-protection-impact-assessment"
      content={content}
      lastUpdated={lastUpdated}
    />
  )
}
