<template>
  <div class="container__page">
    <section>
      <h2 class="h3 text-fin">divers aspects d'un numérique éco-responsable</h2>
      <ul class="selector text-gris3">
        <li :class="{ 'text-vert': name === 'WebDesign' }" @click="updateTag('WebDesign')">
          WebDesign
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
          :class="{ 'text-vert': name === 'Eco-conception' }"
          @click="updateTag('Eco-conception')"
        >
          Éco-conception
        </li>
        /
        <li
          :class="{ 'text-vert': name === 'Typographie' }"
          @click="updateTag('Typographie')"
        >
          Typographie
        </li>
        /
        <li :class="{ 'text-vert': name === 'SEO' }" @click="updateTag('SEO')">
          SEO
        </li>
        /
        <li
          :class="{ 'text-vert': name === 'Images' }"
          @click="updateTag('Images')"
        >
          Images
        </li>
        /
        <li
          :class="{ 'text-vert': name === 'Performance' }"
          @click="updateTag('Performance')"
        >
          Performance
        </li>
        <br />
        <li v-show="name" class="text-gris4" @click="updateTag('')">
          Tout voir
        </li>
      </ul>
      <AppSearchInput />
    </section>
    <!-- <section class="intro text-gris2" aria-labelledby="intro-eco">
  <div class="intro__img" aria-hidden="true"></div>

  <div class="intro__col">
    <h2 id="intro-eco" class="">À propos de ce blog sur l’éco-conception web</h2>

    <p class="text-fin">
      Au travers de ce blog, je propose des réflexions sur les
      <strong>impacts environnementaux du numérique</strong> et sur des moyens concrets
      de les réduire grâce à l’<strong>éco-conception de sites web</strong>.
    </p>

    <p class="text-fin">
      Le contenu se veut volontairement <strong>généraliste</strong> et lisible par quiconque
      comprend, dans les grandes lignes, le fonctionnement du web.
      Certains articles abordent toutefois des <strong>aspects techniques</strong> et sont
      signalés comme tels.
    </p>
  </div>

  <div class="intro__col">
    <p class="text-fin">
      <strong>Designer web et développeur</strong>, je suis convaincu du rôle central du
      <strong>design d’interface</strong> et de l’<strong>expérience utilisateur</strong> pour limiter
      l’empreinte environnementale des sites web. Il sera donc largement question ici
      de <strong>webdesign</strong>, de <strong>typographie</strong> et de <strong>conception graphique</strong>.
    </p>

    <p class="text-fin">
      Concernant les aspects techniques, j’ai fait le choix de traiter les
      <strong>outils de développement les plus répandus</strong>. D’un point de vue stratégique,
      il me semble plus pertinent d’agir sur la multitude — imparfaite mais largement utilisée —
      plutôt qu’à la marge.
    </p>
  </div>
</section> -->

    <section class="intro text-gris2">
      <!-- <div class="intro__img"></div> -->
      <div>
      <p class="text-fin">
  Ce blog propose des réflexions sur les
  <strong>impacts environnementaux du numérique</strong> et sur des moyens concrets
  de les réduire grâce à l’<strong>éco-conception de sites web</strong>.
  J’aborde l’éco-conception comme une démarche de qualité&nbsp;: limiter le superflu,
  renforcer l’essentiel et produire des sites plus sobres et plus durables.
</p>

<p class="text-fin">
  Le contenu se veut volontairement <strong>généraliste</strong> et lisible par quiconque
  comprend, dans les grandes lignes, le fonctionnement du web.
  Certains articles abordent des <strong>aspects techniques</strong> et sont signalés
  comme tels, afin de proposer des pistes concrètes et applicables.
