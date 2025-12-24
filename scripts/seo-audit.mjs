/**
 * Audit SEO complet du site BeAbot
 * Analyse toutes les pages HTML générées dans .output/public
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';

const BASE_URL = 'https://beabot.fr';
const OUTPUT_DIR = '.output/public';

// Couleurs pour le terminal
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

// Utilitaires
const log = {
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  warn: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  title: (msg) => console.log(`\n${colors.bold}${colors.cyan}═══ ${msg} ═══${colors.reset}\n`)
};

// Trouver tous les fichiers HTML
function findHtmlFiles(dir, files = []) {
  const items = readdirSync(dir);
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip les dossiers techniques
      if (!['_nuxt', 'api', '__sitemap__', '_payload.json'].includes(item)) {
        findHtmlFiles(fullPath, files);
      }
    } else if (item === 'index.html' || (item.endsWith('.html') && !item.includes('_payload'))) {
      files.push(fullPath);
    }
  }
  return files;
}

// Extraire une balise meta
function extractMeta(html, name) {
  const patterns = [
    new RegExp(`<meta\\s+name=["']${name}["']\\s+content=["']([^"']*)["']`, 'i'),
    new RegExp(`<meta\\s+content=["']([^"']*)["']\\s+name=["']${name}["']`, 'i'),
    new RegExp(`<meta\\s+property=["']${name}["']\\s+content=["']([^"']*)["']`, 'i'),
    new RegExp(`<meta\\s+content=["']([^"']*)["']\\s+property=["']${name}["']`, 'i')
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Extraire le title
function extractTitle(html) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  return match ? match[1].trim() : null;
}

// Extraire le canonical
function extractCanonical(html) {
  const match = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

// Extraire les JSON-LD
function extractJsonLd(html) {
  const matches = html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  const results = [];
  for (const match of matches) {
    try {
      const json = JSON.parse(match[1]);
      results.push(json);
    } catch (e) {
      results.push({ error: 'Invalid JSON-LD' });
    }
  }
  return results;
}

// Extraire les headings
function extractHeadings(html) {
  const h1s = (html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || []).length;
  const h2s = (html.match(/<h2[^>]*>[\s\S]*?<\/h2>/gi) || []).length;
  const h3s = (html.match(/<h3[^>]*>[\s\S]*?<\/h3>/gi) || []).length;
  return { h1: h1s, h2: h2s, h3: h3s };
}

// Extraire les images sans alt
function extractImagesWithoutAlt(html) {
  const allImages = html.match(/<img[^>]+>/gi) || [];
  const withoutAlt = allImages.filter(img => {
    const hasAlt = /\salt=["'][^"']+["']/i.test(img) || /\salt=""/i.test(img);
    return !hasAlt;
  });
  return { total: allImages.length, withoutAlt: withoutAlt.length, details: withoutAlt.slice(0, 3) };
}

// Extraire les liens
function extractLinks(html) {
  const internalLinks = (html.match(/href=["'](\/[^"']*|https:\/\/beabot\.fr[^"']*)["']/gi) || []);
  const externalLinks = (html.match(/href=["'](https?:\/\/(?!beabot\.fr)[^"']+)["']/gi) || []);
  
  // Vérifier les liens internes sans trailing slash
  const withoutTrailingSlash = internalLinks.filter(link => {
    const href = link.match(/href=["']([^"']+)["']/i)?.[1];
    if (!href) return false;
    // Exclure les fichiers, ancres, et racine
    if (href === '/' || href.includes('.') || href.includes('#') || href.includes('?')) return false;
    return !href.endsWith('/');
  });
  
  return {
    internal: internalLinks.length,
    external: externalLinks.length,
    withoutTrailingSlash
  };
}

// Vérifier le hreflang
function checkHreflang(html) {
  return html.includes('hreflang');
}

// Audit d'une page
function auditPage(filePath, html) {
  const relativePath = relative(OUTPUT_DIR, filePath);
  const issues = [];
  const warnings = [];
  const info = [];
  
  // Title
  const title = extractTitle(html);
  if (!title) {
    issues.push('Pas de balise <title>');
  } else if (title.length < 30) {
    warnings.push(`Title trop court (${title.length} car.): "${title}"`);
  } else if (title.length > 60) {
    warnings.push(`Title trop long (${title.length} car.): "${title.substring(0, 60)}..."`);
  } else {
    info.push(`Title OK (${title.length} car.)`);
  }
  
  // Meta description
  const description = extractMeta(html, 'description');
  if (!description) {
    issues.push('Pas de meta description');
  } else if (description.length < 120) {
    warnings.push(`Description courte (${description.length} car.)`);
  } else if (description.length > 160) {
    warnings.push(`Description longue (${description.length} car.)`);
  } else {
    info.push(`Description OK (${description.length} car.)`);
  }
  
  // Canonical
  const canonical = extractCanonical(html);
  if (!canonical) {
    issues.push('Pas de canonical');
  } else {
    // Vérifier la cohérence
    const expectedPath = '/' + relativePath.replace('/index.html', '/').replace('index.html', '');
    const expectedCanonical = BASE_URL + (expectedPath === '/' ? '' : expectedPath);
    
    if (canonical !== expectedCanonical && canonical !== expectedCanonical.replace(/\/$/, '')) {
      warnings.push(`Canonical: ${canonical} (attendu: ${expectedCanonical})`);
    } else {
      info.push('Canonical OK');
    }
  }
  
  // Open Graph
  const ogTitle = extractMeta(html, 'og:title');
  const ogDescription = extractMeta(html, 'og:description');
  const ogImage = extractMeta(html, 'og:image');
  const ogUrl = extractMeta(html, 'og:url');
  const ogType = extractMeta(html, 'og:type');
  
  if (!ogTitle) warnings.push('Pas de og:title');
  if (!ogDescription) warnings.push('Pas de og:description');
  if (!ogImage) warnings.push('Pas de og:image');
  if (!ogUrl) warnings.push('Pas de og:url');
  if (!ogType) warnings.push('Pas de og:type');
  
  // Vérifier cohérence og:url et canonical
  if (ogUrl && canonical && ogUrl !== canonical) {
    warnings.push(`og:url (${ogUrl}) ≠ canonical (${canonical})`);
  }
  
  // Twitter Cards
  const twitterCard = extractMeta(html, 'twitter:card');
  if (!twitterCard) warnings.push('Pas de twitter:card');
  
  // JSON-LD
  const jsonLd = extractJsonLd(html);
  if (jsonLd.length === 0) {
    warnings.push('Pas de JSON-LD');
  } else {
    const types = jsonLd.map(j => j['@type'] || j.error).join(', ');
    info.push(`JSON-LD: ${types}`);
  }
  
  // Headings
  const headings = extractHeadings(html);
  if (headings.h1 === 0) {
    issues.push('Pas de H1');
  } else if (headings.h1 > 1) {
    warnings.push(`${headings.h1} balises H1 (devrait être 1)`);
  }
  info.push(`Structure: H1=${headings.h1}, H2=${headings.h2}, H3=${headings.h3}`);
  
  // Images
  const images = extractImagesWithoutAlt(html);
  if (images.withoutAlt > 0) {
    issues.push(`${images.withoutAlt}/${images.total} images sans alt`);
  } else if (images.total > 0) {
    info.push(`${images.total} images avec alt`);
  }
  
  // Liens
  const links = extractLinks(html);
  if (links.withoutTrailingSlash.length > 0) {
    warnings.push(`${links.withoutTrailingSlash.length} liens internes sans trailing slash`);
  }
  info.push(`Liens: ${links.internal} internes, ${links.external} externes`);
  
  return { path: relativePath, issues, warnings, info, title, description, canonical, jsonLd };
}

// Vérifier robots.txt
function checkRobots() {
  log.title('ROBOTS.TXT');
  const robotsPath = join(OUTPUT_DIR, 'robots.txt');
  
  if (!existsSync(robotsPath)) {
    log.error('robots.txt manquant');
    return;
  }
  
  const content = readFileSync(robotsPath, 'utf-8');
  console.log(content);
  
  if (!content.includes('Sitemap:')) {
    log.warn('Pas de référence au sitemap dans robots.txt');
  } else {
    log.success('Référence sitemap présente');
  }
  
  if (content.includes('Disallow: /')) {
    log.warn('Disallow: / détecté - vérifier si intentionnel');
  }
}

// Vérifier sitemap.xml
function checkSitemap() {
  log.title('SITEMAP.XML');
  const sitemapPath = join(OUTPUT_DIR, 'sitemap.xml');
  
  if (!existsSync(sitemapPath)) {
    log.error('sitemap.xml manquant');
    return;
  }
  
  const content = readFileSync(sitemapPath, 'utf-8');
  const urls = content.match(/<loc>([^<]+)<\/loc>/g) || [];
  
  console.log(`${urls.length} URLs dans le sitemap:\n`);
  urls.forEach(url => {
    const href = url.replace(/<\/?loc>/g, '');
    const hasTrailingSlash = href.endsWith('/') || href === BASE_URL;
    const status = hasTrailingSlash ? colors.green + '✓' : colors.yellow + '⚠';
    console.log(`  ${status} ${href}${colors.reset}`);
  });
  
  // Vérifier les lastmod
  const lastmods = content.match(/<lastmod>([^<]+)<\/lastmod>/g) || [];
  if (lastmods.length === 0) {
    log.warn('Pas de dates lastmod dans le sitemap');
  } else {
    log.success(`${lastmods.length} dates lastmod présentes`);
  }
}

// Vérifier les flux RSS/JSON
function checkFeeds() {
  log.title('FLUX RSS / JSON FEED');
  
  const rssPath = join(OUTPUT_DIR, 'rss.xml');
  const jsonPath = join(OUTPUT_DIR, 'feed.json');
  
  if (existsSync(rssPath)) {
    const rss = readFileSync(rssPath, 'utf-8');
    const items = (rss.match(/<item>/g) || []).length;
    log.success(`RSS: ${items} articles`);
  } else {
    log.warn('Pas de flux RSS');
  }
  
  if (existsSync(jsonPath)) {
    const json = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    log.success(`JSON Feed: ${json.items?.length || 0} articles`);
  } else {
    log.warn('Pas de JSON Feed');
  }
}

// Résumé global
function printSummary(results) {
  log.title('RÉSUMÉ GLOBAL');
  
  let totalIssues = 0;
  let totalWarnings = 0;
  
  const pagesWithIssues = [];
  const pagesWithWarnings = [];
  
  for (const result of results) {
    if (result.issues.length > 0) {
      totalIssues += result.issues.length;
      pagesWithIssues.push(result.path);
    }
    if (result.warnings.length > 0) {
      totalWarnings += result.warnings.length;
      pagesWithWarnings.push(result.path);
    }
  }
  
  console.log(`📊 Pages analysées: ${results.length}`);
  console.log(`❌ Erreurs critiques: ${totalIssues}`);
  console.log(`⚠️  Avertissements: ${totalWarnings}`);
  
  if (pagesWithIssues.length > 0) {
    console.log(`\n${colors.red}Pages avec erreurs:${colors.reset}`);
    pagesWithIssues.forEach(p => console.log(`  - ${p}`));
  }
}

// Main
async function main() {
  console.log(`\n${colors.bold}${colors.cyan}╔════════════════════════════════════════════════════════════╗`);
  console.log(`║          AUDIT SEO - BeAbot (${BASE_URL})          ║`);
  console.log(`╚════════════════════════════════════════════════════════════╝${colors.reset}\n`);
  
  // Trouver toutes les pages HTML
  const htmlFiles = findHtmlFiles(OUTPUT_DIR);
  console.log(`📄 ${htmlFiles.length} pages HTML à analyser\n`);
  
  // Auditer chaque page
  const results = [];
  
  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf-8');
    const result = auditPage(file, html);
    results.push(result);
    
    // Afficher les résultats
    const statusIcon = result.issues.length > 0 ? '❌' : result.warnings.length > 0 ? '⚠️' : '✅';
    console.log(`${statusIcon} ${colors.bold}${result.path}${colors.reset}`);
    
    if (result.title) {
      console.log(`   Title: ${result.title.substring(0, 50)}${result.title.length > 50 ? '...' : ''}`);
    }
    
    result.issues.forEach(i => console.log(`   ${colors.red}• ${i}${colors.reset}`));
    result.warnings.forEach(w => console.log(`   ${colors.yellow}• ${w}${colors.reset}`));
    
    console.log('');
  }
  
  // Vérifications globales
  checkRobots();
  checkSitemap();
  checkFeeds();
  
  // Résumé
  printSummary(results);
  
  // Score SEO approximatif
  log.title('SCORE SEO ESTIMÉ');
  const totalChecks = results.length * 10; // ~10 vérifications par page
  const totalProblems = results.reduce((acc, r) => acc + r.issues.length + r.warnings.length * 0.5, 0);
  const score = Math.max(0, Math.round(100 - (totalProblems / totalChecks) * 100));
  
  const scoreColor = score >= 90 ? colors.green : score >= 70 ? colors.yellow : colors.red;
  console.log(`${scoreColor}${colors.bold}Score: ${score}/100${colors.reset}`);
  
  if (score < 90) {
    console.log(`\nPour améliorer le score:`);
    console.log(`  1. Corriger les erreurs critiques (❌)`);
    console.log(`  2. Traiter les avertissements (⚠️)`);
    console.log(`  3. Optimiser les descriptions et titles`);
  }
}

main().catch(console.error);
