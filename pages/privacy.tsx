import { SeoHead } from '@/components/SeoHead'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import fs from 'node:fs'
import path from 'node:path'

interface PrivacyProps {
  readonly content: string
}

export async function getStaticProps() {
  const root = process.cwd()
  const mdPath = path.join(root, '..', 'prompt-scripter', 'docs', 'PRIVACY_POLICY.md')
  let content = '# Privacy Policy\n\nContent not found.'
  try {
    content = fs.readFileSync(mdPath, 'utf8')
  } catch {}
  return { props: { content } }
}

export default function Privacy({ content }: PrivacyProps) {
  return (
    <>
      <SeoHead title="Privacy Policy" description="Privacy policy for the Prompt Scripter extension." path="/privacy" />
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 prose prose-slate">
        <article>
          {/* Basic markdown fallback; can replace with MD renderer later */}
          <pre className="whitespace-pre-wrap font-sans text-base text-gray-800">{content}</pre>
        </article>
      </main>
      <Footer />
    </>
  )
}


