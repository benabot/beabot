import { readdir } from 'node:fs/promises'

// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://beabot.fr'
const normalizedSiteUrl = siteUrl.replace(/\/+$/, '')
const fileExtensionRegex = /\.[a-z0-9]+$/i
const articleContentDir = new URL('./content/articles/', import.meta.url)

const normalizeSitemapLoc = (loc: string): string => {
  if (!loc) return loc
  if (loc.startsWith(normalizedSiteUrl)) {
    const pathPart = loc.slice(normalizedSiteUrl.length) || '/'
    if (pathPart !== '/' && fileExtensionRegex.test(pathPart)) return loc
    const normalizedPath =
      pathPart === '/' ? '/' : `${pathPart.replace(/\/+$/, '')}/`
    return `${normalizedSiteUrl}${normalizedPath}`
  }

  if (loc.startsWith('/')) {
    if (loc !== '/' && fileExtensionRegex.test(loc)) return loc
    return loc === '/' ? '/' : `${loc.replace(/\/+$/, '')}/`
  }

  return loc
}

const getArticleSitemapRoutes = async (): Promise<string[]> => {
  const files = await readdir(articleContentDir)
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, '').toLowerCase())
    .map((slug) => `/eco-conception/${slug}/`)
}

export default defineNuxtConfig({
  // Nuxt 3 uses SSG by default with `nuxt generate`
  ssr: true,

  // Compatibility date for Nuxt 3
  compatibilityDate: '2024-12-06',
  future: {
    compatibilityVersion: 4,
  },
  features: {
    inlineStyles: false,
  },

  // Runtime configuration (accessible via useRuntimeConfig())
  runtimeConfig: {
    public: {
      siteUrl: siteUrl, // Use the same siteUrl variable for consistency
    },
  },

  site: {
    url: siteUrl,
    trailingSlash: true,
  },

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
          content:
            "L'éco-conception web, c'est concilier respect de l'environnement et technologies numériques de pointe pour un internet durable.",
        },
        // Performance hints
        { name: 'theme-color', content: '#ffffff' },
        // Open Graph
        {
          property: 'og:title',
          content: 'BeAbot : éco-conception web',
        },
        {
          property: 'og:description',
          content:
            "L'éco-conception web, c'est concilier respect de l'environnement et technologies numériques de pointe pour un internet durable.",
        },
        {
          property: 'og:image',
          content: `${siteUrl}/beabot.png`,
        },
        // Twitter Card
        {
          name: 'twitter:title',
          content: 'BeAbot : éco-conception web',
        },
        {
          name: 'twitter:description',
          content:
            "L'éco-conception web, c'est concilier respect de l'environnement et technologies numériques de pointe pour un internet durable.",
        },
        {
          name: 'twitter:image',
          content: `${siteUrl}/beabot.png`,
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
      ],
    },
    // Désactive la transition globale pour éviter CSS/JS supplémentaires
    pageTransition: false,
  },

  // Global CSS
  css: [
    // System font stack only (retire Montserrat webfonts)
    '~/assets/css/main.scss',
  ],

  routeRules: {
    // Static editorial pages do not need Nuxt hydration on first load.
    '/': { prerender: true, noScripts: true },
    '/mentions-legales/': { prerender: true, noScripts: true },
  },

  // Vite configuration for SCSS
  vite: {
    server: {
      // Avoid HMR port conflicts in dev (fixes "Port 24678 is already in use")
      hmr: {
        port: 24679,
        clientPort: 24679,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '',
          api: 'modern-compiler',
        },
      },
    },
    build: {
      cssCodeSplit: true, // Keep page CSS scoped to avoid shipping all styles on static pages
      minify: 'terser', // Use terser for better minification
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs in production
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Group Vue core together
            if (
              id.includes('node_modules/vue') ||
              id.includes('node_modules/@vue')
            ) {
              return 'vendor-vue'
            }
            // Group Nuxt core modules
            if (
              id.includes('node_modules/@nuxt') ||
              id.includes('node_modules/nuxt')
            ) {
              return 'vendor-nuxt'
            }
            // Group content/markdown related
            if (
              id.includes('shiki') ||
              id.includes('markdown') ||
              id.includes('@nuxt/content')
            ) {
              return 'vendor-content'
            }
            // Group all other node_modules into vendor
            if (id.includes('node_modules')) {
              return 'vendor-libs'
            }
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
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/sitemap'],

  // Content module configuration
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        toc: {
          depth: 3,
          searchDepth: 3,
        },
        highlight: {
          // Use VS Code Dark+ theme for better code readability
          theme: 'dark-plus',
          // Load common languages for blog articles
          langs: [
            'javascript',
            'js',
            'typescript',
            'ts',
            'css',
            'scss',
            'html',
            'vue',
            'bash',
            'shell',
            'json',
            'yaml',
            'markdown',
            'md',
          ],
        },
        // Enable code block meta (for filename, line numbers, etc.)
        remarkPlugins: {},
        rehypePlugins: {},
      },
    },
  },

  // Image module configuration
  image: {
    // Default image optimization
    quality: 75, // Reduced from 80 for smaller file sizes
    format: ['webp'], // WebP only for better compression (AVIF has compatibility issues)
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
          quality: 75,
        },
      },
      portfolio: {
        modifiers: {
          format: 'webp',
          fit: 'cover',
          quality: 70, // Lower quality for portfolio thumbnails
        },
      },
    },
  },

  // Sitemap configuration
  sitemap: {
    hostname: siteUrl,
    gzip: true,
    exclude: ['/404/', '/404'],
    urls: getArticleSitemapRoutes,
  },

  // Fonts configuration - removed for now
  // Will use local @fontsource instead

  // Nitro configuration for RSS feed
  nitro: {
    prerender: {
      routes: ['/rss.xml', '/feed.json', '/sitemap.xml', '/robots.txt'],
      // Ignore 404 errors on API content query routes (cache/surround queries)
      failOnError: false,
    },
    hooks: {
      'sitemap:resolved': (ctx) => {
        ctx.urls = ctx.urls.map((entry) => ({
          ...entry,
          loc: normalizeSitemapLoc(entry.loc),
        }))
      },
      'sitemap:output': (ctx) => {
        ctx.sitemap = ctx.sitemap.replace(
          /<loc>([^<]+)<\/loc>/g,
          (_match, loc) => `<loc>${normalizeSitemapLoc(loc)}</loc>`,
        )
      },
    },
    compressPublicAssets: true, // Enable Brotli/Gzip compression for better performance
    minify: true, // Minify HTML output
  },

  // Development configuration
  devtools: { enabled: true },

  // Experimental features
  experimental: {
    // payloadExtraction: true, // Disabled - causes #app-manifest errors in dev mode
    // componentIslands: true, // Disabled - causes #app-manifest errors in current version
    defaults: {
      nuxtLink: {
        prefetch: false,
      },
    },
  },
})
