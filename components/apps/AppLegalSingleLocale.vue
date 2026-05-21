<template>
  <div class="legal-single-locale">
    <h3 v-if="title" class="legal-single-locale__title">{{ title }}</h3>
    <p v-for="paragraph in paragraphs" :key="paragraph">{{ paragraph }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  paragraphs: string[]
}>()
</script>

<style scoped lang="scss">
@use "~/assets/css/vars/_colors.scss" as *;

.legal-single-locale {
  display: grid;
  gap: 0.75rem;
}

.legal-single-locale__title {
  margin: 0;
  color: $gris1;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

.legal-single-locale p {
  margin: 0;
  color: $gris2;
  line-height: 1.65;
}
</style>
