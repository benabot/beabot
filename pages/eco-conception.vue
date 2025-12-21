<template>
  <main>
    <h1 class="text-black h2 text-black">Éco-conception web</h1>
    <NuxtPage />
  </main>
</template>

<script setup>
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const hubCanonicalUrl = canonicalUrl(config.public.siteUrl, '/eco-conception')

useHead({
  title: 'Éco-conception web : sobriété, webdesign et performance',
  meta: [
    {
      hid: 'description',
      name: 'description',
     content: "Articles sur l’éco-conception web : sobriété numérique, performance, webdesign, typographie et WordPress. Méthodes et retours d’expérience.",
    },
     // Open Graph
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Éco-conception web : sobriété, webdesign et performance',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Articles sur l’éco-conception web : sobriété numérique, webdesign, typographie, performance et WordPress.',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: hubCanonicalUrl,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `${config.public.siteUrl}/beabot.png`,
    },

    // Twitter
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Éco-conception web : sobriété, webdesign et performance',
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content:
        'Articles sur l’éco-conception web : sobriété numérique, webdesign, typographie, performance et WordPress.',
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: `${config.public.siteUrl}/beabot.png`,
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: hubCanonicalUrl,
    },
  ],
})
</script>
<style lang="scss" scoped>
h1 {
  color: $vert;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0.33rem !important;
}
</style>
