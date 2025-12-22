<template>
  <div class="boite-article">
    <svg aria-hidden="true" focusable="false" role="presentation">
      <defs>
        <clipPath id="myClip" clipPathUnits="objectBoundingBox">
          <path
            d="M0,0 v1 h1 V0 H0 m0.948,0.507 c-0.063,0.25,-0.207,0.466,-0.461,0.466 S0.026,0.765,0.026,0.507 S0.236,0.084,0.487,0.041 c0.486,-0.083,0.531,0.191,0.461,0.466"
          />
        </clipPath>
        <clipPath id="phone-clip" clipPathUnits="objectBoundingBox">
          <path
            d="M0.541,0.048 c0.263,0.067,0.492,0.217,0.492,0.486 c0,0.269,-0.22,0.486,-0.492,0.487 S0.095,0.8,0.049,0.535 C-0.038,0.023,0.25,-0.025,0.541,0.048"
          ></path>
        </clipPath>
      </defs>
    </svg>

    <article class="article-resum">
      <a
        :href="lien"
        class="boite-image-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="boite-image">
          <div class="boite-image__calque"></div>
          <div class="circle"></div>
          <NuxtImg
            class="boite-image__image"
            :src="resolvedBackgroundUrl"
            :alt="titre || 'Image du projet'"
            :width="imageWidth"
            :height="imageHeight"
            loading="lazy"
            format="webp"
            sizes="(max-width: 768px) 90vw, 40vw"
            :placeholder="20"
            preset="card"
          />
        </div>
      </a>

      <div class="article-body">
        <div class="project-main">
          <header class="project-header">
            <h2 class="project-title">{{ titre }}</h2>
            <h3 class="project-subtitle">{{ sousTitre }}</h3>
          </header>

          <!-- Badge éco-conception -->
          <div v-if="isEcoProject && metricsItems.length" class="eco-badge">
            <div class="eco-badge-header">
              <span class="eco-badge-icon" aria-hidden="true">🌱</span>
              <span class="eco-badge-title">Éco-conçu</span>
            </div>
            <div class="eco-badge-metrics">
              <span
                v-for="item in metricsItems"
                :key="item.label"
                class="eco-metric"
              >
                <span class="eco-metric-label">{{ item.label }}</span>
                <span class="eco-metric-value">{{ item.value }}</span>
              </span>
            </div>
          </div>

          <div v-if="visibleTags.length" class="project-tags">
            <span v-for="tag in visibleTags" :key="tag" class="project-tag">
              {{ tag }}
            </span>
            <span
              v-if="hiddenTags.length"
              class="project-tag tag-more"
              role="button"
              tabindex="0"
              :aria-describedby="tooltipId"
              :aria-label="`Tags supplémentaires: ${hiddenTags.join(', ')}`"
            >
              +{{ hiddenTags.length }}
              <span :id="tooltipId" class="tag-tooltip" role="tooltip">
                {{ hiddenTags.join(' · ') }}
              </span>
            </span>
          </div>
        </div>

        <div class="project-aside">
          <div class="project-links">
            <a
              :href="lien"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-view-site"
            >
              Voir le site →
            </a>
            <AppLink v-if="articleLink" :to="articleLink" class="article-link">
              Lire l'article
            </AppLink>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  titre: {
    type: String,
    default: 'titre',
  },
  sousTitre: {
    type: String,
    default: 'sous titre',
  },
  backgroundUrl: {
    type: String,
    default: 'profilFreakOut.jpg',
  },
  imageWidth: {
    type: Number,
    default: undefined,
  },
  imageHeight: {
    type: Number,
    default: undefined,
  },
  lien: {
    type: String,
    default: '',
  },
  chips: {
    type: Array,
    default: () => [],
  },
  context: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: '',
  },
  stack: {
    type: Array,
    default: () => [],
  },
  metrics: {
    type: Object,
    default: () => null,
  },
  articleLink: {
    type: String,
    default: '',
  },
})

