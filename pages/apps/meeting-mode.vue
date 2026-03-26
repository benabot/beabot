<template>
  <main class="app-page">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="app-hero">
        <div class="app-hero__content">
          <p class="app-meta">{{ meetingModeContent.stage }}</p>
          <h1>{{ meetingModeContent.name }}</h1>
          <p class="app-intro">{{ meetingModeContent.intro }}</p>
          <p class="app-summary">{{ meetingModeContent.summary }}</p>

          <div class="app-actions">
            <AppLink to="#release-form" class="app-primary-action">
              Être informé
            </AppLink>
            <AppLink to="/apps/" class="app-secondary-action">
              Retour aux apps
            </AppLink>
          </div>
        </div>

        <div class="app-hero__visual">
          <div class="app-mockup app-mockup--dark">
            <div class="app-mockup__bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              class="app-mockup__screen app-mockup__screen--meeting"
              role="img"
              :aria-label="meetingModeContent.preview.alt"
            >
              <div class="monitor" aria-hidden="true">
                <div class="monitor__frame">
                  <div class="monitor__screen">
                    <span>{{ meetingModeContent.name }}</span>
                  </div>
                </div>
                <div class="monitor__stand"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="app-surface" aria-labelledby="meeting-overview-title">
        <div class="app-surface__copy">
          <h2 id="meeting-overview-title">Ce que fait Meeting Mode</h2>
          <p class="app-surface__lead">Avec un preset, Meeting Mode peut :</p>
          <ul class="app-capabilities">
            <li v-for="item in meetingModeContent.capabilities" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="app-surface__status">
          <p class="app-surface__eyebrow">Pour qui</p>
          <ul class="app-surface__cases">
            <li v-for="item in meetingModeContent.useCases" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>

      <section
        v-if="meetingModeContent.showVisual"
        class="app-section"
        aria-labelledby="meeting-capture-title"
      >
        <div class="section-heading">
          <h2 id="meeting-capture-title">Capture provisoire</h2>
          <p>En attente de la capture finale.</p>
        </div>

        <div class="app-capture app-capture--meeting">
          <div class="app-capture__bar" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            class="app-capture__screen app-capture__screen--meeting"
            role="img"
            :aria-label="meetingModeContent.preview.alt"
          >
            <div class="monitor monitor--large" aria-hidden="true">
              <div class="monitor__frame">
                <div class="monitor__screen">
                  <span>{{ meetingModeContent.preview.label }}</span>
                </div>
              </div>
              <div class="monitor__stand"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="app-section" aria-labelledby="meeting-details-title">
        <div class="section-heading">
          <h2 id="meeting-details-title">En pratique</h2>
          <p>Quatre repères pour comprendre le flux de l’app.</p>
        </div>

        <div class="detail-grid">
          <article
            v-for="point in meetingModeContent.detailPoints"
            :key="point.label"
            class="detail-card"
          >
            <p class="detail-card__label">{{ point.label }}</p>
            <p class="detail-card__value">{{ point.value }}</p>
          </article>
        </div>
      </section>

      <section class="app-section app-section--split" aria-labelledby="meeting-scope-title">
        <div class="app-scope">
          <div class="section-heading">
            <h2 id="meeting-scope-title">Ce que l’app ne prétend pas faire</h2>
            <p>Ce choix est volontaire. Il garde l’app plus fiable, plus rapide à utiliser et plus honnête sur les limites réelles de macOS.</p>
          </div>

          <ul class="limit-list">
            <li v-for="item in meetingModeContent.limits" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>

        <aside class="app-principles" aria-labelledby="meeting-principles-title">
          <p class="app-principles__eyebrow">Une approche pragmatique</p>
          <h3 id="meeting-principles-title">Ce que l’app privilégie</h3>
          <ol class="app-principles__list">
            <li v-for="item in meetingModeContent.principles" :key="item">
              {{ item }}
            </li>
          </ol>
        </aside>
      </section>

      <section class="app-section" aria-labelledby="meeting-faq-title">
        <div class="section-heading">
          <h2 id="meeting-faq-title">FAQ</h2>
          <p>Questions fréquentes sur le fonctionnement.</p>
        </div>

        <AppFaqList :items="meetingModeContent.faq" />
      </section>

      <section class="app-section" aria-labelledby="meeting-legal-title">
        <div class="section-heading">
          <h2 id="meeting-legal-title">Mentions légales</h2>
          <p>Politique de confidentialité provisoire en français et en anglais.</p>
        </div>

        <AppLegalTabs
          base-id="meeting-mode-legal"
          :content="meetingModeContent.legal"
          label="Mentions légales"
        />
      </section>

      <section class="app-cta" id="release-form" aria-labelledby="meeting-cta-title">
        <div class="app-cta__heading">
          <h2 id="meeting-cta-title">{{ meetingModeContent.cta.title }}</h2>
          <p>{{ meetingModeContent.cta.description }}</p>
        </div>

        <AppReleaseInterestForm :app-name="meetingModeContent.name" />

        <AppLink :to="meetingModeContent.cta.secondaryTo" class="app-cta__link">
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

