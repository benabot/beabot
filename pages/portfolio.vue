<template>
  <main class="portfolio-page">
    <!-- SVG clipPath partagé pour cartes projet -->
    <svg class="sr-only" aria-hidden="true">
      <defs>
        <clipPath id="shared-egg-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0 v1 h1 V0 H0 m0.948,0.507 c-0.063,0.25,-0.207,0.466,-0.461,0.466 S0.026,0.765,0.026,0.507 S0.236,0.084,0.487,0.041 c0.486,-0.083,0.531,0.191,0.461,0.466"
          />
        </clipPath>
      </defs>
    </svg>

    <!-- Hero noir intégral -->
    <section
      class="hero"
      data-nav-theme="light"
      aria-labelledby="portfolio-hero-title"
    >
      <span
        class="deco-egg deco-egg--green hero-egg-1"
        aria-hidden="true"
      ></span>
      <span
        class="deco-egg deco-egg--amber hero-egg-2"
        aria-hidden="true"
      ></span>
      <span
        class="deco-egg deco-egg--blue hero-egg-3"
        aria-hidden="true"
      ></span>

      <div class="hero__content">
        <p class="kicker kicker--light">Portfolio</p>
        <h1 id="portfolio-hero-title" class="hero__title">
          <span class="hero__name">Benoît Abot</span>
          <span class="hero__role">
            Développeur web et designer spécialisé en éco‑conception
          </span>
        </h1>
        <p class="hero__lead">
          Je conçois des sites performants, accessibles et sobres en
          ressources. Chaque projet est une occasion de prouver qu'efficacité
          et durabilité vont de pair, reposant sur des
          <a href="#competences-title" class="hero__link">
            compétences mises en œuvre
          </a>
          au fil de projets concrets.
        </p>
        <p class="hero__meta">
          15 ans d'expérience
          <span aria-hidden="true">•</span>
          Spécialiste éco-conception
        </p>
        <div class="hero__cta">
          <a
            href="/cv.pdf"
            class="btn btn--primary"
            download
            aria-label="Télécharger mon CV au format PDF"
          >
            Voir mon CV ↓
          </a>
          <AppLink to="/contact/" class="btn btn--ghost">
            Me contacter →
          </AppLink>
        </div>
      </div>
    </section>

    <!-- Réalisations (clair) -->
    <section class="realisations" aria-labelledby="realisations-title">
      <div class="realisations__inner">
        <p class="kicker">Réalisations</p>
        <h2 id="realisations-title" class="section-title">
          Extraits de 15 ans de web
        </h2>
        <p class="section-lead">
          Projets WordPress et front-end conçus avec la même logique de sobriété
          technique.
        </p>

        <div class="filters" role="tablist" aria-label="Filtres projets">
          <button
            v-for="(filter, index) in portfolioFilters"
            :key="filter.id"
            ref="filterButtons"
            type="button"
            class="filter-pill"
            :class="{ 'is-active': activeFilter === filter.id }"
            role="tab"
            :id="`portfolio-tab-${filter.id}`"
            :aria-selected="activeFilter === filter.id"
            :tabindex="activeFilter === filter.id ? 0 : -1"
            aria-controls="portfolio-grid"
            @click="setFilter(filter.id)"
            @keydown="onFilterKeydown($event, index)"
          >
            <span>{{ filter.label }}</span>
            <span class="filter-pill__count">{{ filter.count }}</span>
          </button>
        </div>

        <div
          id="portfolio-grid"
          class="projects-list"
          role="tabpanel"
          :aria-labelledby="`portfolio-tab-${activeFilter}`"
        >
          <BoiteArticle
            v-for="project in filteredProjects"
            :key="project.id"
            :titre="project.title"
            :sous-titre="project.subtitle"
            :background-url="project.image"
            :lien="project.url"
            :chips="project.tags"
            :metrics="project.metrics"
            :article-link="project.articleLink"
            :github-link="project.githubLink"
            :object-position="project.objectPosition"
          />
        </div>
      </div>
    </section>

    <!-- Dark-tail : compétences + contact, un seul wrapper -->
    <section
      class="dark-tail"
      data-nav-theme="light"
      aria-labelledby="competences-title"
    >
      <span
        class="deco-egg deco-egg--amber tail-egg-1"
        aria-hidden="true"
      ></span>
      <span
        class="deco-egg deco-egg--purple tail-egg-2"
        aria-hidden="true"
      ></span>
      <span
        class="deco-egg deco-egg--green-big tail-egg-3"
        aria-hidden="true"
      ></span>
      <span
        class="deco-egg deco-egg--blue-small tail-egg-4"
        aria-hidden="true"
      ></span>

      <div class="dark-tail__inner">
        <p class="kicker kicker--light">Compétences</p>
        <h2 id="competences-title" class="section-title section-title--light">
          Stack & savoir-faire
        </h2>

        <div class="skills">
          <div
            v-for="block in skillBlocks"
            :key="block.title"
            class="skill"
            :style="{ '--skill-color': block.color }"
          >
            <span class="skill__icon" aria-hidden="true">{{ block.icon }}</span>
            <span class="skill__rule" aria-hidden="true"></span>
            <h3 class="skill__title">{{ block.title }}</h3>
            <p class="skill__items">{{ block.items.join(', ') }}</p>
          </div>
        </div>

        <div class="bridge" aria-hidden="true">
          <span class="bridge__line"></span>
          <span class="bridge__dot"></span>
        </div>

        <div class="contact" aria-labelledby="contact-title">
          <p class="kicker kicker--light">Contact</p>
          <h2 id="contact-title" class="section-title section-title--light">
            Un site à alléger, refondre ou développer proprement&nbsp;?
          </h2>
          <p class="section-lead section-lead--light">
            Conception, développement, optimisation ou base technique sobre.
          </p>
          <div class="contact__cta">
            <AppLink to="/contact/" class="btn btn--primary">
              Me contacter
            </AppLink>
            <a
              href="https://github.com/benabot"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--ghost btn--ghost-light"
            >
              Voir mon GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import { filters as portfolioFilters, projects, skills } from '~/data/portfolio'
