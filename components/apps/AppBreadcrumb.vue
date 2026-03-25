<template>
  <nav class="app-breadcrumb" aria-label="Fil d’Ariane">
    <ol>
      <li v-for="(item, index) in items" :key="`${item.label}-${index}`">
        <AppLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="app-breadcrumb__link"
        >
          {{ item.label }}
        </AppLink>
        <span v-else class="app-breadcrumb__current" aria-current="page">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
export interface AppBreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: AppBreadcrumbItem[]
}>()
</script>

<style lang="scss" scoped>
.app-breadcrumb {
  margin-bottom: 1.5rem;
}

.app-breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
  color: $gris3;
  font-size: 0.95rem;
}

.app-breadcrumb li {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.app-breadcrumb li + li::before {
  content: '>';
  color: rgba(0, 0, 0, 0.38);
}

.app-breadcrumb__link {
  color: $gris2;
  text-decoration: none;
}

.app-breadcrumb__link:hover {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.app-breadcrumb__link:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 3px;
  border-radius: 0.35rem;
}

.app-breadcrumb__current {
  color: $gris1;
}
</style>
