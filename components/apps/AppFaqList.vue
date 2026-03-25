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
  gap: 0.75rem;
}

.faq-item {
  overflow: hidden;
  border-radius: 1.15rem;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.05);
}

.faq-item summary {
  list-style: none;
  cursor: pointer;
  padding: 1rem 1.15rem;
  font-weight: 600;
  color: $gris1;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  float: right;
  color: $vert;
}

.faq-item[open] summary::after {
  content: '−';
}

.faq-item summary:focus-visible {
  outline: none;
  box-shadow: inset 0 0 0 3px rgba(13, 199, 99, 0.16);
}

.faq-item p {
  margin: 0;
  padding: 0 1.15rem 1rem;
  color: $gris2;
  line-height: 1.7;
}
</style>
