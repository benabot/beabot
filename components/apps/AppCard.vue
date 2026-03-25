<template>
  <article class="app-card" :class="`app-card--${props.variant}`">
    <figure class="app-card__visual">
      <div
        class="app-card__media"
        :class="{
          'app-card__media--placeholder': !props.app.preview.available,
        }"
      >
        <img
          v-if="props.app.preview.available && props.app.preview.src"
          :src="props.app.preview.src"
          :alt="props.app.preview.alt"
          width="900"
          height="620"
          loading="lazy"
          decoding="async"
        />
        <div
          v-else
          class="app-card__placeholder"
          role="img"
          :aria-label="props.app.preview.alt"
        >
          <span>{{ props.app.preview.label }}</span>
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
        Voir la page
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
  }>(),
  {
    variant: 'compact',
  },
)
</script>

<style lang="scss" scoped>
.app-card {
  display: grid;
  gap: 1rem;
}

.app-card--featured {
  --app-card-ratio: 16 / 10;
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
  box-shadow: 0 14px 28px rgba(15, 23, 42, 0.05);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.app-card__media--placeholder {
  background: rgba(243, 244, 246, 0.92);
}

.app-card__placeholder {
  min-height: 100%;
  padding: 1.25rem;
  display: grid;
  place-items: center;
  border-radius: 1.25rem;
  color: $gris2;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(243, 244, 246, 0.98)
  );
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.04);
}

.app-card__body {
  display: grid;
  gap: 0.62rem;
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
  text-decoration: underline;
  text-underline-offset: 0.18em;
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
