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
  border-radius: 1rem;
  background: rgba(243, 244, 246, 0.88);
}

.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  list-style: none;
  cursor: pointer;
  padding: 1rem 1.1rem;
  font-weight: 600;
  color: $gris1;
}

.faq-item summary::-webkit-details-marker {
  display: none;
}

.faq-item summary::after {
  content: '+';
  color: $vert;
  flex-shrink: 0;
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
  padding: 0 1.1rem 1rem;
  color: $gris2;
  line-height: 1.7;
}
</style>
