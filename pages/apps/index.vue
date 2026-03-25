<template>
  <main class="apps-index">
    <div class="apps-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="apps-hero">
        <h1>{{ appsIndexContent.title }}</h1>
        <p>{{ appsIndexContent.intro }}</p>
      </section>

      <section class="apps-section" aria-labelledby="apps-list-title">
        <header class="apps-section__header">
          <h2 id="apps-list-title">Liste</h2>
        </header>

        <div class="apps-grid">
          <AppCard v-for="app in appsIndexEntries" :key="app.slug" :app="app" />
        </div>
      </section>

      <section class="apps-closing" aria-labelledby="apps-closing-title">
        <h2 id="apps-closing-title">Suite</h2>
        <p>{{ appsIndexContent.closingText }}</p>
        <div class="apps-closing__links">
          <AppLink
            v-for="link in appsIndexContent.links"
            :key="link.to"
            :to="link.to"
            class="apps-closing__link"
          >
            {{ link.label }}
          </AppLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'
import AppCard from '~/components/apps/AppCard.vue'

import {
  appsIndexContent,
  appsIndexEntries,
  buildBreadcrumbSchema,
} from '~/data/apps'
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps')

const breadcrumbItems = [{ label: 'Accueil', to: '/' }, { label: 'Apps' }]

const breadcrumbSchema = buildBreadcrumbSchema(config.public.siteUrl, [
  { name: 'Accueil', path: '/' },
  { name: 'Apps', path: '/apps/' },
])

useSeoMeta({
  title: appsIndexContent.seo.title,
  description: appsIndexContent.seo.description,
  ogTitle: appsIndexContent.seo.title,
  ogDescription: appsIndexContent.seo.description,
  ogType: 'website',
  ogUrl: pageUrl,
  twitterTitle: appsIndexContent.seo.title,
  twitterDescription: appsIndexContent.seo.description,
  twitterCard: 'summary',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
.apps-index {
  padding: clamp(4rem, 8vw, 6rem) 5% 5rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.apps-shell {
  width: min(100%, 72rem);
  margin: 0 auto;
}

.apps-hero,
.apps-section,
.apps-closing {
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.92);
}

.apps-hero h1,
.apps-section h2,
.apps-closing h2 {
  margin: 0;
  color: $gris1;
}

.apps-hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 0.95;
}

.apps-hero p,
.apps-closing p {
  margin: 0.9rem 0 0;
  color: $gris2;
  line-height: 1.65;
}

.apps-section,
.apps-closing {
  margin-top: 1.25rem;
}

.apps-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.apps-closing__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.apps-closing__link {
  color: $bleu2;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.apps-closing__link:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 3px;
  border-radius: 0.35rem;
}
</style>
