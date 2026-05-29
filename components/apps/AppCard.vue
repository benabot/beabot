<template>
  <article
    class="app-card"
    :class="[`app-card--${props.variant}`, `app-card--${props.app.slug}`]"
  >
    <figure class="app-card__visual">
      <AppLink
        :to="props.app.href"
        class="app-card__media-link"
        :aria-label="`${locale === 'fr' ? 'Voir la page de' : 'View page for'} ${props.app.name}`"
      >
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
      </AppLink>
    </figure>

    <div class="app-card__body">
      <p class="app-card__meta">
        {{ props.app.name }} · {{ props.app.platform }} · {{ props.app.stage }}
      </p>
      <h3 class="app-card__title">
        {{ props.app.tagline || props.app.name }}
      </h3>
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
  gap: 0.95rem;
  align-content: start;
}

.app-card--featured {
  --app-card-ratio: 5 / 4;
}

.app-card--compact {
  --app-card-ratio: 16 / 10;
}

.app-card__visual {
  display: grid;
  margin: 0;
}

.app-card__media-link {
  display: block;
  border-radius: 0.9rem;
  transition: opacity 0.16s ease;
}

.app-card__media-link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
}

.app-card__media-link:hover {
  opacity: 0.94;
}

.app-card__media {
  overflow: hidden;
  border-radius: 0.9rem;
  background: rgba(247, 248, 249, 0.92);
  aspect-ratio: var(--app-card-ratio);
  position: relative;
  border: 1px solid rgba(15, 23, 42, 0.06);

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
  background: #f8f6f1;

  img {
    object-fit: contain;
    object-position: center;
    padding: 0.75rem;
  }
}

.app-card--focus-one .app-card__media--contain {
  background: #f6f9f5;
}

.app-card--duo-spend .app-card__media--contain {
  background: #f7f8fb;
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
  gap: 0.55rem;
  max-width: 38rem;
  padding-top: 0.15rem;
}

.app-card__meta {
  margin: 0;
  color: $gris3;
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1.3;
  text-transform: uppercase;
}

.app-card__title {
  margin: 0;
  font-size: clamp(1.35rem, 2.2vw, 1.85rem);
  line-height: 1.08;
  color: $gris1;
}

.app-card__summary {
  margin: 0;
  color: $gris2;
  line-height: 1.55;
  max-width: 40ch;
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

.app-card__link:hover {
  color: $gris1;
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

@media (min-width: 760px) {
  .app-card--featured,
  .app-card--compact {
    grid-template-columns: minmax(8rem, 0.72fr) minmax(0, 1fr);
    align-items: center;
    padding-block: 1rem;
    border-top: 1px solid rgba(15, 23, 42, 0.08);
  }

  .app-card--featured {
    grid-template-columns: minmax(10rem, 0.86fr) minmax(0, 1fr);
    padding-block: clamp(0.8rem, 2vw, 1.35rem);
  }
}
</style>
