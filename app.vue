<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global app configuration
useHead({
  titleTemplate: (titleChunk) => {
    if (!titleChunk) {
      return 'BeAbot - Éco-conception web'
    }

    return titleChunk.trim().endsWith('BeAbot')
      ? titleChunk
      : `BeAbot - ${titleChunk}`
  },
})
</script>