const resolvedBackgroundUrl = computed(() => {
  const src = props.backgroundUrl || ''
  // Absolute or root-relative URL
  if (/^https?:\/\//.test(src) || src.startsWith('/')) return src

  // Fallback to public directory convention: /public/img/<file>
  return `/img/${src}`
})

const metricsItems = computed(() => {
  if (!props.metrics) return []

  const items = []
  if (props.metrics.ecoIndex) {
    items.push({ label: 'EcoIndex', value: props.metrics.ecoIndex })
  }
  if (props.metrics.requests) {
    items.push({
      label: 'Requêtes',
      value: `${props.metrics.requests}`,
    })
  }
  if (props.metrics.pageWeight) {
    items.push({ label: 'Poids page', value: props.metrics.pageWeight })
  }
  if (props.metrics.lighthouse) {
    items.push({
      label: 'Lighthouse',
      value: `${props.metrics.lighthouse}+`,
    })
  }
  if (props.metrics.improvement) {
    items.push({
      label: 'Gain',
      value: props.metrics.improvement,
    })
  }

  return items.slice(0, 3)
})

const normalizeTagLabel = (label) => {
  const normalized = label.trim()
  const lower = normalized.toLowerCase()
  if (lower === 'vuejs') return 'Vue.js'
  if (lower === 'webdesign') return 'Webdesign'
  if (lower === 'wordpress headless') return 'WordPress headless'
  if (lower === 'api rest') return 'API REST'
  return normalized
}

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const isEcoProject = computed(
  () => props.metrics || (props.chips || []).includes('Éco-conçu')
)

const allTags = computed(() => {
  const rawTags = [...(props.chips || [])]
  const seen = new Set()
  return rawTags
    .map(normalizeTagLabel)
    .filter((label) => {
      if (isEcoProject.value && label === 'Éco-conçu') return false
      const key = label.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
})

const visibleTags = computed(() => allTags.value.slice(0, 3))
const hiddenTags = computed(() => allTags.value.slice(3))
const tooltipId = computed(() => `tags-${slugify(props.titre || 'projet')}`)
</script>

<style lang="scss" scoped>
.boite-article {
  width: min(92vw, 1120px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: $breakpoint-tablet) {
    width: min(90vw, 1120px);
  }
}
.article-resum {
  text-align: left;
  display: grid;
  gap: var(--space-4, 2.1rem);
  align-items: center;
  width: 100%;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: var(--space-5, 3.4rem);
  }
}
.boite-image-link {
  display: block;
  position: relative;
  justify-self: start;
  text-decoration: none;

  @media (min-width: $breakpoint-tablet) {
    width: min(100%, 380px);
  }
}
.article-body {
  display: grid;
  gap: var(--space-2, 0.8rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    align-items: start;
    gap: var(--space-3, 1.3rem);
  }
}
.project-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 0.5rem);
}
.project-aside {
  display: flex;
  flex-direction: column;
  gap: var(--space-1, 0.5rem);
}
/* Hiérarchie typographique renforcée */
.project-title {
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  font-weight: 700;
  color: $gris1;
  line-height: 1.2;
}

.project-subtitle {
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  color: $gris3;
  margin: 0.35rem 0 0;
  line-height: 1.4;
}

/* Badge éco-conception visuellement distinctif */
.eco-badge {
  background: linear-gradient(135deg, rgba(0, 168, 62, 0.08) 0%, rgba(0, 168, 62, 0.05) 100%);
  border: 2px solid rgba(0, 168, 62, 0.25);
  border-radius: 10px;
  padding: var(--space-1, 0.5rem) var(--space-2, 0.8rem);
  margin-top: var(--space-1, 0.5rem);
}

.eco-badge-header {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-bottom: 0.4rem;
}

.eco-badge-icon {
  font-size: 1.1rem;
  line-height: 1;
}

