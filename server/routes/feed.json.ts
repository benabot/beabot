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
    const withTrailingSlash = (path: string) => {
      if (!path) return '/eco-conception/'
      return path.endsWith('/') ? path : `${path}/`
    }

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
        const articleUrl = `${baseUrl}${withTrailingSlash(article.path)}`

        return {
          id: articleUrl,
          url: articleUrl,
          title: article.title || '',
          content_html: article.description || '',
          summary: article.description || '',
          date_published: new Date(article.date || Date.now()).toISOString(),
          tags: article.tag || [],
        }
      }),
    }

    // Définir les en-têtes de réponse
    setResponseHeader(event, 'Content-Type', 'application/json; charset=utf-8')
    setResponseHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')

    // Retourner une string JSON pour garantir l'encodage UTF-8
    return JSON.stringify(feed)
  } catch (error) {
    console.error('Error generating JSON feed:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Error generating JSON feed',
    })
  }
})
