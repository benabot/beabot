<template>
  <main class="portfolio-page">
    <!-- Section Hero -->
    <section class="hero-portfolio">
      <!-- Œufs décoratifs en background -->
      <LazyOeuf
        class="hero-oeuf hero-oeuf-1"
        width="28%"
        transform="rotate(-45)"
        :fill="'#0439d9'"
      />
      <LazyOeuf
        class="hero-oeuf hero-oeuf-2"
        width="22%"
        transform="rotate(15)"
        :fill="'#f2a81d'"
      />
      <LazyOeuf
        class="hero-oeuf hero-oeuf-3"
        width="18%"
        transform="rotate(-85)"
        :fill="'#00a83e'"
      />

      <div class="hero-content">
        <p class="kicker">Portfolio</p>

        <h1>
          Benoît Abot<br />
          <span class="subtitle">Développeur web & designer<br />spécialisé en éco-conception</span>
        </h1>

        <p class="hero-description">
          Je conçois des sites performants, accessibles et sobres en ressources.
          Chaque projet est une occasion de prouver qu'efficacité et durabilité vont de pair,
          reposant sur des
          <a href="#competences" class="hero-inline-link">compétences mises en œuvre</a>
          au fil de projets concrets.
        </p>

        <div class="hero-stats" aria-label="Statistiques du portfolio">
          <span class="stat-item">15 ans d'expérience</span>
          <span class="stat-separator">•</span>
          <span class="stat-item">Spécialiste éco-conception</span>
        </div>

        <div class="hero-cta">
          <a
            href="/cv.pdf"
            class="btn-primary"
            download
            aria-label="Télécharger mon CV au format PDF"
          >
            Voir mon CV ↓
          </a>
          <AppLink to="/contact/" class="btn-secondary">
            Me contacter →
          </AppLink>
        </div>
      </div>
    </section>

    <!-- Timeline dot 1: Hero → Réalisations -->
    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <!-- Header section Réalisations -->
    <header class="section-header" aria-labelledby="portfolio-filters-title">
      <div class="section-header-main">
        <div class="section-header-title-group">
          <h2 id="portfolio-filters-title" class="section-title">Extraits de 15 ans de web</h2>
          <p class="section-count" aria-live="polite">
            {{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }} • dont {{ activeFilter === 'all' ? ecoCount : filteredEcoCount }} éco-conçu{{ (activeFilter === 'all' ? ecoCount : filteredEcoCount) > 1 ? 's' : '' }}
          </p>
        </div>

        <div class="section-header-filters" role="tablist" aria-label="Filtres projets">
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
            <span class="filter-label">{{ filter.label }}</span>
            <span class="filter-count">{{ filter.count }}</span>
          </button>
        </div>
      </div>
    </header>

    <div class="portfolio-divider" aria-hidden="true"></div>

    <TransitionGroup
      name="fade"
      tag="section"
      class="container--page portfolio-grid"
      id="portfolio-grid"
      role="tabpanel"
      :aria-labelledby="`portfolio-tab-${activeFilter}`"
    >
      <LazyBoiteArticle
        v-for="project in filteredProjects"
        :key="project.id"
        :id="project.id"
        :titre="project.title"
        :sous-titre="project.subtitle"
        :background-url="project.image"
        :chips="project.tags"
        :lien="project.url"
        :context="project.context"
        :role="project.role"
        :stack="project.stack"
        :metrics="project.metrics"
        :article-link="project.articleLink"
      />
    </TransitionGroup>

    <!-- Timeline dot 2: Réalisations → Compétences -->
    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <!-- Compétences techniques -->
    <section
      id="competences"
      class="portfolio-skills"
      aria-labelledby="portfolio-skills-title"
    >
      <div class="skills-container">
        <header class="skills-header">
          <h2 id="portfolio-skills-title" class="skills-title">Compétences</h2>
        </header>

        <div class="skills-grid">
          <article class="skills-card">
            <h3 class="skills-card-title">
              <span class="skill-emoji" aria-hidden="true">🎨</span>
              Front-end
            </h3>
            <ul class="skills-list">
              <li v-for="item in skillsBlocks[0].items" :key="item">{{ item }}</li>
            </ul>
          </article>

          <article class="skills-card">
            <h3 class="skills-card-title">
              <span class="skill-emoji" aria-hidden="true">⚙️</span>
              Back-end / CMS
            </h3>
            <ul class="skills-list">
              <li v-for="item in skillsBlocks[1].items" :key="item">{{ item }}</li>
            </ul>
          </article>

          <article class="skills-card">
            <h3 class="skills-card-title">
              <span class="skill-emoji" aria-hidden="true">🌱</span>
              Éco-conception / Qualité
            </h3>
            <ul class="skills-list">
              <li v-for="item in skillsBlocks[2].items" :key="item">{{ item }}</li>
            </ul>
          </article>

          <article class="skills-card">
            <h3 class="skills-card-title">
              <span class="skill-emoji" aria-hidden="true">🛠️</span>
              DevOps
            </h3>
            <ul class="skills-list">
              <li v-for="item in skillsBlocks[3].items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Timeline dot 3: Compétences → CTA Final -->
    <div class="timeline-dot" aria-hidden="true">
      <span class="timeline-dot__core"></span>
    </div>

    <!-- CTA Final -->
    <section class="cta-final">
      <div class="cta-content">
        <h2 class="cta-title">Envie de travailler ensemble ?</h2>
        <p class="cta-description">
          Disponible pour des missions freelance<br>
          et ouvert aux opportunités CDI.
        </p>
        <div class="cta-buttons">
          <a
            href="/cv.pdf"
            class="btn-primary"
            download
            aria-label="Télécharger mon CV au format PDF"
          >
            Télécharger mon CV ↓
          </a>
          <AppLink to="/contact/" class="btn-secondary">
            Me contacter →
          </AppLink>
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
  if (filterId === 'vjs') {
    return project.tags.includes('VueJs') || project.tags.includes('Nuxt')
  }
  if (filterId === 'wp') {
    return project.tags.includes('WordPress')
  }
  if (filterId === 'eco') {
    return project.tags.includes('Éco-conçu')
  }
  if (filterId === 'design') {
    return project.tags.includes('WebDesign')
  }

  return true
}