import { canonicalUrl } from '~/utils/seo-url'

const activeFilter = ref('all')
const filterButtons = ref([])

const setFilter = (filterId) => {
  activeFilter.value = filterId
}

const matchesFilter = (project, filterId) => {
  if (filterId === 'all') return true
  if (filterId === 'vjs')
    return project.tags.includes('VueJs') || project.tags.includes('Nuxt')
  if (filterId === 'wp') return project.tags.includes('WordPress')
  if (filterId === 'eco') return project.tags.includes('Éco-conçu')
  if (filterId === 'design') return project.tags.includes('WebDesign')
  if (filterId === 'ios') return project.tags.includes('iOS')
  return true
}

const filteredProjects = computed(() =>
  projects.filter((project) => matchesFilter(project, activeFilter.value)),
)

const skillBlocks = computed(() => [
  {
    title: 'Front-end',
    icon: '</>',
    color: '#3b82f6',
    items: skills.frontend.items,
  },
  {
    title: 'WordPress',
    icon: 'W',
    color: '#8b5cf6',
    items: skills.backend.items,
  },
  {
    title: 'Éco-conception',
    icon: '⬡',
    color: '#0dc763',
    items: skills.quality.items,
  },
  {
    title: 'DevOps léger',
    icon: '☁',
    color: '#f59e0b',
    items: skills.devops.items,
  },
])

const focusFilter = (index) => {
  const buttons = filterButtons.value || []
  if (!buttons.length) return
  const total = buttons.length
  const nextIndex = ((index % total) + total) % total
  buttons[nextIndex]?.focus()
}

const onFilterKeydown = (event, index) => {
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault()
      focusFilter(index + 1)
      break
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault()
      focusFilter(index - 1)
      break
    case 'Home':
      event.preventDefault()
      focusFilter(0)
      break
    case 'End':
      event.preventDefault()
      focusFilter(portfolioFilters.length - 1)
      break
    default:
      break
  }
}

const config = useRuntimeConfig()
const portfolioCanonicalUrl = canonicalUrl(config.public.siteUrl, '/portfolio')

