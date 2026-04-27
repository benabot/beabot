<template>
  <main class="services-page">
    <section class="services-hero" aria-labelledby="services-hero-title">
      <div class="services-shell">
        <p class="services-eyebrow">
          <span class="services-dot" aria-hidden="true"></span>
          Développeur web freelance · Disponible
        </p>
        <h1 id="services-hero-title" class="services-title">
          Missions freelance — WordPress, JavaScript (Vue.js), éco-conception
        </h1>
        <p class="services-subtitle">
          15 ans d'expérience web. Je prends en charge les projets WordPress,
          les sites statiques Vue.js et Nuxt, et les audits éco-conception — de
          la conception au déploiement.
        </p>
        <p class="services-geo">Basé à Lille · Hauts-de-France · Remote</p>
        <div class="services-actions">
          <AppLink class="services-btn services-btn--primary" to="/contact/">
            Discutons de votre projet
          </AppLink>
          <AppLink class="services-btn services-btn--secondary" to="/portfolio/">
            Voir mes réalisations
          </AppLink>
        </div>
      </div>
    </section>

    <section class="services-section" aria-labelledby="services-wp-title">
      <div class="services-shell">
        <div class="services-mission">
          <div class="services-mission__header">
            <p class="services-mission__tag">WordPress</p>
            <h2 id="services-wp-title" class="services-mission__title">
              Développement WordPress
            </h2>
            <p class="services-mission__lede">
              Création, migration, refonte et optimisation de sites WordPress
              Gutenberg — sobres, rapides et administrables sans aide technique.
            </p>
          </div>
          <ul class="services-mission__list">
            <li v-for="item in wpItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="services-section services-section--alt"
      aria-labelledby="services-js-title"
    >
      <div class="services-shell">
        <div class="services-mission">
          <div class="services-mission__header">
            <p class="services-mission__tag">JavaScript</p>
            <h2 id="services-js-title" class="services-mission__title">
              Développement Vue.js &amp; Nuxt
            </h2>
            <p class="services-mission__lede">
              Sites statiques (SSG), landing pages et applications légères avec
              Vue.js et Nuxt 3 — performants, éco-conçus, déployables sur un
              hébergement statique.
            </p>
          </div>
          <ul class="services-mission__list">
            <li v-for="item in jsItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="services-section" aria-labelledby="services-audit-title">
      <div class="services-shell">
        <div class="services-mission">
          <div class="services-mission__header">
            <p class="services-mission__tag">Audit</p>
            <h2 id="services-audit-title" class="services-mission__title">
              Audit éco-conception &amp; performance
            </h2>
            <p class="services-mission__lede">
              Analyse de l'empreinte numérique, de la performance et du SEO
              technique de votre site — rapport écrit avec recommandations
              priorisées.
            </p>
          </div>
          <ul class="services-mission__list">
            <li v-for="item in auditItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="services-section services-section--alt"
      aria-labelledby="services-zone-title"
    >
      <div class="services-shell">
        <h2 id="services-zone-title" class="services-section__title">
          Zone d'intervention
        </h2>
        <div class="services-zone-grid">
          <article
            v-for="zone in zones"
            :key="zone.label"
            class="services-zone-card"
          >
            <p class="services-zone-card__label">{{ zone.label }}</p>
            <p>{{ zone.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="services-section" aria-labelledby="services-tarifs-title">
      <div class="services-shell">
        <div class="services-tarifs__intro">
          <h2 id="services-tarifs-title" class="services-section__title">
            Tarifs indicatifs
          </h2>
          <p class="services-tarifs__note">
            Ces fourchettes sont indicatives. Le périmètre exact et le tarif
            final sont définis ensemble au moment du brief.
          </p>
        </div>
        <div class="services-tarifs-grid">
          <article
            v-for="tarif in tarifs"
            :key="tarif.label"
            class="services-tarif-card"
          >
            <p class="services-tarif-card__label">{{ tarif.label }}</p>
            <p class="services-tarif-card__price">{{ tarif.price }}</p>
            <p class="services-tarif-card__detail">{{ tarif.detail }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="services-section services-section--cta"
      aria-labelledby="services-cta-title"
    >
      <div class="services-shell">
        <div class="services-cta">
          <p class="services-eyebrow services-eyebrow--light">Contact</p>
          <h2 id="services-cta-title" class="services-cta__title">
            Un projet à démarrer ?
          </h2>
          <p class="services-cta__text">
            Décrivez votre projet par formulaire ou par mail — je reviens vers
            vous sous 48h.
          </p>
          <div class="services-actions services-actions--centered">
            <AppLink class="services-btn services-btn--primary" to="/contact/">
              Me contacter
            </AppLink>
            <AppLink
              class="services-btn services-btn--ghost"
              to="/portfolio/"
            >
              Voir mes réalisations
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/services')
const ogImage = `${config.public.siteUrl}/beabot.png`

const seo = {
  title: 'Missions freelance — WordPress, Vue.js, éco-conception | BeAbot',
  description:
    "Développeur web freelance à Lille — sites WordPress éco-conçus, Vue.js/Nuxt et audit d'empreinte numérique. Missions en Hauts-de-France et en remote.",
}

const wpItems = [
  'Création de site vitrine ou blog WordPress Gutenberg',
  "Migration, refonte et optimisation d'un site existant",
  "Thème sur mesure ou personnalisation d'un thème sobre (Greenlight)",
  'Optimisation performance : Lighthouse, Core Web Vitals, EcoIndex',
  'SEO technique : structure, balises, sitemap, robots',
  "Formation à l'administration WordPress",
] as const

const jsItems = [
  'Site statique (SSG) avec Nuxt 3, déployable sur Netlify ou Vercel',
  'Landing page ou site vitrine Vue.js',
  "Migration d'un site dynamique vers une architecture statique",
  'Intégration Nuxt Content pour un CMS Markdown',
  'Composants Vue.js sur mesure',
] as const

const auditItems = [
  'Performance : Lighthouse, PageSpeed Insights, Core Web Vitals',
  'Empreinte numérique : EcoIndex, poids de page, requêtes HTTP, DOM',
  'SEO technique : balises, canonicals, données structurées, maillage',
  'Accessibilité : hiérarchie, contrastes, navigation clavier',
  'Rapport écrit avec recommandations priorisées',
] as const

const zones = [
  {
    label: 'Lille & métropole',
    description:
      "Réunions en présentiel possibles pour les briefs, points d'avancement et bilans.",
  },
  {
    label: 'Hauts-de-France',
    description: 'Déplacements ponctuels selon les besoins du projet.',
  },
  {
    label: 'Remote',
    description:
      'Collaboration entièrement à distance — visio, email, outils partagés.',
  },
] as const

const tarifs = [
  {
    label: 'Site WordPress vitrine',
    price: '1 500 – 4 500 €',
    detail: 'Selon périmètre, contenu et niveau de personnalisation.',
  },
  {
    label: 'Site Nuxt / Vue.js SSG',
    price: '2 500 – 7 000 €',
    detail: 'Selon complexité, intégrations et volume de contenu.',
  },
  {
    label: 'Audit éco-conception',
    price: '500 – 1 500 €',
    detail: 'Rapport complet avec recommandations priorisées.',
  },
  {
    label: 'Maintenance & suivi',
    price: '100 – 300 € / mois',
    detail: 'Mises à jour, monitoring, corrections mineures.',
  },
] as const

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Benoît Abot — Développeur web freelance',
  description: seo.description,
  url: pageUrl,
  image: ogImage,
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lille',
    addressRegion: 'Hauts-de-France',
    addressCountry: 'FR',
  },
  areaServed: ['Lille', 'Hauts-de-France'],
  founder: {
    '@type': 'Person',
    name: 'Benoît Abot',
    url: config.public.siteUrl,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Missions freelance web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement WordPress',
          description:
            'Création, refonte et optimisation de sites WordPress Gutenberg éco-conçus.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Vue.js & Nuxt',
          description:
            'Sites statiques SSG, landing pages et applications légères Vue.js/Nuxt 3.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Audit éco-conception & performance',
          description:
            'Analyse EcoIndex, Lighthouse, SEO technique et accessibilité — rapport écrit.',
        },
      },
    ],
  },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'BeAbot',
      item: config.public.siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: pageUrl,
    },
  ],
}

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    { type: 'application/ld+json', children: JSON.stringify(jsonLd) },
    { type: 'application/ld+json', children: JSON.stringify(breadcrumb) },
  ],
})
</script>

