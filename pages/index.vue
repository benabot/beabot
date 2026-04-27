<template>
  <main class="home-v3">
    <section class="home-hero" aria-labelledby="home-hero-title">
      <div class="home-wrap home-hero__grid">
        <div class="home-hero__copy">
          <p class="home-kicker">beAbot</p>
          <h1 id="home-hero-title" class="home-title">
            Développeur web freelance spécialisé en
            <span>éco-conception</span>
          </h1>
          <p class="home-subtitle">
            Sites WordPress et interfaces JavaScript sobres, rapides et
            durables. 15 ans d’expérience, spécialiste du numérique responsable.
          </p>
          <p class="home-lead">
            Je conçois des sites et des applications web avec une attention
            particulière portée à la performance, à l’accessibilité, à la
            sobriété technique et à la qualité du code. Résultat : des projets
            plus légers, plus lisibles, plus faciles à maintenir.
          </p>
          <div class="home-actions">
            <AppLink class="button button--primary" to="/portfolio/">
              Voir mes réalisations
            </AppLink>
            <AppLink class="button button--secondary" to="/contact/">
              Me contacter
            </AppLink>
            <AppLink class="text-link" to="/greenlight/">
              Découvrir Greenlight
            </AppLink>
          </div>
        </div>

        <aside class="home-hero__proof" aria-label="Signature de la page">
          <div class="proof-blob">
            <span class="proof-blob__icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" focusable="false">
                <path
                  d="M34.2 10.4c-8.7.5-16 5.5-18.9 12.6-2 5.1-1.1 10.1 2.4 14.2 2.6 3 5.9 4.6 10 4.8 8 .3 14.1-4.1 16.9-11.7 1.9-5 1.2-10-1.8-14.4-2.1-3.1-5.2-5-8.6-5.5Zm-9.9 22.2c-.2-2.4.9-4.8 2.9-6.5 1.5-1.2 3.5-2.1 6.3-2.6-1 4.9-4.4 8.2-9.2 9.1Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <p class="proof-blob__value">Éco-conception</p>
            <p class="proof-blob__meta">
              Performance, accessibilité et sobriété technique dès le départ.
            </p>
          </div>
        </aside>
      </div>
    </section>

    <section
      class="home-section home-section--alt"
      aria-labelledby="home-metrics-title"
    >
      <div class="home-wrap">
        <header class="section-heading">
          <div>
            <p class="section-kicker">Preuves chiffrées</p>
            <h2 id="home-metrics-title" class="section-title">
              Ce site applique ce que je vends
            </h2>
          </div>
          <p class="section-intro">
            Pas de démonstration théorique : les chiffres ci-dessous sont
            mesurés sur beabot.fr.
          </p>
        </header>

        <div class="metrics-grid">
          <article class="metric-card">
            <p class="metric-card__label">EcoIndex</p>
            <p class="metric-card__value metric-card__value--accent">A</p>
            <p class="metric-card__meta">
              Performance environnementale pilotée.
            </p>
          </article>

          <article class="metric-card">
            <p class="metric-card__label">Lighthouse</p>
            <div
              class="metric-card__scores"
              aria-label="Scores Lighthouse : performance 100, accessibilité 96, bonnes pratiques 100, SEO 100"
            >
              <span>
                100
                <small>Perf.</small>
              </span>
              <span>
                96
                <small>A11y</small>
              </span>
              <span>
                100
                <small>BP</small>
              </span>
              <span>
                100
                <small>SEO</small>
              </span>
            </div>
          </article>

          <article class="metric-card">
            <p class="metric-card__label">Poids page</p>
            <p class="metric-card__value">~140 Ko</p>
            <p class="metric-card__meta">Un site léger qui reste durable.</p>
          </article>
        </div>

        <div class="section-footer">
          <AppLink class="text-link" to="/eco-conception/">
            Méthode de mesure
          </AppLink>
        </div>
      </div>
    </section>

    <section class="home-section" aria-labelledby="home-services-title">
      <div class="home-wrap">
        <header class="section-heading">
          <div>
            <p class="section-kicker">Services</p>
            <h2 id="home-services-title" class="section-title">
              Ce que je fais
            </h2>
          </div>
          <p class="section-intro">
            Trois types de missions, une même approche : faire mieux avec moins
            de complexité inutile.
          </p>
        </header>

        <div class="service-grid">
          <article
            v-for="service in services"
            :key="service.title"
            class="service-card"
          >
            <p class="service-card__eyebrow">
              {{ service.kicker }}
            </p>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>

        <div class="section-footer">
          <AppLink class="text-link" to="/contact/">
            Discuter d’un projet
          </AppLink>
        </div>
      </div>
    </section>

    <section
      class="home-section home-section--alt"
      aria-labelledby="home-work-title"
    >
      <div class="home-wrap">
        <header class="section-heading section-heading--split">
          <div>
            <p class="section-kicker">Portfolio</p>
            <h2 id="home-work-title" class="section-title">Réalisations</h2>
          </div>
          <div class="section-heading__actions">
            <p class="section-intro">
              Extraits de 15 ans de web. Projets WordPress et front-end conçus
              avec la même logique de sobriété technique.
            </p>
            <AppLink class="text-link" to="/portfolio/">
              Voir le portfolio complet
            </AppLink>
          </div>
        </header>

        <div class="project-grid">
          <AppLink
            v-for="project in featuredProjects"
            :key="project.id"
            :to="projectPortfolioLink(project.id)"
            class="project-card"
            :class="project.layoutClass"
            :aria-label="`Voir ${project.title} dans le portfolio`"
          >
            <img
              class="project-card__image"
              :src="projectImageSrc(project.image)"
              :alt="project.title"
              loading="lazy"
              decoding="async"
              :style="{ objectPosition: project.objectPosition || 'center' }"
              width="1200"
              height="900"
            />
            <div class="project-card__overlay" />
            <div class="project-card__content">
              <p class="project-card__tags">
                {{ projectPreviewTags(project).join(' • ') }}
              </p>
              <h3>{{ project.title }}</h3>
              <p>{{ project.subtitle }}</p>
              <span class="project-card__cta">Voir dans le portfolio</span>
            </div>
          </AppLink>
        </div>
      </div>
    </section>

    <section class="home-section" aria-labelledby="home-greenlight-title">
      <div class="home-wrap home-greenlight">
        <div class="home-greenlight__copy">
          <p class="section-kicker">Produit</p>
          <h2 id="home-greenlight-title" class="section-title">Greenlight</h2>
          <p class="section-intro section-intro--stacked">
            Mon thème WordPress éco-conçu, en version gratuite et premium.
          </p>
          <p class="home-greenlight__lead">
            Greenlight est un socle WordPress sobre, rapide, accessible et
            durable, pensé pour produire des sites plus crédibles, plus lisibles
            et plus faciles à maintenir.
          </p>
          <AppLink class="button button--primary" to="/greenlight/">
            Découvrir Greenlight
          </AppLink>
        </div>

        <div class="product-grid">
          <article
            v-for="product in greenlightVersions"
            :key="product.title"
            class="product-card"
          >
            <p class="product-card__badge">
              {{ product.badge }}
            </p>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <ul class="product-card__list">
              <li v-for="feature in product.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section
      class="home-section home-approach"
      aria-labelledby="home-approach-title"
    >
      <div class="home-wrap home-approach__inner">
        <p class="section-kicker">Approche</p>
        <h2 id="home-approach-title" class="section-title">
          Une approche sobre, sans sacrifier la qualité
        </h2>
        <p class="section-intro section-intro--centered">
          Performance, accessibilité, sobriété : une méthode de conception, pas
          un argument décoratif.
        </p>
        <p class="home-approach__text">
          L’éco-conception n’est pas une couche marketing ajoutée après coup.
          C’est une manière de concevoir le projet dès le départ : limiter le
          superflu, garder ce qui sert réellement l’usage, construire des sites
          plus légers, plus rapides et plus durables.
        </p>
        <div class="principles" aria-label="Principes de travail">
          <span>Performance</span>
          <span>Accessibilité</span>
          <span>Sobriété</span>
        </div>
        <AppLink class="text-link" to="/eco-conception/">
          Comprendre l’éco-conception web
        </AppLink>
      </div>
    </section>

    <section class="home-section" aria-labelledby="home-articles-title">
      <div class="home-wrap">
        <header class="section-heading section-heading--split">
          <div>
            <p class="section-kicker">Éditorial</p>
            <h2 id="home-articles-title" class="section-title">Articles</h2>
          </div>
          <div class="section-heading__actions">
            <p class="section-intro">
              Notes, retours d’expérience et analyses autour de l’éco-conception
              web, de WordPress et des choix techniques durables.
            </p>
            <AppLink class="text-link" to="/eco-conception/">
              Voir le blog
            </AppLink>
          </div>
        </header>

        <div class="article-grid">
          <article
            v-for="article in latestArticles"
            :key="article._path"
            class="article-card"
          >
            <p class="article-card__tags">
              {{ articlePreviewTags(article).join(' • ') }}
            </p>
            <h3>
              <AppLink :to="articleLink(article)">
                {{ article.title || 'Article' }}
              </AppLink>
            </h3>
            <p>{{ article.description || '' }}</p>
            <AppLink class="text-link" :to="articleLink(article)">
              Lire l’article
            </AppLink>
          </article>
        </div>
      </div>
    </section>

    <section
      class="home-section home-section--compact"
      aria-labelledby="home-cta-title"
    >
      <div class="home-wrap">
        <div class="final-cta">
          <p class="section-kicker">Prise de contact</p>
          <h2 id="home-cta-title" class="section-title">
            Un site WordPress plus propre, plus rapide, plus durable ?
          </h2>
          <p class="final-cta__text">
            Je peux intervenir sur la conception, le développement,
            l’optimisation ou la mise en place d’une base technique sobre.
          </p>
          <div class="home-actions home-actions--centered">
            <AppLink class="button button--primary" to="/contact/">
              Me contacter
            </AppLink>
            <AppLink class="button button--secondary" to="/portfolio/">
              Voir mes réalisations
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { projects } from '~/data/portfolio'
import { canonicalUrl, withTrailingSlash } from '~/utils/seo-url'

