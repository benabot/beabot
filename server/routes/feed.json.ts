import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
  try {
    // Récupérer tous les articles, triés par date de création
    const articles = await serverQueryContent(event, 'articles')
      .sort({ $numeric: true })
      .find()

    const baseUrl = 'https://beabot.fr'

    // Générer le JSON Feed version 1.1
    const feed = {
      version: 'https://jsonfeed.org/version/1.1',
      title: "BeAbot : blog de l'éco-conception web",
      home_page_url: baseUrl,
      feed_url: `${baseUrl}/feed.json`,
      description: "J'écris à propos de l'éco-conception web et du numérique éco-responsable.",
      language: 'fr-FR',
      authors: [
        {
          name: 'Benoît Abot',
          url: baseUrl,
        },
      ],
      items: articles.map((article) => {
        // Extraire le slug depuis _path (format: /articles/slug)
        const slug = article._path?.split('/').pop() || ''
        const articleUrl = `${baseUrl}/eco-conception/${slug}`

        return {
          id: articleUrl,
          url: articleUrl,
          title: article.title || '',
          content_html: article.description || '',
          summary: article.description || '',
          date_published: new Date(article.date || article.createdAt || Date.now()).toISOString(),
          tags: article.tag || [],
        }
      }),
    }

    // Définir les en-têtes de réponse
    setResponseHeader(event, 'Content-Type', 'application/json; charset=utf-8')
    setResponseHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')

    return feed
  } catch (error) {
    console.error('Error generating JSON feed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error generating JSON feed',
    })
  }
})
