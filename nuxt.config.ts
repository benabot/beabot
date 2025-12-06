// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt 3 uses SSG by default with `nuxt generate`
  ssr: true,

  // Compatibility date for Nuxt 3
  compatibilityDate: '2024-12-06',

  // TypeScript configuration
  typescript: {
    strict: false,
    typeCheck: false,
  },

  // App configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr',
      },
      titleTemplate: 'BeAbot - %s',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "L'éco-conception web, c'est concilier respect de l'environnement et technologies numériques de pointe pour un internet durable.",
        },
        // Open Graph
        {
          property: 'og:title',
          content: 'BeAbot : éco-conception web',
        },
        {
          property: 'og:description',
          content: "L'éco-conception web, c'est concilier respect de l'environnement et technologies numériques de pointe pour un internet durable.",
        },
        {
          property: 'og:image',
          content: 'https://beabot.fr/beabot.png',
        },
        // Twitter Card
        {
          name: 'twitter:title',
          content: 'BeAbot : éco-conception web',
        },
        {
          name: 'twitter:description',
          content: "L'éco-conception web, c'est concilier respect de l'environnement et technologies numériques de pointe pour un internet durable.",
        },
        {
          name: 'twitter:image',
          content: 'https://beabot.fr/beabot.png',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  // Global CSS
  css: ['~/assets/css/main.scss'],

  // Vite configuration for SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/vars/_colors.scss" as *; @use "~/assets/css/vars/_typo.scss" as *; @use "~/assets/css/mixins/mixins.scss" as *;',
          api: 'modern-compiler',
        },
      },
    },
  },

  // Router configuration
  router: {
    options: {
      linkPrefetchedClass: 'nuxt-link-prefetched',
    },
  },

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-fonts',
  ],

  // Content module configuration
  content: {
    highlight: {
      theme: {
        default: 'github-dark',
        dark: 'github-dark',
      },
      preload: ['javascript', 'css', 'vue', 'bash', 'json'],
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },

  // Image module configuration
  image: {
    // Default image optimization
    quality: 80,
    format: ['webp', 'avif'],
  },

  // Sitemap configuration
  sitemap: {
    hostname: 'https://beabot.fr',
    gzip: true,
    routes: async () => {
      const { serverQueryContent } = await import('#content/server')
      const articles = await serverQueryContent('articles').find()
      return articles.map((article) => `/eco-conception/${article._path?.split('/').pop()}`)
    },
  },

  // Google Fonts configuration (self-hosted)
  googleFonts: {
    families: {
      // Remplacer Typekit par Google Fonts auto-hébergées
      // À définir selon les fonts utilisées
    },
    download: true,
    inject: true,
  },

  // Nitro configuration for RSS feed
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/feed.json', '/sitemap.xml'],
    },
  },

  // Development configuration
  devtools: { enabled: true },

  // Experimental features
  experimental: {
    payloadExtraction: true,
    componentIslands: true,
  },
})
