<template>
  <main class="services-page">
    <section class="services-hero" aria-labelledby="services-hero-title">
      <Oeuf
        class="services-oeuf services-oeuf--hero-1"
        width="23%"
        transform="rotate(-34)"
        fill="#04d94f"
      />
      <Oeuf
        class="services-oeuf services-oeuf--hero-2"
        width="18%"
        transform="rotate(28)"
        fill="#0439d9"
      />
      <div class="services-shell services-hero__grid">
        <div class="services-hero__copy">
          <p class="services-eyebrow">
            <span class="services-dot" aria-hidden="true"></span>
            Développeur web freelance · Disponible
          </p>
          <h1 id="services-hero-title" class="services-title">
            Missions freelance — WordPress, JavaScript, Vue.js, Nuxt &amp;
            éco-conception
          </h1>
          <p class="services-subtitle">
            15 ans d’expérience web. Je prends en charge des projets WordPress,
            JavaScript, Vue.js et Nuxt, ainsi que des audits éco-conception — de
            la conception au déploiement.
          </p>
          <p class="services-personas">
            J’interviens pour des agences, des entreprises et des indépendants
            qui ont besoin d’un site plus propre, plus rapide ou plus durable.
          </p>
          <p class="services-geo">
            Basé à Lille · Interventions en Hauts-de-France · Missions en remote
          </p>
          <div class="services-actions">
            <AppLink class="services-btn services-btn--primary" to="/contact/">
              Discutons de votre projet
            </AppLink>
            <AppLink
              class="services-btn services-btn--secondary"
              to="/portfolio/"
            >
              Voir mes réalisations
            </AppLink>
          </div>
        </div>

        <aside class="services-hero__panel" aria-label="Repères de mission">
          <p class="services-panel__kicker">Ce que j’apporte</p>
          <div class="services-panel__grid">
            <p>Offre claire</p>
            <p>Technique fiable</p>
            <p>Contenus utiles</p>
          </div>
          <AppLink class="services-text-link" to="/eco-conception/">
            Explorer les contenus éco-conception
          </AppLink>
        </aside>
      </div>
    </section>

    <section
      class="services-section services-section--mission services-section--wp"
      aria-labelledby="services-wp-title"
    >
      <div class="services-shell">
        <div class="services-mission">
          <div class="services-mission__header">
            <p class="services-mission__tag">WordPress</p>
            <h2 id="services-wp-title" class="services-mission__title">
              Développement WordPress
            </h2>
            <p class="services-mission__lede">
              Création, migration, refonte et optimisation de sites WordPress
              Gutenberg — sobres, rapides et faciles à administrer sans dépendre
              d’un prestataire au quotidien.
            </p>
            <div
              class="services-mission__links"
              aria-label="Ressources WordPress"
            >
              <AppLink
                v-for="link in wpLinks"
                :key="link.to"
                class="services-text-link"
                :to="link.to"
              >
                {{ link.label }}
              </AppLink>
            </div>
          </div>
          <ul class="services-mission__list">
            <li v-for="item in wpItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="services-section services-section--mission services-section--alt services-section--js"
      aria-labelledby="services-js-title"
    >
      <div class="services-shell">
        <div class="services-mission">
          <div class="services-mission__header">
            <p class="services-mission__tag">JavaScript</p>
            <h2 id="services-js-title" class="services-mission__title">
              Développement JavaScript, Vue.js &amp; Nuxt
            </h2>
            <p class="services-mission__lede">
              Développement de sites, interfaces et applications légères en
              JavaScript, Vue.js et Nuxt — performants, sobres et faciles à
              déployer.
            </p>
            <div
              class="services-mission__links"
              aria-label="Ressources Vue.js et Nuxt"
            >
              <AppLink
                v-for="link in jsLinks"
                :key="link.to"
                class="services-text-link"
                :to="link.to"
              >
                {{ link.label }}
              </AppLink>
            </div>
          </div>
          <ul class="services-mission__list">
            <li v-for="item in jsItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="services-section services-section--mission services-section--audit"
      aria-labelledby="services-audit-title"
    >
      <Oeuf
        class="services-oeuf services-oeuf--audit"
        width="17%"
        transform="rotate(-18)"
        fill="#f2a81d"
      />
      <div class="services-shell">
        <div class="services-mission">
          <div class="services-mission__header">
            <p class="services-mission__tag">Audit</p>
            <h2 id="services-audit-title" class="services-mission__title">
              Audit éco-conception &amp; performance
            </h2>
            <p class="services-mission__lede">
              Analyse de l’empreinte numérique, des performances et du SEO
              technique de votre site — avec un rapport écrit et des
              recommandations priorisées.
            </p>
            <div class="services-mission__links" aria-label="Ressources audit">
              <AppLink
                v-for="link in auditLinks"
                :key="link.to"
                class="services-text-link"
                :to="link.to"
              >
                {{ link.label }}
              </AppLink>
            </div>
          </div>
          <ul class="services-mission__list">
            <li v-for="item in auditItems" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section
      class="services-section services-section--zone"
      aria-labelledby="services-zone-title"
      data-nav-theme="light"
    >
      <Oeuf
        class="services-oeuf services-oeuf--zone"
        width="18%"
        transform="rotate(22)"
        fill="#04d94f"
      />
      <div class="services-shell">
        <div class="services-section__intro">
          <p class="services-eyebrow services-eyebrow--light">Localisation</p>
          <h2 id="services-zone-title" class="services-section__title">
            Zone d'intervention
          </h2>
        </div>
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
            Fourchettes habituelles
          </h2>
          <p class="services-tarifs__note">
            Ces montants donnent un ordre de grandeur réaliste. Le budget final
            dépend du périmètre, du volume de contenu, des intégrations, du
            niveau de personnalisation et de la complexité réelle du projet.
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
          <Oeuf
            class="services-oeuf services-oeuf--cta-1"
            width="18%"
            transform="rotate(-40)"
            fill="#04d94f"
          />
          <Oeuf
            class="services-oeuf services-oeuf--cta-2"
            width="14%"
            transform="rotate(24)"
            fill="#0439d9"
          />
          <p class="services-eyebrow services-eyebrow--light">Contact</p>
          <h2 id="services-cta-title" class="services-cta__title">
            Un projet à lancer, refaire ou alléger ?
          </h2>
          <p class="services-cta__text">
            Décrivez votre projet par formulaire ou par mail — je reviens vers
            vous sous 48 h avec un premier retour clair.
          </p>
          <div class="services-actions services-actions--centered">
            <AppLink class="services-btn services-btn--primary" to="/contact/">
              Me contacter
            </AppLink>
            <AppLink class="services-btn services-btn--ghost" to="/portfolio/">
              Voir mes réalisations
            </AppLink>
            <AppLink
              class="services-btn services-btn--ghost"
              to="/eco-conception/"
            >
              Lire les articles liés à ces missions
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
  title:
    'Missions freelance — WordPress, JavaScript, Vue.js, Nuxt & éco-conception | BeAbot',
  description:
    "Développeur web freelance à Lille — projets WordPress, JavaScript, Vue.js/Nuxt et audits d'éco-conception. Missions en Hauts-de-France et en remote.",
}

