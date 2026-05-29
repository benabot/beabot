#!/usr/bin/env node

import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()

const files = [
  'data/apps.ts',
  'data/apps-en.ts',
  'pages/apps/index.vue',
  'pages/en/apps/index.vue',
  'pages/apps/focus-one.vue',
  'pages/en/apps/focus-one.vue',
  'pages/apps/duo-spend.vue',
  'pages/en/apps/duo-spend.vue',
]

const avoidedTerms = [
  /\bfriction\b/iu,
  /\bbooster\b/iu,
  /transformer votre vie/iu,
  /change your life/iu,
  /apps simples/iu,
  /simple apps/iu,
  /apps principales/iu,
  /apps secondaires/iu,
  /core apps/iu,
  /mini-?saas/iu,
]

const stopWords = new Set([
  'about',
  'action',
  'active',
  'after',
  'aide',
  'ainsi',
  'app',
  'apps',
  'avec',
  'beabot',
  'before',
  'built',
  'cette',
  'chaque',
  'clear',
  'comme',
  'dans',
  'data',
  'depuis',
  'does',
  'done',
  'duospend',
  'each',
  'faire',
  'focusone',
  'helps',
  'interface',
  'moins',
  'projet',
  'pour',
  'sans',
  'that',
  'their',
  'this',
  'votre',
  'with',
])

const warnings = []

function warn(file, message) {
  warnings.push(`${file}: ${message}`)
}

function readProjectFile(file) {
  const filePath = path.join(rootDir, file)
  if (!fs.existsSync(filePath)) {
    warn(file, 'missing file')
    return ''
  }

  return fs.readFileSync(filePath, 'utf8')
}

function stripSourceNoise(source) {
  return source
    .replace(/<script[\s\S]*?<\/script>/giu, ' ')
    .replace(/<style[\s\S]*?<\/style>/giu, ' ')
    .replace(/<[^>]+>/gu, ' ')
    .replace(/\{\{[\s\S]*?\}\}/gu, ' ')
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"]/gu, ' ')
}

function extractStringLiterals(source) {
  return Array.from(
    source.matchAll(/(['"`])((?:\\.|(?!\1)[\s\S])*?[A-Za-zÀ-ÿ][\s\S]*?)\1/gu),
    (match) => match[2]
      .replace(/\\n/gu, ' ')
      .replace(/\\'/gu, "'")
      .replace(/\\"/gu, '"'),
  )
}

function normalizeText(value) {
  return value
    .replace(/&amp;/gu, '&')
    .replace(/&nbsp;/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()
}

function extractVueTemplateText(source) {
  const template = source.match(/<template>([\s\S]*?)<\/template>/iu)?.[1] || ''

  return stripSourceNoise(template)
}

function extractReadableText(file, source) {
  const chunks = file.endsWith('.vue')
    ? [extractVueTemplateText(source)]
    : extractStringLiterals(source)

  return chunks
    .map(normalizeText)
    .filter((text) => text.length > 0)
    .join('. ')
}

function splitSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/u)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0)
}

function checkAvoidedTerms(file, source) {
  for (const pattern of avoidedTerms) {
    if (pattern.test(source)) {
      warn(file, `avoided public wording found: ${pattern.source}`)
    }
  }
}

function checkLongSentences(file, text) {
  for (const sentence of splitSentences(text)) {
    if (!/[.!?:;]/u.test(sentence)) continue

    const words = sentence.split(/\s+/u).filter(Boolean)
    if (words.length > 34) {
      warn(
        file,
        `long sentence (${words.length} words): ${sentence.slice(0, 150)}`,
      )
    }
  }
}

function checkRepeatedSentences(file, text) {
  const counts = new Map()

  for (const sentence of splitSentences(text)) {
    const normalized = sentence.toLowerCase()
    if (normalized.length < 40) continue
    counts.set(normalized, (counts.get(normalized) || 0) + 1)
  }

  for (const [sentence, count] of counts.entries()) {
    if (count > 1) {
      warn(file, `repeated sentence (${count}x): ${sentence.slice(0, 140)}`)
    }
  }
}

function checkRepeatedWords(file, text) {
  const counts = new Map()
  const words = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .match(/\b[a-z][a-z-]{5,}\b/gu) || []

  for (const word of words) {
    if (stopWords.has(word)) continue
    counts.set(word, (counts.get(word) || 0) + 1)
  }

  const repeated = Array.from(counts.entries())
    .filter(([, count]) => count >= 10)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  if (repeated.length) {
    warn(
      file,
      `repeated words to review: ${repeated
        .map(([word, count]) => `${word} (${count})`)
        .join(', ')}`,
    )
  }
}

function checkSeoText(file, source) {
  const seoBlocks = source.match(/seo:\s*\{[\s\S]*?\n\s*\}/gu) || []

  for (const block of seoBlocks) {
    const title = block.match(/title:\s*(['"`])([\s\S]*?)\1/u)?.[2]
    const description = block.match(/description:\s*(['"`])([\s\S]*?)\1/u)?.[2]

    if (title) {
      const cleanTitle = normalizeText(title)
      if (cleanTitle.length > 70) {
        warn(file, `SEO title may be long (${cleanTitle.length} chars): ${cleanTitle}`)
      }
    }

    if (description) {
      const cleanDescription = normalizeText(description)
      if (cleanDescription.length < 80 || cleanDescription.length > 170) {
        warn(
          file,
          `SEO description length to review (${cleanDescription.length} chars): ${cleanDescription}`,
        )
      }
    }
  }
}

for (const file of files) {
  const source = readProjectFile(file)
  const readableText = extractReadableText(file, source)

  checkAvoidedTerms(file, source)
  if (!file.endsWith('.vue')) {
    checkLongSentences(file, readableText)
    checkRepeatedSentences(file, readableText)
    checkRepeatedWords(file, readableText)
  }
  checkSeoText(file, source)
}

if (warnings.length) {
  console.log(`Copy quality diagnostics completed with ${warnings.length} warning(s):`)
  for (const warning of warnings) console.log(`- ${warning}`)
} else {
  console.log('Copy quality diagnostics completed with no warnings.')
}
