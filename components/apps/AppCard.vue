<template>
  <article class="app-card">
    <div
      class="app-card__media"
      :class="{ 'app-card__media--placeholder': !app.preview.available }"
    >
      <img
        v-if="app.preview.available && app.preview.src"
        :src="app.preview.src"
        :alt="app.preview.alt"
        width="900"
        height="620"
        loading="lazy"
        decoding="async"
      />
      <div
        v-else
        class="app-card__placeholder"
        role="img"
        :aria-label="app.preview.alt"
      >
        <strong>{{ app.name }}</strong>
        <span>{{ app.preview.label }}</span>
      </div>
    </div>

    <div class="app-card__body">
      <p class="app-card__platform">{{ app.platform }}</p>
      <h2 class="app-card__title">{{ app.name }}</h2>
      <p class="app-card__summary">{{ app.summary }}</p>
      <AppLink :to="app.href" class="app-card__link"> Voir la page </AppLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { AppIndexEntry } from '~/data/apps'

defineProps<{
  app: AppIndexEntry
}>()
</script>

<style lang="scss" scoped>
.app-card {
  display: grid;
  gap: 1rem;
  padding: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.92);
}

.app-card__media {
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(248, 250, 252, 0.92);
  min-height: 14rem;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

.app-card__media--placeholder {
  background: rgba(248, 250, 252, 0.96);
}

.app-card__placeholder {
  min-height: 14rem;
  padding: 1.25rem;
  display: grid;
  align-content: end;
  gap: 0.4rem;
  color: $gris2;

  strong {
    font-size: 1.25rem;
    color: $gris1;
  }

  span {
    color: $gris3;
  }
}

.app-card__body {
  display: grid;
  gap: 0.7rem;
}

.app-card__platform {
  margin: 0;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $gris3;
}

.app-card__title {
  margin: 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1;
  color: $gris1;
}

.app-card__summary {
  margin: 0;
  color: $gris2;
  line-height: 1.6;
}

.app-card__link {
  width: fit-content;
  color: $bleu2;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.app-card__link:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 3px;
  border-radius: 0.35rem;
}
</style>
