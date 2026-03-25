<template>
  <main class="apps-page">
    <section class="apps-hero">
      <div class="apps-hero__inner">
        <p class="apps-kicker">Apps</p>
        <h1>Deux apps macOS et iOS conçues pour des usages précis.</h1>
        <p class="apps-hero__lead">
          Des interfaces sobres, des fonctions ciblées, et une logique simple :
          aider sans ajouter de friction.
        </p>
        <div class="apps-hero__actions">
          <AppLink to="/apps/meeting-mode/" class="apps-btn apps-btn--primary">
            Découvrir Meeting Mode
          </AppLink>
          <AppLink to="/apps/duo-spend/" class="apps-btn apps-btn--secondary">
            Découvrir DuoSpend
          </AppLink>
        </div>
      </div>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section
      class="apps-intro container--page"
      aria-labelledby="apps-intro-title"
    >
      <header class="section-header">
        <h2 id="apps-intro-title" class="section-title">
          Deux usages, deux rythmes
        </h2>
      </header>
      <div class="apps-intro__grid">
        <p v-for="sentence in appsLandingIntro" :key="sentence">
          {{ sentence }}
        </p>
      </div>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section
      class="apps-showcases container--page"
      aria-labelledby="apps-showcase-title"
    >
      <header class="section-header">
        <h2 id="apps-showcase-title" class="section-title">Pages d’apps</h2>
        <p class="section-description">
          Une présentation claire pour comprendre le besoin, le périmètre et le
          ton de chaque produit.
        </p>
      </header>

      <div class="apps-showcases__list">
        <AppShowcaseCard
          v-for="(app, index) in appsLandingEntries"
          :key="app.slug"
          :app="app"
          :reversed="index % 2 === 1"
        />
      </div>
    </section>

    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <section
      class="apps-footer-note container--page"
      aria-labelledby="apps-footer-note-title"
    >
      <div class="apps-footer-note__panel">
        <div>
          <p class="apps-kicker apps-kicker--small">Pourquoi ces apps</p>
          <h2 id="apps-footer-note-title" class="section-title">
            Du natif quand le contexte l’exige, du local quand c’est pertinent.
          </h2>
        </div>

        <div class="apps-footer-note__columns">
          <p>
            Le choix du natif sert ici l’usage concret&nbsp;: intégration plus
            directe, lecture plus stable, moins de couches inutiles entre
            l’utilisateur et l’action à faire.
          </p>
          <p>
            Quand une donnée peut rester sur l’appareil ou dans les services
            explicitement choisis par l’utilisateur, c’est la piste privilégiée.
            Cela ne remplace pas une politique de confidentialité claire, mais
            cela évite déjà beaucoup d’intermédiaires.
          </p>
        </div>

        <div class="apps-footer-note__links">
          <AppLink to="/eco-conception/" class="apps-inline-link">
            Lire le blog
          </AppLink>
          <AppLink to="/portfolio/" class="apps-inline-link">
            Voir le portfolio
          </AppLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { appsLandingEntries, appsLandingIntro } from '~/data/apps'
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/apps')

const landingSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Apps',
  description: 'Deux apps macOS et iOS conçues pour des usages précis.',
  url: pageUrl,
  inLanguage: 'fr-FR',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: appsLandingEntries.length,
    itemListElement: appsLandingEntries.map((app, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: canonicalUrl(config.public.siteUrl, app.href),
      name: app.name,
    })),
  },
}