type HomeArticle = {
  title?: string
  description?: string
  tag?: string[]
  _path?: string
  date?: string
}

const services = [
  {
    kicker: 'WordPress',
    title: 'Sites WordPress éco-conçus',
    description:
      'Thèmes sur mesure, refonte, allègement d’existant et optimisation des performances. L’objectif : un site plus léger, plus maintenable et réellement utile.',
  },
  {
    kicker: 'JavaScript',
    title: 'Interfaces et applications JavaScript sobres',
    description:
      'Vue, Nuxt et JavaScript vanilla pour des interfaces lisibles, rapides et sans dépendance superflue. La sobriété fait partie de l’architecture, pas d’une couche ajoutée après coup.',
  },
  {
    kicker: 'Audit',
    title: 'Audits et optimisation éco-conception',
    description:
      'Diagnostic de l’existant, plan d’action priorisé et accompagnement de mise en œuvre avec des métriques concrètes : EcoIndex, Lighthouse, poids de page et requêtes.',
  },
] as const

const greenlightVersions = [
  {
    badge: 'Free',
    title: 'Greenlight-free',
    description:
      'Base légère, propre, personnalisable avec Gutenberg. Pour démarrer simplement sans alourdir le site.',
    features: [
      'Socle WordPress sobre',
      'Structure lisible',
      'Personnalisation simple',
    ],
  },
  {
    badge: 'Premium',
    title: 'Greenlight',
    description:
      'Version premium avec SEO natif avancé et personnalisation avancée pour les projets professionnels.',
    features: [
      'SEO natif avancé',
      'Réglages étendus',
      'Base plus robuste pour les sites éditoriaux',
    ],
  },
] as const

