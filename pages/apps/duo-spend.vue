<template>
  <main class="app-page app-page--duo-spend">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />
      <p class="app-locale-switch">
        <AppLink to="/en/apps/duo-spend/">English version</AppLink>
      </p>

      <section class="app-hero">
        <div class="app-hero__content">
          <p class="app-meta">{{ duoSpendContent.stage }}</p>
          <h1>{{ duoSpendContent.name }} — {{ duoSpendContent.intro }}</h1>
          <div class="app-hero__text">
            <p
              v-for="line in duoSpendContent.heroLines ?? [
                duoSpendContent.summary,
              ]"
              :key="line"
              class="app-intro"
            >
              {{ line }}
            </p>
          </div>

          <div class="app-actions">
            <a
              v-if="duoSpendContent.appStoreUrl"
              :href="duoSpendContent.appStoreUrl"
              class="app-store-badge-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Download-on-the-App-Store/FR/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg"
                alt="Télécharger dans l’App Store"
                width="127"
                height="40"
                class="app-store-badge"
              />
            </a>
            <AppLink to="#duo-overview-title" class="app-cta__link">
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
              :aria-label="duoSpendContent.preview.alt"
            >
              <img
                :src="duoSpendContent.preview.src"
                :alt="duoSpendContent.preview.alt"
                width="1206"
                height="2622"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        class="app-surface app-surface--lead"
        aria-labelledby="duo-overview-title"
      >
        <div class="app-surface__copy">
          <h2 id="duo-overview-title">Pour les projets qu’on partage à deux</h2>
          <p v-for="paragraph in duoSpendContent.overview" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <aside class="app-brief" aria-label="En bref">
          <p class="app-brief__eyebrow">En bref</p>
          <ul class="app-brief__list">
            <li>Pour les dépenses d’un projet à deux.</li>
            <li>Chacun ajoute ce qu’il a payé.</li>
            <li>L’équilibre reste visible sans tableur.</li>
            <li>Aucune banque connectée, aucun compte requis.</li>
          </ul>
        </aside>
      </section>

      <section
        v-if="duoSpendContent.showVisual"
        class="app-section app-section--media"
        aria-labelledby="duo-capture-title"
      >
        <div class="section-heading">
          <h2 id="duo-capture-title">Visuel</h2>
          <p>Aperçu du produit en attente du visuel final.</p>
        </div>

        <div class="app-capture app-capture--image">
          <div class="app-capture__bar" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            class="app-capture__screen app-capture__screen--image"
            role="img"
            :aria-label="duoSpendContent.preview.alt"
          >
            <img
              :src="duoSpendContent.preview.src"
              :alt="duoSpendContent.preview.alt"
              width="1206"
              height="2622"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section
        class="app-section app-section--tone"
        aria-labelledby="duo-details-title"
      >
        <div class="section-heading">
          <h2 id="duo-details-title">Points clés</h2>
          <p>Les repères pour garder des comptes clairs, sans tableur.</p>
        </div>

        <div class="detail-grid">
          <article
            v-for="point in duoSpendContent.detailPoints"
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
        v-if="duoSpendContent.gallery?.length"
        class="app-section app-section--media"
        aria-labelledby="duo-gallery-title"
      >
        <div class="section-heading">
          <h2 id="duo-gallery-title">L'app en images</h2>
          <p>Les principaux écrans de DuoSpend.</p>
        </div>

        <div class="gallery-grid">
          <figure
            v-for="(image, index) in duoSpendContent.gallery"
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
              />
            </div>
            <figcaption class="gallery-card__caption">
              <span class="gallery-card__title">{{ image.title }}</span>
              <span class="gallery-card__subtitle">{{ image.subtitle }}</span>
            </figcaption>
          </figure>
        </div>

        <AppGalleryLightbox ref="lightbox" :images="duoSpendContent.gallery" />
      </section>

      <section
        v-if="duoSpendContent.appStoreUrl"
        class="app-download-cta"
        aria-labelledby="duo-download-title"
      >
        <div class="app-download-cta__copy">
          <h2 id="duo-download-title">Essayez DuoSpend gratuitement</h2>
          <p>
            Téléchargez l’app, créez un premier projet partagé, puis passez à
            DuoSpend Pro si vous avez besoin de projets illimités, de widgets et
            de l’export PDF.
          </p>
        </div>
        <a
          :href="duoSpendContent.appStoreUrl"
          class="app-store-badge-link app-store-badge-link--dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Download-on-the-App-Store/FR/Download_on_App_Store/White_lockup/SVG/Download_on_the_App_Store_Badge_FR_RGB_wht_100217.svg"
            alt="Télécharger dans l’App Store"
            width="127"
            height="40"
            class="app-store-badge"
          />
        </a>
      </section>

      <section
        v-if="duoSpendContent.pricing"
        class="app-section app-section--pricing"
        aria-labelledby="duo-pricing-title"
      >
        <div class="section-heading">
          <h2 id="duo-pricing-title">{{ duoSpendContent.pricing.title }}</h2>
          <p>{{ duoSpendContent.pricing.intro }}</p>
        </div>

        <div class="pricing-grid">
          <article
            v-for="plan in duoSpendContent.pricing.plans"
            :key="plan.name"
            class="pricing-card"
            :class="{
              'pricing-card--featured': plan.name === 'DuoSpend Pro',
            }"
          >
            <div
              v-if="plan.name === 'DuoSpend Pro'"
              class="pricing-card__badge"
            >
              Recommandé
            </div>
            <p class="pricing-card__name">{{ plan.name }}</p>
            <p class="pricing-card__price">{{ plan.price }}</p>
            <p class="pricing-card__summary">{{ plan.description }}</p>
            <ul class="pricing-card__list">
              <li v-for="item in plan.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section
        class="app-section app-section--faq"
        aria-labelledby="duo-faq-title"
      >
        <div class="faq-wrapper">
          <div class="section-heading">
            <h2 id="duo-faq-title">FAQ</h2>
            <p>Questions fréquentes.</p>
          </div>

          <AppFaqList
            :items="duoSpendContent.faq"
            :sections="duoSpendContent.faqSections"
          />
        </div>
      </section>

      <div class="app-final-separator" aria-hidden="true"></div>

      <AppSupportSection
        app-name="DuoSpend"
        app-slug="duo-spend"
        locale="fr"
        os-label-fr="iOS ou iPadOS"
        os-label-en="iOS or iPadOS"
      />

      <section
        id="privacy"
        class="app-section app-section--legal"
        aria-labelledby="duo-legal-title"
      >
        <details ref="privacyDetails" class="legal-disclosure">
          <summary class="legal-disclosure__summary">
            <div class="legal-disclosure__header">
              <h2 id="duo-legal-title" class="legal-disclosure__title">
                Confidentialité
              </h2>
              <p class="legal-disclosure__meta">
                Politique de confidentialité — FR
              </p>
            </div>
            <span class="legal-disclosure__toggle" aria-hidden="true"></span>
          </summary>

          <div class="legal-disclosure__body">
            <AppLegalSingleLocale
              :title="duoSpendContent.legal.fr.title"
              :paragraphs="duoSpendContent.legal.fr.paragraphs"
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
  duoSpendContent,
} from '~/data/apps'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const route = useRoute()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps/duo-spend')
const ogImage = absoluteUrl(config.public.siteUrl, duoSpendContent.seo.image)
const privacyDetails = ref<HTMLDetailsElement | null>(null)
const lightbox = ref<InstanceType<typeof AppGalleryLightbox> | null>(null)

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

