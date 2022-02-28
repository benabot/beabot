<template>
  <picture class="image">
    <img :src="imgSrc" :alt="alt" draggable="false" class="lozad" />
  </picture>
</template>

<script>
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require(`~/assets/img/${this.src}`)
    },
  },
  mounted() {
    this.$lozad.observe()
  },
}
</script>

<style lang="scss" scoped>
picture {
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: contain;
    padding-bottom: 1rem;
  }
}
</style>
