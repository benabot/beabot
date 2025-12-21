<template>
  <NuxtLink :to="normalizedTo" v-bind="attrs">
    <slot />
  </NuxtLink>
</template>

<script setup>
import { computed, useAttrs } from 'vue'
import { normalizeInternalHref } from '~/utils/seo-url'

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
})

const attrs = useAttrs()

const normalizedTo = computed(() => {
  if (typeof props.to === 'string') {
    return normalizeInternalHref(props.to)
  }

  if (props.to && typeof props.to === 'object' && typeof props.to.path === 'string') {
    return { ...props.to, path: normalizeInternalHref(props.to.path) }
  }

  return props.to
})
</script>