<style lang="scss" scoped>
@use 'sass:color';

.services-page {
  background:
    radial-gradient(circle at top right, rgba(13, 199, 99, 0.1), transparent 28rem),
    linear-gradient(180deg, #f6f4ee 0%, #faf9f5 45%, #f3f1eb 100%);
  color: #12130f;
}

.services-shell {
  width: min(100% - 2.5rem, 74rem);
  margin: 0 auto;
}

.services-hero {
  padding: clamp(7rem, 12vw, 9.5rem) 0 clamp(4rem, 7vw, 6rem);
}

.services-section {
  padding: clamp(3.5rem, 7vw, 6rem) 0;
}

.services-section--alt {
  background: rgba(255, 255, 255, 0.5);
  border-block: 1px solid rgba(18, 19, 15, 0.07);
}

.services-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1.1rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  background: rgba(13, 199, 99, 0.12);
  color: #0a5c30;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.services-eyebrow--light {
  background: rgba(255, 255, 255, 0.12);
  color: rgba(247, 245, 239, 0.78);
}

.services-dot {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #0dc763;
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

.services-title {
  margin: 0;
  max-width: 18ch;
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
  color: #0f110c;
}

.services-subtitle {
  margin: 1.3rem 0 0;
  max-width: 46rem;
  font-size: clamp(1.05rem, 1.35vw, 1.22rem);
  line-height: 1.62;
  color: rgba(18, 19, 15, 0.78);
}

.services-geo {
  margin: 1rem 0 0;
  color: rgba(18, 19, 15, 0.56);
  font-size: 0.9rem;
  letter-spacing: 0.03em;
}

.services-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  margin-top: 1.8rem;
}