const featuredProjectOrder = [
  { id: 'cycloplomberie', layoutClass: 'project-card--tall' },
  { id: 'petite-boucle', layoutClass: 'project-card--tall' },
  { id: 'chasse-patate', layoutClass: 'project-card--wide' },
  {
    id: 'amc2',
    layoutClass: 'project-card--wide project-card--wide-secondary',
  },
] as const

const featuredProjects = computed(() =>
  featuredProjectOrder.flatMap((entry) => {
    const project = projects.find((item) => item.id === entry.id)
    return project ? [{ ...project, layoutClass: entry.layoutClass }] : []
  }),
)

const { data: articles } = await useAsyncData<HomeArticle[]>(
  'home-v3-latest-articles',
  () =>
    queryContent('articles')
      .only(['title', 'description', 'tag', '_path', 'date'])
      .sort({ date: -1 })
      .limit(2)
      .find(),
)

const latestArticles = computed(() => articles.value || [])

const config = useRuntimeConfig()
const homeCanonicalUrl = canonicalUrl(config.public.siteUrl, '/')
const homeTitle = 'Benoît Abot — Développeur web freelance WordPress & Nuxt | Lille'
const homeDescription =
  'Développeur web WordPress et JavaScript spécialisé en éco-conception. Sites sobres, rapides, durables. Portfolio, thème Greenlight, articles.'