.eco-badge-title {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: darken($vert, 10%);
}

.eco-badge-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.8rem;
}

.eco-metric {
  display: inline-flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: 0.85rem;
}

.eco-metric-label {
  font-weight: 600;
  color: $gris3;
  font-size: 0.8rem;
}

.eco-metric-value {
  font-weight: 800;
  color: darken($vert, 5%);
  font-size: 0.9rem;
}

/* Tags simplifiés */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  margin-top: var(--space-1, 0.5rem);
}
.boite-image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;

  &:hover .boite-image__image {
    @media (min-width: $breakpoint-tablet) {
      transform: scale(1.1);
    }
  }
  &:hover .circle {
    @media (min-width: $breakpoint-tablet) {
      background: radial-gradient(transparent 60%, rgb(167, 167, 167));
    }
  }
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.3s;
    z-index: 10;
    clip-path: ellipse(46% 42% at 49% 53%);
    display: block;

    @media (min-width: $breakpoint-tablet) {
      clip-path: none;
    }
  }
  &__calque {
    @media (min-width: $breakpoint-tablet) {
      position: absolute;
      top: -6px;
      bottom: -6px;
      left: -6px;
      right: -6px;
      background: $fondClair;
      z-index: 30;
      clip-path: url(#myClip);
      -webkit-clip-path: url(#myClip);
    }
  }
  .circle {
    @media (min-width: $breakpoint-tablet) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 20;
      transition: all 0.3s;
      background: radial-gradient(transparent 40%, transparent);
    }
  }
}
svg {
  position: absolute;
  width: 0;
  height: 0;
}

.project-tag {
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 999px;
  padding: 0.2rem 0.55rem;
  font-size: 0.7rem;
  font-weight: 600;
  color: $gris3;
  background: rgba(0, 0, 0, 0.02);
}
.tag-more {
  position: relative;
  cursor: default;
}
.tag-more:focus-visible {
  outline: 1px solid rgba(4, 57, 217, 0.4);
  outline-offset: 2px;
}
.tag-tooltip {
  position: absolute;
  left: 50%;
  top: calc(100% + 0.35rem);
  transform: translateX(-50%);
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  padding: 0.35rem 0.5rem;
  font-size: 0.65rem;
  color: $gris2;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 5;
}
.tag-more:hover .tag-tooltip,
.tag-more:focus-visible .tag-tooltip {
  opacity: 1;
  visibility: visible;
}
.project-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: var(--space-2, 0.8rem);
}

/* Bouton "Voir le site" cohérent avec hero */
.btn-view-site {
  background-color: $bleu2;
  color: white;
  border: 2px solid transparent;
  border-radius: 999px;
  padding: 0.65rem 1.3rem;
  font-weight: 800;
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.12s ease, background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}

.btn-view-site:hover {
  background-color: white;
  color: $bleu2;
  border-color: $bleu2;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(4, 57, 217, 0.2);
}

.btn-view-site:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 57, 217, 0.25);
}

.article-link {
  font-weight: 700;
  font-size: 0.85rem;
  color: $bleu2;
  text-decoration: none;
  text-align: center;
  padding: 0.35rem 0;
  transition: opacity 0.12s ease;
  position: relative;
}

.article-link::after {
  content: '';
  position: absolute;
  bottom: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 1px;
  background: $bleu2;
  transition: width 0.2s ease;
}

.article-link:hover {
  opacity: 0.85;
}

.article-link:hover::after {
  width: 80%;
}

.article-link:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 3px;
  border-radius: 4px;
}

.boite-article:nth-child(even) .article-resum {
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  }
}
.boite-article:nth-child(even) .boite-image-link {
  @media (min-width: $breakpoint-tablet) {
    order: 2;
    justify-self: end;
  }
}
.boite-article:nth-child(even) .article-body {
  @media (min-width: $breakpoint-tablet) {
    order: 1;
  }
}
</style>
