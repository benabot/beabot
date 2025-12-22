import { promises as fs } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const ROOT = process.cwd()
const ARTICLES_DIR = path.join(ROOT, 'content', 'articles')
const FRONTMATTER_REGEX =
  /^---[^\S\r\n]*\r?\n([\s\S]*?)\r?\n---[^\S\r\n]*\r?\n/

async function collectMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(fullPath)))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files
}

async function migrateFile(filePath) {
  const raw = await fs.readFile(filePath, 'utf8')
  const parsed = matter(raw)

  if (Object.prototype.hasOwnProperty.call(parsed.data, 'chapo')) {
    return false
  }

  const match = raw.match(FRONTMATTER_REGEX)
  if (!match) return false

  const frontmatterBlock = match[0]
  const frontmatter = match[1]
  const newline = frontmatterBlock.includes('\r\n') ? '\r\n' : '\n'
  const lines = frontmatter.split(/\r?\n/)

  if (lines.some((line) => line.startsWith('chapo:'))) {
    return false
  }

  const descriptionIndex = lines.findIndex((line) =>
    line.startsWith('description:')
  )
  if (descriptionIndex === -1) return false

  const descriptionValue = lines[descriptionIndex]
    .slice('description:'.length)
    .trim()
  lines.splice(descriptionIndex + 1, 0, `chapo: ${descriptionValue}`)

  const newFrontmatter = lines.join(newline)
  const newBlock = `---${newline}${newFrontmatter}${newline}---${newline}`
  const body = raw.slice(frontmatterBlock.length)
  const updated = newBlock + body

  if (updated === raw) return false

  await fs.writeFile(filePath, updated, 'utf8')
  return true
}

const files = await collectMarkdownFiles(ARTICLES_DIR)
let changed = 0

for (const filePath of files) {
  const didChange = await migrateFile(filePath)
  if (didChange) {
    changed += 1
    console.log(`updated: ${path.relative(ROOT, filePath)}`)
  }
}

console.log(
  changed === 0
    ? 'No changes needed.'
    : `Done. Updated ${changed} file${changed === 1 ? '' : 's'}.`
)
