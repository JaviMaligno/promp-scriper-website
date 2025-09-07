import fs from 'node:fs'
import path from 'node:path'

export function readMarkdownFromPublic(filename: string): { content: string; lastUpdated?: string } {
  const root = process.cwd()
  const contentPath = path.join(root, 'content', filename)
  const publicPath = path.join(root, 'public', filename)
  const mdPath = fs.existsSync(contentPath) ? contentPath : publicPath
  let content = `# ${filename}\n\nContent not found.`
  let lastUpdated: string | undefined
  try {
    content = fs.readFileSync(mdPath, 'utf8')
    const stat = fs.statSync(mdPath)
    lastUpdated = stat.mtime.toISOString()
  } catch {}
  return { content, lastUpdated }
}
