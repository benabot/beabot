<template>
  <main class="app-page">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="app-hero">
        <div class="app-hero__content">
          <p class="app-meta">{{ duoSpendContent.platform }}</p>
          <h1>{{ duoSpendContent.name }}</h1>
          <p class="app-intro">{{ duoSpendContent.intro }}</p>
          <p class="app-summary">{{ duoSpendContent.summary }}</p>
        </div>
        <div class="app-hero__visual">
          <div class="app-frame">
            <div class="app-frame__bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img
              :src="duoSpendContent.preview.src"
              :alt="duoSpendContent.preview.alt"
              width="900"
              height="620"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="app-section" aria-labelledby="duo-overview-title">
        <h2 id="duo-overview-title">Aperçu</h2>
        <p v-for="paragraph in duoSpendContent.overview" :key="paragraph">
          {{ paragraph }}
        </p>
      </section>

      <section class="app-panel" aria-labelledby="duo-media-title">
        <h2 id="duo-media-title">Capture</h2>
        <div class="app-media">
          <div class="app-media__shell">
            <div class="app-media__bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img
              :src="duoSpendContent.preview.src"
              :alt="duoSpendContent.preview.alt"
              width="900"
              height="620"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="app-section" aria-labelledby="duo-details-title">
        <h2 id="duo-details-title">Détails</h2>
        <ul class="app-list">
          <li v-for="item in duoSpendContent.details" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="app-section" aria-labelledby="duo-faq-title">
        <h2 id="duo-faq-title">FAQ</h2>
        <AppFaqList :items="duoSpendContent.faq" />
      </section>

      <section class="app-section" aria-labelledby="duo-legal-title">
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
  padding: clamp(2.5rem, 6vw, 4rem) 5% 5rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.app-shell {
  width: min(100%, 74rem);
  margin: 0 auto;
}

.app-hero {
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding-bottom: clamp(2rem, 5vw, 3.5rem);

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: clamp(1.5rem, 4vw, 3rem);
  }
}

.app-hero__content {
  max-width: 44rem;
}

.app-hero__visual {
  display: grid;
  align-items: center;
}

.app-frame,
.app-panel,
.app-media {
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.06);
}

.app-frame {
  padding: 1rem;
}

.app-frame__bar,
.app-media__bar {
  display: flex;
  align-items: center;
  gap: 0.38rem;
}

.app-frame__bar {
  margin-bottom: 0.75rem;
}

.app-frame__bar span,
.app-media__bar span {
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.2);
}

.app-frame__bar span:first-child,
.app-media__bar span:first-child {
  background: rgba(239, 68, 68, 0.55);
}

.app-frame__bar span:nth-child(2),
.app-media__bar span:nth-child(2) {
  background: rgba(245, 158, 11, 0.55);
}

.app-frame__bar span:nth-child(3),
.app-media__bar span:nth-child(3) {
  background: rgba(34, 197, 94, 0.55);
}

.app-frame img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 1.2rem;
}

.app-panel {
  margin-top: 1rem;
  padding: 1.35rem;
}

.app-section {
  display: grid;
  gap: 0.9rem;
  margin-top: 1rem;
}

.app-meta {
  margin: 0 0 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $vert;
}

.app-hero h1,
.app-panel h2,
.app-section h2 {
  margin: 0;
  color: $gris1;
}

.app-hero h1 {
  font-size: clamp(2.6rem, 6vw, 4.5rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.app-intro,
.app-summary,
.app-panel p,
.app-section p {
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
  background: linear-gradient(
    145deg,
    rgba(243, 244, 246, 0.95),
    rgba(255, 255, 255, 0.95)
  );
}

.app-media__shell {
  padding: 1rem;
}

.app-media img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 1.2rem;
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
  background: linear-gradient(
    145deg,
    rgba(4, 217, 79, 0.08),
    rgba(255, 255, 255, 0.96)
  );
}

.app-section .app-list {
  margin-top: 0.2rem;
}

.app-panel--cta p {
  margin-top: 0;
}

.app-secondary-link {
  width: fit-content;
  color: $vert;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.app-secondary-link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
  border-radius: 0.35rem;
}
</style>