function projectImageSrc(image: string) {
  return `/img/${image}`
}

function projectPortfolioLink(projectId: string) {
  return `${withTrailingSlash('/portfolio')}#${projectId}`
}

function projectPreviewTags(project: { tags: string[] }) {
  return project.tags.slice(0, 2)
}

function articleLink(article: HomeArticle) {
  if (!article || !article._path) return '/eco-conception/'
  return withTrailingSlash(
    article._path.replace(/^\/articles\//, '/eco-conception/'),
  )
}

function articlePreviewTags(article: HomeArticle) {
  if (!article?.tag?.length) return ['Éco-conception']
  return article.tag.slice(0, 2)
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${config.public.siteUrl}/#organization`,
      name: 'BeAbot',
      url: config.public.siteUrl,
      logo: `${config.public.siteUrl}/beabot.png`,
      description: homeDescription,
      founder: {
        '@id': `${config.public.siteUrl}/#person`,
      },
      sameAs: [
        'https://github.com/benabot',
        'https://www.linkedin.com/in/benoit-abot/',
        'https://twitter.com/AbotBenoit',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        url: `${config.public.siteUrl}/contact/`,
      },
    },
    {
      '@type': 'Person',
      '@id': `${config.public.siteUrl}/#person`,
      name: 'Benoît Abot',
      jobTitle: 'Développeur web spécialisé en éco-conception',
      description:
        'Développeur web spécialisé en éco-conception. Sites WordPress et interfaces JavaScript sobres, rapides et durables.',
      url: `${config.public.siteUrl}/portfolio/`,
      worksFor: {
        '@id': `${config.public.siteUrl}/#organization`,
      },
      sameAs: [
        'https://github.com/benabot',
        'https://www.linkedin.com/in/benoit-abot/',
      ],
      workLocation: {
        '@type': 'Place',
        name: 'Lille, Hauts-de-France, France',
      },
      areaServed: [
        'Lille',
        'Compiègne',
        'Amiens',
        'Paris',
        'Hauts-de-France',
        'France',
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceType: 'remote',
      },
    },
  ],
}

