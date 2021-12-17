<template>
  <div class="container__page">
    <section>
      <h1 class="h3 text-fin">divers aspects de l'éco-conception web</h1>
      <ul class="selector text-gris3">
        <li :class="{ 'text-vert': name === 'Vue' }" @click="updateTag('Vue')">
          JS
        </li>
        /
        <li
          :class="{ 'text-vert': name === 'WordPress' }"
          @click="updateTag('WordPress')"
        >
          WordPress
        </li>
        /
        <li
          :class="{ 'text-vert': name === 'WebDesign' }"
          @click="updateTag('WebDesign')"
        >
          WebDesign
        </li>
        /
        <li
          :class="{ 'text-vert': name === 'Typographie' }"
          @click="updateTag('Typographie')"
        >
          Typographie
        </li>
        <br />
        <li v-show="name" class="text-gris4" @click="updateTag('')">
          Tout voir
        </li>
      </ul>
      <AppSearchInput />
    </section>
    <section class="intro text-gris2">
      <div class="intro__img"></div>
      <p class="text-fin">
        Au travers de ce blog, je vous propose de découvrir mes réflexions
        concernant les impacts environnementaux du numérique et comment les
        réduire en éco-concevant des sites web. Ce blog a pour vocation d’être
        généraliste et lisible par quiconque connaît, dans les grandes lignes,
        le fonctionnement d’internet. Toutefois, afin de sensibiliser
        concrètement les acteurs du web aux thématiques de la sobriété et de
        l’efficience numérique, certains articles pourront nécessiter des
        connaissances en développement web et aborderont des questions
        techniques. Ils seront signalés en tant que tels.
      </p>
      <p class="text-fin">
        Webdesigner de formation, je suis convaincu du rôle central du design
        d’interface et d’expérience utilisateur pour limiter l’empreinte
        environnementale de nos sites. Il sera beaucoup question, ici, de
        webdesign. Enfin, concernant les aspects plus techniques et les outils
        de développement utilisés, j’ai choisi de traiter les plus répandus.
        C’est, d’après moi, stratégiquement plus efficace d’agir sur la
        multitude — toute perfectible soit-elle — plutôt qu’à la marge.
      </p>
    </section>
    <div class="border"></div>
    <section>
      <transition-group name="list" tag="div">
        <article v-for="article of articlesFilters" :key="article.slug">
          <!-- <img :src="article.img" /> -->
          <nuxt-link :to="`/eco-conception/${article.slug}`">
            <Petittitre gris :titre="article.title" :tags="article.tag"
          /></nuxt-link>
          <div class="resum">
            <p class="text-gris3 text-fin">{{ article.description }}</p>
            <div class="boite-bouton">
              <!-- <NuxtLink
              :to="{
                name: 'eco-conception-slug',
                params: { slug: article.slug },
              }"
              ><button class="seepost seepost--vert">
                poursuivre la lecture
              </button>
            </NuxtLink> -->
              <Boutoncta
                text="lire la suite"
                :to="`/eco-conception/${article.slug}`"
              />
            </div>
          </div>
        </article>
      </transition-group>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'tag'])
      .sortBy('createdAt', 'desc')
      .fetch();

    return {
      articles,
      selectedTag: null,
    };
  },
  computed: {
    name() {
      return this.$store.state.tags.tag;
    },
    articlesFilters() {
      if (!this.name) {
        return this.articles;
      } else {
        return this.articles.filter((el) => el.tag.includes(this.name));
      }
    },
  },
  methods: {
    updateTag(tag) {
      this.$store.commit('tags/setTag', tag);
    },
    // updateTag(tag) {
    //   this.selectedTag = tag
    // },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}
a {
  text-decoration: none;
  display: block;
  position: relative;
  z-index: 200;
}
.selector {
  text-align: center;
  padding-left: 0;
  margin-top: -1rem;
  margin-bottom: 1rem;

  li {
    display: inline;
    list-style: none;
    // color: $bleu1;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $vert;
    }
  }
}
.intro {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 2.6rem;
  // letter-spacing: 0.07rem;
  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
  }
  p {
    text-align: justify;
    // margin-left: 0;
    @media (min-width: $breakpoint-tablet) {
      width: 50%;
      &:first-of-type {
        margin-right: 1em;
      }
    }
  }
}
.border {
  border: 2px solid $vert;
  // height: 1rem;
  margin-left: 33%;
  width: 33%;
  margin-top: 2.6rem;
  margin-bottom: 2.8rem;
  // margin-bottom: 0.25rem;
  border-radius: 0.25rem;
}
article {
  display: flex;
  margin-top: 4.68rem;
  flex-direction: column;
  justify-content: space-between;
  &:first-child {
    margin-top: 1.7rem;
  }
  .resum {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media (min-width: $breakpoint-tablet) {
      flex-direction: row;
      margin-top: 0.68rem;
    }
    p {
      text-align: justify;
      width: 80%;
      @media (min-width: $breakpoint-tablet) {
        width: 50%;
      }
    }
    .boite-bouton {
      width: inherit;
      height: 55px;
      align-self: flex-end;
      @media (min-width: $breakpoint-tablet) {
        width: 25%;
        div {
          margin-right: 33%;
          margin-top: 1.68rem;
        }
      }
    }
  }
}

.list-enter-active {
  transition: opacity 0.3s, transform 0.2s;
}
.list-leave-active {
  transition: opacity 0.15s, transform 0.1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.99);
}
</style>