import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  meetingModeContent,
} from '~/data/apps'
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

const faqSchema = buildFaqSchema(meetingModeContent.faq)

useSeoMeta({
  title: meetingModeContent.seo.title,
  description: meetingModeContent.seo.description,
  ogTitle: 'Meeting Mode — Préparez votre Mac avant chaque réunion',
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
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
.app-page {
  padding: clamp(2rem, 5vw, 3.5rem) 5% 5rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.app-shell {
  width: min(100%, 76rem);
  margin: 0 auto;
}

.app-hero {
  display: grid;
  gap: 1.5rem;
  align-items: center;
  padding-bottom: clamp(2.25rem, 5vw, 3.5rem);

  @media (min-width: 920px) {
    grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
    gap: clamp(2rem, 4vw, 3.75rem);
  }
}

.app-hero__content {
  max-width: 44rem;
}

.app-hero__visual {
  display: grid;
  align-items: center;
}

.app-meta {
  margin: 0 0 0.8rem;
  color: $vert;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.app-hero h1,
.section-heading h2 {
  margin: 0;
  color: $gris1;
}

.section-heading h2,
.app-surface h2,
.app-cta__heading h2 {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.app-hero h1 {
  font-size: clamp(3.1rem, 6.8vw, 5.8rem);
  line-height: 0.93;
  letter-spacing: -0.055em;
}

.app-intro,
.app-summary {
  margin: 0.9rem 0 0;
  max-width: 36rem;
  color: $gris2;
  line-height: 1.65;
}

.app-summary {
  color: $gris3;
}

.app-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.35rem;
}

.app-primary-action,
.app-secondary-action,
.app-cta__link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.9rem;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease,
    background-color 0.14s ease,
    color 0.14s ease;
}

.app-primary-action {
  background: $vert;
  color: white;
}

.app-secondary-action,
.app-cta__link {
  background: rgba(243, 244, 246, 0.9);
  color: $gris2;
}

.app-cta__link:hover {
  transform: translateY(-1px);
  background: rgba(255, 255, 255, 0.98);
  color: $gris1;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
}

.app-primary-action:focus-visible,
.app-secondary-action:focus-visible,
.app-cta__link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
}

.app-mockup {
  padding: 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.1);
}

.app-mockup--dark {
  background: linear-gradient(180deg, #111827, #0f172a);
}

.app-mockup__bar,
.app-capture__bar {
  display: flex;
  align-items: center;
  gap: 0.38rem;
  margin-bottom: 0.8rem;
}

.app-mockup__bar span,
.app-capture__bar span {
  width: 0.56rem;
  height: 0.56rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.22);
}

.app-mockup__bar span:first-child,
.app-capture__bar span:first-child {
  background: rgba(239, 68, 68, 0.62);
}

.app-mockup__bar span:nth-child(2),
.app-capture__bar span:nth-child(2) {
  background: rgba(245, 158, 11, 0.58);
}

.app-mockup__bar span:nth-child(3),
.app-capture__bar span:nth-child(3) {
  background: rgba(34, 197, 94, 0.58);
}

.app-mockup__screen {
  min-height: 20rem;
  border-radius: 1.15rem;
  display: grid;
  place-items: center;
  padding: 1.25rem;
}

.app-mockup__screen--meeting {
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.04),
    rgba(4, 217, 79, 0.06)
  );
}

.monitor {
  width: min(78%, 21rem);
  display: grid;
  gap: 0.45rem;
  justify-items: center;
}

.monitor--large {
  width: min(100%, 25rem);
}

