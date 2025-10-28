<template>
  <main>
    <h1 class="text-black h2 text-black">Portfolio</h1>
    <ul class="selector text-gris2">
      <li :class="{ 'text-bleu1': select === 'vjs' }" @click="change('vjs')">
        VueJs
      </li>
      /
      <li :class="{ 'text-bleu1': select === 'wp' }" @click="change('wp')">
        WordPress
      </li>
      /
      <li :class="{ 'text-bleu1': select === 'eco' }" @click="change('eco')">
        Éco-conçu
      </li>
      /
      <li
        :class="{ 'text-bleu1': select === 'webDesign' }"
        @click="change('webDesign')"
      >
        Webdesign
      </li>
      <br />
      <li
        v-show="!tout"
        class="text-gris4"
        @click=";(tout = true), (select = '')"
      >
        Tout voir
      </li>
    </ul>
    <section class="container--page">
      <transition name="fade">
        <LazyBoiteArticle
          v-if="
            tout ||
            select === 'eco' ||
            select === 'webDesign' ||
            select === 'wp'
          "
          titre="La Cyclo-Plomberie"
          sous-titre="Votre plombier à vélo à Amiens et alentours"
          background-url="cyclop.png"
          :chips="['WebDesign', 'WordPress', 'Éco-conçu']"
          lien="https://cycloplomberie-amiens.fr"
      /></transition>
       <transition name="fade">
        <LazyBoiteArticle
          v-if="
            tout ||
            select === 'eco' ||
            select === 'webDesign' ||
            select === 'wp'
          "
          titre="La petite boucle"
          sous-titre="Collecte de cartouches d’encre en triporteur électrique"
          background-url="lpb.png"
          :chips="['WebDesign', 'WordPress', 'Éco-conçu']"
          lien="https://lapetiteboucle.fr/"
      /> </transition>
      <transition name="fade">
        <LazyBoiteArticle
          v-if="
            tout ||
            select === 'vjs' ||
            select === 'webDesign' ||
            select === 'wp'
          "
          id="site1"
          titre="AMC2"
          sous-titre="Site vitrine et catalogue en ligne"
          background-url="amc2.png"
          :chips="['WebDesign', 'VueJs', 'Nuxt', 'WordPress (headless)']"
          lien="https://www.amc2.fr"
      /></transition>
      <transition name="fade">
        <LazyBoiteArticle
          v-if="tout || select === 'vjs' || select === 'webDesign'"
          id="site2"
          titre="Guide RSE Banque Populaire"
          sous-titre="Carte interactive"
          background-url="guideBleu1.png"
          :chips="['WebDesign', 'VueJs', 'Bootstrap']"
          lien="https://www.guide-rse.banquepopulaire.fr/actions-rse"
      /></transition>
      <transition name="fade">
        <LazyBoiteArticle
          v-if="tout || select === 'vjs' || select === 'webDesign'"
          titre="Guide RSE Banque Populaire"
          sous-titre="Interface de visualisation de données"
          background-url="guideBleu2.png"
          :chips="['WebDesign', 'VueJs', 'Bootstrap']"
          lien="https://www.guide-rse.banquepopulaire.fr/resultats-2020"
      /></transition>
      <transition name="fade">
        <LazyBoiteArticle
          v-if="tout || select === 'vjs' || select === 'webDesign'"
          titre="App noël"
          sous-titre="Application d'apprentissage à l'interface d'un ordinateur"
          background-url="appNoel.png"
          :chips="['WebDesign', 'VueJs']"
          lien="https://app-noel.netlify.app"
      /></transition>
      <transition name="fade">
        <LazyBoiteArticle
          v-if="
            tout ||
            select === 'eco' ||
            select === 'webDesign' ||
            select === 'wp'
          "
          titre="AAVE"
          sous-titre="Association pour l'aménagement de la vallée de l'Esches"
          background-url="aave.png"
          :chips="['WebDesign', 'WordPress']"
          lien="https://vallee-esches.fr/"
      /></transition>
    </section>
  </main>
</template>

<script>
export default {
  scrollToTop: true,

  data() {
    return {
      select: '',
      tout: true
    }
  },
  head() {
    return {
      title: 'portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Différentes créations web dont certaines sont éco-conçues et toutes bâties à partir d’un wedesign soigné.',
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: 'https://beabot.netlify.app/eco-conception/portfolio',
        },
      ],
    }
  },
  created() {
    // this.$store.commit('page/sethome', false)
  },
  methods: {
    change(valeur) {
      this.select = valeur
      this.tout = false
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  color: $bleu2;
  text-align: center;
  margin-top: 3rem;
}
.boite-article {
  @media (max-width: $breakpoint-tablet) {
    margin-bottom: 3.6rem;
  }
}
.boite-article:not(:first-of-type) {
  margin-top: 2.6rem;
  @media (min-width: $breakpoint-tablet) {
    margin-top: -60px;
  }
}
.selector {
  text-align: center;
  padding-left: 0;
  margin-top: -1rem;
  margin-bottom: 3rem;
  @media (min-width: $breakpoint-tablet) {
    // margin-top: -3rem;
  }

  li {
    display: inline;
    list-style: none;
    // color: $bleu1;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $bleu1;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
