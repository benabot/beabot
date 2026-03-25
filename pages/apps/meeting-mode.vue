<template>
  <main class="app-page">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="app-hero">
        <div class="app-hero__content">
          <p class="app-meta">{{ meetingModeContent.platform }}</p>
          <h1>{{ meetingModeContent.name }}</h1>
          <p class="app-intro">{{ meetingModeContent.intro }}</p>
          <p class="app-summary">{{ meetingModeContent.summary }}</p>
        </div>
        <div class="app-hero__visual">
          <div class="app-frame app-frame--placeholder">
            <div class="app-frame__bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              class="app-frame__screen app-frame__screen--placeholder"
              role="img"
              :aria-label="meetingModeContent.preview.alt"
            >
              <strong>{{ meetingModeContent.name }}</strong>
              <span>{{ meetingModeContent.preview.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="app-section" aria-labelledby="meeting-overview-title">
        <h2 id="meeting-overview-title">Aperçu</h2>
        <p v-for="paragraph in meetingModeContent.overview" :key="paragraph">
          {{ paragraph }}
        </p>
      </section>

      <section class="app-panel" aria-labelledby="meeting-media-title">
        <h2 id="meeting-media-title">Capture</h2>
        <div class="app-media app-media--placeholder">
          <div
            class="app-media__shell"
            role="img"
            :aria-label="meetingModeContent.preview.alt"
          >
            <div class="app-media__bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="app-media__placeholder">
              <strong>{{ meetingModeContent.name }}</strong>
              <span>{{ meetingModeContent.preview.label }}</span>
            </div>
          </div>
        </div>
      </section>

      <section class="app-section" aria-labelledby="meeting-details-title">
        <h2 id="meeting-details-title">Détails</h2>
        <ul class="app-list">
          <li v-for="item in meetingModeContent.details" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section class="app-section" aria-labelledby="meeting-faq-title">
        <h2 id="meeting-faq-title">FAQ</h2>
        <AppFaqList :items="meetingModeContent.faq" />
      </section>

      <section class="app-section" aria-labelledby="meeting-legal-title">
        <h2 id="meeting-legal-title">Mentions légales</h2>
        <AppLegalTabs
          base-id="meeting-mode-legal"
          :content="meetingModeContent.legal"
          label="Mentions légales"
        />
      </section>

      <section
        class="app-panel app-panel--cta"
        aria-labelledby="meeting-cta-title"
      >
        <h2 id="meeting-cta-title">{{ meetingModeContent.cta.title }}</h2>
        <p>{{ meetingModeContent.cta.description }}</p>
        <AppReleaseInterestForm :app-name="meetingModeContent.name" />
        <AppLink
          :to="meetingModeContent.cta.secondaryTo"
          class="app-secondary-link"
        >
          {{ meetingModeContent.cta.secondaryLabel }}
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

import { buildBreadcrumbSchema, meetingModeContent } from '~/data/apps'
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps/meeting-mode')

const breadcrumbItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Apps', to: '/apps/' },
  { label: 'Meeting Mode' },
]

const breadcrumbSchema = buildBreadcrumbSchema(config.public.siteUrl, [
  { name: 'Accueil', path: '/' },
  { name: 'Apps', path: '/apps/' },
  { name: 'Meeting Mode', path: '/apps/meeting-mode/' },
])

useSeoMeta({
  title: meetingModeContent.seo.title,
  description: meetingModeContent.seo.description,
  ogTitle: meetingModeContent.seo.title,
  ogDescription: meetingModeContent.seo.description,
  ogType: 'website',
  ogUrl: pageUrl,
  twitterTitle: meetingModeContent.seo.title,
  twitterDescription: meetingModeContent.seo.description,
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

.app-frame__screen {
  border-radius: 1.2rem;
  min-height: 20rem;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 0.45rem;
  padding: 1.5rem;
}

.app-frame__screen--placeholder {
  background: linear-gradient(
    145deg,
    rgba(4, 57, 217, 0.09),
    rgba(4, 217, 79, 0.09)
  );
  color: $gris1;
}

.app-frame__screen--placeholder strong {
  font-size: 1.15rem;
}

.app-frame__screen--placeholder span {
  color: $gris3;
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
  min-height: 18rem;
  padding: 1rem;
}

.app-media__placeholder {
  min-height: 14rem;
  margin-top: 0.9rem;
  display: grid;
  place-items: center;
  gap: 0.4rem;
  text-align: center;
  border-radius: 1.15rem;
  background: linear-gradient(
    145deg,
    rgba(4, 57, 217, 0.05),
    rgba(4, 217, 79, 0.08)
  );
  color: $gris1;
}

.app-media__placeholder strong {
  font-size: 1.15rem;
}

.app-media__placeholder span {
  color: $gris3;
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
