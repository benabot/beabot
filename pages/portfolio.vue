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
          Chaque projet est une occasion de prouver qu'efficacité et durabilité vont de pair.
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

    <!-- Compétences techniques -->
    <section class="portfolio-skills" aria-labelledby="portfolio-skills-title">
      <header class="skills-header">
        <h2 id="portfolio-skills-title" class="skills-title">Compétences</h2>
        <p class="skills-subtitle">
          Front, CMS et éco-conception : un socle concret pour livrer des sites fiables.
        </p>
      </header>

      <div class="skills-grid">
        <article v-for="block in skillsBlocks" :key="block.title" class="skills-card">
          <h3 class="skills-card-title">{{ block.title }}</h3>
          <ul class="skills-list">
            <li v-for="item in block.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <!-- Filtres projets -->
    <section class="portfolio-filters" aria-labelledby="portfolio-filters-title">
      <div class="filters-header">
        <h2 id="portfolio-filters-title" class="filters-title">Réalisations</h2>
        <p class="filters-count" aria-live="polite">
          {{ filteredProjects.length }} projets affichés
          <span v-if="activeFilter === 'all'">
            — dont {{ ecoCount }} éco-conçus
          </span>
          <span v-else>
            — dont {{ filteredEcoCount }} éco-conçus
          </span>
        </p>
      </div>

      <div class="filters-tabs" role="tablist" aria-label="Filtres projets">
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
    </section>

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
const skillsBlocks = computed(() => Object.values(skills))

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
  title: 'portfolio',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Différentes créations web dont certaines sont éco-conçues et toutes bâties à partir d\'un wedesign soigné.',
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: portfolioCanonicalUrl,
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
.portfolio-skills {
  width: min(92vw, 980px);
  margin: 0 auto var(--space-5);
  display: grid;
  gap: var(--space-4);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 0.35fr) minmax(0, 0.65fr);
    align-items: start;
  }
}
.skills-header {
  text-align: center;
  margin-bottom: 0;

  @media (min-width: $breakpoint-tablet) {
    text-align: left;
  }
}
.skills-title {
  margin: 0 0 0.5rem;
  font-size: clamp(1.6rem, 3.6vw, 2.4rem);
  color: $gris1;
}
.skills-subtitle {
  margin: 0;
  color: $gris2;
  font-weight: 600;
  line-height: 1.5;

  @media (min-width: $breakpoint-tablet) {
    max-width: 22rem;
  }
}
.skills-grid {
  display: grid;
  gap: var(--space-3);
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.skills-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 18px;
  padding: var(--space-3);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.04);
}
.skills-card-title {
  margin: 0 0 0.75rem;
  color: $gris1;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: var(--space-1);
  color: $gris2;
  font-weight: 600;
  font-size: 0.95rem;
}
.skills-list li {
  padding-left: 1rem;
  position: relative;
}
.skills-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  background: $vert;
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
  padding-bottom: var(--space-7);
}
.portfolio-filters {
  width: min(92vw, 980px);
  margin: 0 auto var(--space-4);
  text-align: center;
  display: grid;
  gap: var(--space-4);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
    align-items: end;
    text-align: left;
  }
}
.filters-header {
  margin-bottom: 0;
}
.filters-title {
  margin: 0 0 0.35rem;
  font-size: clamp(1.6rem, 3.6vw, 2.4rem);
  color: $gris1;
}
.filters-count {
  margin: 0;
  font-weight: 600;
  color: $gris2;
}
.filters-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);

  @media (min-width: $breakpoint-tablet) {
    justify-content: flex-start;
  }
}
.filter-pill {
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.85);
  color: $gris2;
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.01em;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}
.filter-pill:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
.filter-pill:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 57, 217, 0.18);
}
.filter-pill.is-active {
  background: $bleu2;
  color: #fff;
  border-color: $bleu2;
}
.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.3rem;
  height: 1.3rem;
  padding: 0 0.3rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  font-size: 0.7rem;
  font-weight: 600;
  color: $gris2;
}
.filter-pill.is-active .filter-count {
  background: rgba(255, 255, 255, 0.2);
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
</style>
