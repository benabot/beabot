<template>
  <section
    class="showcase-card"
    :class="{ 'showcase-card--reverse': reversed }"
  >
    <div class="showcase-copy">
      <p class="showcase-platform">{{ app.platform }}</p>
      <h2 class="showcase-title">{{ app.name }}</h2>
      <p class="showcase-promise">{{ app.promise }}</p>
      <p class="showcase-description">
        {{ app.description }}
      </p>

      <div class="showcase-actions">
        <AppLink :to="app.href" class="showcase-primary">
          {{ app.ctaLabel }}
        </AppLink>
      </div>
    </div>

    <div class="showcase-media">
      <div
        class="showcase-screen"
        :class="{ 'showcase-screen--placeholder': !app.preview.available }"
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
          class="showcase-placeholder"
          role="img"
          :aria-label="app.preview.alt"
        >
          <span class="showcase-placeholder__eyebrow">{{ app.platform }}</span>
          <strong>{{ app.name }}</strong>
          <span>{{ app.preview.label }}</span>
        </div>
      </div>
      <p class="showcase-caption">{{ app.preview.label }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AppLandingEntry } from '~/data/apps'

defineProps<{
  app: AppLandingEntry
  reversed?: boolean
}>()
</script>

<style lang="scss" scoped>
.showcase-card {
  display: grid;
  gap: 2.5rem;

  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    align-items: center;
  }
}

.showcase-card--reverse {
  @media (min-width: 960px) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  }

  .showcase-copy {
    @media (min-width: 960px) {
      order: 2;
    }
  }

  .showcase-media {
    @media (min-width: 960px) {
      order: 1;
    }
  }
}

.showcase-copy {
  max-width: 34rem;
}

.showcase-platform {
  margin: 0 0 0.85rem;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $gris3;
  font-weight: 700;
}

.showcase-title {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 0.96;
  color: $gris1;
}

.showcase-promise {
  margin: 1rem 0 0;
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.45;
  font-weight: 700;
  color: $gris2;
}

.showcase-description {
  margin: 1rem 0 0;
  font-size: 1rem;
  line-height: 1.7;
  color: $gris3;
}

.showcase-actions {
  margin-top: 1.5rem;
}

.showcase-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  background: $bleu2;
  color: white;
  font-weight: 700;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease,
    background-color 0.14s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(4, 57, 217, 0.16);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(4, 57, 217, 0.18);
  }
}

.showcase-media {
  display: grid;
  gap: 0.8rem;
}

.showcase-screen {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.92),
    rgba(244, 247, 251, 0.96)
  );
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
  min-height: 20rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0 auto auto 0;
    width: 100%;
    height: 2.6rem;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.96),
      rgba(242, 245, 250, 0.92)
    );
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0.95rem;
    left: 1rem;
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.18);
    box-shadow:
      1rem 0 0 rgba(0, 0, 0, 0.12),
      2rem 0 0 rgba(0, 0, 0, 0.08);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    margin-top: 2.6rem;
  }
}

.showcase-screen--placeholder {
  background:
    linear-gradient(135deg, rgba(4, 57, 217, 0.06), rgba(13, 199, 99, 0.06)),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.94),
      rgba(244, 247, 251, 0.98)
    );
}

.showcase-placeholder {
  min-height: 20rem;
  padding: 4.4rem 2rem 2rem;
  display: grid;
  align-content: center;
  justify-items: start;
  gap: 0.6rem;
  color: $gris2;

  strong {
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    line-height: 0.95;
  }

  span:last-child {
    color: $gris3;
  }
}

.showcase-placeholder__eyebrow {
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $bleu2;
  font-weight: 700;
}

.showcase-caption {
  margin: 0;
  font-size: 0.88rem;
  color: $gris3;
}

@media (prefers-reduced-motion: reduce) {
  .showcase-primary {
    transition: none;
  }
}
</style>
