import Head from 'next/head'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/constants'

interface SeoHeadProps {
  readonly title?: string
  readonly description?: string
  readonly path?: string
  readonly noindex?: boolean
}

export function SeoHead({ title, description, path, noindex }: SeoHeadProps) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const url = path ? `${SITE_URL}${path}` : SITE_URL
  const desc = description || DEFAULT_DESCRIPTION
  const ogImage = `${SITE_URL}/og.svg`
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  )
}

