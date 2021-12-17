<template>
  <section>
    <aside>
      <Oeuf class="oeuf oeuf--1" width="60%" fill="#f2a81d" />
      <Oeuf
        class="oeuf oeuf--2"
        width="40%"
        transform="rotate(-115)"
        fill="#04d94f"
      />
      <div class="boite--aside">
        <div class="breadcrumb">
          <ul class="selector text-gris1">
            <li class="svg-baseline svg-icon">
              <NuxtLink to="/">
                <svg viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                  /></svg
              ></NuxtLink>
            </li>
            |
            <li><NuxtLink to="/eco-conception" exact>Blog</NuxtLink></li>
            |
            <li class="text-gris3">{{ article.title }}</li>
          </ul>
          <hr />
          <span
            v-for="tag in article.tag"
            :key="tag"
            class="petit-text lettre-smcp"
            @click="updateTag(tag)"
            ><NuxtLink to="/eco-conception" exact
              ><span class="text-vert"> #</span>{{ tag }}</NuxtLink
            ></span
          >
        </div>
        <div class="chapitres text-gris1">
          <div class="svg-baseline svg-icon">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z"
              />
            </svg>
            &ensp;Chapitres
          </div>
          <hr />
          <ul class="text-fin petit-text2">
            <!-- <li v-for="link of article.toc" :key="link.id">
              <NuxtLink
                :to="`#${link.id}`"
                :class="{
                  'pl-2': link.depth === 2,
                  'pl-3': link.depth === 3,
                  'text-vert': link.id === currentlyActiveToc,
                  'text-gris3': link.id !== currentlyActiveToc,
                }"
                class="toc-list"
                >{{ link.text }}</NuxtLink
              >
            </li> -->
            <li
              v-for="link of article.toc"
              :key="link.id"
              :class="{
                'text-normal ml-1': link.depth === 2,
                'text-fin ml-2': link.depth === 3,
              }"
            >
              <a
                :class="{
                  'text-encours': link.id === currentlyActiveToc,
                  '': link.id !== currentlyActiveToc,
                }"
                role="button"
                class=""
                :href="`#${link.id}`"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </div>
        <div class="prevnext text-gris1">
          <div class="svg-baseline svg-icon">
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22,3H5A2,2 0 0,0 3,5V9H5V5H22V19H5V15H3V19A2,2 0 0,0 5,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z"
              />
            </svg>
            &ensp;À voir également
          </div>
          <hr />
          <prev-next class="petit-text2" :prev="prev" :next="next" />
        </div>
      </div>
    </aside>
    <article>
      <h1 class="text-black h3 text-gris1">
        {{ article.title }}
      </h1>
      <!-- <hr /> -->

      <p class="text-gris1 text-normal">{{ article.description }}</p>
      <p class="petit-text text-gris3 infos">
        Publié le : {{ formatDate(article.createdAt) }}
        <span v-if="article.createdAt != article.updatedAt">
          - Modifié le : {{ formatDate(article.updatedAt) }}
        </span>
        - Par : Benoît Abot
        <span v-if="article.temps">
          - Temps de lecture : {{ article.temps }}mn</span
        >
      </p>
      <hr />
      <!-- <img :src="require(`~/assets/img/${article.img}`)" :alt="article.alt" /> -->

      <nuxt-content
        ref="nuxtContent"
        class="text-gris2 mt-2"
        :document="article"
      />
      <svg viewBox="0 0 100 100" width="33%">
        <path
          fill="#04d94f"
          d="M75,97.8c3.7-1.1,7.4-1.6,11.1-2c1.9-0.2,3.7-0.3,5.6-0.4c0.5,0,0.9,0,1.4,0l1.3,0c0.3,0,0.5-0.1,0.6-0.3
		c0.2-0.2,0.3-0.4,0.3-0.6l0-1.3c0-0.5,0-0.9,0.1-1.4c0.1-1.9,0.2-3.7,0.4-5.6c0.4-3.7,0.9-7.4,2-11.1h0.3c0.1,3.7,0.1,7.4,0.1,11.1
		l0,5.6l0,2.8c0,1-0.4,2-1.1,2.7c-0.7,0.7-1.7,1.1-2.7,1.1l-2.8,0l-5.6,0c-3.7,0-7.4,0-11.1-0.1V97.8z"
        />
      </svg>
    </article>
  </section>
