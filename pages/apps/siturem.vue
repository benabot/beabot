<template>
  <main class="app-page">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="app-hero">
        <div class="app-hero__content">
          <p class="app-meta">
            {{ situremContent.stage }}
          </p>
          <h1>{{ situremContent.name }}</h1>
          <p class="app-intro">
            {{ situremContent.intro }}
          </p>
          <p class="app-summary">
            {{ situremContent.summary }}
          </p>

          <div class="app-actions">
            <AppLink
              to="#release-form"
              class="app-primary-action"
            >
              Être informé
            </AppLink>
            <NuxtLink
              to="/contact/"
              class="app-secondary-action app-detail__contact-cta"
            >
              Une question ? Contactez-moi
            </NuxtLink>
          </div>
        </div>

        <div class="app-hero__visual">
          <div class="app-mockup app-mockup--dark">
            <div
              class="app-mockup__bar"
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </div>
            <div
              class="app-mockup__screen app-mockup__screen--image"
              role="img"
              :aria-label="situremContent.preview.alt"
            >
              <img
                :src="situremContent.preview.src"
                :alt="situremContent.preview.alt"
                width="1206"
                height="2622"
                loading="eager"
                decoding="async"
              >
            </div>
          </div>
        </div>
      </section>

      <section
        class="app-surface"
        aria-labelledby="siturem-overview-title"
      >
        <div class="app-surface__copy">
          <h2 id="siturem-overview-title">
            Le problème
          </h2>
          <p
            v-for="paragraph in situremContent.overview"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="app-surface__status">
          <p class="app-surface__eyebrow">
            Repères
          </p>
          <dl class="app-surface__list app-surface__list--cards">
            <div>
              <dt>Usage</dt>
              <dd>Pratique autonome</dd>
            </div>
            <div>
              <dt>Structure</dt>
              <dd>3 phases fixes</dd>
            </div>
            <div>
              <dt>Données</dt>
              <dd>Local + HealthKit optionnel</dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        class="app-section"
        aria-labelledby="siturem-details-title"
      >
        <div class="section-heading">
          <h2 id="siturem-details-title">
            Points clés
          </h2>
          <p>
            Les repères utiles pour comprendre le produit sans le transformer en
            catalogue de fonctions.
          </p>
        </div>

        <div class="detail-grid">
          <article
            v-for="point in situremContent.detailPoints"
            :key="point.label"
            class="detail-card"
            :class="{ 'detail-card--featured': point.featured }"
          >
            <p class="detail-card__label">
              {{ point.label }}
            </p>
            <p class="detail-card__value">
              {{ point.value }}
            </p>
            <p
              v-if="point.description"
              class="detail-card__description"
            >
              {{ point.description }}
            </p>
          </article>
        </div>
      </section>

      <section
        v-if="situremContent.gallery?.length"
        class="app-section"
        aria-labelledby="siturem-gallery-title"
      >
        <div class="section-heading">
          <h2 id="siturem-gallery-title">
            L'app en images
          </h2>
          <p>
            Quelques écrans pour voir comment Siturem met la structure au
            premier plan, puis s'efface.
          </p>
        </div>

        <div class="gallery-grid">
          <figure
            v-for="(image, index) in situremContent.gallery"
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
                width="1206"
                height="2622"
                loading="lazy"
                decoding="async"
              >
            </div>
            <figcaption class="gallery-card__caption">
              <span class="gallery-card__title">{{ image.title }}</span>
              <span class="gallery-card__subtitle">{{ image.subtitle }}</span>
            </figcaption>
          </figure>
        </div>

        <AppGalleryLightbox
          ref="lightbox"
          :images="situremContent.gallery"
        />
      </section>

      <section
        class="app-section app-section--faq"
        aria-labelledby="siturem-faq-title"
      >
        <div class="faq-wrapper">
          <div class="section-heading">
            <h2 id="siturem-faq-title">
              FAQ
            </h2>
            <p>
              Questions fréquentes autour de l’usage, du positionnement et de la
              sortie de l’app.
            </p>
          </div>

          <AppFaqList
            :items="situremContent.faq"
            :sections="situremContent.faqSections"
          />
        </div>
      </section>

      <section
        id="privacy"
        class="app-section app-section--legal"
        aria-labelledby="siturem-legal-title"
      >
        <details
          ref="privacyDetails"
          class="legal-disclosure"
        >
          <summary class="legal-disclosure__summary">
            <div class="legal-disclosure__header">
              <h2
                id="siturem-legal-title"
                class="legal-disclosure__title"
              >
                Confidentialité
              </h2>
              <p class="legal-disclosure__meta">
                Politique de confidentialité — FR / EN / ES / DE
              </p>
            </div>
            <span
              class="legal-disclosure__toggle"
              aria-hidden="true"
            />
          </summary>

          <div class="legal-disclosure__body">
            <AppLegalTabs
              base-id="siturem-legal"
              :content="situremContent.legal"
              label="Confidentialité"
            />
          </div>
        </details>
      </section>

      <section
        id="release-form"
        class="app-cta"
        aria-labelledby="siturem-cta-title"
      >
        <div class="app-cta__heading">
          <h2 id="siturem-cta-title">
            {{ situremContent.cta.title }}
          </h2>
          <p>{{ situremContent.cta.description }}</p>
        </div>

        <AppReleaseInterestForm :app-name="situremContent.name" />

        <AppLink
          :to="situremContent.cta.secondaryTo"
          class="app-cta__link"
        >
          {{ situremContent.cta.secondaryLabel }}
        </AppLink>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'
