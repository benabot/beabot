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
      ],
    },
    // Désactive la transition globale pour éviter CSS/JS supplémentaires
    pageTransition: false,
  },

  // Global CSS
  css: [
    // System font stack only (retire Montserrat webfonts)
    '~/assets/css/main.scss',
    '~/assets/css/article-content.scss', // Article typography styles
  ],

  // Vite configuration for SCSS
  vite: {
    server: {
      // Avoid HMR port conflicts in dev (fixes "Port 24678 is already in use")
      hmr: {
        port: 24679,
        clientPort: 24679,
      },
    },
    resolve: {
      alias: {
        // Prevent rare dev errors resolving internal Nuxt paths
        '#internal/nuxt/paths': 'nuxt/dist/app/paths.mjs',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/vars/_colors.scss" as *; @use "~/assets/css/vars/_typo.scss" as *; @use "~/assets/css/vars/_spacing.scss" as *; @use "~/assets/css/mixins/mixins.scss" as *;',
          api: 'modern-compiler',
        },
      },
    },
    build: {
      cssCodeSplit: true, // Split CSS by route for better caching
      rollupOptions: {
        output: {
          manualChunks: {
            // Group Vue core together to reduce chunk count
            vendor: ['vue', 'vue-router'],
          },
        },
      },
    },
  },

  // Router configuration
  router: {
    options: {
      linkPrefetchedClass: 'nuxt-link-prefetched',
      // Réduit les requêtes inutiles en désactivant le prefetch automatique des liens
      prefetchLinks: false,
    },
  },

  // Modules
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/sitemap',
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
    screens: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
    presets: {
      card: {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: 80,
        },
      },
    },
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

  // Fonts configuration - removed for now
  // Will use local @fontsource instead

  // Nitro configuration for RSS feed
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/feed.json', '/sitemap.xml'],
      // Ignore 404 errors on API content query routes (cache/surround queries)
      failOnError: false,
    },
    compressPublicAssets: true, // Enable Brotli/Gzip compression for better performance
  },

  // Development configuration
  devtools: { enabled: true },

  // Experimental features
  experimental: {
    // payloadExtraction: true, // Disabled - causes #app-manifest errors in dev mode
    // componentIslands: true, // Disabled - causes #app-manifest errors in current version
    inlineSSRStyles: false, // Disable inline CSS for better caching and smaller HTML
  },
})
