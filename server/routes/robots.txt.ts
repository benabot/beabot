export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

  const robotsTxt = `# robots.txt for BeAbot
User-agent: *
Allow: /

# Prevent indexing of CV
Disallow: /cv.pdf
Disallow: /CV-*.pdf

# Sitemap
Sitemap: ${config.public.siteUrl}/sitemap.xml
`

  setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  return robotsTxt
})
