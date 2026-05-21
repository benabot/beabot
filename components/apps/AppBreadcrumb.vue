<template>
  <nav class="app-breadcrumb" :aria-label="ariaLabel || 'Fil d’Ariane'">
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
  ariaLabel?: string
}>()
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
.app-breadcrumb {
  position: static;
  inset: auto;
  margin-bottom: clamp(1rem, 2.2vw, 1.5rem);
}

.app-breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: 0.38rem;
  margin: 0;
  padding: 0;
  list-style: none;
  color: $gris3;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-breadcrumb li {
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
}

.app-breadcrumb li + li::before {
  content: '›';
  color: rgba(0, 0, 0, 0.35);
}

.app-breadcrumb__link {
  color: $gris3;
  text-decoration: none;
}

.app-breadcrumb__link:hover {
  text-decoration: underline;
  text-underline-offset: 0.18em;
}

.app-breadcrumb__link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
  border-radius: 0.35rem;
}

.app-breadcrumb__current {
  color: $gris1;
}
</style>