const faqSchema = buildFaqSchema(duoSpendContent.faq)
const softwareApplicationSchema = buildSoftwareApplicationSchema({
  name: duoSpendContent.name,
  description:
    'DuoSpend est une app iOS pour suivre les dépenses partagées à deux, savoir qui a payé quoi et équilibrer les comptes simplement.',
  url: pageUrl,
  operatingSystem: 'iOS',
  applicationCategory: 'FinanceApplication',
  image: ogImage,
  offers: [
    {
      name: 'DuoSpend',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Téléchargement gratuit sur l’App Store.',
    },
  ],
  author: {
    name: 'Benoît Abot',
    url: canonicalUrl(config.public.siteUrl, '/'),
  },
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
  title: duoSpendContent.seo.title,
  description: duoSpendContent.seo.description,
  ogTitle: 'DuoSpend — Les dépenses partagées, enfin claires',
  ogDescription:
    'Une app simple pour savoir qui a payé quoi, équilibrer les comptes et éviter les calculs à la main.',
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterTitle: duoSpendContent.seo.title,
  twitterDescription: duoSpendContent.seo.description,
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
      href: canonicalUrl(config.public.siteUrl, '/en/apps/duo-spend'),
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: canonicalUrl(config.public.siteUrl, '/en/apps/duo-spend'),
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
@use '~/assets/css/vars/_colors.scss' as *;
@use '~/assets/css/vars/_typo.scss' as *;
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

.app-hero__text {
  display: grid;
  gap: 0.7rem;
  margin-top: 0.95rem;
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
  margin: 0;
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

.app-store-badge-link,
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

.app-store-badge-link {
  padding: 0;
  border-radius: 0.6rem;
  background: transparent;
}

.app-store-badge-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);
}

.app-store-badge-link--dark:hover {
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.22);
}