const wpItems = [
  'Création de site vitrine ou de blog WordPress avec Gutenberg',
  "Migration, refonte et optimisation d'un site existant",
  'Thème sur mesure ou personnalisation d’un thème léger comme Greenlight',
  'Optimisation des performances : Lighthouse, Core Web Vitals, EcoIndex',
  'SEO technique : structure, balises, sitemap, robots.txt',
  "Formation à l'administration WordPress",
] as const

const wpLinks = [
  {
    label: 'Choisir un freelance WordPress à Lille',
    to: '/eco-conception/wordpress-freelance-lille/',
  },
  {
    label: 'Préparer une refonte éco-conçue',
    to: '/eco-conception/refonte-site-eco-concu/',
  },
  {
    label: 'Voir Greenlight pour WordPress',
    to: '/greenlight/',
  },
] as const

const jsItems = [
  'Site rapide avec Nuxt 3, déployable sur Netlify ou Vercel',
  'Landing page, site vitrine ou interface légère en Vue.js',
  "Migration d'un site dynamique vers une architecture statique",
  'Intégration de Nuxt Content pour gérer un site éditorial sobre et simple à maintenir',
  'Application Vue.js sur mesure',
] as const

const jsLinks = [
  {
    label: 'Comparer WordPress et Nuxt',
    to: '/eco-conception/wordpress-vs-nuxt/',
  },
  {
    label: 'Voir des réalisations',
    to: '/portfolio/',
  },
] as const

const auditItems = [
  'Performance : Lighthouse, PageSpeed Insights, Core Web Vitals',
  'Empreinte numérique : EcoIndex, poids de page, requêtes HTTP, complexité du DOM',
  'SEO technique : balises, canonicals, données structurées, maillage',
  'Accessibilité : hiérarchie, contrastes, navigation clavier',
  'Rapport écrit avec priorités d’action claires',
] as const

const auditLinks = [
  {
    label: 'Comprendre ce qu’apporte un audit de site web',
    to: '/eco-conception/audit-site-web/',
  },
  {
    label: 'Décider avant une refonte de site',
    to: '/eco-conception/refonte-site-eco-concu/',
  },
] as const