useSeoMeta({
  title: homeTitle,
  description: homeDescription,
  ogTitle: homeTitle,
  ogDescription: homeDescription,
  ogType: 'website',
  ogUrl: homeCanonicalUrl,
  ogImage: `${config.public.siteUrl}/beabot.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: homeTitle,
  twitterDescription: homeDescription,
  twitterImage: `${config.public.siteUrl}/beabot.png`,
})

useHead({
  titleTemplate: '%s',
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: homeCanonicalUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData),
    },
  ],
})
</script>

<style lang="scss" scoped>
@use 'sass:color';

.home-v3 {
  --surface: #0f0f0f;
  --surface-soft: #171717;
  --surface-strong: #202020;
  --surface-elevated: #272727;
  --text-primary: #f2f0f0;
  --text-secondary: rgba(242, 240, 240, 0.72);
  --text-muted: rgba(242, 240, 240, 0.56);
  --ghost: rgba(242, 240, 240, 0.08);
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.16),
      transparent 26rem
    ),
    linear-gradient(180deg, #121212 0%, #0f0f0f 100%);
  color: var(--text-primary);
}

.home-wrap {
  width: min(100%, 72rem);
  margin: 0 auto;
}

.home-hero,
.home-section {
  padding-top: clamp(3.5rem, 7vw, 6rem);
  padding-bottom: clamp(3.5rem, 7vw, 6rem);
}

.home-section--compact {
  padding-top: clamp(2.5rem, 5vw, 4rem);
  padding-bottom: clamp(4rem, 7vw, 6rem);
}

.home-section--alt {
  background: rgba(255, 255, 255, 0.025);
}

.home-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: clamp(6rem, 10vw, 9rem);
  padding-bottom: clamp(4rem, 7vw, 5rem);
  // Couvre la nav fixée tant que le hero est à l'écran.
  position: relative;
  z-index: 1001;
  background: #0f0f0f;
}

.home-hero__grid {
  display: grid;
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1.1fr) minmax(16rem, 0.7fr);
  }
}

.home-kicker,
.section-kicker,
.service-card__eyebrow,
.product-card__badge,
.project-card__tags,
.article-card__tags,
.metric-card__label {
  margin: 0;
  font-size: 0.76rem;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.home-kicker,
.section-kicker {
  margin-bottom: 0.9rem;
}

.home-title,
.section-title {
  margin: 0;
  letter-spacing: -0.04em;
  line-height: 0.92;
  color: var(--text-primary);
}

.home-title {
  max-width: 12ch;
  font-size: clamp(2.9rem, 5.8vw, 5.4rem);
}

.home-title span {
  color: color.adjust($vert, $lightness: 12%);
}

.section-title {
  max-width: 12ch;
  font-size: clamp(2.15rem, 4vw, 3.4rem);
}

.home-subtitle,
.home-lead,
.section-intro,
.service-card p,
.product-card p,
.article-card p,
.final-cta__text,
.home-greenlight__lead,
.home-approach__text {
  color: var(--text-secondary);
}

.home-subtitle {
  max-width: 36rem;
  margin: 1.35rem 0 0;
  font-size: clamp(1.08rem, 1.4vw, 1.35rem);
  line-height: 1.45;
}

.home-lead {
  max-width: 40rem;
  margin: 1.5rem 0 0;
  font-size: clamp(1rem, 1.2vw, 1.12rem);
}

.home-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  margin-top: 2rem;
}

.home-actions--centered {
  justify-content: center;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.85rem 1.2rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  transition:
    transform 0.18s ease,
    background-color 0.18s ease,
    color 0.18s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button--primary {
  background: linear-gradient(
    135deg,
    color.adjust($vert, $lightness: 12%),
    $vert 70%
  );
  color: $gris1;
}

.button--secondary {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  background: linear-gradient(currentColor, currentColor) left bottom / 0 0.12em
    no-repeat;
  transition: background-size 0.25s ease;
}

.text-link:hover,
.text-link:focus-visible {
  background-size: 100% 0.12em;
}

.home-hero__proof {
  display: flex;
  justify-content: center;

  @media (min-width: $breakpoint-tablet) {
    justify-content: flex-end;
  }
}

.proof-blob {
  width: min(100%, 18rem);
  aspect-ratio: 1;
  padding: 2rem;
  display: grid;
  place-items: center;
  text-align: center;
  background:
    radial-gradient(circle at center, rgba(0, 168, 62, 0.16), transparent 55%),
    rgba(255, 255, 255, 0.05);
  border-radius: 58% 42% 52% 48% / 42% 58% 42% 58%;
  box-shadow:
    0 1.5rem 4rem rgba(0, 0, 0, 0.22),
    inset 0 0 0 1px rgba(255, 255, 255, 0.03);
}

.proof-blob__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 999px;
  background: rgba(0, 168, 62, 0.16);
  color: color.adjust($vert, $lightness: 18%);
}

.proof-blob__icon svg {
  width: 1.8rem;
  height: 1.8rem;
}

.proof-blob__value {
  margin: 1rem 0 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  font-weight: 900;
  letter-spacing: -0.04em;
}

.proof-blob__meta {
  margin: 0.7rem 0 0;
  max-width: 13rem;
  font-size: 0.95rem;
  color: var(--text-muted);
}

.section-heading {
  display: grid;
  gap: 1rem;
  margin-bottom: clamp(2rem, 4vw, 3rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 26rem);
    align-items: end;
  }
}

.section-heading--split {
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
}

.section-heading__actions {
  display: grid;
  gap: 1rem;
  justify-items: start;

  @media (min-width: $breakpoint-tablet) {
    justify-items: end;
  }
}

.section-intro {
  margin: 0;
  max-width: 36rem;
  font-size: 1rem;
}

.section-intro--stacked,
.section-intro--centered {
  max-width: 42rem;
}

.section-intro--centered {
  text-align: center;
}

.metrics-grid,
.service-grid,
.article-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.metric-card,
.service-card,
.product-card,
.article-card {
  padding: 1.35rem;
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.06);
}

.metric-card {
  display: grid;
  gap: 1rem;
  min-height: 100%;
}

.metric-card__value {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  color: var(--text-primary);
}

.metric-card__value--accent {
  color: color.adjust($vert, $lightness: 14%);
}

.metric-card__meta {
  margin: 0;
  font-size: 0.92rem;
  color: var(--text-muted);
}

.metric-card__scores {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.8rem;
}

.metric-card__scores span {
  display: grid;
  gap: 0.2rem;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--text-primary);
}

.metric-card__scores small {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: color.adjust($vert, $lightness: 12%);
}

.section-footer {
  display: flex;
  justify-content: flex-start;
  margin-top: 1.4rem;
}

.service-card {
  display: grid;
  gap: 0.9rem;
}

.service-card h3,
.product-card h3,
.project-card h3,
.article-card h3 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.55rem);
  line-height: 1.08;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.service-card p,
.product-card p,
.article-card p {
  margin: 0;
  font-size: 0.98rem;
}

.project-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.project-card {
  position: relative;
  min-height: 18rem;
  display: flex;
  overflow: hidden;
  border-radius: 1.9rem;
  background: var(--surface-soft);
  isolation: isolate;
  transform: translateZ(0);
  box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.18);
  transition:
    transform 0.85s cubic-bezier(0.2, 0.8, 0.2, 1),
    box-shadow 0.85s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.project-card--wide {
  @media (min-width: $breakpoint-tablet) {
    min-height: 19rem;
    grid-column: 1 / -1;
  }
}

.project-card--wide-secondary {
  min-height: 16rem;
}

.project-card__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.001);
  transform-origin: center center;
  will-change: transform, filter;
  transition:
    transform 1.45s cubic-bezier(0.16, 0.84, 0.22, 1),
    filter 1.3s cubic-bezier(0.16, 0.84, 0.22, 1);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  opacity: 0.92;
  background:
    linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.72)),
    linear-gradient(135deg, rgba(15, 15, 15, 0.05), rgba(15, 15, 15, 0.4));
  transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.project-card__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  width: 100%;
  padding: 1.4rem;
}

.project-card__tags {
  color: rgba(242, 240, 240, 0.76);
}

.project-card p {
  margin: 0;
  max-width: 26rem;
  color: rgba(242, 240, 240, 0.88);
}

.project-card__cta {
  display: inline-flex;
  width: fit-content;
  min-height: 2.2rem;
  align-items: center;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 0.82rem;
  font-weight: 700;
}

.project-card:focus-visible {
  transform: translateY(-0.08rem);
  box-shadow: 0 1.15rem 2.8rem rgba(0, 0, 0, 0.22);
}

.project-card:focus-visible .project-card__image {
  transform: scale(1.016);
  filter: saturate(1.015) brightness(1.01);
}

.project-card:focus-visible .project-card__overlay {
  opacity: 0.84;
}

@media (hover: hover) and (pointer: fine) {
  .project-card:hover {
    transform: translateY(-0.08rem);
    box-shadow: 0 1.15rem 2.8rem rgba(0, 0, 0, 0.22);
  }

  .project-card:hover .project-card__image {
    transform: scale(1.016);
    filter: saturate(1.015) brightness(1.01);
  }

  .project-card:hover .project-card__overlay {
    opacity: 0.84;
  }
}

.home-greenlight {
  display: grid;
  gap: 1.25rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    align-items: start;
  }
}

.home-greenlight__copy {
  display: grid;
  gap: 1rem;
}

.home-greenlight__copy .section-title,
.home-greenlight__copy .section-intro {
  max-width: 34rem;
}

.home-greenlight__lead {
  margin: 0;
  max-width: 34rem;
  font-size: 1rem;
}

.product-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.product-card {
  display: grid;
  gap: 0.85rem;
  min-height: 100%;
}

.product-card__badge {
  color: color.adjust($vert, $lightness: 14%);
}

.product-card__list {
  display: grid;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--text-muted);
}

.product-card__list li::before {
  content: '•';
  color: color.adjust($vert, $lightness: 12%);
  margin-right: 0.45rem;
}

.home-approach {
  background:
    radial-gradient(
      circle at center,
      rgba(0, 168, 62, 0.12),
      transparent 34rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0));
}

.home-approach__inner {
  max-width: 46rem;
  display: grid;
  gap: 1rem;
  justify-items: center;
  text-align: center;
}

.home-approach__inner .section-title {
  max-width: 11ch;
}

.home-approach__text {
  margin: 0;
  max-width: 38rem;
}

.principles {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;
}

.principles span {
  display: inline-flex;
  align-items: center;
  min-height: 2.3rem;
  padding: 0.4rem 0.85rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--text-primary);
  font-size: 0.86rem;
  font-weight: 700;
}

.article-grid {
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.article-card {
  display: grid;
  gap: 0.85rem;
}

.article-card h3 a {
  background: none;
}

.final-cta {
  padding: clamp(1.8rem, 4vw, 3rem);
  border-radius: 2rem;
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.28),
      transparent 18rem
    ),
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.06),
      rgba(255, 255, 255, 0.03)
    );
  display: grid;
  gap: 1rem;
  justify-items: center;
  text-align: center;
}

.final-cta .section-title {
  max-width: 12ch;
}

.final-cta__text {
  margin: 0;
  max-width: 36rem;
}

a:focus-visible {
  outline: 2px solid color.adjust($vert, $lightness: 16%);
  outline-offset: 4px;
}

@media (max-width: $breakpoint-tablet) {
  .home-hero,
  .home-section,
  .home-section--compact {
    padding-top: 3.25rem;
    padding-bottom: 3.25rem;
  }

  .home-hero {
    min-height: auto;
    padding-top: 6rem;
  }

  .project-card,
  .project-card--wide,
  .project-card--wide-secondary {
    min-height: 16rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .button,
  .text-link,
  .project-card__image {
    transition: none;
  }
}
</style>
