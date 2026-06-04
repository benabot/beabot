<template>
  <main class="app-page app-page--meeting-mode">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />
      <p class="app-locale-switch">
        <AppLink to="/en/apps/meeting-mode/">English version</AppLink>
      </p>

      <section class="app-hero">
        <div class="app-hero__content">
          <p class="app-meta">{{ meetingModeContent.stage }}</p>
          <h1>{{ meetingModeContent.name }} — {{ meetingModeContent.summary }}</h1>
          <p class="app-intro">{{ meetingModeContent.intro }}</p>
          <p class="app-summary">{{ meetingModeContent.summary }}</p>

          <div class="app-actions">
            <AppLink to="#meeting-overview-title" class="app-primary-action">
              Voir comment ça marche
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
              class="app-mockup__screen app-mockup__screen--image"
              role="img"
              :aria-label="meetingModeContent.preview.alt"
            >
              <img
                :src="meetingModeContent.preview.src"
                :alt="meetingModeContent.preview.alt"
                width="1280"
                height="800"
                loading="eager"
                decoding="async"
              />
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
        v-if="meetingModeContent.beforeAfter"
        class="app-section"
        aria-labelledby="meeting-before-after-title"
      >
        <div class="section-heading">
          <h2 id="meeting-before-after-title">En pratique</h2>
          <p>{{ meetingModeContent.beforeAfter.caption }}</p>
        </div>

        <div class="before-after-grid">
          <figure class="before-after-card">
            <div class="before-after-card__media">
              <img
                :src="meetingModeContent.beforeAfter.before.src"
                :alt="meetingModeContent.beforeAfter.before.alt"
                width="2858"
                height="1726"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption class="before-after-card__label before-after-card__label--before">
              {{ meetingModeContent.beforeAfter.before.label }}
            </figcaption>
          </figure>

          <figure class="before-after-card">
            <div class="before-after-card__media">
              <img
                :src="meetingModeContent.beforeAfter.after.src"
                :alt="meetingModeContent.beforeAfter.after.alt"
                width="2870"
                height="1808"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption class="before-after-card__label before-after-card__label--after">
              {{ meetingModeContent.beforeAfter.after.label }}
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="app-section" aria-labelledby="meeting-details-title">
        <div class="section-heading">
          <h2 id="meeting-details-title">Points clés</h2>
          <p>Quatre repères pour comprendre le flux de l’app.</p>
        </div>

        <div class="detail-grid">
          <article
            v-for="point in meetingModeContent.detailPoints"
            :key="point.label"
            class="detail-card"
            :class="{ 'detail-card--featured': point.featured }"
          >
            <p class="detail-card__label">{{ point.label }}</p>
            <p class="detail-card__value">{{ point.value }}</p>
            <p v-if="point.description" class="detail-card__description">
              {{ point.description }}
            </p>
          </article>
        </div>
      </section>

      <section
        v-if="meetingModeContent.gallery?.length"
        class="app-section"
        aria-labelledby="meeting-gallery-title"
      >
        <div class="section-heading">
          <h2 id="meeting-gallery-title">L'app en images</h2>
          <p>Les principaux écrans de Meeting Mode.</p>
        </div>

        <div class="gallery-grid">
          <figure
            v-for="(image, index) in meetingModeContent.gallery"
            :key="image.src"
            class="gallery-card gallery-card--clickable"
            role="button"
            tabindex="0"
            :aria-label="`Agrandir : ${image.title || image.alt}`"
            @click="openLightbox(index)"
            @keydown.enter.prevent="openLightbox(index)"
            @keydown.space.prevent="openLightbox(index)"
          >
            <div class="gallery-card__media">
              <img
                :src="image.src"
                :alt="image.alt"
                width="1280"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption class="gallery-card__caption">
              <span class="gallery-card__title">{{ image.title }}</span>
              <span class="gallery-card__subtitle">{{ image.subtitle }}</span>
            </figcaption>
          </figure>
        </div>

        <AppGalleryLightbox
          ref="lightbox"
          :images="meetingModeContent.gallery"
        />
      </section>

      <section class="app-section" aria-labelledby="meeting-faq-title">
        <div class="faq-wrapper">
          <div class="section-heading">
            <h2 id="meeting-faq-title">FAQ</h2>
            <p>Questions fréquentes sur le fonctionnement.</p>
          </div>

          <AppFaqList :items="meetingModeContent.faq" />
        </div>
      </section>

      <AppSupportSection
        app-name="Meeting Mode"
        app-slug="meeting-mode"
        locale="fr"
        os-label-fr="macOS"
        os-label-en="macOS"
      />

      <section
        id="privacy"
        class="app-section app-section--legal"
        aria-labelledby="meeting-legal-title"
      >
        <details ref="privacyDetails" class="legal-disclosure">
          <summary class="legal-disclosure__summary">
            <div class="legal-disclosure__header">
              <h2 id="meeting-legal-title" class="legal-disclosure__title">Confidentialité</h2>
              <p class="legal-disclosure__meta">Politique de confidentialité — FR</p>
            </div>
            <span class="legal-disclosure__toggle" aria-hidden="true"></span>
          </summary>

          <div class="legal-disclosure__body">
            <AppLegalSingleLocale
              :title="meetingModeContent.legal.fr.title"
              :paragraphs="meetingModeContent.legal.fr.paragraphs"
            />
          </div>
        </details>
      </section>

    </div>
  </main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'
import AppGalleryLightbox from '~/components/apps/AppGalleryLightbox.vue'
import AppFaqList from '~/components/apps/AppFaqList.vue'
import AppLegalSingleLocale from '~/components/apps/AppLegalSingleLocale.vue'
import AppSupportSection from '~/components/apps/AppSupportSection.vue'