const zones = [
  {
    label: 'Lille & métropole',
    description:
      'Présentiel possible pour les briefs, points d’avancement et bilans de mission.',
  },
  {
    label: 'Hauts-de-France',
    description:
      'Déplacements ponctuels possibles selon le projet et les temps d’échange nécessaires.',
  },
  {
    label: 'Remote',
    description:
      'Collaboration à distance fluide : visio, email, outils partagés et points de suivi réguliers.',
  },
] as const

const tarifs = [
  {
    label: 'Site vitrine WordPress',
    price: '1 500 – 4 500 €',
    detail:
      'Selon le périmètre, le contenu à intégrer et le niveau de personnalisation.',
  },
  {
    label: 'Site ou app légère en Vue.js / Nuxt',
    price: '2 500 – 7 000 €',
    detail: 'Selon la complexité, les intégrations et le volume de contenu.',
  },
  {
    label: 'Audit éco-conception & performance',
    price: '500 – 1 500 €',
    detail: 'Rapport complet avec recommandations priorisées et plan d’action.',
  },
  {
    label: 'Maintenance & suivi courant',
    price: '100 – 300 € / mois',
    detail:
      'Mises à jour, surveillance, corrections mineures et accompagnement courant.',
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
            'Création, refonte et optimisation de sites WordPress Gutenberg sobres et administrables.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement JavaScript, Vue.js & Nuxt',
          description:
            'Sites, interfaces et applications légères JavaScript, Vue.js et Nuxt.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Audit éco-conception & performance',
          description:
            'Analyse EcoIndex, Lighthouse, SEO technique et accessibilité avec recommandations priorisées.',
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
@use "~/assets/css/vars/_colors.scss" as *;
@use "~/assets/css/vars/_typo.scss" as *;

.services-page {
  --services-surface: #f3f1ea;
  --services-surface-soft: #faf8f2;
  --services-text: #12130f;
  --services-muted: rgba(18, 19, 15, 0.68);
  background:
    radial-gradient(
      circle at top right,
      rgba(13, 199, 99, 0.1),
      transparent 28rem
    ),
    linear-gradient(180deg, #f6f4ee 0%, #faf9f5 45%, #f3f1eb 100%);
  color: var(--services-text);
}

.services-shell {
  width: min(100% - 2.5rem, 74rem);
  margin: 0 auto;
}

.services-hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: clamp(7rem, 12vw, 9.5rem) 0 clamp(4rem, 7vw, 6rem);
  background:
    radial-gradient(
      circle at 82% 20%,
      rgba(4, 57, 217, 0.07),
      transparent 18rem
    ),
    radial-gradient(
      circle at 10% 90%,
      rgba(13, 199, 99, 0.12),
      transparent 18rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.34), transparent 82%);
}

.services-hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(18, 19, 15, 0),
    rgba(18, 19, 15, 0.14),
    rgba(18, 19, 15, 0)
  );
}

.services-hero__grid {
  position: relative;
  z-index: 1;
  display: grid;
  gap: clamp(2rem, 5vw, 4rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1.12fr) minmax(17rem, 0.54fr);
    align-items: end;
  }
}

.services-hero__copy {
  max-width: 52rem;
}

.services-hero__panel {
  display: grid;
  gap: 1rem;
  padding: 1.35rem;
  border: 1px solid rgba(18, 19, 15, 0.08);
  border-radius: 1.5rem;
  background:
    radial-gradient(
      circle at top right,
      rgba(13, 199, 99, 0.12),
      transparent 11rem
    ),
    rgba(255, 255, 255, 0.68);
  box-shadow:
    0 1.2rem 2.5rem rgba(18, 19, 15, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
}

.services-panel__kicker {
  margin: 0;
  color: rgba(18, 19, 15, 0.54);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.services-panel__grid {
  display: grid;
  gap: 0.65rem;
}

.services-panel__grid p {
  margin: 0;
  padding: 0.85rem 0.95rem;
  border-left: 0.25rem solid $vert;
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.68);
  color: rgba(18, 19, 15, 0.78);
  font-weight: 700;
}

.services-section {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: clamp(3.5rem, 7vw, 6rem) 0;
}

.services-section--alt {
  background:
    linear-gradient(90deg, rgba(4, 57, 217, 0.04), rgba(13, 199, 99, 0.035)),
    rgba(255, 255, 255, 0.5);
  border-block: 1px solid rgba(18, 19, 15, 0.07);
}

.services-section--mission .services-shell,
.services-section--zone .services-shell,
.services-cta > :not(.services-oeuf) {
  position: relative;
  z-index: 1;
}

.services-section--wp {
  background:
    radial-gradient(
      circle at 12% 18%,
      rgba(242, 168, 29, 0.08),
      transparent 16rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.44), rgba(244, 242, 236, 0));
}

