<template>
  <div class="privacy-columns">
    <section class="privacy-column" aria-labelledby="privacy-fr-title">
      <h2 id="privacy-fr-title" class="privacy-title">
        Politique de confidentialité (FR)
      </h2>
      <div
        v-for="section in policy.fr"
        :key="section.title"
        class="privacy-block"
      >
        <h3>{{ section.title }}</h3>
        <p v-for="paragraph in section.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section class="privacy-column" aria-labelledby="privacy-en-title">
      <h2 id="privacy-en-title" class="privacy-title">Privacy policy (EN)</h2>
      <div
        v-for="section in policy.en"
        :key="section.title"
        class="privacy-block"
      >
        <h3>{{ section.title }}</h3>
        <p v-for="paragraph in section.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { AppPrivacyPolicy as PrivacyPolicy } from '~/data/apps'

defineProps<{
  policy: PrivacyPolicy
}>()
</script>

<style lang="scss" scoped>
.privacy-columns {
  display: grid;
  gap: 1.5rem;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.privacy-column {
  padding: 1.5rem;
  border-radius: 1.25rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.privacy-title {
  margin: 0 0 1rem;
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: $gris1;
}

.privacy-block + .privacy-block {
  margin-top: 1.1rem;
  padding-top: 1.1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.privacy-block h3 {
  margin: 0 0 0.6rem;
  font-size: 0.92rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: $gris3;
}

.privacy-block p {
  margin: 0;
  color: $gris2;
  line-height: 1.7;
}

.privacy-block p + p {
  margin-top: 0.8rem;
}
</style>
