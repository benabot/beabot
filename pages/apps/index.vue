<template>
  <main class="apps-index">
    <div class="apps-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="apps-hero">
        <div class="apps-hero__copy">
          <p class="apps-hero__eyebrow">Apps</p>
          <h1>{{ appsIndexContent.heroTitle }}</h1>
          <div class="apps-hero__intro">
            <p class="apps-hero__intro-p">
              {{ appsIndexContent.heroSubtitle }}
            </p>
            <ul class="apps-hero__proof" aria-label="Principes produit">
              <li
                v-for="proof in appsIndexContent.proofLine"
                :key="proof"
              >
                {{ proof }}
              </li>
            </ul>
          </div>
        </div>

        <div
          class="apps-hero__visual"
          aria-label="Aperçu des apps FocusOne et DuoSpend"
        >
          <AppLink
            v-for="app in featuredApps"
            :key="app.slug"
            :to="app.href"
            class="apps-hero__shot"
            :class="`apps-hero__shot--${app.slug}`"
            :aria-label="`Voir ${app.name}`"
          >
            <img
              :src="app.preview.src"
              :alt="app.preview.alt"
              width="1206"
              height="2622"
              loading="eager"
              decoding="async"
            />
            <span>{{ app.name }}</span>
          </AppLink>
        </div>
      </section>

      <section class="apps-section" aria-labelledby="apps-featured-title">
        <div class="apps-section__heading">
          <h2 id="apps-featured-title" class="apps-section__title">
            À utiliser au quotidien
          </h2>
          <p>
            Deux apps pensées pour les petits suivis qu’on remet trop vite à
            plus tard.
          </p>
        </div>

        <div class="apps-featured-grid">
          <AppCard
            v-for="app in featuredApps"
            :key="app.slug"
            :app="app"
            variant="featured"
            class="apps-featured-grid__item"
          />
        </div>
      </section>

      <section class="apps-manifesto" aria-labelledby="apps-manifesto-title">
        <h2 id="apps-manifesto-title" class="apps-manifesto__title">
          {{ appsIndexContent.manifestoTitle }}
        </h2>
        <p class="apps-manifesto__body">{{ appsIndexContent.manifestoBody }}</p>
      </section>

      <section
        class="apps-section apps-section--secondary"
        aria-labelledby="apps-other-title"
      >
        <div class="apps-section__heading">
          <h2 id="apps-other-title" class="apps-section__title">
            Pour pratiquer ou préparer
          </h2>
          <p>
            Même logique pour la méditation et les réunions : un cadre clair,
            peu de manipulations, pas de bruit autour.
          </p>
        </div>

        <div class="apps-secondary-grid">
          <AppCard
            v-for="app in otherApps"
            :key="app.slug"
            :app="app"
            variant="compact"
            class="apps-secondary-grid__item"
          />
        </div>
      </section>

      <section class="apps-final-cta" aria-labelledby="apps-final-cta-title">
        <h2 id="apps-final-cta-title" class="apps-final-cta__title">
          {{ appsIndexContent.ctaTitle }}
        </h2>
        <p class="apps-final-cta__body">{{ appsIndexContent.ctaBody }}</p>
        <div class="apps-final-cta__links">
          <AppLink to="/apps/focus-one/" class="apps-final-cta__link">
            Tenir une habitude
          </AppLink>
          <AppLink to="/apps/duo-spend/" class="apps-final-cta__link">
            Clarifier des dépenses
          </AppLink>
          <AppLink to="/apps/siturem/" class="apps-final-cta__link">
            Lancer une séance
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
  buildCollectionPageSchema,
  buildBreadcrumbSchema,
  buildItemListSchema,
} from '~/data/apps'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps')
const ogImage = absoluteUrl(config.public.siteUrl, appsIndexContent.seo.image)
const featuredApps = appsIndexEntries.filter((app) => app.featured)
const otherApps = appsIndexEntries.filter((app) => !app.featured)

const breadcrumbItems = [{ label: 'Accueil', to: '/' }, { label: 'Apps' }]

const breadcrumbSchema = buildBreadcrumbSchema(config.public.siteUrl, [
  { name: 'Accueil', path: '/' },
  { name: 'Apps', path: '/apps/' },
])

