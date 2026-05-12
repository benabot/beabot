<template>
  <div class="faq-list">
    <template v-if="props.sections?.length">
      <section
        v-for="section in props.sections"
        :key="section.title"
        class="faq-group"
      >
        <h3 class="faq-group__title">{{ section.title }}</h3>
        <div class="faq-group__items">
          <details
            v-for="item in section.items"
            :key="item.question"
            class="faq-item"
          >
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </section>
    </template>

    <template v-else>
      <details v-for="item in props.items" :key="item.question" class="faq-item">
        <summary>{{ item.question }}</summary>
        <p>{{ item.answer }}</p>
      </details>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { AppFaqItem, AppFaqSection } from '~/data/apps'

const props = defineProps<{
  items: AppFaqItem[]
  sections?: AppFaqSection[]
}>()
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
.faq-list {
  display: grid;
  gap: 0.75rem;
}

.faq-group {
  display: grid;
  gap: 0.65rem;
}

.faq-group__title {
  margin: 0;
  color: $gris1;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.faq-group__items {
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