</template>
<script>
// import getSiteMeta from '@/utils/getSiteMeta'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },
  data() {
    return {
      currentlyActiveToc: '',
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.article.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://beabot.fr/eco-conception/${this.$route.params.slug}`,
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: [
            {
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: this.article.title,
              // image: [this.article.image],
              datePublished: this.article.createdAt,
              dateModified: this.article.updatedAt,
              author: {
                '@type': 'Person',
                name: 'Benoît Abot',
              },
              publisher: {
                '@type': 'Organization',
                name: 'BeAbot',
                url: 'https://beabot.fr',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://beabot.fr/beabot.png',
                },
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'BeAbot',
                  item: 'https://beabot.fr',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Eco-conception',
                  item: `https://beabot.fr/eco-conception/${this.$route.params.slug}`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: this.article.title,
                },
              ],
            },
          ],
        },
      ],
      // script: [
      //   {
      //     type: 'application/ld+json',
      //     json: [
      //       {
      //         '@context': 'https://schema.org',
      //         '@type': 'BlogPosting',
      //         headline: this.article.title,
      //         image: [this.article.image],
      //         datePublished: this.article.createdAt,
      //         dateModified: this.article.updatedAt,
      //         author: {
      //           '@type': 'Person',
      //           name: 'Benoît Abot',
      //         },
      //         publisher: {
      //           '@type': 'Organization',
      //           name: 'BeAbot',
      //           url: 'https://beabot.fr',
      //           logo: {
      //             '@type': 'ImageObject',
      //             url: 'https://beabot.fr/beabot.png',
      //           },
      //         },
      //       },
      //       {
      //         '@context': 'https://schema.org',
      //         '@type': 'BreadcrumbList',
      //         itemListElement: [
      //           {
      //             '@type': 'ListItem',
      //             position: 1,
      //             name: 'BeAbot',
      //             item: 'https://beabot.fr',
      //           },
      //           {
      //             '@type': 'ListItem',
      //             position: 2,
      //             name: 'Eco-conception',
      //             item: `https://beabot.fr/eco-conception/${this.$route.params.slug}`,
      //           },
      //           {
      //             '@type': 'ListItem',
      //             position: 3,
      //             name: this.article.title,
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // ],
    }
  },

  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id
        }
      })
    }, this.observerOptions)

    // Track all sections that have an `id` applied
    document
      .querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]')
      .forEach((section) => {
        this.observer.observe(section)
      })
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  methods: {
    formatDate(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
    updateTag(tag) {
      this.$store.commit('tags/setTag', tag)
    },
  },

  // head() {
  //   return {
  //     title: this.article.title,
  //     meta: [
  //       ...this.meta,
  //       {
  //         property: 'article:published_time',
  //         content: this.article.createdAt,
  //       },
  //       {
  //         property: 'article:modified_time',
  //         content: this.article.updatedAt,
  //       },
  //       {
  //         property: 'article:tag',
  //         content: this.article.tags ? this.article.tags.toString() : '',
  //       },
  //       { name: 'twitter:label1', content: 'Written by' },
  //       { name: 'twitter:data1', content: 'Benoît Abot' },
  //       { name: 'twitter:label2', content: 'Filed under' },
  //       {
  //         name: 'twitter:data2',
  //         content: this.article.tags ? this.article.tags.toString() : '',
  //       },
  //     ],
  //     link: [
  //       {
  //         hid: 'canonical',
  //         rel: 'canonical',
  //         href: `https://beabot.fr/eco-conception/${this.$route.params.slug}`,
  //       },
  //     ],
  //     script: [
  //       {
  //         type: 'application/ld+json',
  //         json: [
  //           {
  //             '@context': 'https://schema.org',
  //             '@type': 'BlogPosting',
  //             headline: this.article.title,
  //             image: [this.article.image],
  //             datePublished: this.article.createdAt,
  //             dateModified: this.article.updatedAt,
  //             author: {
  //               '@type': 'Person',
  //               name: 'Benoît Abot',
  //             },
  //             publisher: {
  //               '@type': 'Organization',
  //               name: 'BeAbot',
  //               url: 'https://beabot.fr',
  //               logo: {
  //                 '@type': 'ImageObject',
  //                 url: 'https://beabot.fr/beabot.png',
  //               },
  //             },
  //           },
  //           {
  //             '@context': 'https://schema.org',
  //             '@type': 'BreadcrumbList',
  //             itemListElement: [
  //               {
  //                 '@type': 'ListItem',
  //                 position: 1,
  //                 name: 'BeAbot',
  //                 item: 'https://beabot.fr',
  //               },
  //               {
  //                 '@type': 'ListItem',
  //                 position: 2,
  //                 name: 'Eco-conception',
  //                 item: `https://beabot.fr/eco-conception/${this.$route.params.slug}`,
  //               },
  //               {
  //                 '@type': 'ListItem',
  //                 position: 3,
  //                 name: this.article.title,
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   }
  // },
}
</script>
<style lang="scss" scoped>
h1 {
  margin: 0.95em 0;
}