.app-store-badge {
  display: block;
  width: auto;
  height: 2.9rem;
  max-width: 100%;
}

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

.app-store-badge-link:focus-visible,
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

.app-surface--lead {
  border: 1px solid rgba(15, 23, 42, 0.08);
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
  padding: 0.72rem 0.78rem;
  border-radius: 0.8rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(247, 249, 250, 0.82);
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

.app-section--tone {
  padding: clamp(1.05rem, 2.5vw, 1.35rem);
  border-radius: 1.15rem;
  background: rgba(245, 247, 248, 0.72);
}

.app-section--media {
  padding-top: clamp(0.35rem, 1vw, 0.7rem);
}

.app-section--pricing {
  padding-top: clamp(0.45rem, 1.2vw, 0.85rem);
}

.app-download-cta {
  display: grid;
  gap: 1.1rem;
  align-items: center;
  margin-top: clamp(2rem, 5vw, 3rem);
  padding: clamp(1.25rem, 3vw, 1.75rem);
  border-radius: 1.35rem;
  background: linear-gradient(135deg, #111827, #0f172a);
  color: white;

  @media (min-width: 760px) {
    grid-template-columns: minmax(0, 1fr) auto;
  }
}

.app-download-cta__copy {
  display: grid;
  gap: 0.45rem;
}

.app-download-cta h2 {
  margin: 0;
  color: white;
  font-size: clamp(1.45rem, 3vw, 2rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.app-download-cta p {
  margin: 0;
  max-width: 44rem;
  color: rgba(255, 255, 255, 0.78);
  line-height: 1.6;
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

.legal-disclosure {
  margin: 0;
  border-radius: 1.35rem;
  background: rgba(243, 244, 246, 0.82);
  border: 1px solid rgba(15, 23, 42, 0.05);
  overflow: hidden;
}

.legal-disclosure__summary {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: center;
  padding: 1.15rem 1.25rem;
  cursor: pointer;
  list-style: none;
  transition: background-color 0.14s ease;

  &::-webkit-details-marker {
    display: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.54);
  }
}

.legal-disclosure__header {
  display: grid;
  gap: 0.22rem;
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
  position: relative;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: rgba(13, 217, 79, 0.12);
  border: 1px solid rgba(13, 217, 79, 0.2);
}

.legal-disclosure__toggle::before,
.legal-disclosure__toggle::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0.8rem;
  height: 1.5px;
  border-radius: 999px;
  background: $vert;
  transform: translate(-50%, -50%);
  transition:
    transform 0.14s ease,
    opacity 0.14s ease;
}

.legal-disclosure__toggle::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.legal-disclosure[open] .legal-disclosure__toggle::after {
  opacity: 0;
  transform: translate(-50%, -50%) rotate(90deg) scaleX(0.35);
}

.legal-disclosure[open] .legal-disclosure__toggle {
  background: rgba(13, 217, 79, 0.18);
  transform: translateY(-1px);
}

.legal-disclosure__body {
  padding: 0 1.25rem 1.25rem;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
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
  padding: 0.95rem 0;
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  align-content: start;
}

.detail-card--featured {
  @media (min-width: 700px) {
    grid-row: span 2;
    border-top-color: rgba(13, 199, 99, 0.35);
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

.pricing-grid {
  display: grid;
  gap: 0.75rem;

  @media (min-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.pricing-card {
  display: grid;
  gap: 0.65rem;
  padding: 1rem 0 0;
  border-top: 1px solid rgba(15, 23, 42, 0.1);
  position: relative;
}

.pricing-card--featured {
  border-top: 2px solid rgba(13, 199, 99, 0.65);
}

.pricing-card__badge {
  position: absolute;
  top: -0.7rem;
  right: 0;
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
  background: $vert;
  color: white;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pricing-card__name {
  margin: 0;
  color: $vert;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.pricing-card__price {
  margin: 0;
  color: $gris1;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
}

.pricing-card__summary {
  margin: 0;
  color: $gris2;
  line-height: 1.65;
}

.pricing-card__list {
  display: grid;
  gap: 0.35rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pricing-card__list li {
  position: relative;
  padding-left: 1rem;
  color: $gris2;
  line-height: 1.6;
}

.pricing-card__list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: $vert;
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