useSeoMeta({
  title: 'Apps — Deux apps macOS et iOS conçues pour des usages précis',
  description:
    'Pages de présentation de deux apps conçues pour des usages concrets : préparer un Mac avant une réunion et suivre un budget partagé à deux.',
  ogTitle: 'Apps — Deux apps macOS et iOS conçues pour des usages précis',
  ogDescription:
    'Meeting Mode et DuoSpend : deux apps pensées pour des tâches précises, avec une approche sobre, locale quand possible, et sans jargon inutile.',
  ogType: 'website',
  ogUrl: pageUrl,
  twitterTitle: 'Apps — BeAbot',
  twitterDescription:
    'Deux apps conçues pour des usages précis : Meeting Mode et DuoSpend.',
  twitterCard: 'summary_large_image',
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
      children: JSON.stringify(landingSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
.apps-page {
  --apps-space-1: 0.7rem;
  --apps-space-2: 1.1rem;
  --apps-space-3: 1.8rem;
  --apps-space-4: 3rem;
  --apps-space-5: 4.8rem;
  --apps-space-6: 7.2rem;
  padding-bottom: var(--apps-space-6);
}

.apps-hero {
  width: 100%;
  padding: clamp(6rem, 14vw, 9rem) 5% clamp(4rem, 8vw, 6rem);
  background:
    linear-gradient(
      180deg,
      rgba(248, 250, 252, 0.96),
      rgba(248, 250, 252, 0.86)
    ),
    linear-gradient(135deg, rgba(4, 57, 217, 0.06), rgba(13, 199, 99, 0.05));
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);

  @media (min-width: $breakpoint-tablet) {
    padding-inline: 10%;
  }
}

.apps-hero__inner {
  width: min(100%, 48rem);
}

.apps-kicker {
  margin: 0 0 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: $gris3;
}

.apps-kicker--small {
  margin-bottom: 0.7rem;
}

.apps-hero h1 {
  margin: 0;
  font-size: clamp(2.7rem, 7vw, 6rem);
  line-height: 0.92;
  letter-spacing: -0.03em;
  color: $gris1;
  max-width: 12ch;
}

.apps-hero__lead {
  margin: 1.35rem 0 0;
  max-width: 34rem;
  font-size: clamp(1.05rem, 2.1vw, 1.3rem);
  line-height: 1.7;
  color: $gris2;
}

.apps-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.8rem;
}

.apps-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  font-weight: 700;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease,
    opacity 0.14s ease;
}

.apps-btn--primary {
  background: $vert;
  color: white;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(13, 199, 99, 0.18);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(13, 199, 99, 0.18);
  }
}

.apps-btn--secondary {
  color: $bleu2;
  text-decoration: underline;
  text-underline-offset: 3px;

  &:hover {
    opacity: 0.72;
  }

  &:focus-visible {
    outline: 2px solid $bleu2;
    outline-offset: 4px;
    border-radius: 999px;
  }
}

.apps-intro,
.apps-showcases,
.apps-footer-note {
  width: min(100%, 1100px);
  min-height: auto;
  padding-top: 0;
}

.section-header {
  width: 100%;
  margin-bottom: 2rem;
}

.section-title {
  margin: 0;
  font-size: clamp(1.7rem, 3vw, 2.6rem);
  line-height: 1.02;
  color: $gris1;
}

.section-description {
  margin: 0.8rem 0 0;
  max-width: 42rem;
  color: $gris3;
  line-height: 1.7;
}

.apps-intro__grid {
  display: grid;
  gap: 1rem;

  @media (min-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  p {
    margin: 0;
    padding: 1.4rem 1.5rem;
    border-radius: 1.1rem;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.08);
    color: $gris2;
    line-height: 1.7;
  }
}

.apps-showcases__list {
  display: grid;
  gap: 4rem;
}

.apps-footer-note__panel {
  width: 100%;
  padding: clamp(1.5rem, 4vw, 2.6rem);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.6rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.9),
    rgba(246, 248, 250, 0.88)
  );
}

.apps-footer-note__columns {
  display: grid;
  gap: 1rem;
  margin-top: 1.2rem;

  @media (min-width: 860px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  p {
    margin: 0;
    color: $gris2;
    line-height: 1.75;
  }
}

.apps-footer-note__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.25rem;
  margin-top: 1.4rem;
}

.apps-inline-link {
  display: inline-flex;
  align-items: center;
  font-weight: 700;
  color: $bleu2;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:focus-visible {
    outline: 2px solid $bleu2;
    outline-offset: 4px;
    border-radius: 0.35rem;
  }
}

.timeline-dot {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.4rem 0;
  position: relative;
}

.timeline-dot::before,
.timeline-dot::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 1px;
  height: 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(4, 57, 217, 0.08),
    rgba(13, 199, 99, 0.3)
  );
  transform: translateX(-50%);
}

.timeline-dot::before {
  top: 0;
}

.timeline-dot::after {
  bottom: 0;
}

.timeline-dot__core {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background: $vert;
  box-shadow: 0 0 0 0.45rem rgba(13, 199, 99, 0.13);
}

@media (prefers-reduced-motion: reduce) {
  .apps-btn {
    transition: none;
  }
}
</style>
