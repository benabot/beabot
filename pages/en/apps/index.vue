<template>
  <main class="apps-index">
    <div class="apps-shell">
      <AppBreadcrumb :items="breadcrumbItems" aria-label="Breadcrumb" />

      <section class="apps-hero">
        <div class="apps-hero__copy">
          <p class="apps-hero__eyebrow">Apps</p>
          <h1>{{ appsIndexEnContent.heroTitle }}</h1>
          <p class="apps-hero__intro">{{ appsIndexEnContent.heroSubtitle }}</p>
          <p class="apps-hero__proof">{{ appsIndexEnContent.proofLine.join(' · ') }}</p>
          <div class="apps-hero__actions">
            <AppLink to="/en/apps/focus-one/" class="apps-hero__action">
              Discover FocusOne
            </AppLink>
            <AppLink to="/en/apps/duo-spend/" class="apps-hero__action apps-hero__action--soft">
              View DuoSpend
            </AppLink>
          </div>
        </div>
      </section>

      <section class="apps-section" aria-labelledby="apps-featured-title">
        <div class="apps-section__heading">
          <h2 id="apps-featured-title" class="apps-section__title">
            Two concrete uses
          </h2>
          <p>The two most direct apps: keeping a habit, clarifying expenses for two.</p>
        </div>

        <div class="apps-feature-stack">
          <article class="apps-feature-row apps-feature-row--focus">
            <AppLink
              v-if="focusOneApp?.preview.src"
              :to="focusOneApp.href"
              class="apps-feature-row__media"
              aria-label="Discover FocusOne"
            >
              <img
                :src="focusOneApp.preview.src"
                :alt="focusOneApp.preview.alt"
                width="1206"
                height="2622"
                loading="lazy"
                decoding="async"
              />
            </AppLink>
            <div class="apps-feature-row__body">
              <p class="apps-feature-row__name">FocusOne</p>
              <h3>Keep one habit.</h3>
              <p>
                A private counter to choose one routine, mark it done today and
                keep the streak visible.
              </p>
              <AppLink to="/en/apps/focus-one/" class="apps-feature-row__link">
                Discover FocusOne
              </AppLink>
            </div>
          </article>

          <article class="apps-feature-row apps-feature-row--duo">
            <AppLink
              v-if="duoSpendApp?.preview.src"
              :to="duoSpendApp.href"
              class="apps-feature-row__media"
              aria-label="Discover DuoSpend"
            >
              <img
                :src="duoSpendApp.preview.src"
                :alt="duoSpendApp.preview.alt"
                width="1206"
                height="2622"
                loading="lazy"
                decoding="async"
              />
            </AppLink>
            <div class="apps-feature-row__body">
              <p class="apps-feature-row__name">DuoSpend</p>
              <h3>Clarify shared expenses.</h3>
              <p>
                Add expenses for a shared project, see who paid what, and
                settle the balance simply.
              </p>
              <AppLink to="/en/apps/duo-spend/" class="apps-feature-row__link">
                Discover DuoSpend
              </AppLink>
            </div>
          </article>
        </div>
      </section>

      <section class="apps-manifesto" aria-labelledby="apps-manifesto-title">
        <h2 id="apps-manifesto-title" class="apps-manifesto__title">
          {{ appsIndexEnContent.manifestoTitle }}
        </h2>
        <p class="apps-manifesto__body">
          A BeAbot app should stay short in your day. You open it for one clear
          action: mark a habit, add an expense, start a session, prepare your
          Mac. The action is done, the app gets out of the way.
        </p>
        <ol class="apps-manifesto__steps">
          <li>Open for one clear action.</li>
          <li>Act without digging through menus.</li>
          <li>Move on without being held back.</li>
        </ol>
      </section>

      <section
        class="apps-section apps-section--secondary"
        aria-labelledby="apps-other-title"
      >
        <div class="apps-section__heading">
          <h2 id="apps-other-title" class="apps-section__title">
            Practice, prepare
          </h2>
          <p>
            The same logic for meditation and meetings: a clear frame, fewer
            steps, little noise around it.
          </p>
        </div>

        <div class="apps-compact-grid">
          <article class="apps-compact-item">
            <AppLink
              v-if="situremApp?.preview.src"
              :to="situremApp.href"
              class="apps-compact-item__media"
              aria-label="Discover Siturem"
            >
              <img
                :src="situremApp.preview.src"
                :alt="situremApp.preview.alt"
                width="1206"
                height="2622"
                loading="lazy"
                decoding="async"
              />
            </AppLink>
            <div class="apps-compact-item__body">
              <p class="apps-compact-item__name">Siturem</p>
              <h3>A stable frame for meditation.</h3>
              <AppLink to="/en/apps/siturem/" class="apps-compact-item__link">
                Discover Siturem
              </AppLink>
            </div>
          </article>

          <article class="apps-compact-item">
            <AppLink
              v-if="meetingModeApp?.preview.src"
              :to="meetingModeApp.href"
              class="apps-compact-item__media"
              aria-label="Discover Meeting Mode"
            >
              <img
                :src="meetingModeApp.preview.src"
                :alt="meetingModeApp.preview.alt"
                width="1206"
                height="2622"
                loading="lazy"
                decoding="async"
              />
            </AppLink>
            <div class="apps-compact-item__body">
              <p class="apps-compact-item__name">Meeting Mode</p>
              <h3>Prepare your Mac before a meeting.</h3>
              <AppLink to="/en/apps/meeting-mode/" class="apps-compact-item__link">
                Discover Meeting Mode
              </AppLink>
            </div>
          </article>
        </div>
      </section>

      <section class="apps-final-cta" aria-labelledby="apps-final-cta-title">
        <h2 id="apps-final-cta-title" class="apps-final-cta__title">
          Where should you start?
        </h2>
        <p class="apps-final-cta__body">
          Each app answers one specific moment. Choose the one that matches
          what you want to track, clarify or prepare now.
        </p>
        <div class="apps-final-cta__links">
          <AppLink
            to="/en/apps/focus-one/"
            class="apps-final-cta__link apps-final-cta__link--focus"
          >
            <span class="apps-final-cta__intent">Keep a habit</span>
            <span class="apps-final-cta__action">Discover FocusOne</span>
          </AppLink>
          <AppLink
            to="/en/apps/duo-spend/"
            class="apps-final-cta__link apps-final-cta__link--duo"
          >
            <span class="apps-final-cta__intent">Clarify expenses</span>
            <span class="apps-final-cta__action">Discover DuoSpend</span>
          </AppLink>
          <AppLink
            to="/en/apps/siturem/"
            class="apps-final-cta__link apps-final-cta__link--siturem"
          >
            <span class="apps-final-cta__intent">Start a session</span>
            <span class="apps-final-cta__action">Discover Siturem</span>
          </AppLink>
          <AppLink
            to="/en/apps/meeting-mode/"
            class="apps-final-cta__link apps-final-cta__link--meeting"
          >
            <span class="apps-final-cta__intent">Prepare a meeting</span>
            <span class="apps-final-cta__action">Discover Meeting Mode</span>
          </AppLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'

