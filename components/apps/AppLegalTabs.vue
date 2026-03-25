<template>
  <div class="legal-tabs">
    <div class="legal-tabs__list" role="tablist" :aria-label="label">
      <button
        v-for="(tab, index) in tabs"
        :id="`${baseId}-tab-${tab.key}`"
        :key="tab.key"
        :ref="(el) => setTabRef(el, index)"
        class="legal-tabs__tab"
        :class="{ 'legal-tabs__tab--active': activeIndex === index }"
        type="button"
        role="tab"
        :aria-selected="activeIndex === index"
        :aria-controls="`${baseId}-panel-${tab.key}`"
        :tabindex="activeIndex === index ? 0 : -1"
        @click="activeIndex = index"
        @keydown="onKeydown($event, index)"
      >
        {{ tab.label }}
      </button>
    </div>

    <section
      v-for="(tab, index) in tabs"
      :id="`${baseId}-panel-${tab.key}`"
      :key="`${tab.key}-panel`"
      class="legal-tabs__panel"
      role="tabpanel"
      :aria-labelledby="`${baseId}-tab-${tab.key}`"
      :hidden="activeIndex !== index"
    >
      <h3 v-if="tab.content.title" class="legal-tabs__title">
        {{ tab.content.title }}
      </h3>
      <p v-for="paragraph in tab.content.paragraphs" :key="paragraph">
        {{ paragraph }}
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { AppLegalTabsContent } from '~/data/apps'

const props = defineProps<{
  baseId: string
  content: AppLegalTabsContent
  label?: string
}>()

const activeIndex = ref(0)
const tabRefs = ref<(HTMLButtonElement | null)[]>([])

const tabs = computed(() => [
  {
    key: 'fr',
    label: 'Français',
    content: props.content.fr,
  },
  {
    key: 'en',
    label: 'English',
    content: props.content.en,
  },
])

function setTabRef(element: Element | null, index: number) {
  tabRefs.value[index] = element as HTMLButtonElement | null
}

function focusTab(index: number) {
  activeIndex.value = index
  tabRefs.value[index]?.focus()
}

function onKeydown(event: KeyboardEvent, index: number) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    focusTab((index + 1) % tabs.value.length)
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    focusTab((index - 1 + tabs.value.length) % tabs.value.length)
  } else if (event.key === 'Home') {
    event.preventDefault()
    focusTab(0)
  } else if (event.key === 'End') {
    event.preventDefault()
    focusTab(tabs.value.length - 1)
  }
}
</script>

<style lang="scss" scoped>
.legal-tabs {
  display: grid;
  gap: 1rem;
}

.legal-tabs__list {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.legal-tabs__tab {
  min-height: 2.75rem;
  padding: 0.65rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  background: white;
  color: $gris2;
  font-weight: 600;
  cursor: pointer;
}

.legal-tabs__tab--active {
  border-color: rgba(4, 57, 217, 0.24);
  background: rgba(4, 57, 217, 0.06);
  color: $gris1;
}

.legal-tabs__tab:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 3px;
}

.legal-tabs__panel {
  padding: 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.92);
}

.legal-tabs__title {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  color: $gris1;
}

.legal-tabs__panel p {
  margin: 0;
  color: $gris2;
  line-height: 1.65;
}

.legal-tabs__panel p + p {
  margin-top: 0.75rem;
}
</style>
