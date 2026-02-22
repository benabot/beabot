<template>
  <div class="boite-article">
    <article class="article-resum">
      <component
        :is="lien ? 'a' : 'div'"
        v-bind="lien ? { href: lien, target: '_blank', rel: 'noopener noreferrer' } : {}"
        class="boite-image-link"
      >
        <div class="boite-image">
          <div class="boite-image__calque" :style="calqueStyle"></div>
          <div class="circle"></div>
          <img
            class="boite-image__image"
            :src="resolvedBackgroundUrl"
            :alt="titre || 'Image du projet'"
            :style="{ objectPosition }"
            width="380"
            height="380"
            loading="lazy"
            decoding="async"
          />
        </div>
      </component>

      <div class="article-body">
        <div class="project-main">
          <header class="project-header">
            <h2 class="project-title">{{ titre }}</h2>
            <h3 class="project-subtitle">{{ sousTitre }}</h3>
          </header>

          <!-- Badge éco-conception -->
          <div v-if="isEcoProject && metricsVisible.length" class="eco-badge">
            <div class="eco-badge-header">
              <span class="eco-badge-icon" aria-hidden="true">🌱</span>
              <span class="eco-badge-title">Éco-conçu</span>
            </div>
            <div class="eco-badge-metrics">
              <span
                v-for="item in metricsVisible"
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
              :class="{ 'is-open': isTooltipOpen }"
              role="button"
              tabindex="0"
              :aria-describedby="tooltipId"
              :aria-expanded="isTooltipOpen"
              :aria-label="`Tags supplémentaires: ${hiddenTags.join(', ')}`"
              @keydown="onMoreKeydown"
              @focus="openTooltip"
              @blur="closeTooltip"
              @mouseenter="openTooltip"
              @mouseleave="closeTooltip"
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
              v-if="lien"
              :href="lien"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-view-site"
            >
              Voir le site →
            </a>
            <a
              v-if="githubLink"
              :href="githubLink"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-github"
            >
              GitHub →
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
import { computed, ref } from 'vue'

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
  githubLink: {
    type: String,
    default: '',
  },
  objectPosition: {
    type: String,
    default: 'center',
  },
  sharedClipId: {
    type: String,
    default: 'shared-egg-clip',
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

const metricsVisible = computed(() => metricsItems.value.slice(0, 2))
const visibleTags = computed(() => allTags.value.slice(0, 2))
const hiddenTags = computed(() => allTags.value.slice(2))
const tooltipId = computed(() => `tags-${slugify(props.titre || 'projet')}`)

// Utilise le clipPath partagé défini dans le parent (réduit le DOM de 7 SVG)
const calqueStyle = computed(() => ({
  clipPath: `url(#${props.sharedClipId})`,
  WebkitClipPath: `url(#${props.sharedClipId})`
}))

const isTooltipOpen = ref(false)

const openTooltip = () => {
  isTooltipOpen.value = true
}

const closeTooltip = () => {
  isTooltipOpen.value = false
}

const toggleTooltip = () => {
  isTooltipOpen.value = !isTooltipOpen.value
}

const onMoreKeydown = (event) => {
  if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault()
    toggleTooltip()
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    closeTooltip()
  }
}
</script>

<style lang="scss" scoped>
.boite-article {
  width: min(92vw, 1120px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  @media (min-width: $breakpoint-tablet) {
    width: min(90vw, 1120px);
  }
}

.boite-article:hover {
  transform: translateY(-4px);
}
.boite-image__image:hover  {
  transform: scale(1.05);
}
// .boite-article:hover .boite-image__image {
//   transform: scale(1.05);
// }
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
  justify-self: center;
  text-decoration: none;
  width: min(80vw, 280px); // Mobile: centered circle

  // Override article-content.scss underline on image links
  background: none !important;
  background-image: none !important;

  &:hover {
    background: none !important;
    background-image: none !important;
  }

  @media (min-width: $breakpoint-tablet) {
    justify-self: start;
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
  align-self: start;
  width: 100%;
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
  font-weight: 500;
  color: $gris3;
  margin: 0.35rem 0 0;
  line-height: 1.4;
  opacity: 0.85;
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
  opacity: 0.75;
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
  font-size: 0.8rem;
}

.eco-metric-label {
  font-weight: 500;
  color: $gris3;
  font-size: 0.8rem;
  opacity: 0.85;
}

.eco-metric-value {
  font-weight: 700;
  color: $gris2;
  font-size: 0.85rem;
}

/* Tags simplifiés */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
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
      transform: scale(1.05);
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
    display: block;
    border-radius: 50%;

    @media (min-width: $breakpoint-tablet) {
      border-radius: 0;
      clip-path: none;
    }
  }
  &__calque {
    display: none; // Hidden on mobile

    @media (min-width: $breakpoint-tablet) {
      display: block;
      position: absolute;
      top: -6px;
      bottom: -6px;
      left: -6px;
      right: -6px;
      background: $fondClair;
      z-index: 30;
      // clip-path appliqué via :style pour ID unique par instance
    }
  }
  .circle {
    display: none; // Hidden on mobile

    @media (min-width: $breakpoint-tablet) {
      display: block;
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
  font-weight: 500;
  color: $gris3;
  background: rgba(0, 0, 0, 0.02);
  opacity: 0.85;
}
.tag-more {
  position: relative;
  cursor: pointer;
  font-weight: 600;
  color: $gris2;
  opacity: 1;
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
.tag-more:focus-visible .tag-tooltip,
.tag-more.is-open .tag-tooltip {
  opacity: 1;
  visibility: visible;
}
.project-links {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: var(--space-2, 0.8rem);
  align-items: stretch;
  width: 100%;

  @media (min-width: $breakpoint-tablet) {
    align-items: flex-end;
    margin-top: 0;
  }
}

/* Bouton "Voir le site" cohérent avec hero */
.btn-view-site {
  background: $vert;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.15s ease;

  // Override article-content.scss underline styles
  background-image: none !important;
}

.btn-github {
  background: transparent;
  color: $gris2;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 999px;
  padding: 0.55rem 1.2rem;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all 0.15s ease;

  // Override article-content.scss underline styles
  background-image: none !important;
}

@media (min-width: $breakpoint-tablet) {
  .btn-view-site {
    width: auto;
  }
  .btn-github {
    width: auto;
  }
}

.btn-view-site:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(13, 199, 99, 0.35);

  // Override article-content.scss underline on hover
  background-image: none !important;
}

.btn-view-site:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(13, 199, 99, 0.25);
}

.btn-github:hover {
  transform: translateY(-2px);
  border-color: rgba(0, 0, 0, 0.35);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.btn-github:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 57, 217, 0.2);
}

.article-link:deep(a),
.article-link {
  font-weight: 700;
  font-size: 0.85rem;
  color: $bleu2 !important;
  text-decoration: none !important;
  text-align: center;
  padding: 0.35rem 0;
  transition: opacity 0.12s ease;
  position: relative;
  border-bottom: none !important;
  box-shadow: none !important;

  // Override article-content.scss linear-gradient underline
  background: none !important;
  background-image: none !important;
}

.article-link:deep(a:visited),
.article-link:visited {
  color: $bleu2 !important;
  text-decoration: none !important;
  background: none !important;
  background-image: none !important;
}

.article-link:deep(a::after),
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

.article-link:deep(a:hover),
.article-link:hover {
  opacity: 0.85;
  text-decoration: none !important;
  background: none !important;
  background-image: none !important;
}

.article-link:deep(a:hover::after),
.article-link:hover::after {
  width: 80%;
}

.article-link:deep(a:focus-visible),
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
