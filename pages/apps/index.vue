<template>
  <main class="apps-index">
    <div class="apps-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="apps-hero">
        <p class="apps-hero__eyebrow">Apps</p>
        <h1>{{ appsIndexContent.title }}</h1>
        <p>{{ appsIndexContent.intro }}</p>
      </section>

      <section class="apps-section" aria-labelledby="apps-list-title">
        <h2 id="apps-list-title" class="sr-only">Applications</h2>
        <div class="apps-grid">
          <AppCard
            v-for="(app, index) in appsIndexEntries"
            :key="app.slug"
            :app="app"
            :variant="index % 2 === 0 ? 'featured' : 'compact'"
            class="apps-grid__item"
            :class="{
              'apps-grid__item--featured': index % 2 === 0,
              'apps-grid__item--compact': index % 2 === 1,
            }"
          />
        </div>
      </section>

      <section class="apps-closing" aria-labelledby="apps-closing-title">
        <h2 id="apps-closing-title">Voir aussi</h2>
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
  padding: clamp(2rem, 5vw, 3.5rem) 5% 5rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.apps-shell {
  width: min(100%, 76rem);
  margin: 0 auto;
}

.apps-hero {
  max-width: 48rem;
  padding-bottom: clamp(2.25rem, 5vw, 3.4rem);
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

.apps-hero h1,
.apps-closing h2 {
  margin: 0;
  color: $gris1;
}

.apps-hero h1 {
  font-size: clamp(3.1rem, 6.4vw, 5.4rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
}

.apps-hero p,
.apps-closing p {
  margin: 0.9rem 0 0;
  color: $gris2;
  line-height: 1.65;
  max-width: 34rem;
}

.apps-closing {
  display: grid;
  gap: 1rem;
  margin-top: clamp(2rem, 5vw, 3.5rem);
  padding: clamp(1.3rem, 3vw, 1.75rem);
  border-radius: 1.5rem;
  background: rgba(243, 244, 246, 0.82);

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: end;
  }
}

.apps-grid {
  display: grid;
  gap: clamp(1rem, 2vw, 1.5rem);
  margin-top: 0.5rem;

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
    margin-top: clamp(1rem, 5vw, 4.5rem);
  }
}

.apps-closing__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 0.25rem;

  @media (min-width: 900px) {
    justify-content: flex-end;
    margin-top: 0;
  }
}

.apps-closing__link {
  display: inline-flex;
  align-items: center;
  min-height: 2.6rem;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background: rgba(243, 244, 246, 0.9);
  color: $gris2;
  text-decoration: none;
}

.apps-closing__link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
  border-radius: 0.35rem;
}
</style>
