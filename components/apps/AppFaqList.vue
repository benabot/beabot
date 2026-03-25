<template>
  <div class="faq-list">
    <details v-for="item in items" :key="item.question" class="faq-item">
      <summary>{{ item.question }}</summary>
      <p>{{ item.answer }}</p>
    </details>
  </div>
</template>

<script setup lang="ts">
import type { AppFaqItem } from '~/data/apps'

defineProps<{
  items: AppFaqItem[]
}>()
</script>

<style lang="scss" scoped>
.faq-list {
  display: grid;
  gap: 0.9rem;
}

.faq-item {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.84);
  overflow: hidden;
}

.faq-item summary {
  list-style: none;
  cursor: pointer;
  padding: 1rem 1.15rem;
  font-weight: 700;
  color: $gris1;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  float: right;
  color: $bleu2;
}

.faq-item[open] summary::after {
  content: '−';
}

.faq-item summary:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 3px rgba(4, 57, 217, 0.18);
}

.faq-item p {
  margin: 0;
  padding: 0 1.15rem 1rem;
  color: $gris2;
  line-height: 1.7;
}
</style>
