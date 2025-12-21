export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const baseUrl = String(config.public.siteUrl || '').replace(/\/+$/, '')

  const robotsTxt = `# robots.txt for BeAbot
User-agent: *
Allow: /

# Prevent indexing of CV
Disallow: /cv.pdf
Disallow: /CV-*.pdf

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml
`

  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return robotsTxt
})
