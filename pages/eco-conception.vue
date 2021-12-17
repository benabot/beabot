<template>
  <main>
    <h3 class="text-black h2 text-black">Éco-conception</h3>
    <nuxt-child />
  </main>
</template>

<script>
export default {
  scrollToTop: true,

  head() {
    return {
      title: 'éco-conception web',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Blog de l’éco-conception numérique, produire un site web performant tout en réduisant son empreinte carbone c’est possible.',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://beabot.fr/eco-conception/eco-conception',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
h3 {
  color: $vert;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0.33rem !important;
}
</style>
