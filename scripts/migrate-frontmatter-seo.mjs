import { promises as fs } from 'node:fs'
import path from 'node:path'

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

function getLineValue(lines, key) {
  const line = lines.find((item) => item.startsWith(`${key}:`))
  if (!line) return null
  return line.slice(line.indexOf(':') + 1).trim()
}

function findBlockEnd(lines, startIndex, parentIndentLength) {
  for (let i = startIndex + 1; i < lines.length; i += 1) {
    const line = lines[i]
    if (!line.trim()) {
      continue
    }
    const indentLength = line.match(/^(\s*)/)[1].length
    if (indentLength <= parentIndentLength) {
      return i
    }
  }
  return lines.length
}

async function migrateFile(filePath) {
  const content = await fs.readFile(filePath, 'utf8')
  const match = content.match(FRONTMATTER_REGEX)
  if (!match) return false

  const frontmatterBlock = match[0]
  const frontmatter = match[1]
  const newline = frontmatterBlock.includes('\r\n') ? '\r\n' : '\n'
  const lines = frontmatter.split(/\r?\n/)
  let modified = false

  const hasUpdatedAt = lines.some((line) => line.startsWith('updatedAt:'))
  if (!hasUpdatedAt) {
    const dateIndex = lines.findIndex((line) => line.startsWith('date:'))
    const dateValue =
      dateIndex !== -1 ? lines[dateIndex].slice('date:'.length).trim() : null
    if (dateValue) {
      lines.splice(dateIndex + 1, 0, `updatedAt: ${dateValue}`)
      modified = true
    }
  }

  const titleValue = getLineValue(lines, 'title')
  const descriptionValue = getLineValue(lines, 'description')

  const seoIndex = lines.findIndex((line) => /^seo:\s*$/.test(line))
  if (seoIndex === -1) {
    if (titleValue || descriptionValue) {
      const descriptionIndex = lines.findIndex((line) =>
        line.startsWith('description:')
      )
      const titleIndex = lines.findIndex((line) => line.startsWith('title:'))
      let insertIndex = lines.length

      if (descriptionIndex !== -1) {
        insertIndex = descriptionIndex + 1
      } else if (titleIndex !== -1) {
        insertIndex = titleIndex + 1
      }

      const seoLines = ['seo:']
      if (titleValue) {
        seoLines.push(`  title: ${titleValue}`)
      }
      if (descriptionValue) {
        seoLines.push(`  description: ${descriptionValue}`)
      }

      lines.splice(insertIndex, 0, ...seoLines)
      modified = true
    }
  } else {
    const seoLine = lines[seoIndex]
    const seoIndent = (seoLine.match(/^(\s*)seo:\s*$/) || [])[1] || ''
    const childIndent = `${seoIndent}  `
    let blockEnd = findBlockEnd(lines, seoIndex, seoIndent.length)
    const blockLines = lines.slice(seoIndex + 1, blockEnd)
    const hasSeoTitle = blockLines.some((line) =>
      line.startsWith(`${childIndent}title:`)
    )
    const hasSeoDescription = blockLines.some((line) =>
      line.startsWith(`${childIndent}description:`)
    )

    if (!hasSeoTitle && titleValue) {
      lines.splice(seoIndex + 1, 0, `${childIndent}title: ${titleValue}`)
      blockEnd += 1
      modified = true
    }

    if (!hasSeoDescription && descriptionValue) {
      let insertAt = seoIndex + 1
      const titleLineIndex = lines.findIndex(
        (line, index) =>
          index > seoIndex &&
          index < blockEnd &&
          line.startsWith(`${childIndent}title:`)
      )
      if (titleLineIndex !== -1) {
        insertAt = titleLineIndex + 1
      }
      lines.splice(insertAt, 0, `${childIndent}description: ${descriptionValue}`)
      modified = true
    }
  }

  const newFrontmatter = lines.join(newline)
  const newBlock = `---${newline}${newFrontmatter}${newline}---${newline}`
  let body = content.slice(frontmatterBlock.length)
  let bodyAdjusted = false
  if (body && !body.startsWith(newline)) {
    body = `${newline}${body}`
    bodyAdjusted = true
  }
  const updatedContent = newBlock + body

  if (!modified && !bodyAdjusted) {
    return false
  }

  if (updatedContent !== content) {
    await fs.writeFile(filePath, updatedContent, 'utf8')
    return true
  }

  return false
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
