<template>
  <main class="apps-index">
    <div class="apps-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="apps-hero">
        <p class="apps-hero__eyebrow">Apps</p>
        <h1>
          Applications <span class="apps-hero__platform">iOS</span> &
          <span class="apps-hero__platform">macOS</span>
        </h1>
        <p class="apps-hero__intro">{{ appsIndexContent.intro }}</p>
        <p class="apps-hero__meta">{{ appsIndexContent.meta }}</p>
      </section>

      <section class="apps-section" aria-labelledby="apps-list-title">
        <h2 id="apps-list-title" class="sr-only">Applications</h2>
        <div class="apps-grid">
          <AppCard
            v-for="app in appsIndexEntries"
            :key="app.slug"
            :app="app"
            :variant="app.featured ? 'featured' : 'compact'"
            class="apps-grid__item"
            :class="{
              'apps-grid__item--featured': app.featured,
              'apps-grid__item--compact': !app.featured,
            }"
          />
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
  buildItemListSchema,
} from '~/data/apps'
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps')

const breadcrumbItems = [{ label: 'Accueil', to: '/' }, { label: 'Apps' }]

const breadcrumbSchema = buildBreadcrumbSchema(config.public.siteUrl, [
  { name: 'Accueil', path: '/' },
  { name: 'Apps', path: '/apps/' },
])

const itemListSchema = buildItemListSchema(config.public.siteUrl, appsIndexEntries)

useSeoMeta({
  title: appsIndexContent.seo.title,
  description: appsIndexContent.seo.description,
  ogTitle: appsIndexContent.seo.title,
  ogDescription:
    'DuoSpend pour iOS, Meeting Mode pour macOS. Apps Swift natives, sans compte, sans publicité.',
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
    {
      type: 'application/ld+json',
      children: JSON.stringify(itemListSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
.apps-index {
  padding: clamp(2rem, 5vw, 3.5rem) 5% 5rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.apps-shell {
  width: min(100%, 78rem);
  margin: 0 auto;
}

.apps-hero {
  max-width: 44rem;
  padding-bottom: clamp(2rem, 4.5vw, 3.4rem);
}

.apps-hero__eyebrow {
  display: inline-flex;
  margin: 0 0 1rem;
  padding: 0.32rem 0.75rem;
  border-radius: 999px;
  background: rgba(4, 217, 79, 0.08);
  color: $vert;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.apps-hero h1 {
  margin: 0;
  color: $gris1;
}

.apps-hero h1 {
  font-size: clamp(3.2rem, 6vw, 5.25rem);
  line-height: 0.94;
  letter-spacing: -0.055em;
}

.apps-hero__platform {
  color: $gris1;
}

.apps-hero__intro {
  margin: 0.9rem 0 0;
  color: $gris2;
  line-height: 1.6;
  max-width: 31rem;
}

.apps-hero__meta {
  margin: 0.7rem 0 0;
  color: $gris3;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.apps-grid {
  display: grid;
  gap: clamp(1.35rem, 2.8vw, 2.1rem);
  margin-top: 0.75rem;

  @media (min-width: 900px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    align-items: start;
  }
}

.apps-grid__item {
  @media (min-width: 900px) {
    grid-column: span 12;
  }
}

.apps-grid__item--featured {
  @media (min-width: 900px) {
    grid-column: span 7;
  }
}

.apps-grid__item--compact {
  @media (min-width: 900px) {
    grid-column: span 5;
    margin-top: clamp(2rem, 7vw, 6rem);
  }
}
</style>
