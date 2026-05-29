<template>
  <main class="apps-index">
    <div class="apps-shell">
      <AppBreadcrumb :items="breadcrumbItems" />

      <section class="apps-hero">
        <div class="apps-hero__copy">
          <p class="apps-hero__eyebrow">Apps</p>
          <h1>{{ appsIndexContent.heroTitle }}</h1>
          <p class="apps-hero__intro">{{ appsIndexContent.heroSubtitle }}</p>
          <p class="apps-hero__proof">{{ appsIndexContent.proofLine.join(' · ') }}</p>
          <div class="apps-hero__actions">
            <AppLink to="/apps/focus-one/" class="apps-hero__action">
              Découvrir FocusOne
            </AppLink>
            <AppLink to="/apps/duo-spend/" class="apps-hero__action apps-hero__action--soft">
              Voir DuoSpend
            </AppLink>
          </div>
        </div>
      </section>

      <section class="apps-section" aria-labelledby="apps-featured-title">
        <div class="apps-section__heading">
          <h2 id="apps-featured-title" class="apps-section__title">
            Deux usages très concrets
          </h2>
          <p>
            Les deux apps les plus directes : tenir une habitude, clarifier des
            dépenses à deux.
          </p>
        </div>

        <div class="apps-feature-stack">
          <article class="apps-feature-row apps-feature-row--focus">
            <AppLink
              v-if="focusOneApp?.preview.src"
              :to="focusOneApp.href"
              class="apps-feature-row__media"
              aria-label="Découvrir FocusOne"
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
              <h3>Tenir une habitude.</h3>
              <p>
                Un compteur privé pour choisir une seule routine, la cocher
                aujourd’hui et garder la série visible.
              </p>
              <AppLink to="/apps/focus-one/" class="apps-feature-row__link">
                Découvrir FocusOne
              </AppLink>
            </div>
          </article>

          <article class="apps-feature-row apps-feature-row--duo">
            <AppLink
              v-if="duoSpendApp?.preview.src"
              :to="duoSpendApp.href"
              class="apps-feature-row__media"
              aria-label="Découvrir DuoSpend"
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
              <h3>Clarifier les dépenses à deux.</h3>
              <p>
                Ajoutez les dépenses d’un projet commun, voyez qui a payé quoi,
                équilibrez simplement.
              </p>
              <AppLink to="/apps/duo-spend/" class="apps-feature-row__link">
                Découvrir DuoSpend
              </AppLink>
            </div>
          </article>
        </div>
      </section>

      <section class="apps-manifesto" aria-labelledby="apps-manifesto-title">
        <h2 id="apps-manifesto-title" class="apps-manifesto__title">
          {{ appsIndexContent.manifestoTitle }}
        </h2>
        <p class="apps-manifesto__body">
          Une app BeAbot doit rester courte dans votre journée. Vous l’ouvrez
          pour une action précise : cocher une habitude, ajouter une dépense,
          lancer une séance, préparer votre Mac. L’action est faite, l’app peut
          disparaître.
        </p>
        <ol class="apps-manifesto__steps">
          <li>Ouvrir pour une action claire.</li>
          <li>Faire sans chercher dans les menus.</li>
          <li>Fermer sans être retenu.</li>
        </ol>
      </section>

      <section
        class="apps-section apps-section--secondary"
        aria-labelledby="apps-other-title"
      >
        <div class="apps-section__heading">
          <h2 id="apps-other-title" class="apps-section__title">
            Pratiquer, préparer
          </h2>
          <p>
            Même logique pour la méditation et les réunions : un cadre clair,
            peu de manipulations, pas de bruit autour.
          </p>
        </div>

        <div class="apps-compact-grid">
          <article class="apps-compact-item">
            <AppLink
              v-if="situremApp?.preview.src"
              :to="situremApp.href"
              class="apps-compact-item__media"
              aria-label="Découvrir Siturem"
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
              <h3>Un cadre stable pour méditer.</h3>
              <AppLink to="/apps/siturem/" class="apps-compact-item__link">
                Découvrir Siturem
              </AppLink>
            </div>
          </article>

          <article class="apps-compact-item">
            <AppLink
              v-if="meetingModeApp?.preview.src"
              :to="meetingModeApp.href"
              class="apps-compact-item__media"
              aria-label="Découvrir Meeting Mode"
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
              <h3>Préparer le Mac avant une réunion.</h3>
              <AppLink to="/apps/meeting-mode/" class="apps-compact-item__link">
                Découvrir Meeting Mode
              </AppLink>
            </div>
          </article>
        </div>
      </section>

      <section class="apps-final-cta" aria-labelledby="apps-final-cta-title">
        <h2 id="apps-final-cta-title" class="apps-final-cta__title">
          Chaque app a sa page dédiée.
        </h2>
        <p class="apps-final-cta__body">
          Chaque page présente les captures, les tarifs et les informations
          pratiques.
        </p>
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
          <AppLink to="/apps/meeting-mode/" class="apps-final-cta__link">
            Préparer une réunion
          </AppLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import AppBreadcrumb from '~/components/apps/AppBreadcrumb.vue'

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

const focusOneApp = appsIndexEntries.find((app) => app.slug === 'focus-one')
const duoSpendApp = appsIndexEntries.find((app) => app.slug === 'duo-spend')
const situremApp = appsIndexEntries.find((app) => app.slug === 'siturem')
const meetingModeApp = appsIndexEntries.find((app) => app.slug === 'meeting-mode')

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
  gap: 0.55rem;
}

.apps-final-cta__link {
  display: inline-flex;
  align-items: center;
  min-height: 2.2rem;
  padding: 0.36rem 0.7rem;
  border-radius: 0.62rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  color: $gris2;
  text-decoration: none;
  font-weight: 700;
  transition:
    border-color 0.16s ease,
    color 0.16s ease;
}

.apps-final-cta__link:hover {
  border-color: rgba(13, 199, 99, 0.34);
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
