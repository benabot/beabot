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
          <div class="app-card__placeholder-screen">
            <strong>{{ props.app.name }}</strong>
            <span>{{ props.app.preview.label }}</span>
          </div>
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
  --app-card-ratio: 4 / 5;
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
  box-shadow: 0 18px 34px rgba(15, 23, 42, 0.06);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.app-card__media--placeholder {
  background: linear-gradient(145deg, rgba(4, 57, 217, 0.04), rgba(4, 217, 79, 0.08));
}

.app-card__placeholder {
  min-height: 100%;
  padding: 1.25rem;
  display: grid;
  place-items: center;
}

.app-card__placeholder-screen {
  width: min(72%, 18rem);
  aspect-ratio: 16 / 10;
  border-radius: 1rem;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 0.4rem;
  padding: 1rem;
  text-align: center;
  color: white;
  background: #111827;
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.08),
    0 18px 40px rgba(15, 23, 42, 0.12);

  strong {
    font-size: 1.1rem;
    color: white;
  }

  span {
    color: rgba(255, 255, 255, 0.72);
  }
}

.app-card__body {
  display: grid;
  gap: 0.7rem;
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
  line-height: 1.65;
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
  max-width: 40ch;
}

.app-card--compact .app-card__title {
  font-size: clamp(1.4rem, 2.6vw, 1.85rem);
}
</style>
