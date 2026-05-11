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
      return 'Éco-conception web | BeAbot'
    }

    return titleChunk.trim().endsWith('BeAbot')
      ? titleChunk
      : `${titleChunk} | BeAbot`
  },
})
</script>
