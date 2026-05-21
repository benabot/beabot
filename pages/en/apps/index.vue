<template>
  <main class="apps-index">
    <div class="apps-shell">
      <AppBreadcrumb :items="breadcrumbItems" aria-label="Breadcrumb" />

      <section class="apps-hero">
        <div class="apps-hero__left">
          <p class="apps-hero__eyebrow">Apps</p>
          <h1>
            DuoSpend, FocusOne, and Meeting Mode —
            <span class="apps-hero__platform">iOS</span> and
            <span class="apps-hero__platform">macOS</span>
          </h1>
        </div>
        <div class="apps-hero__intro">
          <p
            v-for="(line, i) in appsIndexEnContent.intro"
            :key="i"
            class="apps-hero__intro-p"
          >
            {{ line }}
          </p>
        </div>
      </section>

      <section class="apps-section" aria-labelledby="apps-featured-title">
        <div class="apps-section__heading">
          <h2 id="apps-featured-title" class="apps-section__title">Featured</h2>
          <p>Two apps in pre-release.</p>
        </div>

        <div class="apps-featured-grid">
          <AppCard
            v-for="app in featuredApps"
            :key="app.slug"
            :app="app"
            variant="featured"
            locale="en"
            class="apps-featured-grid__item"
          />
        </div>
      </section>

      <section
        class="apps-section apps-section--secondary"
        aria-labelledby="apps-other-title"
      >
        <div class="apps-section__heading">
          <h2 id="apps-other-title" class="apps-section__title">Other apps</h2>
        </div>

        <div class="apps-secondary-grid">
          <AppCard
            v-for="app in otherApps"
            :key="app.slug"
            :app="app"
            variant="compact"
            locale="en"
            class="apps-secondary-grid__item"
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
  buildCollectionPageSchema,
  buildBreadcrumbSchema,
  buildItemListSchema,
} from '~/data/apps'
import {
  appsIndexEnContent,
  appsIndexEnEntries,
} from '~/data/apps-en'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/en/apps')
const ogImage = absoluteUrl(config.public.siteUrl, appsIndexEnContent.seo.image)
const featuredApps = appsIndexEnEntries.filter((app) => app.featured)
const otherApps = appsIndexEnEntries.filter((app) => !app.featured)

const breadcrumbItems = [{ label: 'Home', to: '/' }, { label: 'Apps' }]

const breadcrumbSchema = buildBreadcrumbSchema(config.public.siteUrl, [
  { name: 'Home', path: '/' },
  { name: 'Apps', path: '/en/apps/' },
])

const itemListSchema = buildItemListSchema(
  config.public.siteUrl,
  appsIndexEnEntries,
)
const collectionSchema = buildCollectionPageSchema({
  siteUrl: config.public.siteUrl,
  pageUrl,
  name: appsIndexEnContent.title,
  description: appsIndexEnContent.seo.description,
})

useSeoMeta({
  title: appsIndexEnContent.seo.title,
  description: appsIndexEnContent.seo.description,
  ogTitle: appsIndexEnContent.seo.title,
  ogDescription: appsIndexEnContent.seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: appsIndexEnContent.seo.title,
  twitterDescription: appsIndexEnContent.seo.description,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'fr',
      href: canonicalUrl(config.public.siteUrl, '/apps'),
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: pageUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: pageUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(collectionSchema),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(itemListSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
@use '~/assets/css/vars/_colors.scss' as *;
@use '~/assets/css/vars/_typo.scss' as *;
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
  padding-bottom: clamp(1.5rem, 3vw, 2.5rem);
}

.apps-hero__left {
  min-width: 0;
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
  color: #05d94f;
}

.apps-hero__intro {
  max-width: 38rem;
  margin: 1.5rem 0 0;
  color: $gris2;

  @media (min-width: $breakpoint-tablet) {
    margin-left: 42%;
  }
}

.apps-hero__intro-p {
  margin: 0 0 1rem;
  line-height: 1.75;

  &:first-child {
    font-size: 1.05rem;
    font-weight: 500;
    color: $gris1;
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.apps-hero__meta {
  margin: 0.7rem 0 0;
  color: $gris3;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.apps-section {
  display: grid;
  gap: clamp(1.1rem, 2.6vw, 1.6rem);
}

.apps-section + .apps-section {
  margin-top: clamp(2.25rem, 5vw, 3.5rem);
}

.apps-section__heading {
  display: grid;
  gap: 0.35rem;
}

.apps-section__title {
  margin: 0;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 700;
  color: $gris3;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.apps-section__heading p {
  margin: 0;
  color: $gris2;
  line-height: 1.55;
}

.apps-featured-grid,
.apps-secondary-grid {
  display: grid;
  gap: clamp(1.35rem, 2.8vw, 2.1rem);
}

.apps-featured-grid {
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
  }
}

.apps-secondary-grid {
  gap: clamp(1rem, 2vw, 1.4rem);

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
