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
        <p class="updates-note">{{ content.heroNote }}</p>
        <div class="updates-actions">
          <AppLink
            to="#proposer-une-idee"
            class="updates-button updates-button--primary"
          >
            {{ content.ideaLabel }}
          </AppLink>
          <AppLink :to="releasesPath" class="updates-button">
            {{ content.releasesLabel }}
          </AppLink>
        </div>
      </header>

      <section class="roadmap-section roadmap-section--next">
        <div class="section-heading">
          <p class="updates-eyebrow">
            {{ isEnglish ? 'Next step' : 'Prochaine étape' }}
          </p>
          <h2>{{ content.next.title }}</h2>
          <p>{{ content.next.intro }}</p>
        </div>
        <div class="roadmap-grid">
          <article
            v-for="item in content.next.items"
            :key="item.title"
            class="roadmap-card"
          >
            <p class="roadmap-card__status">{{ item.status }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section class="roadmap-section">
        <div class="section-heading">
          <p class="updates-eyebrow">
            {{ isEnglish ? 'After that' : 'Ensuite' }}
          </p>
          <h2>{{ content.after.title }}</h2>
          <p>{{ content.after.intro }}</p>
        </div>
        <div class="roadmap-grid roadmap-grid--compact">
          <article
            v-for="item in content.after.items"
            :key="item.title"
            class="roadmap-card"
          >
            <p class="roadmap-card__status">{{ item.status }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </section>

      <section class="roadmap-section roadmap-section--later">
        <p class="updates-eyebrow">
          {{ isEnglish ? 'Later · Exploratory' : 'Plus tard · Exploratoire' }}
        </p>
        <h2>{{ content.later.title }}</h2>
        <p v-for="paragraph in content.later.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </section>

      <section class="roadmap-section roadmap-section--principles">
        <h2>{{ content.principles.title }}</h2>
        <ul>
          <li v-for="item in content.principles.items" :key="item">
            {{ item }}
          </li>
        </ul>
      </section>

      <section
        id="proposer-une-idee"
        class="roadmap-section roadmap-section--idea"
        :aria-labelledby="ideaTitleId"
      >
        <div class="section-heading">
          <h2 :id="ideaTitleId">{{ content.suggestion.title }}</h2>
          <p>{{ content.suggestion.text }}</p>
          <p class="updates-note">{{ content.suggestion.note }}</p>
        </div>
        <AppIdeaSuggestionForm :locale="locale" />
      </section>

      <nav class="updates-final" :aria-label="finalNavigationLabel">
        <AppLink
          :to="productPath"
          class="updates-button updates-button--primary"
        >
          {{ content.productLabel }}
        </AppLink>
        <AppLink :to="releasesPath" class="updates-button">
          {{ content.finalReleasesLabel }}
        </AppLink>
      </nav>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'
import AppIdeaSuggestionForm from '~/components/apps/AppIdeaSuggestionForm.vue'
import { buildBreadcrumbSchema, duoSpendRoadmapContent } from '~/data/apps'
import { duoSpendRoadmapEnContent } from '~/data/apps-en'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const props = defineProps<{
  locale: 'fr' | 'en'
}>()

const locale = props.locale
const isEnglish = locale === 'en'
const content = isEnglish ? duoSpendRoadmapEnContent : duoSpendRoadmapContent
const productPath = isEnglish ? '/en/apps/duo-spend/' : '/apps/duo-spend/'
const roadmapPath = `${productPath}roadmap/`
const releasesPath = `${productPath}releases/`
const alternatePath = isEnglish
  ? '/apps/duo-spend/roadmap/'
  : '/en/apps/duo-spend/roadmap/'
const alternateLabel = isEnglish ? 'Version française' : 'English version'
const breadcrumbLabel = isEnglish ? 'Breadcrumb' : 'Fil d’Ariane'
const ideaTitleId = `duospend-idea-title-${locale}`
const finalNavigationLabel = isEnglish
  ? 'Continue exploring DuoSpend'
  : 'Continuer à découvrir DuoSpend'
const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, roadmapPath)
const alternateUrl = canonicalUrl(config.public.siteUrl, alternatePath)
const ogImage = absoluteUrl(config.public.siteUrl, content.seo.image)
const breadcrumbItems = isEnglish
  ? [
      { label: 'Apps', to: '/en/apps/' },
      { label: 'DuoSpend', to: productPath },
      { label: 'Roadmap' },
    ]
  : [
      { label: 'Accueil', to: '/' },
      { label: 'Apps', to: '/apps/' },
      { label: 'DuoSpend', to: productPath },
      { label: 'Roadmap' },
    ]
const breadcrumbSchema = buildBreadcrumbSchema(
  config.public.siteUrl,
  isEnglish
    ? [
        { name: 'Apps', path: '/en/apps/' },
        { name: 'DuoSpend', path: productPath },
        { name: 'Roadmap', path: roadmapPath },
      ]
    : [
        { name: 'Accueil', path: '/' },
        { name: 'Apps', path: '/apps/' },
        { name: 'DuoSpend', path: productPath },
        { name: 'Roadmap', path: roadmapPath },
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
  htmlAttrs: { lang: locale },
  link: [
    { rel: 'canonical', href: pageUrl },
    {
      rel: 'alternate',
      hreflang: isEnglish ? 'fr' : 'en',
      href: alternateUrl,
    },
    {
      rel: 'alternate',
      hreflang: locale,
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
  max-width: 50rem;
  padding: clamp(1rem, 3vw, 2rem) 0 clamp(2rem, 5vw, 3.5rem);
}

.updates-eyebrow {
  margin: 0 0 0.75rem;
  color: $vert;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.updates-hero h1 {
  margin: 0;
  color: $gris1;
  font-size: clamp(3rem, 7vw, 5.6rem);
  line-height: 0.94;
  letter-spacing: -0.055em;
}

.updates-intro,
.updates-note,
.section-heading > p,
.roadmap-section--later > p,
.roadmap-card p {
  color: $gris2;
  line-height: 1.7;
}

.updates-intro {
  margin: 1rem 0 0;
}

.updates-note {
  margin: 0.8rem 0 0;
  color: $gris3;
  font-size: 0.9rem;
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

.roadmap-section {
  margin-top: clamp(2rem, 5vw, 3rem);
  padding: clamp(1.2rem, 3vw, 1.8rem);
  border-radius: 1.35rem;
  background: rgba(248, 249, 250, 0.82);
}

.roadmap-section--next {
  border: 1px solid rgba(13, 199, 99, 0.25);
}

.section-heading h2,
.roadmap-section > h2 {
  margin: 0;
  color: $gris1;
  font-size: clamp(1.6rem, 3.5vw, 2.3rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
}

.roadmap-grid {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.25rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.roadmap-grid--compact {
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.roadmap-card {
  padding: 1rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.9);
}

.roadmap-card h3 {
  margin: 0;
  color: $gris1;
  font-size: 1.05rem;
}

.roadmap-card .roadmap-card__status {
  margin: 0 0 0.45rem;
  color: $vert;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

.roadmap-card p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
}

.roadmap-section--later {
  border-left: 4px solid $vert;
}

.roadmap-section--principles ul {
  display: grid;
  gap: 0.65rem;
  margin: 1rem 0 0;
  padding-left: 1.2rem;
  color: $gris2;
}

.roadmap-section--idea {
  display: grid;
  gap: 1.25rem;

  @media (min-width: 900px) {
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    align-items: start;
  }
}

.updates-final {
  margin-top: clamp(2rem, 5vw, 3rem);
  padding: clamp(1.2rem, 3vw, 1.75rem);
  border-radius: 1.35rem;
  background: linear-gradient(135deg, #111827, #0f172a);
}
</style>