const filteredProjects = computed(() =>
  projects.filter((project) => matchesFilter(project, activeFilter.value))
)
const ecoCount = computed(() =>
  projects.filter((project) => project.tags.includes('Éco-conçu')).length
)
const filteredEcoCount = computed(() =>
  filteredProjects.value.filter((project) => project.tags.includes('Éco-conçu'))
    .length
)
const skillsBlocks = computed(() => [
  skills.frontend,
  skills.backend,
  skills.quality,
  skills.devops,
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

useHead({
  title: 'Portfolio — Benoît Abot, développeur web éco-conception',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Portfolio de Benoît Abot, développeur web et designer spécialisé en éco-conception. 15 ans d\'expérience, Vue.js, Nuxt, WordPress. Disponible en freelance et CDI.',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Portfolio — Benoît Abot, développeur web éco-conception',
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content:
        'Développeur web et designer spécialisé en éco-conception. Sites performants, accessibles et sobres.',
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'profile',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: portfolioCanonicalUrl,
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: portfolioCanonicalUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: 'Benoît Abot',
          jobTitle: 'Développeur web & designer',
          description:
            'Spécialisé en éco-conception web. 15 ans d\'expérience.',
          url: 'https://beabot.fr/portfolio/',
          sameAs: [
            'https://www.linkedin.com/in/benoit-abot/',
            'https://github.com/benabot',
          ],
          knowsAbout: [
            'Vue.js',
            'Nuxt',
            'WordPress',
            'Éco-conception web',
            'Accessibilité',
            'Performance web',
          ],
        },
      }),
    },
  ],
})
</script>

<style lang="scss" scoped>
/* Spacing scale (Fibonacci-inspired) */
.portfolio-page {
  --space-1: 0.5rem;
  --space-2: 0.8rem;
  --space-3: 1.3rem;
  --space-4: 2.1rem;
  --space-5: 3.4rem;
  --space-6: 5.5rem;
  --space-7: 8.9rem;
}