import {
  buildCollectionPageSchema,
  buildBreadcrumbSchema,
  buildItemListSchema,
} from '~/data/apps'
import { appsIndexEnContent, appsIndexEnEntries } from '~/data/apps-en'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/en/apps')
const ogImage = absoluteUrl(config.public.siteUrl, appsIndexEnContent.seo.image)

const focusOneApp = appsIndexEnEntries.find((app) => app.slug === 'focus-one')
const duoSpendApp = appsIndexEnEntries.find((app) => app.slug === 'duo-spend')
const situremApp = appsIndexEnEntries.find((app) => app.slug === 'siturem')
const meetingModeApp = appsIndexEnEntries.find((app) => app.slug === 'meeting-mode')

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
      href: canonicalUrl(config.public.siteUrl, '/apps'),
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
  width: min(100%, 70rem);
  margin: 0 auto;
}

.apps-hero {
  padding:
    clamp(1.2rem, 3vw, 1.8rem)
    clamp(1rem, 3vw, 1.6rem)
    clamp(2.2rem, 5vw, 3.2rem);
  border-radius: 1rem;
  background: linear-gradient(160deg, rgba(248, 251, 249, 0.92), rgba(252, 252, 253, 0.92));
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.apps-hero__copy {
  min-width: 0;
  max-width: 52rem;
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
  max-width: 14ch;
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: $gris1;
}

.apps-hero__intro {
  margin: 1.35rem 0 0;
  max-width: 41rem;
  color: $gris1;
  line-height: 1.72;
  font-size: clamp(1.02rem, 1.4vw, 1.16rem);
}

.apps-hero__proof {
  margin: 1rem 0 0;
  color: $gris3;
  font-size: 0.88rem;
  font-weight: 700;
}

.apps-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.3rem;
}