.services-section--audit {
  background:
    radial-gradient(
      circle at 84% 20%,
      rgba(13, 199, 99, 0.08),
      transparent 17rem
    ),
    linear-gradient(180deg, rgba(244, 242, 236, 0), rgba(255, 255, 255, 0.34));
}

.services-section--zone {
  background:
    radial-gradient(
      circle at 86% 12%,
      rgba(13, 199, 99, 0.16),
      transparent 21rem
    ),
    radial-gradient(
      circle at 10% 88%,
      rgba(4, 57, 217, 0.1),
      transparent 17rem
    ),
    linear-gradient(180deg, #10110d 0%, #171712 100%);
  color: #f7f5ef;
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
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.85);
  }
}

.services-title {
  margin: 0;
  max-width: 20ch;
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

.services-personas {
  margin: 0.85rem 0 0;
  max-width: 42rem;
  color: rgba(18, 19, 15, 0.64);
  font-size: 0.98rem;
  line-height: 1.68;
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
  background: color.adjust($vert-raw, $lightness: 6%);
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
  align-content: start;
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

.services-mission__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem 0.9rem;
  margin-top: 0.2rem;
}

.services-text-link {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: #0a6d36;
  font-size: 0.92rem;
  font-weight: 800;
  text-decoration: none;
}

.services-text-link::after {
  content: '→';
  margin-left: 0.35rem;
}

.services-text-link:hover,
.services-text-link:focus-visible {
  color: color.adjust($vert-raw, $lightness: -16%);
  text-decoration: underline;
  text-underline-offset: 0.2em;
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
  border-radius: 1rem;
  border: 1px solid rgba(18, 19, 15, 0.07);
  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.94),
      rgba(255, 255, 255, 0.74)
    ),
    rgba(255, 255, 255, 0.82);
  color: rgba(18, 19, 15, 0.8);
  line-height: 1.55;
  position: relative;
  box-shadow: 0 0.7rem 1.5rem rgba(18, 19, 15, 0.035);
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

.services-section__intro {
  margin-bottom: 1.4rem;
}

.services-section--zone .services-section__title {
  color: #f7f5ef;
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
  border-radius: 1.1rem;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background:
    radial-gradient(
      circle at top right,
      rgba(13, 199, 99, 0.1),
      transparent 10rem
    ),
    rgba(255, 255, 255, 0.055);
  box-shadow: 0 0.8rem 1.8rem rgba(8, 8, 7, 0.16);
}

.services-zone-card__label {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #f7f5ef;
}

.services-zone-card p:last-child {
  margin: 0;
  color: rgba(247, 245, 239, 0.72);
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
  border-radius: 1rem;
  border: 1px solid rgba(18, 19, 15, 0.08);
  background:
    radial-gradient(
      circle at top right,
      rgba(242, 168, 29, 0.08),
      transparent 9rem
    ),
    rgba(255, 255, 255, 0.88);
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
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding: clamp(2.2rem, 5vw, 4rem);
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(
      circle at top right,
      rgba(13, 199, 99, 0.16),
      transparent 20rem
    ),
    radial-gradient(
      circle at bottom left,
      rgba(4, 57, 217, 0.1),
      transparent 18rem
    ),
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

.services-oeuf {
  position: absolute;
  z-index: 0;
  opacity: 0.13;
  pointer-events: none;
}

.services-oeuf--hero-1 {
  top: 10%;
  right: -5%;
  opacity: 0.12;
}

.services-oeuf--hero-2 {
  bottom: 6%;
  left: -4%;
  opacity: 0.08;
}

.services-oeuf--audit {
  right: -5%;
  bottom: -12%;
  opacity: 0.16;
}

.services-oeuf--zone {
  left: -4%;
  bottom: -20%;
  opacity: 0.14;
}

.services-oeuf--cta-1 {
  top: -18%;
  right: -5%;
  opacity: 0.18;
}

.services-oeuf--cta-2 {
  bottom: -18%;
  left: -4%;
  opacity: 0.12;
}

@media (max-width: $breakpoint-tablet) {
  .services-hero {
    padding-top: 5.8rem;
    padding-bottom: 3rem;
  }

  .services-section {
    padding: 3rem 0;
  }

  .services-hero__panel {
    border-radius: 1.25rem;
  }

  .services-zone-grid,
  .services-tarifs-grid {
    grid-template-columns: 1fr;
  }

  .services-oeuf--hero-1 {
    right: -18%;
    opacity: 0.08;
  }

  .services-oeuf--hero-2,
  .services-oeuf--audit,
  .services-oeuf--zone,
  .services-oeuf--cta-2 {
    display: none;
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