section {
  display: flex;
  flex-direction: column;
  @media (min-width: $breakpoint-tablet) {
    flex-direction: row;
  }
  aside {
    width: 100%;
    order: 2;
    margin-top: 3rem;
    border-top: 1px solid $gris3;
    padding-top: 2rem;
    position: relative;
    @media (min-width: $breakpoint-tablet) {
      width: 32.2%;
      opacity: 0.78;
      order: 1;
      margin-top: 6.1rem;
      border-top: none;
      padding-top: 0;
    }
    .oeuf {
      position: absolute;
      height: auto;
      &--1 {
        top: -39px;
        left: -32px;
      }
      &--2 {
        bottom: 0;
        right: 33%;
      }
    }

    .boite--aside {
      position: sticky;
      top: 7rem;
      align-self: flex-start;
    }
    .svg-icon {
      display: inline-flex;
      align-self: center;
    }
    .svg-icon svg {
      height: 1em;
      width: 1em;
    }
    .svg-icon.svg-baseline svg {
      top: 0.125em;
      position: relative;
    }
    hr {
      border: 0.8px solid $gris4;
      width: 61.8%;
    }
    .breadcrumb {
      line-height: 1;
      hr {
        // margin-bottom: 0.3rem;
        margin-top: 0.2rem;
      }
      .selector {
        text-align: left;
        padding-left: 0;
        margin-top: -1rem;
        margin-left: -19px;
        // opacity: 0.9;

        li {
          display: inline;
          list-style: none;
          // color: $bleu1;
          text-align: center;
          &:not(:last-child):hover {
            color: $vert !important;
            cursor: pointer;
          }
        }
      }
    }
    .chapitres {
      margin-top: 2rem;
      ul {
        padding-left: 4px;
        li {
          list-style: none;

          a {
            padding-left: 5px;
            display: inline-block;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .prevnext {
      margin-top: 1rem;
    }

    // .chapitres,
    // .prevnext {
    //   @media (min-width: $breakpoint-tablet) {
    //     opacity: 0.68;
    //     &:hover {
    //       opacity: 1;
    //     }
    //   }
    // }
  }
  article {
    width: 100%;
    order: 1;
    position: relative;
    z-index: 3;
    @media (min-width: $breakpoint-tablet) {
      width: 71.8%;
      order: 2;
      margin-left: 2rem;
    }
    hr {
      border: 0.5px solid $gris4;
      width: 61.8%;
      // margin-top: -0.5rem;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    p {
      max-width: 60ch;
      margin-bottom: 1.05rem;
    }
    .infos {
      max-width: 100%;
    }
    svg {
      position: absolute;
      bottom: -7px;
      right: -3%;
      z-index: 2;
    }

    // .nuxt-content h2 {
    //   font-weight: bold;
    //   font-size: 28px;
    // }
    // .nuxt-content h3 {
    //   font-weight: bold;
    //   font-size: 22px;
    // }
    ::v-deep .nuxt-content {
      &-container {
        z-index: 3;
      }
      p,
      ul {
        max-width: 66ch;
        margin-bottom: 0.45rem;
      }
      a {
        background: linear-gradient($gris3, $gris3) right bottom / 100% 0.15em
          no-repeat;
        transition: background-size 0.4s;
        &:hover {
          background-size: 100% 0.26em;
        }
      }
      .lien--vert {
        background: linear-gradient($vert, $vert) right bottom / 100% 0.25em
          no-repeat;
        transition: background-size 0.4s;
        &:hover {
          background-size: 100% 0.56em;
        }
      }
      h2 {
        line-height: calc(2px + 2ex + 2px);
        margin-top: 0.65em;
        margin-bottom: 0.65rem;
        font-size: min(max(1.929409988rem, 4.950306412vw), 2.8797164rem);
      }
      h3 {
        font-size: 1.7798rem;
        line-height: calc(2px + 2ex + 2px);
        margin-bottom: 0.25rem;
        margin-top: 0.89em;
        font-size: min(max(1.192466rem, 4.587334vw), 1.7798rem);
      }
      h4 {
        font-weight: normal;
        margin-bottom: 0.25rem;
      }
      blockquote {
        background: $gris6;
        border-left: 10px solid $gris4;
        color: $gris1;
        margin: 1.5em 10px;
        padding: 1em 10px;
        border-radius: 0.5rem;
        quotes: '\201C''\201D''\2018''\2019';
      }
      .citation {
        background: $gris6;
        color: $gris1;
        margin: 1.5em 10px;
        padding: 1em 10px 1em 4rem;
        border-radius: 0.5rem;
        position: relative;
        max-width: 66ch;

        &::before {
          content: '\201F';
          font-size: 7rem;
          position: absolute;
          top: -18%;
          left: 10px;
          z-index: 1;
          font-family: sans-serif, serif;
          color: $vert;
          opacity: 0.9;
        }
        .auteur {
          font-size: 0.8rem;
        }
      }
      .footnote-ref {
        font-variant-numeric: oldstyle-nums;
        -moz-font-feature-settings: 'onum';
        -webkit-font-feature-settings: 'onum';
        font-feature-settings: 'onum';
        font-size: 0.86em;
        color: $gris1;
      }
    }
  }
}
.icon.icon-link {
  background-image: url('~assets/img/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

// .prefooter {
//   width: 100%;
//   display: flex;
// }
</style>
