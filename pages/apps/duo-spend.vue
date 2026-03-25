<template>
  <main class="app-page">
    <div class="app-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="app-hero">
        <div class="app-hero__content">
          <p class="app-meta">{{ duoSpendContent.stage }}</p>
          <h1>{{ duoSpendContent.name }}</h1>
          <p class="app-intro">{{ duoSpendContent.intro }}</p>
          <p class="app-summary">{{ duoSpendContent.summary }}</p>

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
              class="app-mockup__screen app-mockup__screen--image"
              role="img"
              :aria-label="duoSpendContent.preview.alt"
            >
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
        </div>
      </section>

      <section class="app-surface" aria-labelledby="duo-overview-title">
        <div class="app-surface__copy">
          <h2 id="duo-overview-title">Le problème</h2>
          <p v-for="paragraph in duoSpendContent.overview" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div class="app-surface__status">
          <p class="app-surface__eyebrow">Repères</p>
          <dl class="app-surface__list">
            <div>
              <dt>Usage</dt>
              <dd>Dépenses communes à deux</dd>
            </div>
            <div>
              <dt>Stockage</dt>
              <dd>Local sur iPhone</dd>
            </div>
            <div>
              <dt>Connexion</dt>
              <dd>Hors ligne</dd>
            </div>
          </dl>
        </div>
      </section>

      <section class="app-section" aria-labelledby="duo-capture-title">
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
              width="900"
              height="620"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section class="app-section" aria-labelledby="duo-details-title">
        <div class="section-heading">
          <h2 id="duo-details-title">Points clés</h2>
          <p>Les repères de base pour lire l’app sans la surcharger.</p>
        </div>

        <div class="detail-grid">
          <article
            v-for="point in duoSpendContent.detailPoints"
            :key="point.label"
            class="detail-card"
          >
            <p class="detail-card__label">{{ point.label }}</p>
            <p class="detail-card__value">{{ point.value }}</p>
          </article>
        </div>
      </section>

      <section
        v-if="duoSpendContent.pricing"
        class="app-section"
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
          >
            <p class="pricing-card__name">{{ plan.name }}</p>
            <p class="pricing-card__price">{{ plan.price }}</p>
            <p class="pricing-card__summary">{{ plan.description }}</p>
            <ul class="pricing-card__list">
              <li v-for="item in plan.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="app-section" aria-labelledby="duo-faq-title">
        <div class="section-heading">
          <h2 id="duo-faq-title">FAQ</h2>
          <p>Questions fréquentes.</p>
        </div>

        <AppFaqList :items="duoSpendContent.faq" />
      </section>

      <section class="app-section" aria-labelledby="duo-legal-title">
        <div class="section-heading">
          <h2 id="duo-legal-title">Mentions légales</h2>
          <p>Version provisoire en français et en anglais.</p>
        </div>

        <AppLegalTabs
          base-id="duo-spend-legal"
          :content="duoSpendContent.legal"
          label="Mentions légales"
        />
      </section>

      <section class="app-cta" id="release-form" aria-labelledby="duo-cta-title">
        <div class="app-cta__heading">
          <h2 id="duo-cta-title">{{ duoSpendContent.cta.title }}</h2>
          <p>{{ duoSpendContent.cta.description }}</p>
        </div>

        <AppReleaseInterestForm :app-name="duoSpendContent.name" />

        <p class="app-cta__note">
          Pour toute question, la page DuoSpend reste le point de contact.
        </p>

        <AppLink :to="duoSpendContent.cta.secondaryTo" class="app-cta__link">
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

.app-capture__screen--image {
  padding: 1rem;
}

.app-capture__screen--image img {
  max-width: 100%;
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
  padding: 1.05rem;
  border-radius: 1.15rem;
  background: rgba(255, 255, 255, 0.94);
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

.app-cta__note {
  margin: 0;
  max-width: 34rem;
  color: $gris2;
  line-height: 1.6;
}

.app-cta__link {
  width: fit-content;
}
</style>
