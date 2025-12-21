#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const CONTENT_DIR = path.join(ROOT, 'content')
const FILE_EXTENSIONS = new Set(['.pdf', '.png', '.jpg', '.jpeg', '.svg', '.webp'])

const isExternalHref = (href) => {
  if (!href) return false
  if (href.startsWith('//')) return true
  return /^[a-z][a-z0-9+.-]*:/i.test(href)
}

const withTrailingSlash = (value) => {
  if (value === '/') return '/'
  return value.endsWith('/') ? value : `${value}/`
}

const normalizeInternalHref = (href) => {
  const value = String(href || '').trim()
  if (!value) return href
  if (value.startsWith('#') || value.startsWith('?')) return href
  if (!value.startsWith('/')) return href
  if (isExternalHref(value)) return href

  const match = value.match(/^([^?#]*)(.*)$/)
  if (!match) return href

  const pathPart = match[1]
  const suffix = match[2] || ''
  const lowerPath = pathPart.toLowerCase()

  for (const ext of FILE_EXTENSIONS) {
    if (lowerPath.endsWith(ext)) {
      return href
    }
  }

  return `${withTrailingSlash(pathPart)}${suffix}`
}

const walk = (dir, acc = []) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(fullPath, acc)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      acc.push(fullPath)
    }
  }
  return acc
}

const normalizeMarkdownLinks = (content) =>
  content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, raw) => {
    const trimmed = raw.trim()
    if (!trimmed) return match
    const url = trimmed.split(/\s+/)[0]
    const rest = trimmed.slice(url.length)
    const normalized = normalizeInternalHref(url)
    if (normalized === url) return match
    return `[${text}](${normalized}${rest})`
  })

const normalizeHtmlLinks = (content) =>
  content.replace(/href=(['"])(.*?)\1/g, (match, quote, href) => {
    const normalized = normalizeInternalHref(href)
    if (normalized === href) return match
    return `href=${quote}${normalized}${quote}`
  })

if (!fs.existsSync(CONTENT_DIR)) {
  console.error('ERROR: content/ directory not found.')
  process.exit(1)
}

const files = walk(CONTENT_DIR)
let updatedCount = 0

for (const filePath of files) {
  const original = fs.readFileSync(filePath, 'utf8')
  let updated = normalizeMarkdownLinks(original)
  updated = normalizeHtmlLinks(updated)

  if (updated !== original) {
    fs.writeFileSync(filePath, updated)
    updatedCount += 1
    console.log(`OK Updated ${path.relative(ROOT, filePath)}`)
  }
}

console.log(`\nDone. Updated ${updatedCount} file(s).`)
