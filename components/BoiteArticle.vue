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
            <h2 class="h4 text-gris1">{{ titre }}</h2>
            <p v-if="isEcoProject" class="eco-flag">Éco-conçu</p>
            <h3 class="text-fin text-gris2">{{ sousTitre }}</h3>
          </header>

          <div v-if="role" class="project-role">
            <span class="role-label">Rôle</span>
            <span class="role-text">{{ role }}</span>
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
          <div v-if="metricsItems.length" class="project-metrics">
            <p class="metrics-title">Résultats</p>
            <ul class="metrics-list">
              <li v-for="item in metricsItems" :key="item.label">
                <span class="metrics-label">{{ item.label }}</span>
                <span class="metrics-value">{{ item.value }}</span>
              </li>
            </ul>
          </div>

          <div class="project-links">
            <a
              :href="lien"
              target="_blank"
              rel="noopener noreferrer"
              class="seepost project-site-link"
            >
              voir le site ⟶
            </a>
            <AppLink v-if="articleLink" :to="articleLink" class="article-link">
              Lire l'article →
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
  line-height: 0;
  border-bottom: 0;

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
    gap: var(--space-4, 2.1rem);
  }
}
.project-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 0.8rem);
}
.project-aside {
  display: flex;
  flex-direction: column;
  gap: var(--space-2, 0.8rem);
}
.project-header h2 {
  margin: 0;
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
}
.eco-flag {
  margin: 0.25rem 0 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $vert;
}
.project-header h3 {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  margin: 0.25rem 0 0;
}
.project-role {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  color: $gris2;
}
.role-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: $gris3;
  font-weight: 700;
}
.role-text {
  font-weight: 600;
  line-height: 1.4;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
}
.project-metrics {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: var(--space-2, 0.8rem);
}
.metrics-title {
  margin: 0 0 0.5rem;
  font-weight: 700;
  color: $gris2;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.7rem;
}
.metrics-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 0.8rem;

  li {
    display: inline-flex;
    align-items: baseline;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: $gris2;
  }
}
.metrics-label {
  font-weight: 600;
  color: $gris3;
}
.metrics-value {
  font-weight: 700;
  color: $gris1;
}
.boite-image {
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background: transparent;

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
      // top: 0;
      // left: 0;
      // width: 101%;
      // height: 101%;
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
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  padding: 0.18rem 0.5rem;
  font-size: 0.68rem;
  font-weight: 600;
  color: $gris2;
  background: transparent;
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
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: var(--space-2, 0.8rem);
}
.seepost.project-site-link {
  position: static;
  right: auto;
  text-decoration: none;
  box-shadow: none;
  padding: 0.55rem 1.1rem;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
}
.seepost.project-site-link:hover {
  transform: translate3d(4px, 0, 0);
}
.seepost.project-site-link:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 3px;
}
.article-link {
  font-weight: 700;
  color: $bleu2;
  text-decoration: underline;
  text-underline-offset: 3px;
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