useSeoMeta({
  title: 'Portfolio Benoît Abot — web éco-conception',
  description:
    'Portfolio de Benoît Abot — développeur web, designer, éco-conception. Vue.js, Nuxt, WordPress, 15 ans de pratique. Disponible en freelance et CDI.',
  ogTitle: 'Portfolio Benoît Abot — web éco-conception',
  ogDescription:
    'Portfolio de Benoît Abot — développeur web, designer, éco-conception. Vue.js, Nuxt, WordPress, 15 ans de pratique. Disponible en freelance et CDI.',
  ogType: 'profile',
  ogUrl: portfolioCanonicalUrl,
  ogImage: `${config.public.siteUrl}/beabot.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Portfolio — Benoît Abot, développeur web',
  twitterDescription:
    'Développeur web et designer, éco-conception, Vue.js, Nuxt, WordPress. 15 ans de pratique.',
})

useHead({
  link: [{ hid: 'canonical', rel: 'canonical', href: portfolioCanonicalUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: 'Benoît Abot',
          jobTitle: 'Développeur web et designer',
          description: "Spécialisé en éco-conception web. 15 ans d'expérience.",
          url: 'https://beabot.fr/portfolio/',
          sameAs: [
            'https://www.linkedin.com/in/benoit-abot/',
            'https://github.com/benabot',
          ],
          knowsAbout: [
            'JavaScript',
            'HTML',
            'CSS',
            'Sass',
            'PHP',
            'SQL',
            'Vue.js',
            'Nuxt',
            'WordPress',
            'WordPress Headless',
            'WordPress theme development',
            'WordPress plugin development',
            'REST API',
            'Git',
            'DevOps',
            'Docker',
            'Nginx',
            'Debian',
            'Bash',
            'SEO',
            'WebDesign',
            'UX Design',
            'UI Design',
            'Figma',
            'Green IT',
            'Éco-conception web',
            'Accessibilité',
            'Performance web',
            'Swift',
            'SwiftUI',
            'iOS',
          ],
        },
      }),
    },
  ],
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.portfolio-page {
  --noir: #0a0e0c;
  --blanc-casse: #f5f7f6;
  --gris-clair: #b8c0bc;
  --fond-clair: #f6f7f5;
  --bordure-sombre: #2d3531;
  --bordure-claire: #d1d5db;

  background: var(--fond-clair);
  color: $gris1;
}

/* === Boutons === */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid transparent;
  transition:
    transform 0.15s ease,
    background-color 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &--primary {
    background: $vert;
    color: var(--noir);
    border-color: $vert;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(0, 168, 62, 0.25);
    }
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 168, 62, 0.35);
    }
  }

  &--ghost {
    background: transparent;
    color: var(--blanc-casse);
    border-color: rgba(255, 255, 255, 0.4);

    &:hover {
      border-color: var(--blanc-casse);
      transform: translateY(-1px);
    }
    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
    }
  }

}

/* === Kicker (réutilisable) === */
.kicker {
  margin: 0 0 0.75rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: $gris3;

  &--light {
    color: var(--gris-clair);
  }
}

/* === Titres section === */
.section-title {
  margin: 0 0 0.6rem;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  line-height: 1.15;
  color: $gris1;

  &--light {
    color: var(--blanc-casse);
  }
}

.section-lead {
  margin: 0 0 2rem;
  font-size: clamp(1rem, 1.8vw, 1.1rem);
  color: $gris3;
  max-width: 56ch;
  line-height: 1.55;

  &--light {
    color: var(--gris-clair);
  }
}

/* === Hero noir intégral === */
.hero {
  position: relative;
  background:
    radial-gradient(
      ellipse at 70% 0%,
      rgba(0, 168, 62, 0.12) 0%,
      transparent 55%
    ),
    var(--noir);
  color: var(--blanc-casse);
  padding: clamp(5rem, 10vw, 8rem) 6% clamp(3.5rem, 7vw, 5.5rem);
  overflow: hidden;
  text-align: center;
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
}

.hero__title {
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.hero__name {
  font-size: clamp(2.5rem, 7vw, 5rem);
  font-weight: 800;
  color: var(--blanc-casse);
}

.hero__role {
  font-size: clamp(1.3rem, 3.5vw, 2.2rem);
  font-weight: 700;
  color: var(--gris-clair);
}

.hero__lead {
  margin: 0 auto 1.25rem;
  font-size: clamp(1rem, 1.6vw, 1.1rem);
  color: var(--gris-clair);
  line-height: 1.6;
  max-width: 56ch;
}

.hero__link {
  color: var(--blanc-casse);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
  transition: text-decoration-color 0.15s ease;

  &:hover {
    text-decoration-color: $vert;
  }
}

.hero__meta {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 0 0 2rem;
  font-size: 0.9rem;
  color: var(--gris-clair);
  opacity: 0.7;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

/* === Réalisations === */
.realisations {
  background: var(--fond-clair);
  padding: clamp(4rem, 8vw, 7rem) 6%;
}

.realisations__inner {
  max-width: 1100px;
  margin: 0 auto;
}

/* === Filtres === */
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 0 2rem;
}

.filter-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  background: #fff;
  color: $gris2;
  border: 1px solid var(--bordure-claire);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease,
    transform 0.15s ease;

  &:hover {
    border-color: $gris1;
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 168, 62, 0.25);
  }
  &.is-active {
    background: var(--noir);
    color: #fff;
    border-color: var(--noir);
  }
}

.filter-pill__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.3rem;
  height: 1.3rem;
  padding: 0 0.35rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  font-size: 0.7rem;
  font-weight: 700;
  color: $gris2;
}

.filter-pill.is-active .filter-pill__count {
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
}

/* === Liste projets (BoiteArticle) === */
.projects-list {
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 5rem);
}

/* === Dark-tail === */
.dark-tail {
  position: relative;
  background: var(--noir);
  color: var(--blanc-casse);
  padding: clamp(4rem, 8vw, 7rem) 6%;
  overflow: hidden;
}

.dark-tail__inner {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
}

.skills {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.skill {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.5rem 1.25rem;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid var(--bordure-sombre);
  border-radius: 14px;
  transition: border-color 0.2s ease, background 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 1.25rem;
    width: 32px;
    height: 2px;
    background: var(--skill-color);
    border-radius: 2px;
  }

  &:hover {
    border-color: var(--skill-color);
    background: rgba(255, 255, 255, 0.04);
  }
}

.skill__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  font-family: ui-monospace, 'SF Mono', Menlo, monospace;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--skill-color);
}

.skill__rule {
  display: none;
}

.skill__title {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--skill-color);
}

.skill__items {
  margin: 0;
  font-size: 0.95rem;
  color: var(--gris-clair);
  line-height: 1.55;
}

/* === Bridge === */
.bridge {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(1rem, 2vw, 1.5rem);
}

.bridge__line {
  display: none;
}

.bridge__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: $vert;
  box-shadow: 0 0 0 4px rgba(0, 168, 62, 0.18);
  margin-top: 0.85rem;
}

/* === Contact === */
.contact {
  margin-top: 1rem;
}

.contact__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-top: 1rem;
}

.btn--ghost-light {
  border-color: rgba(255, 255, 255, 0.4);
  color: var(--blanc-casse);
}

/* === Œufs décoratifs === */
.deco-egg {
  position: absolute;
  pointer-events: none;
  border-radius: 50% 50% 50% 50% / 55% 55% 45% 45%;
  z-index: 1;

  &--green {
    width: 200px;
    height: 245px;
    background: $vert;
    opacity: 0.85;
  }
  &--green-big {
    width: 280px;
    height: 340px;
    background: $vert;
    opacity: 0.7;
  }
  &--amber {
    width: 90px;
    height: 110px;
    background: #f59e0b;
    opacity: 0.85;
  }
  &--blue {
    width: 110px;
    height: 135px;
    background: #3b82f6;
    opacity: 0.7;
  }
  &--blue-small {
    width: 70px;
    height: 88px;
    background: #3b82f6;
    opacity: 0.65;
  }
  &--purple {
    width: 100px;
    height: 125px;
    background: #8b5cf6;
    opacity: 0.6;
  }
}

/* Hero œufs (vifs sur fond noir) */
.hero-egg-1 {
  top: -60px;
  right: -50px;
  transform: rotate(20deg);
}
.hero-egg-2 {
  top: 30%;
  right: 10%;
  transform: rotate(-15deg);

  @media (max-width: 720px) {
    display: none;
  }
}
.hero-egg-3 {
  bottom: -50px;
  left: -40px;
  transform: rotate(-25deg);
}

/* Tail œufs */
.tail-egg-1 {
  top: 5%;
  right: 6%;
  transform: rotate(15deg);

  @media (max-width: 720px) {
    display: none;
  }
}
.tail-egg-2 {
  top: 35%;
  left: -40px;
  transform: rotate(-20deg);

  @media (max-width: 720px) {
    display: none;
  }
}
.tail-egg-3 {
  bottom: -80px;
  right: -60px;
  transform: rotate(10deg);
}
.tail-egg-4 {
  bottom: 8%;
  left: 8%;
  transform: rotate(-30deg);
}

@media (prefers-reduced-motion: reduce) {
  .btn,
  .filter-pill {
    transition: none;
  }
}
</style>