const itemListSchema = buildItemListSchema(
  config.public.siteUrl,
  appsIndexEntries,
)
const collectionSchema = buildCollectionPageSchema({
  siteUrl: config.public.siteUrl,
  pageUrl,
  name: appsIndexContent.title,
  description: appsIndexContent.seo.description,
})

useSeoMeta({
  title: appsIndexContent.seo.title,
  description: appsIndexContent.seo.description,
  ogTitle: appsIndexContent.seo.title,
  ogDescription: appsIndexContent.seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: appsIndexContent.seo.title,
  twitterDescription: appsIndexContent.seo.description,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'fr',
      href: pageUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: canonicalUrl(config.public.siteUrl, '/en/apps'),
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
  display: grid;
  gap: clamp(1.7rem, 4vw, 3rem);
  padding: clamp(0.25rem, 2vw, 1rem) 0 clamp(2.2rem, 5vw, 3.6rem);

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.08fr) minmax(20rem, 0.72fr);
    align-items: end;
  }
}

.apps-hero__copy {
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
  letter-spacing: -0.035em;
}

.apps-hero__platform {
  color: #05d94f;
}

.apps-hero__intro {
  max-width: 38rem;
  margin: 1.5rem 0 0;
  color: $gris2;
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

.apps-hero__proof {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.apps-hero__proof li {
  display: inline-flex;
  min-height: 2rem;
  align-items: center;
  padding: 0.32rem 0.68rem;
  border-radius: 999px;
  background: rgba(243, 244, 246, 0.95);
  color: $gris2;
  font-size: 0.82rem;
  font-weight: 700;
}

.apps-hero__visual {
  display: grid;
  grid-template-columns: 0.88fr 1fr;
  gap: clamp(0.7rem, 2vw, 1rem);
  align-items: end;
  max-width: 30rem;

  @media (max-width: 899px) {
    max-width: 24rem;
  }
}

.apps-hero__shot {
  display: grid;
  gap: 0.55rem;
  color: $gris1;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.16s ease;
}

.apps-hero__shot:hover {
  transform: translateY(-2px);
}

.apps-hero__shot:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 4px;
  border-radius: 1.15rem;
}

.apps-hero__shot img {
  display: block;
  width: 100%;
  height: clamp(11rem, 38vw, 24rem);
  object-fit: contain;
  padding: clamp(0.55rem, 1.6vw, 0.9rem);
  border-radius: 1.25rem;
  background:
    radial-gradient(circle at 50% 8%, rgba(13, 199, 99, 0.17), transparent 35%),
    linear-gradient(180deg, #f8f9f6, #edf3ec);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);
}

.apps-hero__shot--duo-spend {
  margin-bottom: clamp(1.2rem, 4vw, 2.6rem);
}

.apps-hero__shot--duo-spend img {
  background:
    radial-gradient(circle at 50% 8%, rgba(4, 57, 217, 0.13), transparent 35%),
    linear-gradient(180deg, #f7f8fb, #eceff6);
}

.apps-manifesto {
  display: grid;
  gap: 0.72rem;
  margin: clamp(2.4rem, 5vw, 3.8rem) 0;
  padding: clamp(1.35rem, 3vw, 2rem) 0;
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
  color: $gris2;
  line-height: 1.7;
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

.apps-featured-grid,
.apps-secondary-grid {
  display: grid;
  gap: clamp(1.35rem, 2.8vw, 2.1rem);
}

.apps-featured-grid {
  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
    align-items: stretch;
  }
}

.apps-secondary-grid {
  gap: clamp(1rem, 2vw, 1.4rem);

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.apps-final-cta {
  display: grid;
  gap: 0.75rem;
  margin-top: clamp(2.4rem, 5vw, 3.5rem);
  padding-top: clamp(1.2rem, 3vw, 1.8rem);
  border-top: 1px solid rgba(15, 23, 42, 0.08);
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
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.apps-final-cta__link {
  display: inline-flex;
  align-items: center;
  min-height: 2.65rem;
  padding: 0.62rem 0.92rem;
  border-radius: 999px;
  background: rgba(243, 244, 246, 0.9);
  color: $gris2;
  text-decoration: none;
  font-weight: 700;
  transition:
    background 0.16s ease,
    color 0.16s ease,
    transform 0.16s ease;
}

.apps-final-cta__link:hover {
  background: $gris1;
  color: #fff;
  transform: translateY(-1px);
}

.apps-final-cta__link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
}
</style>
