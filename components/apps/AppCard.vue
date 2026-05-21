<template>
  <article class="app-card" :class="`app-card--${props.variant}`">
    <figure class="app-card__visual">
      <div
        class="app-card__media"
        :class="{
          'app-card__media--placeholder': !props.app.preview.available,
          'app-card__media--contain': props.app.preview.fit === 'contain',
        }"
      >
        <img
          v-if="props.app.preview.available && props.app.preview.src"
          :src="props.app.preview.src"
          :alt="props.app.preview.alt"
          width="1206"
          height="2622"
          loading="lazy"
          decoding="async"
        />
        <div
          v-else
          class="app-card__placeholder"
          role="img"
          :aria-label="props.app.preview.alt"
        >
          <svg
            class="app-card__placeholder-svg"
            viewBox="0 0 160 120"
            width="160"
            height="120"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="160" height="120" rx="16" fill="#f0ede9" />
            <rect x="18" y="18" width="124" height="8" rx="4" fill="#d3cec5" />
            <rect x="18" y="32" width="88" height="6" rx="3" fill="#e0dbd1" />
            <rect x="18" y="44" width="64" height="6" rx="3" fill="#e0dbd1" />
            <rect x="43" y="58" width="74" height="42" rx="12" fill="#1f2937" />
            <rect x="52" y="66" width="56" height="26" rx="7" fill="#18212f" />
            <rect x="58" y="72" width="18" height="6" rx="3" fill="#0dc763" />
            <rect x="58" y="82" width="34" height="4" rx="2" fill="#7f8a96" />
            <rect x="73" y="100" width="14" height="4" rx="2" fill="#d3cec5" />
            <rect x="67" y="104" width="26" height="3" rx="1.5" fill="#c7c1b7" />
          </svg>
        </div>
      </div>
    </figure>

    <div class="app-card__body">
      <div class="app-card__chips" aria-label="Statut de l'app">
        <span class="app-card__chip">{{ props.app.stage }}</span>
        <span class="app-card__chip">{{ props.app.platform }}</span>
      </div>
      <h3 class="app-card__title">{{ props.app.name }}</h3>
      <p class="app-card__summary">{{ props.app.summary }}</p>
      <AppLink :to="props.app.href" class="app-card__link">
        {{ locale === 'fr' ? 'Découvrir' : 'Explore' }} {{ props.app.name }}
      </AppLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { AppIndexEntry } from '~/data/apps'

const props = withDefaults(
  defineProps<{
    app: AppIndexEntry
    variant?: 'featured' | 'compact'
    locale?: 'fr' | 'en'
  }>(),
  {
    variant: 'compact',
    locale: 'fr',
  },
)

const locale = props.locale
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
.app-card {
  display: grid;
  gap: 1rem;
}

.app-card--featured {
  --app-card-ratio: 4 / 5;
}

.app-card--compact {
  --app-card-ratio: 16 / 10;
}

.app-card__visual {
  display: grid;
  margin: 0;
}

.app-card__media {
  overflow: hidden;
  border-radius: 1.25rem;
  background: rgba(243, 244, 246, 0.92);
  aspect-ratio: var(--app-card-ratio);
  position: relative;
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.06);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.app-card__media--placeholder {
  background: linear-gradient(
    180deg,
    rgba(243, 244, 246, 0.94),
    rgba(236, 239, 241, 0.98)
  );
}

.app-card__media--contain {
  background: linear-gradient(180deg, #f8f6f1, #f0ece6);

  img {
    object-fit: contain;
    object-position: center;
    padding: 0.9rem;
  }
}

.app-card__placeholder {
  min-height: 100%;
  padding: 1rem;
  display: grid;
  place-items: center;
  background: linear-gradient(180deg, #f5f1eb, #ece7e0);
}

.app-card__placeholder-svg {
  display: block;
  width: min(100%, 16rem);
  height: auto;
}

.app-card__body {
  display: grid;
  gap: 0.68rem;
  max-width: 38rem;
}

.app-card__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.app-card__chip {
  display: inline-flex;
  align-items: center;
  min-height: 1.6rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  background: rgba(243, 244, 246, 0.95);
  color: $gris3;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-card__title {
  margin: 0;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  line-height: 0.98;
  color: $gris1;
}

.app-card__summary {
  margin: 0;
  color: $gris2;
  line-height: 1.55;
  max-width: 36ch;
}

.app-card__link {
  width: fit-content;
  color: $vert;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
  text-decoration: none;
}

.app-card__link::after {
  content: '→';
  font-size: 1rem;
  line-height: 1;
  transform: translateY(-0.02em);
}

.app-card__link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
  border-radius: 0.35rem;
}

.app-card--featured .app-card__summary {
  max-width: 34ch;
}

.app-card--compact .app-card__title {
  font-size: clamp(1.55rem, 2.7vw, 2rem);
}
</style>