import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildSoftwareApplicationSchema,
  meetingModeContent,
} from '~/data/apps'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const route = useRoute()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps/meeting-mode')
const ogImage = absoluteUrl(config.public.siteUrl, meetingModeContent.seo.image)
const privacyDetails = ref<HTMLDetailsElement | null>(null)
const lightbox = ref<InstanceType<typeof AppGalleryLightbox> | null>(null)

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
const softwareApplicationSchema = buildSoftwareApplicationSchema({
  name: meetingModeContent.name,
  description: meetingModeContent.seo.description,
  url: pageUrl,
  operatingSystem: 'macOS',
  applicationCategory: 'ProductivityApplication',
  image: ogImage,
})

function openLightbox(index: number) {
  lightbox.value?.open(index)
}

const openPrivacySection = async () => {
  if (route.hash !== '#privacy') {
    return
  }

  await nextTick()

  if (!privacyDetails.value) {
    return
  }

  privacyDetails.value.open = true
  privacyDetails.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}

onMounted(() => {
  void openPrivacySection()
})

watch(
  () => route.hash,
  (hash) => {
    if (hash === '#privacy') {
      void openPrivacySection()
    }
  },
)

useSeoMeta({
  title: meetingModeContent.seo.title,
  description: meetingModeContent.seo.description,
  ogTitle: meetingModeContent.seo.title,
  ogDescription: meetingModeContent.seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: meetingModeContent.seo.title,
  twitterDescription: meetingModeContent.seo.description,
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
      href: canonicalUrl(config.public.siteUrl, '/en/apps/meeting-mode'),
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: canonicalUrl(config.public.siteUrl, '/en/apps/meeting-mode'),
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(softwareApplicationSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
@use "~/assets/css/vars/_typo.scss" as *;
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

.app-locale-switch {
  margin: 0 0 1rem;
  color: $gris3;
  font-size: 0.85rem;
}

.app-locale-switch a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.16em;
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

.app-mockup__screen--image {
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.04),
    rgba(4, 217, 79, 0.06)
  );
}

.app-mockup__screen--image img,
.app-capture__screen--image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 1rem;
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

.before-after-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.before-after-card {
  margin: 0;
  border-radius: 1.15rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.06);
  display: grid;
  grid-template-rows: 1fr auto;
}

.before-after-card__media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.before-after-card__media img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
}

.before-after-card__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.85rem 0.65rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border-top: 1px solid rgba(0, 0, 0, 0.04);

  &::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 999px;
    flex-shrink: 0;
  }
}

.before-after-card__label--before {
  color: $gris2;
  background: rgba(255, 255, 255, 0.96);

  &::before {
    background: $gris3;
  }
}

.before-after-card__label--after {
  color: $vert;
  background: rgba(255, 255, 255, 0.96);

  &::before {
    background: $vert;
  }
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

.gallery-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.gallery-card {
  margin: 0;
  border-radius: 1rem;
  background: rgba(248, 246, 242, 0.95);
  overflow: hidden;
  display: grid;
  grid-template-rows: 1fr auto;
}

.gallery-card--clickable {
  cursor: zoom-in;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
  }

  &:focus-visible {
    outline: 2px solid $vert;
    outline-offset: 3px;
  }
}

.gallery-card__media {
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.gallery-card__media img,
.gallery-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center top;
}

.gallery-card__caption {
  display: grid;
  gap: 0.1rem;
  padding: 0.5rem 0.65rem 0.55rem;
  background: rgba(255, 255, 255, 0.96);
  border-top: 1px solid rgba(0, 0, 0, 0.04);
}

.gallery-card__title {
  display: block;
  margin: 0;
  color: $gris1;
  font-size: 0.74rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.gallery-card__subtitle {
  display: block;
  margin: 0;
  color: $gris3;
  font-size: 0.68rem;
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.detail-grid {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr;

  @media (min-width: 700px) {
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-auto-rows: auto;
  }
}

.detail-card {
  display: grid;
  gap: 0.45rem;
  padding: 1.1rem 1.15rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.92);
  align-content: start;
}

.detail-card--featured {
  @media (min-width: 700px) {
    grid-row: span 2;
    background: rgba(255, 255, 255, 0.98);
    border: 1px solid rgba(13, 199, 99, 0.15);
  }
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
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.detail-card__description {
  margin: 0.35rem 0 0;
  color: $gris2;
  font-size: 0.88rem;
  line-height: 1.65;
}

.faq-wrapper {
  padding: clamp(1.5rem, 3.5vw, 2.25rem) clamp(1.25rem, 3vw, 2rem);
  border-radius: 1.5rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(0, 0, 0, 0.055);
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.faq-wrapper .section-heading {
  margin-bottom: 1.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.legal-disclosure {
  margin: 0;
  border-radius: 1.35rem;
  background: rgba(243, 244, 246, 0.82);
  border: 1px solid rgba(15, 23, 42, 0.05);
  overflow: hidden;
}

.legal-disclosure__summary {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.15rem;
  cursor: pointer;
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }

  &::after {
    content: '+';
    margin-left: auto;
    color: $vert;
    font-size: 1.15rem;
    font-weight: 700;
    line-height: 1;
  }
}

details[open] .legal-disclosure__summary::after {
  content: '−';
}

.legal-disclosure__header {
  display: grid;
  gap: 0.25rem;
}

.legal-disclosure__title {
  margin: 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: $gris1;
}

.legal-disclosure__meta {
  margin: 0;
  color: $gris3;
  font-size: 0.78rem;
}

.legal-disclosure__toggle {
  display: none;
}

.legal-disclosure__body {
  padding: 0 1.25rem 1.25rem;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
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