.apps-hero__action {
  display: inline-flex;
  align-items: center;
  min-height: 2.45rem;
  padding: 0.5rem 0.85rem;
  border-radius: 0.7rem;
  border: 1px solid rgba(13, 199, 99, 0.22);
  background: rgba(13, 199, 99, 0.08);
  color: $gris1;
  font-weight: 700;
  text-decoration: none;
  transition:
    border-color 0.16s ease,
    background 0.16s ease;
}

.apps-hero__action:hover {
  background: rgba(13, 199, 99, 0.14);
}

.apps-hero__action--soft {
  border-color: rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.88);
}

.apps-section {
  display: grid;
  gap: clamp(1.1rem, 2.6vw, 1.6rem);
}

.apps-section + .apps-section {
  margin-top: clamp(2.1rem, 5vw, 3.3rem);
}

.apps-section__heading {
  display: grid;
  gap: 0.35rem;
}

.apps-section__title {
  margin: 0;
  font-size: clamp(1.45rem, 3vw, 2.1rem);
  font-weight: 800;
  color: $gris1;
  letter-spacing: -0.02em;
}

.apps-section__heading p {
  margin: 0;
  color: $gris2;
  line-height: 1.55;
}

.apps-feature-stack {
  display: grid;
  gap: 1rem;
}

.apps-feature-row {
  display: grid;
  gap: 1rem;
  padding: clamp(1rem, 2vw, 1.25rem);
  border-radius: 1rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.apps-feature-row--focus {
  background: linear-gradient(170deg, rgba(246, 251, 246, 0.95), rgba(255, 255, 255, 0.95));
}

.apps-feature-row--duo {
  background: linear-gradient(170deg, rgba(245, 248, 255, 0.92), rgba(255, 255, 255, 0.95));
}

@media (min-width: 900px) {
  .apps-feature-row {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1fr);
    align-items: center;
  }

  .apps-feature-row--duo .apps-feature-row__media {
    order: 2;
  }

  .apps-feature-row--duo .apps-feature-row__body {
    order: 1;
  }
}

.apps-feature-row__media {
  display: grid;
  align-self: start;
  border-radius: 0.85rem;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.07);
  background: rgba(255, 255, 255, 0.92);
}

.apps-feature-row__media img {
  display: block;
  width: 100%;
  height: clamp(12rem, 38vw, 17rem);
  object-fit: contain;
  padding: 0.45rem;
}

.apps-feature-row__body {
  display: grid;
  gap: 0.5rem;
}

