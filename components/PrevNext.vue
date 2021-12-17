<template>
  <div class="boite-prev text-fin text-gris2">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'eco-conception-slug', params: { slug: prev.slug } }"
      class="bloc"
    >
      &larr; {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'eco-conception-slug', params: { slug: next.slug } }"
      class="bloc"
    >
      {{ next.title }} &rarr;
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
<style lang="scss" scoped>
.boite-prev {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.bloc {
  display: block;
  margin-left: 5px;
  transition: 0.2s ease-in-out;
  &:hover {
    margin-left: 0;
    color: $gris1;
  }
}
</style>
