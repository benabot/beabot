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
            <h3 class="text-fin text-gris2">{{ sousTitre }}</h3>
          </header>

          <p v-if="context" class="project-context">{{ context }}</p>

          <div class="project-meta">
            <p v-if="role" class="project-role-pill">
              <span class="role-label">Rôle</span>
              <span class="role-text">{{ role }}</span>
            </p>

            <div v-if="stack.length" class="stack-inline">
              <span v-for="tech in stack" :key="tech" class="stack-pill">
                {{ tech }}
              </span>
            </div>
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

          <div v-if="chips.length" class="boite-chips">
            <span v-for="chip in chips" :key="chip" class="chips">
              <span>{{ chip }}</span>
            </span>
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

  return items
})
</script>

<style lang="scss" scoped>
.boite-article {
  width: min(92vw, 1120px);
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (min-width: $breakpoint-tablet) {
    width: min(90vw, 1120px);
  }
}
.article-resum {
  text-align: left;
  display: grid;
  gap: 1.4rem;
  align-items: center;
  width: 100%;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
    gap: 1.8rem;
  }
}
.boite-image-link {
  display: block;
  position: relative;
  justify-self: start;

  @media (min-width: $breakpoint-tablet) {
    width: min(100%, 380px);
  }
}
.article-body {
  display: grid;
  gap: 0.9rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    align-items: start;
    gap: 1.4rem;
  }
}
.project-main {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}
.project-aside {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.project-header h2 {
  margin: 0;
  font-size: clamp(1.4rem, 2.6vw, 1.9rem);
}
.project-header h3 {
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  margin: 0.25rem 0 0;
}
.project-context {
  color: $gris2;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (min-width: $breakpoint-tablet) {
    -webkit-line-clamp: 1;
  }
}
.project-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  align-items: center;
}
.project-role-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: $gris1;
  font-weight: 700;
  font-size: 0.78rem;
}
.role-label {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: $vert;
}
.role-text {
  color: $gris2;
  font-weight: 600;
}
.stack-inline {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.project-metrics {
  background: rgba(13, 199, 99, 0.06);
  border: 1px solid rgba(13, 199, 99, 0.16);
  border-radius: 14px;
  padding: 0.65rem 0.8rem;
}
.metrics-title {
  margin: 0 0 0.5rem;
  font-weight: 700;
  color: $vert;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.7rem;
}
.metrics-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 0.35rem 0.8rem;

  li {
    display: flex;
    justify-content: space-between;
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
  aspect-ratio: 1 / 1;
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

.boite-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;

  .chips {
    display: inline;
    background: $gris6;
    color: $gris2;
    // border: 0.5px solid $gris3;
    border-radius: 1000px;
    padding: 0.15rem 0.55rem;
    font-size: 0.65rem;

    span {
      bottom: 0.06em;
      position: relative;
      &::before {
        content: '';
        display: inline-block;
        width: 1.68ex;
        height: 1.68ex;
        margin-right: 0.68ex;
        border-radius: 100%;
        background-color: $bleu1;
        top: 0.07rem;
        position: relative;
      }
    }
  }
}
.stack-pill {
  background: rgba(4, 57, 217, 0.06);
  color: $gris2;
  border: 1px solid rgba(4, 57, 217, 0.16);
  border-radius: 999px;
  padding: 0.22rem 0.6rem;
  font-size: 0.72rem;
  font-weight: 600;
}
.project-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.3rem;
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
