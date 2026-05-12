import { queryCollection } from '@nuxt/content/server'

export default defineEventHandler(async (event) => {
  try {
    // Récupérer tous les articles, triés par date de publication
    const articles = await queryCollection(event, 'articles')
      .select('title', 'description', 'date', 'tag', 'path')
      .order('date', 'DESC')
      .all()

    const config = useRuntimeConfig()
    const baseUrl = config.public.siteUrl

    // Échapper les caractères spéciaux pour XML
    const escapeXml = (unsafe: string) => {
      if (!unsafe) return ''
      return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
    }

    const withTrailingSlash = (path: string) => {
      if (!path) return '/eco-conception/'
      return path.endsWith('/') ? path : `${path}/`
    }

    // Générer le contenu RSS 2.0
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>BeAbot : blog de l'éco-conception web</title>
    <link>${baseUrl}</link>
    <description>J'écris à propos de l'éco-conception web et du numérique éco-responsable.</description>
    <language>fr-FR</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${articles
      .map((article) => {
        const articleUrl = `${baseUrl}${withTrailingSlash(article.path)}`

        return `
    <item>
      <title>${escapeXml(article.title || '')}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(article.description || '')}</description>
      <pubDate>${new Date(article.date || Date.now()).toUTCString()}</pubDate>
      ${
        article.tag && Array.isArray(article.tag)
          ? article.tag.map((t: string) => `<category>${escapeXml(t)}</category>`).join('\n      ')
          : ''
      }
    </item>`
      })
      .join('')}
  </channel>
</rss>`

    // Définir les en-têtes de réponse
    setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
    setResponseHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')

    return rss
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error generating RSS feed',
    })
  }
})
