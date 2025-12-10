#!/usr/bin/env node

/**
 * Pre-build validation script
 * Validates configuration, files, and content before building
 */

import { existsSync, readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

let errors = []
let warnings = []
let checks = 0

function check(condition, errorMsg, warnMsg = null) {
  checks++
  if (!condition) {
    if (warnMsg) {
      warnings.push(warnMsg)
    } else {
      errors.push(errorMsg)
    }
  }
}

function fileExists(path) {
  return existsSync(join(rootDir, path))
}

function readJSON(path) {
  try {
    return JSON.parse(readFileSync(join(rootDir, path), 'utf-8'))
  } catch (e) {
    return null
  }
}

console.log('🔍 Running pre-build checks...\n')

// ================================
// 1. CONFIGURATION FILES
// ================================
console.log('📋 Checking configuration files...')
check(fileExists('nuxt.config.ts'), '❌ nuxt.config.ts is missing')
check(fileExists('package.json'), '❌ package.json is missing')
check(fileExists('tsconfig.json'), '❌ tsconfig.json is missing', '⚠️ tsconfig.json is missing (optional)')
check(!fileExists('nuxt.config.js'), '❌ Old nuxt.config.js still exists - should be removed')
check(!fileExists('store'), '❌ Vuex store/ directory still exists - should be removed')

// ================================
// 2. PACKAGE.JSON VALIDATION
// ================================
console.log('📦 Validating package.json...')
const pkg = readJSON('package.json')
if (pkg) {
  check(pkg.dependencies?.nuxt?.startsWith('^3'), '❌ Nuxt 3 not in dependencies')
  check(pkg.dependencies?.vue?.startsWith('^3'), '❌ Vue 3 not in dependencies')
  check(!pkg.dependencies?.['@nuxtjs/axios'], '❌ Obsolete @nuxtjs/axios still in dependencies')
  check(!pkg.dependencies?.['nuxt-precompress'], '❌ Obsolete nuxt-precompress still in dependencies')
  check(!pkg.dependencies?.['@ax2/lozad-module'], '❌ Obsolete @ax2/lozad-module still in dependencies')
  check(pkg.dependencies?.['@nuxt/content'], '❌ @nuxt/content not in dependencies')
}

// ================================
// 3. CRITICAL DIRECTORIES
// ================================
console.log('📁 Checking critical directories...')
check(fileExists('pages'), '❌ pages/ directory is missing')
check(fileExists('components'), '❌ components/ directory is missing')
check(fileExists('composables'), '❌ composables/ directory is missing')
check(fileExists('content'), '❌ content/ directory is missing')
check(fileExists('public'), '❌ public/ directory is missing')
check(fileExists('assets'), '❌ assets/ directory is missing')
check(!fileExists('static'), '⚠️ Old static/ directory exists - should be renamed to public/')

// ================================
// 4. KEY PAGES
// ================================
console.log('📄 Checking key pages...')
check(fileExists('pages/index.vue'), '❌ pages/index.vue is missing')
check(fileExists('pages/portfolio.vue'), '❌ pages/portfolio.vue is missing')
check(fileExists('pages/contact.vue'), '❌ pages/contact.vue is missing')
check(fileExists('pages/eco-conception/index.vue'), '❌ pages/eco-conception/index.vue is missing')
check(fileExists('pages/eco-conception/[slug].vue'), '❌ pages/eco-conception/[slug].vue is missing')
check(!fileExists('pages/eco-conception/_slug.vue'), '❌ Old _slug.vue syntax still exists - should be [slug].vue')

// ================================
// 5. COMPONENTS
// ================================
console.log('🧩 Checking components...')
const components = [
  'TheLogo.vue',
  'TheFooter.vue',
  'BaseButton.vue',
  'BaseHeading.vue',
  'ArticleNavigation.vue',
  'BoiteArticle.vue',
  'AppSearchInput.vue',
]

components.forEach((comp) => {
  check(fileExists(`components/${comp}`), `❌ Component ${comp} is missing`)
})

// Check for old naming conventions
check(!fileExists('components/Footer.vue'), '⚠️ Old Footer.vue exists - should be TheFooter.vue')
check(!fileExists('components/Boutoncta.vue'), '⚠️ Old Boutoncta.vue exists - should be BaseButton.vue')
check(!fileExists('components/Petittitre.vue'), '⚠️ Old Petittitre.vue exists - should be BaseHeading.vue')

// ================================
// 6. COMPOSABLES
// ================================
console.log('⚡ Checking composables...')
check(fileExists('composables/useTags.ts'), '❌ composables/useTags.ts is missing')

// ================================
// 7. CONTENT
// ================================
console.log('📝 Checking content...')
check(fileExists('content/articles'), '❌ content/articles/ directory is missing')

// Check for article files
const articles = [
  'L-eco-conception-web.md',
  'La-consommation-energetique-du-numerique.md',
  'theme-wordpress-eco-conception.md',
]

articles.forEach((article) => {
  check(
    fileExists(`content/articles/${article}`),
    `❌ Article ${article} is missing`
  )
})

// ================================
// 8. ASSETS
// ================================
console.log('🎨 Checking assets...')
check(fileExists('assets/css/main.scss'), '❌ assets/css/main.scss is missing')
check(fileExists('assets/css/vars/_colors.scss'), '❌ assets/css/vars/_colors.scss is missing')
check(fileExists('assets/css/vars/_typo.scss'), '❌ assets/css/vars/_typo.scss is missing')
check(fileExists('assets/css/vars/_spacing.scss'), '❌ assets/css/vars/_spacing.scss is missing')

// ================================
// 9. PUBLIC FILES
// ================================
console.log('🌐 Checking public files...')
check(fileExists('public/favicon.svg'), '❌ public/favicon.svg is missing')
check(fileExists('public/beabot.svg'), '❌ public/beabot.svg is missing')
check(fileExists('public/contact-form.html'), '❌ public/contact-form.html is missing (required for Netlify Forms)')

// ================================
// 10. NETLIFY CONFIGURATION
// ================================
console.log('☁️  Checking Netlify configuration...')
check(fileExists('netlify.toml'), '❌ netlify.toml is missing')
if (fileExists('netlify.toml')) {
  const netlifyConfig = readFileSync(join(rootDir, 'netlify.toml'), 'utf-8')
  check(netlifyConfig.includes('yarn generate'), '❌ netlify.toml should use "yarn generate" as build command')
  check(netlifyConfig.includes('.output/public'), '❌ netlify.toml should publish ".output/public" directory')
}

// ================================
// 11. RESULTS
// ================================
console.log('\n' + '='.repeat(50))
console.log('📊 RESULTS')
console.log('='.repeat(50))
console.log(`Total checks: ${checks}`)
console.log(`✅ Passed: ${checks - errors.length - warnings.length}`)
console.log(`⚠️  Warnings: ${warnings.length}`)
console.log(`❌ Errors: ${errors.length}`)

if (warnings.length > 0) {
  console.log('\n⚠️  WARNINGS:')
  warnings.forEach((w) => console.log(`  ${w}`))
}

if (errors.length > 0) {
  console.log('\n❌ ERRORS:')
  errors.forEach((e) => console.log(`  ${e}`))
  console.log('\n🛑 Build validation FAILED')
  process.exit(1)
}

console.log('\n✅ All checks passed! Ready to build.')
process.exit(0)
