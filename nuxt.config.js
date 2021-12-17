// const meta = getSiteMeta()
const createSitemapRoutes = async () => {
  const routes = []
  let posts = []
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content('articles').fetch()
  for (const post of posts) {
    routes.push(`eco-conception/${post.slug}`)
  }
  return routes
}
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    titleTemplate: 'BeAbot - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'L’éco-conception web, c’est concilier respect de l’environnement et technologies numériques de pointe pour un internet durable.',
      },
      // Open Graph
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'BeAbot : éco-conception web',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'L’éco-conception web, c’est concilier respect de l’environnement et technologies numériques de pointe pour un internet durable.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://beabot.fr/beabot.png',
      },
      // Twitter Card
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'BeAbot : éco-conception web',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'L’éco-conception web, c’est concilier respect de l’environnement et technologies numériques de pointe pour un internet durable.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://beabot.fr/beabot.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    'nuxt-purgecss',
    'nuxt-font-loader',
    // 'nuxt-compress',
    'nuxt-precompress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed',
    '@ax2/lozad-module',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  //   baseURL: '/',
  // },
  router: {
    prefetchLinks: false,
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    // Options
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-coldark-dark.css',
      },
    },
  },

  fontLoader: {
    // Paste a new custom link here (for example Typekit)
    url: 'https://use.typekit.net/akf4akv.css',

    prefetch: true,
    preconnect: true,
  },
  purgeCSS: {
    whitelist: [
      'class',
      'token',
      'nuxt-content-highlight',
      'language-css',
      'language-js',
      'line-numbers',
      'comment',
      'selector',
      'punctuation',
      'proprety',
      'number',
      'unit',
      'pre[class*="language-"]',
      'citation',
      'footnote-ref',
      'auteur',
      'blockquote',
      'lien--vert',
    ],
    // whitelistPatternsChildren: [/^token/, /^nuxt-content-highlight/],
    whitelistPatternsChildren: [/token$/, /pre$/],
    // whitelistPatternsChildren: [/token$/, /nuxt-content-highlight$/],
  },
  styleResources: {
    scss: ['~/assets/css/vars/*.scss', '~/assets/css/mixins/*.scss'],
  },

  pageTransition: 'page',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
  /*
   ** Build configuration
   */
  // build: {
  //   extractCSS: true,
  //   babel: {
  //     presets(env, [preset, options]) {
  //       return [['@babel/preset-env', options]]
  //     },
  //   },
  // },
  render: {
    // Setting up cache for 'static' directory - a year in milliseconds
    // https://web.dev/uses-long-cache-ttl
    static: {
      maxAge: 60 * 60 * 24 * 365 * 1000,
    },
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ['br', 'gzip'],
    },

    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  },
  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.bodyPlainText = document.text
      }
    },
  },
  feed() {
    const baseUrlArticles = 'https://beabot.fr/eco-conception'
    const baseLinkFeedArticles = ''
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      // atom: { type: 'atom1', file: 'atom.xml' },
      json: { type: 'json1', file: 'feed.json' },
    }
    const { $content } = require('@nuxt/content')

    const feedCreateArticles = async function (feed) {
      feed.options = {
        title: 'BeAbot : blog de l’éco-conception web',
        description:
          "J'écris à propos de l’éco-conception web et du numérique éco-responsable.",
        link: baseUrlArticles,
      }
      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: new Date(article.updatedAt),
          description: article.description,
          // content: article.bodyPlainText,
          author: {
            name: 'Benoît Abot',
            email: 'hello@beabot.fr',
            link: 'https://beabot.fr/',
          },
        })
      })
      // feed.addContributor({
      //   name: 'Benoît Abot',
      //   email: 'hello@beabot.fr',
      //   link: 'https://beabot.fr/',
      // })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type,
      create: feedCreateArticles,
    }))
  },
  sitemap: {
    hostname: 'https://beabot.fr',
    // process.env.BASE_URL,
    gzip: true,
    routes: createSitemapRoutes,
  },
}