.monitor__frame {
  width: 100%;
  aspect-ratio: 16 / 10;
  padding: 1rem;
  border-radius: 1.05rem;
  background: #111827;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}

.monitor__screen {
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #232326, #111827);
  color: white;
  font-weight: 700;
}

.monitor__stand {
  width: 38%;
  height: 0.55rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
}

.app-surface {
  display: grid;
  gap: 1.25rem;
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border-radius: 1.5rem;
  background: rgba(243, 244, 246, 0.88);
}

@media (min-width: 900px) {
  .app-surface {
    grid-template-columns: minmax(0, 1.3fr) minmax(280px, 0.7fr);
    align-items: start;
  }
}

.app-surface__copy {
  display: grid;
  gap: 0.65rem;
}

.app-surface__copy p {
  margin: 0;
  color: $gris2;
  line-height: 1.65;
}

.app-surface__lead {
  margin-top: 0.1rem;
  color: $gris1;
  font-weight: 600;
}

.app-surface__status {
  padding: 1rem;
  border-radius: 1.15rem;
  background: rgba(255, 255, 255, 0.92);
}

.app-surface__eyebrow {
  margin: 0 0 0.75rem;
  color: $vert;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-capabilities,
.app-surface__cases {
  display: grid;
  margin: 0;
  padding: 0;
  list-style: none;
}

.app-capabilities {
  gap: 0.55rem;
}

.app-surface__cases {
  gap: 0.7rem;
}

.app-capabilities li,
.app-surface__cases li {
  position: relative;
  padding: 0.5rem 0.75rem 0.5rem 1.75rem;
  color: $gris2;
  line-height: 1.55;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0.5rem;
}

.app-surface__cases li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 999px;
  background: $vert;
  transform: translateY(-50%);
}

.app-capabilities li::before {
  content: '';
  position: absolute;
  left: 0.75rem;
  top: 50%;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 999px;
  background: $vert;
  transform: translateY(-50%);
}

.app-section--split {
  gap: 1rem;
}

@media (min-width: 960px) {
  .app-section--split {
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
    align-items: start;
  }
}

.app-scope {
  display: grid;
  gap: 1rem;
  padding: clamp(1.2rem, 2.8vw, 1.65rem);
  border-radius: 1.35rem;
  background: rgba(243, 244, 246, 0.88);
}

.limit-list {
  display: grid;
  gap: 0.65rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.limit-list li {
  position: relative;
  padding-left: 1rem;
  color: $gris2;
  line-height: 1.6;
}

.limit-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: $vert;
}

.app-principles {
  display: grid;
  gap: 0.85rem;
  padding: clamp(1.2rem, 2.8vw, 1.65rem);
  border-radius: 1.35rem;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.04);
}

.app-principles__eyebrow {
  margin: 0;
  color: $vert;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-principles h3 {
  margin: 0;
  color: $gris1;
  font-size: 1.05rem;
}

.app-principles__list {
  display: grid;
  gap: 0.65rem;
  margin: 0;
  padding-left: 1.2rem;
  color: $gris2;
  line-height: 1.6;
}

.app-section {
  display: grid;
  gap: 1rem;
  margin-top: clamp(2rem, 5vw, 3rem);
}

.section-heading {
  display: grid;
  gap: 0.45rem;
}

.section-heading p {
  margin: 0;
  max-width: 40rem;
  color: $gris2;
  line-height: 1.6;
}

.app-capture {
  padding: 1rem;
  border-radius: 1.45rem;
  background: linear-gradient(
    145deg,
    rgba(243, 244, 246, 0.95),
    rgba(255, 255, 255, 0.96)
  );
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.05);
}

.app-capture__screen {
  min-height: 18rem;
  border-radius: 1.15rem;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.82);
}

.app-capture__screen--meeting {
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.7),
    rgba(4, 217, 79, 0.06)
  );
}

.detail-grid {
  display: grid;
  gap: 0.75rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.detail-card {
  display: grid;
  gap: 0.4rem;
  padding: 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.92);
}

.detail-card__label {
  margin: 0;
  color: $vert;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.detail-card__value {
  margin: 0;
  color: $gris1;
  font-weight: 600;
}

.app-cta {
  display: grid;
  gap: 1rem;
  margin-top: clamp(2rem, 5vw, 3rem);
}

.app-cta__heading {
  display: grid;
  gap: 0.45rem;
}

.app-cta__heading h2 {
  margin: 0;
  color: $gris1;
}

.app-cta__heading p {
  margin: 0;
  color: $gris2;
  line-height: 1.6;
  max-width: 34rem;
}

.app-cta__link {
  width: fit-content;
}
</style>
