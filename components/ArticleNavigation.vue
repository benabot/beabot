<template>
  <div class="boite-prev text-fin text-gris2">
    <AppLink
      v-if="prev && prev.path"
      :to="prev.path"
      class="bloc"
    >
      &larr; {{ prev.title }}
    </AppLink>
    <span v-else>&nbsp;</span>
    <AppLink
      v-if="next && next.path"
      :to="next.path"
      class="bloc"
    >
      {{ next.title }} &rarr;
    </AppLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script setup>
defineProps({
  prev: {
    type: Object,
    default: () => null,
  },
  next: {
    type: Object,
    default: () => null,
  },
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
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