/* Hero Portfolio */
.hero-portfolio {
  position: relative;
  width: clamp(90vw, 85vw, 900px);
  margin: var(--space-6) auto var(--space-5);
  padding: clamp(2rem, 4vw, 3.5rem);
  text-align: center;
  overflow: hidden;

  /* Fond subtil */
  background: linear-gradient(135deg, rgba(242, 240, 240, 0.4) 0%, rgba(217, 217, 217, 0.2) 100%);
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

/* Œufs flottants en background */
.hero-oeuf {
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  pointer-events: none;
}

.hero-oeuf-1 {
  top: -8%;
  left: -5%;
}

.hero-oeuf-2 {
  bottom: -6%;
  right: -3%;
}

.hero-oeuf-3 {
  top: 45%;
  left: -4%;

  @media (max-width: 640px) {
    display: none;
  }
}

/* Contenu Hero (au-dessus des œufs) */
.hero-content {
  position: relative;
  z-index: 2;
}

.kicker {
  margin: 0 0 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  opacity: 0.55;
  display: inline-block;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.18);
}

h1 {
  font-size: clamp(2.8rem, 6vw, 5.6rem);
  line-height: 0.95;
  margin: 0 0 1.5rem;
  color: $gris1;
}

.subtitle {
  display: block;
  font-size: clamp(1.6rem, 3.5vw, 3rem);
  font-weight: 600;
  margin-top: 0.5rem;
  color: $gris2;
  opacity: 0.9;
}

.hero-description {
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  margin: 0 auto 1.5rem;
  max-width: 600px;
  color: $gris2;
  opacity: 0.95;
}
.hero-inline-link {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: rgba(4, 57, 217, 0.35);
  text-underline-offset: 3px;
}
.hero-inline-link:hover,
.hero-inline-link:focus-visible {
  text-decoration-color: rgba(4, 57, 217, 0.6);
}

/* Stats */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0.8rem;
  margin: var(--space-4) auto var(--space-4);
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  opacity: 0.8;

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
}

.stat-item {
  white-space: nowrap;
}

.stat-separator {
  opacity: 0.5;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: var(--space-4);

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 16px;
  }
}

.btn-primary {
  background-color: #0dc763;
  color: white;
  border: 2px solid transparent;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.12s ease, filter 0.12s ease, box-shadow 0.12s ease,
    background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease;
}

.btn-primary:hover {
  background-color: white;
  color: #0dc763;
  border-color: #0dc763;
  transform: translateY(-1px);
}

.btn-primary:focus,
.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 217, 79, 0.22);
}

.btn-secondary {
  color: $bleu2;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  padding: 0.75rem 1.5rem;
  transition: opacity 0.12s ease;
}

.btn-secondary:hover {
  opacity: 0.7;
}

.btn-secondary:focus,
.btn-secondary:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 4px;
  border-radius: 4px;
}
/* Section Compétences - Rupture visuelle douce */
.portfolio-skills {
  width: 100%;
  margin-top: var(--space-7);
  padding: var(--space-6) 0;
  background: linear-gradient(180deg, rgba(245, 245, 245, 0.5) 0%, #fafafa 100%);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: min(85vw, 800px);
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(4, 57, 217, 0.2) 50%, transparent 100%);
  }
}

.skills-container {
  width: min(92vw, 1120px);
  margin: 0 auto;
}

.skills-header {
  text-align: center;
  margin-bottom: var(--space-5);
}

.skills-title {
  margin: 0;
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  color: $gris1;
  white-space: nowrap;
}

/* Grid responsive 4 cols desktop / 2 tablette / 1 mobile */
.skills-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* Cards avec fond, bordure et ombre */
.skills-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: var(--space-4);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }
}