.apps-feature-row__name {
  margin: 0;
  color: $gris3;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.apps-feature-row h3 {
  margin: 0;
  color: $gris1;
  font-size: clamp(1.45rem, 2.4vw, 2rem);
  line-height: 1.08;
}

.apps-feature-row p {
  margin: 0;
  color: $gris2;
  line-height: 1.62;
  max-width: 34ch;
}

.apps-feature-row__link {
  width: fit-content;
  color: $vert;
  font-weight: 700;
  text-decoration: none;
}

.apps-feature-row__link:hover {
  color: $gris1;
}

.apps-manifesto {
  display: grid;
  gap: 0.72rem;
  margin: clamp(2.4rem, 5vw, 3.6rem) 0;
  padding: clamp(1.2rem, 3vw, 1.9rem) 0;
  border-block: 1px solid rgba(15, 23, 42, 0.08);
}

.apps-manifesto__title {
  margin: 0;
  color: $gris1;
  font-size: clamp(1.65rem, 3.4vw, 2.4rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.apps-manifesto__body {
  margin: 0;
  max-width: 60ch;
  color: $gris2;
  line-height: 1.7;
}

.apps-manifesto__steps {
  display: grid;
  gap: 0.35rem;
  margin: 0.2rem 0 0;
  padding: 0 0 0 1.2rem;
  color: $gris2;
  line-height: 1.6;

  @media (min-width: 820px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.75rem;
    padding-left: 1rem;
  }
}

.apps-compact-grid {
  display: grid;
  gap: 0.85rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.apps-compact-item {
  display: grid;
  gap: 0.7rem;
  grid-template-columns: minmax(6.4rem, 0.42fr) minmax(0, 1fr);
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.9rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.78);
}

.apps-compact-item__media {
  display: grid;
  border-radius: 0.7rem;
  overflow: hidden;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #f5f7fa;
}

.apps-compact-item__media img {
  width: 100%;
  height: clamp(6.8rem, 16vw, 8rem);
  object-fit: contain;
  padding: 0.35rem;
}

.apps-compact-item__body {
  display: grid;
  gap: 0.3rem;
}

.apps-compact-item__name {
  margin: 0;
  color: $gris3;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.apps-compact-item h3 {
  margin: 0;
  color: $gris1;
  font-size: 1.06rem;
  line-height: 1.25;
}

.apps-compact-item__link {
  width: fit-content;
  color: $vert;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
}

.apps-compact-item__link:hover {
  color: $gris1;
}

.apps-final-cta {
  display: grid;
  gap: 1rem;
  margin-top: clamp(2.4rem, 5vw, 3.5rem);
  padding: clamp(1.25rem, 3vw, 1.8rem);
  border-radius: 1.15rem;
  background: rgba(255, 255, 255, 0.72);
}

.apps-final-cta__title {
  margin: 0;
  color: $gris1;
  font-size: clamp(1.35rem, 3vw, 1.85rem);
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.apps-final-cta__body {
  margin: 0;
  color: $gris2;
  line-height: 1.65;
}

.apps-final-cta__links {
  display: grid;
  gap: 0.65rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.apps-final-cta__link {
  --selector-accent: #0dc763;

  display: grid;
  gap: 0.28rem;
  min-height: 4.4rem;
  padding: 0.78rem 0.85rem;
  border-radius: 0.82rem;
  border: 1px solid color-mix(in srgb, var(--selector-accent) 26%, transparent);
  background:
    linear-gradient(135deg, color-mix(in srgb, var(--selector-accent) 10%, #fff), rgba(255, 255, 255, 0.88));
  color: $gris2;
  text-decoration: none;
  transition:
    transform 0.16s ease,
    border-color 0.16s ease,
    color 0.16s ease;

  &::before {
    content: '';
    width: 1.7rem;
    height: 0.18rem;
    border-radius: 999px;
    background: var(--selector-accent);
  }
}

.apps-final-cta__link--focus {
  --selector-accent: #d99a21;
}

.apps-final-cta__link--duo {
  --selector-accent: #5b6fe6;
}

.apps-final-cta__link--siturem {
  --selector-accent: #174239;
}

.apps-final-cta__link--meeting {
  --selector-accent: #2561d9;
}

.apps-final-cta__intent,
.apps-final-cta__action {
  display: block;
}

.apps-final-cta__intent {
  color: $gris1;
  font-weight: 800;
  line-height: 1.25;
}

.apps-final-cta__action {
  font-size: 0.86rem;
  font-weight: 700;
  color: $gris2;
}

.apps-final-cta__link:hover {
  transform: translateY(-1px);
  border-color: color-mix(in srgb, var(--selector-accent) 42%, transparent);
  color: $gris1;
}

.apps-final-cta__link:focus-visible,
.apps-hero__action:focus-visible,
.apps-feature-row__link:focus-visible,
.apps-compact-item__link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
}
</style>
