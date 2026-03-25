<template>
  <main class="app-page">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="app-hero">
        <p class="app-meta">{{ duoSpendContent.platform }}</p>
        <h1>{{ duoSpendContent.name }}</h1>
        <p class="app-intro">{{ duoSpendContent.intro }}</p>
        <p class="app-summary">{{ duoSpendContent.summary }}</p>
      </section>

      <section class="app-panel" aria-labelledby="duo-overview-title">
        <h2 id="duo-overview-title">Aperçu</h2>
        <p v-for="paragraph in duoSpendContent.overview" :key="paragraph">
          {{ paragraph }}
        </p>
      </section>

      <section class="app-panel" aria-labelledby="duo-media-title">
        <h2 id="duo-media-title">Capture</h2>
        <div class="app-media">
          <img
            :src="duoSpendContent.preview.src"
            :alt="duoSpendContent.preview.alt"
            width="900"
            height="620"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section class="app-panel" aria-labelledby="duo-details-title">
        <h2 id="duo-details-title">Détails</h2>
        <ul class="app-list">
          <li v-for="item in duoSpendContent.details" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="app-panel" aria-labelledby="duo-faq-title">
        <h2 id="duo-faq-title">FAQ</h2>
        <AppFaqList :items="duoSpendContent.faq" />
      </section>

      <section class="app-panel" aria-labelledby="duo-legal-title">
        <h2 id="duo-legal-title">Mentions légales</h2>
        <AppLegalTabs
          base-id="duo-spend-legal"
          :content="duoSpendContent.legal"
          label="Mentions légales"
        />
      </section>

      <section class="app-panel app-panel--cta" aria-labelledby="duo-cta-title">
        <h2 id="duo-cta-title">{{ duoSpendContent.cta.title }}</h2>
        <p>{{ duoSpendContent.cta.description }}</p>
        <AppReleaseInterestForm :app-name="duoSpendContent.name" />
        <AppLink
          :to="duoSpendContent.cta.secondaryTo"
          class="app-secondary-link"
        >
          {{ duoSpendContent.cta.secondaryLabel }}
        </AppLink>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'
import AppFaqList from '~/components/apps/AppFaqList.vue'
import AppLegalTabs from '~/components/apps/AppLegalTabs.vue'
import AppReleaseInterestForm from '~/components/apps/AppReleaseInterestForm.vue'

import { buildBreadcrumbSchema, duoSpendContent } from '~/data/apps'
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps/duo-spend')

const breadcrumbItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Apps', to: '/apps/' },
  { label: 'DuoSpend' },
]

const breadcrumbSchema = buildBreadcrumbSchema(config.public.siteUrl, [
  { name: 'Accueil', path: '/' },
  { name: 'Apps', path: '/apps/' },
  { name: 'DuoSpend', path: '/apps/duo-spend/' },
])

useSeoMeta({
  title: duoSpendContent.seo.title,
  description: duoSpendContent.seo.description,
  ogTitle: duoSpendContent.seo.title,
  ogDescription: duoSpendContent.seo.description,
  ogType: 'website',
  ogUrl: pageUrl,
  twitterTitle: duoSpendContent.seo.title,
  twitterDescription: duoSpendContent.seo.description,
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
.app-page {
  padding: clamp(4rem, 8vw, 6rem) 5% 5rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.app-shell {
  width: min(100%, 52rem);
  margin: 0 auto;
}

.app-hero,
.app-panel {
  padding: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.92);
}

.app-panel {
  margin-top: 1rem;
}

.app-meta {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $gris3;
}

.app-hero h1,
.app-panel h2 {
  margin: 0;
  color: $gris1;
}

.app-hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 0.95;
}

.app-intro,
.app-summary,
.app-panel p {
  margin: 0.85rem 0 0;
  color: $gris2;
  line-height: 1.65;
}

.app-summary {
  color: $gris3;
}

.app-media {
  margin-top: 1rem;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background: rgba(248, 250, 252, 0.96);
}

.app-media img {
  display: block;
  width: 100%;
  height: auto;
}

.app-list {
  margin: 1rem 0 0;
  padding-left: 1.2rem;
  color: $gris2;
}

.app-list li + li {
  margin-top: 0.55rem;
}

.app-panel--cta {
  display: grid;
  gap: 1rem;
}

.app-panel--cta p {
  margin-top: 0;
}

.app-secondary-link {
  width: fit-content;
  color: $bleu2;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.app-secondary-link:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 3px;
  border-radius: 0.35rem;
}
</style>