</p>

        </div>

      <div>
        <p class="text-fin">
      <strong>Designer web et développeur</strong>, je suis convaincu du rôle central du
      <strong>design d’interface</strong> et de l’<strong>expérience utilisateur</strong> pour limiter
      l’empreinte environnementale des sites web. Il sera donc largement question ici
      de <strong>webdesign</strong>, de <strong>typographie</strong> et de <strong>conception graphique</strong>.
    </p>

    <p class="text-fin">
      Concernant les aspects techniques, j’ai fait le choix de traiter les
      <strong>outils de développement les plus répandus</strong>. D’un point de vue stratégique,
      il me semble plus pertinent d’agir sur la multitude — imparfaite mais largement utilisée —
      plutôt qu’à la marge.
    </p>
      </div>
    </section>
    <div class="border"></div>
    <section v-if="faqArticle" class="featured">
      <span class="featured__label">À lire en premier</span>
      <AppLink :to="articleLink(faqArticle)" class="article-link">
        <BaseHeading gris :titre="faqArticle.title" :tags="faqArticle.tag" />
      </AppLink>
      <p class="text-gris3 text-fin featured__desc">
        {{ faqArticle.description }}
      </p>
      <BaseButton text="Lire la FAQ" :to="articleLink(faqArticle)" />
    </section>
    <section>
      <transition-group name="list" tag="div">
        <article v-for="article of articlesWithoutFaq" :key="article._path">
          <!-- <img :src="article.img" /> -->
          <AppLink :to="articleLink(article)" class="article-link">
            <BaseHeading gris :titre="article.title" :tags="article.tag"
          /></AppLink>
          <div class="resum">
            <p class="text-gris3 text-fin">{{ article.description }}</p>
            <div class="boite-bouton">
              <BaseButton
                text="lire la suite"
                :to="articleLink(article)"
              />
            </div>
          </div>
        </article>
      </transition-group>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { withTrailingSlash } from '~/utils/seo-url'

// Head metadata
const config = useRuntimeConfig()

// useHead({
//   title: 'Éco-conception web - Articles',
//   meta: [
//     {
//       hid: 'description',
//       name: 'description',
//       content: 'Découvrez tous les articles sur l\'éco-conception web, le webdesign éco-responsable et le numérique durable.',
//     },
//   ],
//   link: [
//     {
//       hid: 'canonical',
//       rel: 'canonical',
//       href: `${config.public.siteUrl}/eco-conception/`,
//     },
//   ],
// })

// Fetch articles with Nuxt Content v2
const { data: articles } = await useAsyncData('eco-articles', () =>
  queryContent('articles')
    .only(['title', 'description', 'img', 'tag', 'date', '_path'])
    .sort({ date: -1 })
    .find()
)

// Use tags composable
const tagsStore = useTags()
const name = computed(() => tagsStore.tag.value)

// Filter articles by selected tag
const articlesFilters = computed(() => {
  if (!name.value) {
    return articles.value || []
  }
  return (articles.value || []).filter((el) => el.tag?.includes(name.value))
})

function isFaqArticle(article) {
  if (!article) return false
  const title = article.title || ''
  const path = article._path || ''
  return path.includes('faq-eco-conception') || title.startsWith('FAQ')
}

// FAQ is pinned only when it matches the current tag filter.
const faqArticle = computed(() => {
  const list = articlesFilters.value || []
  return list.find((article) => isFaqArticle(article)) || null
})

const articlesWithoutFaq = computed(() =>
  (articlesFilters.value || []).filter((article) => !isFaqArticle(article))
)

// Generate article link
function articleLink(a) {
  // Nuxt Content v2 generates _path automatically from file location
  // content/articles/foo.md → _path: '/articles/foo'
  if (!a || !a._path) return '/eco-conception/'

  // Map content directory to the public route namespace
  return withTrailingSlash(a._path.replace(/^\/articles\//, '/eco-conception/'))
}

// Update tag filter
function updateTag(tag) {
  tagsStore.setTag(tag)
}
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
}
a {
  text-decoration: none;
  display: block;
  position: relative;
  z-index: 200;
}
.article-link {
  text-decoration: none !important;
  color: inherit;
  background: none !important;

  &:hover,
  &:focus,
  &:visited {
    text-decoration: none !important;
    color: inherit;
    background: none !important;
  }
}
:deep(.article-link *),
:deep(.article-link h3) {
  text-decoration: none !important;
  background: none !important;
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
  div {
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
.featured {
  border: 2px solid $vert;
  background: rgba($vert, 0.05);
  border-radius: 0.6rem;
  padding: 1.6rem 1.4rem;
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (min-width: $breakpoint-tablet) {
    padding: 2rem 2.2rem;
  }
}
.featured__label {
  display: inline-block;
  align-self: flex-start;
  color: $vert;
  border: 1px solid $vert;
  border-radius: 999px;
  padding: 0.2rem 0.55rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.68rem;
}
.featured__desc {
  margin: 0;
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