.services-actions--centered {
  justify-content: center;
}

.services-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.85rem 1.35rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.services-btn:hover,
.services-btn:focus-visible {
  transform: translateY(-1px);
}

.services-btn:focus-visible {
  outline: 2px solid rgba(13, 199, 99, 0.6);
  outline-offset: 4px;
}

.services-btn--primary {
  background: $vert;
  color: #0b0f0d;
  box-shadow: 0 0.8rem 1.6rem rgba(13, 199, 99, 0.22);
}

.services-btn--primary:hover {
  background: color.adjust($vert, $lightness: 6%);
}

.services-btn--secondary {
  background: rgba(18, 19, 15, 0.07);
  color: #12130f;
}

.services-btn--secondary:hover {
  background: rgba(18, 19, 15, 0.11);
}

.services-btn--ghost {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(247, 245, 239, 0.9);
}

.services-btn--ghost:hover {
  background: rgba(255, 255, 255, 0.16);
}

.services-mission {
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    align-items: start;
  }
}

.services-mission__header {
  display: grid;
  gap: 0.85rem;
}

.services-mission__tag {
  margin: 0;
  display: inline-flex;
  width: fit-content;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(13, 199, 99, 0.2);
  background: rgba(13, 199, 99, 0.08);
  color: #0a5c30;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.services-mission__title {
  margin: 0;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: #0f110c;
}

.services-mission__lede {
  margin: 0;
  max-width: 34rem;
  color: rgba(18, 19, 15, 0.72);
  line-height: 1.72;
}

.services-mission__list {
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
  align-self: start;
}

.services-mission__list li {
  padding: 0.95rem 1.1rem 0.95rem 1.4rem;
  border-radius: 1.1rem;
  border: 1px solid rgba(18, 19, 15, 0.07);
  background: rgba(255, 255, 255, 0.82);
  color: rgba(18, 19, 15, 0.8);
  line-height: 1.55;
  position: relative;
}

.services-mission__list li::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0.85rem;
  transform: translateY(-50%);
  width: 0.22rem;
  height: 1.1rem;
  border-radius: 999px;
  background: $vert;
}

.services-section__title {
  margin: 0 0 1.4rem;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  line-height: 1.04;
  letter-spacing: -0.04em;
  color: #0f110c;
}

.services-zone-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.services-zone-card {
  display: grid;
  gap: 0.6rem;
  padding: 1.3rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(13, 199, 99, 0.16);
  background:
    radial-gradient(circle at top right, rgba(13, 199, 99, 0.08), transparent 10rem),
    rgba(255, 255, 255, 0.86);
  box-shadow: 0 0.8rem 1.8rem rgba(18, 19, 15, 0.05);
}

.services-zone-card__label {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f110c;
}

.services-zone-card p:last-child {
  margin: 0;
  color: rgba(18, 19, 15, 0.68);
  line-height: 1.65;
}

.services-tarifs__intro {
  margin-bottom: 1.5rem;
}

.services-tarifs__note {
  margin: 0.5rem 0 0;
  max-width: 42rem;
  color: rgba(18, 19, 15, 0.6);
  line-height: 1.65;
}

.services-tarifs-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 64rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.services-tarif-card {
  display: grid;
  gap: 0.55rem;
  padding: 1.3rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(18, 19, 15, 0.08);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 0.8rem 1.8rem rgba(18, 19, 15, 0.05);
}

.services-tarif-card__label {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(18, 19, 15, 0.56);
}

.services-tarif-card__price {
  margin: 0;
  font-size: clamp(1.3rem, 2.5vw, 1.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #0f110c;
  line-height: 1.1;
}

.services-tarif-card__detail {
  margin: 0;
  color: rgba(18, 19, 15, 0.6);
  font-size: 0.9rem;
  line-height: 1.55;
}

.services-section--cta {
  padding-bottom: clamp(5rem, 9vw, 8rem);
}

.services-cta {
  padding: clamp(2.2rem, 5vw, 4rem);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at top right, rgba(13, 199, 99, 0.16), transparent 20rem),
    radial-gradient(circle at bottom left, rgba(4, 57, 217, 0.1), transparent 18rem),
    linear-gradient(135deg, #10110d 0%, #171712 100%);
  color: #f7f5ef;
  display: grid;
  gap: 1rem;
  justify-items: center;
  text-align: center;
  box-shadow: 0 1.5rem 3rem rgba(8, 8, 7, 0.26);
}

.services-cta__title {
  margin: 0;
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  line-height: 1.02;
  letter-spacing: -0.045em;
}

.services-cta__text {
  margin: 0;
  max-width: 36rem;
  color: rgba(247, 245, 239, 0.72);
  line-height: 1.7;
}

@media (max-width: $breakpoint-tablet) {
  .services-hero {
    padding-top: 5.8rem;
    padding-bottom: 3rem;
  }

  .services-section {
    padding: 3rem 0;
  }

  .services-zone-grid,
  .services-tarifs-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .services-dot {
    animation: none;
  }

  .services-btn {
    transition: none;
  }
}
</style>