import AppGalleryLightbox from '~/components/apps/AppGalleryLightbox.vue'
import AppFaqList from '~/components/apps/AppFaqList.vue'
import AppLegalTabs from '~/components/apps/AppLegalTabs.vue'
import AppReleaseInterestForm from '~/components/apps/AppReleaseInterestForm.vue'

import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildSoftwareApplicationSchema,
  situremContent,
} from '~/data/apps'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const route = useRoute()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps/siturem')
const ogImage = absoluteUrl(config.public.siteUrl, situremContent.seo.image)
const privacyDetails = ref<HTMLDetailsElement | null>(null)
const lightbox = ref<InstanceType<typeof AppGalleryLightbox> | null>(null)

const breadcrumbItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Apps', to: '/apps/' },
  { label: 'Siturem' },
]

const breadcrumbSchema = buildBreadcrumbSchema(config.public.siteUrl, [
  { name: 'Accueil', path: '/' },
  { name: 'Apps', path: '/apps/' },
  { name: 'Siturem', path: '/apps/siturem/' },
])

const faqSchema = buildFaqSchema(situremContent.faq)
const softwareApplicationSchema = buildSoftwareApplicationSchema({
  name: situremContent.name,
  description: situremContent.seo.description,
  url: pageUrl,
  operatingSystem: 'iOS',
  applicationCategory: 'HealthApplication',
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
  title: situremContent.seo.title,
  description: situremContent.seo.description,
  ogTitle: situremContent.seo.title,
  ogDescription: situremContent.seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  twitterTitle: situremContent.seo.title,
  twitterDescription: situremContent.seo.description,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
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
    {
      type: 'application/ld+json',
      children: JSON.stringify(softwareApplicationSchema),
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

.app-surface__list {
  display: grid;
  gap: 0.9rem;
  margin: 0;
}

.app-surface__list--cards {
  gap: 0.75rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.app-surface__list--cards div {
  padding: 0.85rem 0.9rem;
  border-radius: 0.95rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(15, 23, 42, 0.05);
}

.app-surface__list div {
  display: grid;
  gap: 0.2rem;
}

.app-surface__list dt {
  color: $gris3;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-surface__list dd {
  margin: 0;
  color: $gris1;
  font-weight: 600;
  line-height: 1.45;
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

.app-capture__screen--image {
  padding: 1rem;
}

.app-capture__screen--image img {
  max-width: 100%;
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
  aspect-ratio: 9 / 19.5;
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
  padding: 0.7rem 0.8rem 0.85rem;
}

.gallery-card__title {
  color: $gris1;
  font-weight: 700;
}

.gallery-card__subtitle {
  color: $gris3;
  font-size: 0.92rem;
  line-height: 1.45;
}

.detail-grid {
  display: grid;
  gap: 0.85rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 980px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
}

.detail-card {
  display: grid;
  align-content: start;
  gap: 0.45rem;
  min-height: 100%;
  padding: 1rem;
  border-radius: 1.15rem;
  background: rgba(243, 244, 246, 0.72);
}

.detail-card--featured {
  background: rgba(4, 217, 79, 0.08);
  border: 1px solid rgba(4, 217, 79, 0.16);
}

.detail-card__label {
  margin: 0;
  color: $gris3;
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
  line-height: 1.35;
}

.detail-card__description {
  margin: 0;
  color: $gris2;
  line-height: 1.6;
}

.legal-disclosure {
  overflow: hidden;
  border-radius: 1.35rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(243, 244, 246, 0.72);
}

.legal-disclosure__summary {
  list-style: none;
  cursor: pointer;
}

.legal-disclosure__summary::-webkit-details-marker {
  display: none;
}

.legal-disclosure__header {
  display: grid;
  gap: 0.3rem;
}

.legal-disclosure__summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1.15rem 1rem;
}

.legal-disclosure__title {
  margin: 0;
  color: $gris1;
  font-size: 1.12rem;
  letter-spacing: -0.02em;
}

.legal-disclosure__meta {
  margin: 0;
  color: $gris3;
  font-size: 0.92rem;
  line-height: 1.5;
}

.legal-disclosure__toggle {
  width: 1rem;
  height: 1rem;
  border-right: 2px solid $gris3;
  border-bottom: 2px solid $gris3;
  transform: rotate(45deg);
  transition: transform 0.18s ease;
}

.legal-disclosure[open] .legal-disclosure__toggle {
  transform: rotate(225deg);
}

.legal-disclosure__body {
  padding: 0 1rem 1rem;
}

.app-cta {
  display: grid;
  gap: 1rem;
  margin-top: clamp(2.5rem, 6vw, 4rem);
  padding: clamp(1.35rem, 3vw, 1.8rem);
  border-radius: 1.5rem;
  background: linear-gradient(
    145deg,
    rgba(15, 23, 42, 0.96),
    rgba(31, 41, 55, 0.94)
  );
  color: white;
}

.app-cta__heading {
  display: grid;
  gap: 0.45rem;
}

.app-cta__heading h2,
.app-cta__heading p {
  margin: 0;
}

.app-cta__heading h2 {
  color: white;
}

.app-cta__heading p {
  max-width: 40rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.65;
}
</style>
