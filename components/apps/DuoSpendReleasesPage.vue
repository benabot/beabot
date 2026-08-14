<template>
  <main class="updates-page">
    <div class="updates-shell">
      <AppBreadcrumb :items="breadcrumbItems" :aria-label="breadcrumbLabel" />

      <p class="updates-locale-switch">
        <AppLink :to="alternatePath">{{ alternateLabel }}</AppLink>
      </p>

      <header class="updates-hero">
        <p class="updates-eyebrow">DuoSpend</p>
        <h1>{{ content.heroTitle }}</h1>
        <p class="updates-intro">{{ content.heroIntro }}</p>
        <div class="updates-actions">
          <AppLink :to="roadmapPath" class="updates-button">
            {{ content.roadmapLabel }}
          </AppLink>
        </div>
      </header>

      <ol class="release-list">
        <li v-for="release in content.versions" :key="release.version">
          <article class="release-card">
            <div class="release-card__heading">
              <h2>{{ release.title }}</h2>
              <span v-if="release.status" class="release-status">
                {{ release.status }}
              </span>
            </div>
            <p>{{ release.summary }}</p>
            <ul>
              <li v-for="point in release.points" :key="point">{{ point }}</li>
            </ul>
            <aside v-if="release.callout" class="release-callout">
              <h3>{{ release.callout.title }}</h3>
              <p>{{ release.callout.text }}</p>
            </aside>
          </article>
        </li>
      </ol>

      <nav class="updates-final" :aria-label="finalNavigationLabel">
        <AppLink
          :to="productPath"
          class="updates-button updates-button--primary"
        >
          {{ content.productLabel }}
        </AppLink>
        <AppLink :to="roadmapPath" class="updates-button">
          {{ content.finalRoadmapLabel }}
        </AppLink>
      </nav>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'
import { buildBreadcrumbSchema, duoSpendReleasesContent } from '~/data/apps'
import { duoSpendReleasesEnContent } from '~/data/apps-en'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const props = defineProps<{
  locale: 'fr' | 'en'
}>()

const isEnglish = props.locale === 'en'
const content = isEnglish ? duoSpendReleasesEnContent : duoSpendReleasesContent
const productPath = isEnglish ? '/en/apps/duo-spend/' : '/apps/duo-spend/'
const releasesPath = `${productPath}releases/`
const roadmapPath = `${productPath}roadmap/`
const alternatePath = isEnglish
  ? '/apps/duo-spend/releases/'
  : '/en/apps/duo-spend/releases/'
const alternateLabel = isEnglish ? 'Version française' : 'English version'
const breadcrumbLabel = isEnglish ? 'Breadcrumb' : 'Fil d’Ariane'
const finalNavigationLabel = isEnglish
  ? 'Continue exploring DuoSpend'
  : 'Continuer à découvrir DuoSpend'
const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, releasesPath)
const alternateUrl = canonicalUrl(config.public.siteUrl, alternatePath)
const ogImage = absoluteUrl(config.public.siteUrl, content.seo.image)
const breadcrumbItems = isEnglish
  ? [
      { label: 'Apps', to: '/en/apps/' },
      { label: 'DuoSpend', to: productPath },
      { label: 'Release notes' },
    ]
  : [
      { label: 'Accueil', to: '/' },
      { label: 'Apps', to: '/apps/' },
      { label: 'DuoSpend', to: productPath },
      { label: 'Notes de version' },
    ]
const breadcrumbSchema = buildBreadcrumbSchema(
  config.public.siteUrl,
  isEnglish
    ? [
        { name: 'Apps', path: '/en/apps/' },
        { name: 'DuoSpend', path: productPath },
        { name: 'Release notes', path: releasesPath },
      ]
    : [
        { name: 'Accueil', path: '/' },
        { name: 'Apps', path: '/apps/' },
        { name: 'DuoSpend', path: productPath },
        { name: 'Notes de version', path: releasesPath },
      ],
)

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description,
  ogTitle: content.seo.title,
  ogDescription: content.seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: content.seo.title,
  twitterDescription: content.seo.description,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
})

useHead({
  htmlAttrs: { lang: props.locale },
  link: [
    { rel: 'canonical', href: pageUrl },
    {
      rel: 'alternate',
      hreflang: isEnglish ? 'fr' : 'en',
      href: alternateUrl,
    },
    {
      rel: 'alternate',
      hreflang: props.locale,
      href: pageUrl,
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: isEnglish ? pageUrl : alternateUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
@use '~/assets/css/vars/_colors.scss' as *;
@use '~/assets/css/vars/_typo.scss' as *;

.updates-page {
  padding: clamp(2rem, 5vw, 3.5rem) 5% 5rem;

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.updates-shell {
  width: min(100%, 76rem);
  margin: 0 auto;
}

.updates-locale-switch {
  margin: 0 0 1rem;
  color: $gris3;
  font-size: 0.85rem;
}

.updates-locale-switch a {
  color: inherit;
  text-underline-offset: 0.16em;
}

.updates-hero {
  max-width: 48rem;
  padding: clamp(1rem, 3vw, 2rem) 0 clamp(2rem, 5vw, 3.5rem);
}

.updates-eyebrow,
.release-status {
  color: $vert;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.updates-eyebrow {
  margin: 0 0 0.8rem;
}

.updates-hero h1 {
  margin: 0;
  color: $gris1;
  font-size: clamp(3rem, 7vw, 5.6rem);
  line-height: 0.94;
  letter-spacing: -0.055em;
}

.updates-intro {
  margin: 1rem 0 0;
  max-width: 42rem;
  color: $gris2;
  line-height: 1.7;
}

.updates-actions,
.updates-final {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.35rem;
}

.updates-button {
  display: inline-flex;
  align-items: center;
  min-height: 2.9rem;
  padding: 0.7rem 1rem;
  border-radius: 999px;
  background: rgba(243, 244, 246, 0.9);
  color: $gris2;
  font-weight: 700;
  text-decoration: none;
}

.updates-button--primary {
  background: $vert;
  color: white;
}

.updates-button:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
}

.release-list {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.release-card {
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 1.35rem;
  background: rgba(248, 249, 250, 0.82);
}

.release-card__heading {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.65rem 1.5rem;
  align-items: baseline;
}

.release-card h2,
.release-callout h3 {
  margin: 0;
  color: $gris1;
}

.release-card h2 {
  font-size: clamp(1.5rem, 3.5vw, 2.2rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.release-card > p,
.release-card li,
.release-callout p {
  color: $gris2;
  line-height: 1.65;
}

.release-card ul {
  padding-left: 1.2rem;
}

.release-callout {
  margin-top: 1.25rem;
  padding: 1rem;
  border-left: 4px solid $vert;
  border-radius: 0.8rem;
  background: rgba(13, 199, 99, 0.08);
}

.release-callout h3 {
  font-size: 1.05rem;
}

.release-callout p {
  margin: 0.45rem 0 0;
}

.updates-final {
  margin-top: clamp(2rem, 5vw, 3rem);
  padding: clamp(1.2rem, 3vw, 1.75rem);
  border-radius: 1.35rem;
  background: linear-gradient(135deg, #111827, #0f172a);
}
</style>