.skills-card-title {
  margin: 0 0 var(--space-3);
  color: $gris1;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.skill-emoji {
  font-size: 1.3rem;
  line-height: 1;
  display: inline-block;
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  color: $gris2;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1.5;
}

.skills-list li {
  padding-left: 1.2rem;
  position: relative;
}

.skills-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: $bleu2;
}
.boite-article {
  @media (max-width: $breakpoint-tablet) {
    margin-bottom: 0;
  }
}
.boite-article:not(:first-of-type) {
  @media (min-width: $breakpoint-tablet) {
    margin-top: 0;
  }
}
.portfolio-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-6);
  padding-top: var(--space-4);
  padding-bottom: var(--space-6);

  @media (min-width: $breakpoint-tablet) {
    gap: var(--space-7);
  }
}
/* Header section Réalisations */
.section-header {
  width: min(92vw, 980px);
  margin: var(--space-6) auto var(--space-4);
  padding: var(--space-4);
  background: linear-gradient(135deg, rgba(242, 240, 240, 0.3) 0%, rgba(255, 255, 255, 0.5) 100%);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.section-header-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
}

.section-header-title-group {
  text-align: center;

  @media (min-width: $breakpoint-tablet) {
    text-align: left;
  }
}

.section-title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 800;
  color: $gris1;
  position: relative;
  display: inline-block;
  padding-bottom: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: $bleu1;
    border-radius: 2px;

    @media (min-width: $breakpoint-tablet) {
      left: 0;
    }
  }

  @media (max-width: $breakpoint-tablet) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.section-count {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  font-weight: 600;
  color: $gris3;
  letter-spacing: 0.01em;
}

.section-header-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);

  @media (min-width: $breakpoint-tablet) {
    justify-content: flex-end;
  }
}

.portfolio-divider {
  width: min(92vw, 1120px);
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin: 0 auto var(--space-5);
}

/* Filter pills redesign */
.filter-pill {
  border: 2px solid rgba(0, 0, 0, 0.12);
  background: #fff;
  color: $gris2;
  border-radius: 999px;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.filter-pill:hover {
  border-color: $bleu2;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(4, 57, 217, 0.15);
}

.filter-pill:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 57, 217, 0.25);
  border-color: $bleu2;
}

.filter-pill.is-active {
  background: $bleu2;
  color: #fff;
  border-color: $bleu2;
  box-shadow: 0 2px 8px rgba(4, 57, 217, 0.2);
}

.filter-pill.is-active:hover {
  background: darken($bleu2, 5%);
  border-color: darken($bleu2, 5%);
  box-shadow: 0 4px 12px rgba(4, 57, 217, 0.3);
}

.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.4rem;
  height: 1.4rem;
  padding: 0 0.35rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.08);
  font-size: 0.75rem;
  font-weight: 700;
  color: $gris2;
}

.filter-pill.is-active .filter-count {
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Timeline dots - Points d'ancrage visuels entre sections */
.timeline-dot {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 0;
  position: relative;
}

/* Lignes verticales courtes au-dessus et en-dessous */
.timeline-dot::before,
.timeline-dot::after {
  content: '';
  position: absolute;
  left: 50%;
  width: 2px;
  height: 24px;
  transform: translateX(-50%);
}

.timeline-dot::before {
  top: 0;
  background: linear-gradient(to bottom, transparent, $bleu1);
}

.timeline-dot::after {
  bottom: 0;
  background: linear-gradient(to top, transparent, $bleu1);
}

/* Point central vert avec halo subtil */
.timeline-dot__core {
  width: 14px;
  height: 14px;
  background: $vert;
  border-radius: 50%;
  box-shadow:
    0 0 0 4px rgba(0, 168, 62, 0.15),
    0 0 0 8px rgba(0, 168, 62, 0.08);
  position: relative;
  z-index: 1;
}

/* CTA Final - Call to action */
.cta-final {
  width: 100%;
  margin-top: var(--space-7);
  margin-bottom: var(--space-6);
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cta-content {
  position: relative;
  width: clamp(90vw, 85vw, 900px);
  padding: clamp(3rem, 5vw, 4rem) clamp(2rem, 4vw, 3.5rem);
  text-align: center;

  /* Même style que le hero */
  background: linear-gradient(135deg, rgba(242, 240, 240, 0.4) 0%, rgba(217, 217, 217, 0.2) 100%);
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

.cta-title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  color: $gris1;
  line-height: 1.2;
}

.cta-description {
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  margin: 0 auto var(--space-4);
  color: $gris2;
  opacity: 0.95;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: var(--space-4);

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 16px;
  }
}
</style>
