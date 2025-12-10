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
    return titleChunk ? `BeAbot - ${titleChunk}` : 'BeAbot - Éco-conception web'
  },
})
</script>
