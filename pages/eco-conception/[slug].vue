<template>
  <main class="eco-article-main">
    <section class="eco-article-section">
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
                <AppLink to="/" aria-label="Retour à l'accueil">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path
                      fill="currentColor"
                      d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"
                    /></svg
                ></AppLink>
              </li>
              |
              <li><AppLink to="/eco-conception/">Blog</AppLink></li>
              |
              <li class="text-gris3">{{ article?.title }}</li>
            </ul>
            <hr />
            <span
              v-for="tag in article?.tag"
              :key="tag"
              class="petit-text lettre-smcp"
              @click="updateTag(tag)"
              ><AppLink :to="articleTagLink(tag)">
                <span class="text-vert"> #</span>{{ tag }}
              </AppLink></span
            >
          </div>
          <div class="chapitres text-gris1">
            <div class="svg-baseline svg-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z"
                />
              </svg>
              &ensp;Chapitres
            </div>
            <hr />
            <ul class="text-fin petit-text2">
              <li
                v-for="link of article?.body?.toc?.links"
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
                  >{{ link.text === 'Footnotes' ? 'Références' : link.text }}</a
                >
              </li>
            </ul>
          </div>
          <div class="prevnext text-gris1">
            <div class="svg-baseline svg-icon">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M22,3H5A2,2 0 0,0 3,5V9H5V5H22V19H5V15H3V19A2,2 0 0,0 5,21H22A2,2 0 0,0 24,19V5A2,2 0 0,0 22,3M7,15V13H0V11H7V9L11,12L7,15M20,13H13V11H20V13M20,9H13V7H20V9M17,17H13V15H17V17Z"
                />
              </svg>
              &ensp;À voir également
            </div>
            <hr />
            <ArticleNavigation class="petit-text2" :prev="prev" :next="next" />
          </div>
        </div>
      </aside>
      <article>
        <h1 class="text-black h3 text-gris1">
          {{ article?.title }}
        </h1>

        <p class="text-gris1 text-normal">{{ chapoText }}</p>
        <p class="petit-text text-gris3 infos">
          Publié le : {{ formatDate(article?.date) }}
          <span v-if="showUpdatedAt">
            — Mis à jour le : {{ formatDate(article?.updatedAt) }}
          </span>
          — Par : Benoît Abot
          <span v-if="article?.temps">
            — Temps de lecture : {{ article.temps }}mn</span
          >
        </p>
        <hr />

        <ContentRenderer
          v-if="article"
          ref="contentEl"
          class="text-gris2 mt-2"
          :value="article"
        />
        <svg
          viewBox="0 0 100 100"
          width="33%"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="#04d94f"
            d="M75,97.8c3.7-1.1,7.4-1.6,11.1-2c1.9-0.2,3.7-0.3,5.6-0.4c0.5,0,0.9,0,1.4,0l1.3,0c0.3,0,0.5-0.1,0.6-0.3
		c0.2-0.2,0.3-0.4,0.3-0.6l0-1.3c0-0.5,0-0.9,0.1-1.4c0.1-1.9,0.2-3.7,0.4-5.6c0.4-3.7,0.9-7.4,2-11.1h0.3c0.1,3.7,0.1,7.4,0.1,11.1
		l0,5.6l0,2.8c0,1-0.4,2-1.1,2.7c-0.7,0.7-1.7,1.1-2.7,1.1l-2.8,0l-5.6,0c-3.7,0-7.4,0-11.1-0.1V97.8z"
          />
        </svg>
      </article>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { canonicalUrl, withTrailingSlash } from '~/utils/seo-url'

const route = useRoute()
const tagsStore = useTags()

// Fetch article data
const { data: article } = await useAsyncData(
  `article-${route.params.slug}`,
  () => queryContent('articles', route.params.slug).findOne(),
)

// Fetch prev/next articles
const { data: surroundArticles } = await useAsyncData(
  `surround-${route.params.slug}`,
  () => {
    if (!article.value?._path) return Promise.resolve([null, null])

    return queryContent('articles')
      .only(['title', '_path'])
      .sort({ date: 1 })
      .findSurround(article.value._path)
  },
)

// Transform article links from /articles/* to /eco-conception/*
const transformArticleLink = (article) => {
  if (!article || !article._path) return null
  const normalizedPath = withTrailingSlash(
    article._path.replace(/^\/articles\//, '/eco-conception/'),
  )
  return {
    ...article,
    _path: normalizedPath,
  }
}

const prev = computed(() => transformArticleLink(surroundArticles.value?.[0]))
const next = computed(() => transformArticleLink(surroundArticles.value?.[1]))

// Reactive state for TOC
const currentlyActiveToc = ref('')
const contentEl = ref(null)
let observer = null

const showUpdatedAt = computed(() => {
  const publishedAt = article.value?.date
  const updatedAt = article.value?.updatedAt
  if (!publishedAt || !updatedAt) return false
  return new Date(updatedAt) > new Date(publishedAt)
})
const chapoText = computed(
  () => article.value?.chapo || article.value?.description || '',
)

const isFaq = computed(() => article.value?.schema === 'FAQPage')
const faqItems = computed(() =>
  buildFaqItems(article.value?.body?.children || []),
)

// Format date helper
function formatDate(date) {
  if (!date) return ''
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  return new Date(date).toLocaleDateString('fr', options)
}

// Update tag in store
function updateTag(tag) {
  tagsStore.setTag(tag)
}

function articleTagLink(tag) {
  return {
    path: '/eco-conception/',
    query: { tag },
    hash: '#eco-archive',
  }
}

function getTagName(node) {
  return node?.tag || node?.tagName || node?.name || ''
}

function isHeading(node, level) {
  const tagName = getTagName(node)
  if (tagName === `h${level}`) return true
  return node?.type === 'heading' && node?.depth === level
}

function normalizeHeadingText(text) {
  return (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function extractPlainText(node) {
  if (!node) return ''
  if (typeof node === 'string') return node
  if (Array.isArray(node)) {
    return node.map(extractPlainText).filter(Boolean).join('')
  }

  if (node.type === 'text') return node.value || ''
  if (node.type === 'comment') return ''

  const tagName = getTagName(node)
  const children = node.children || []
  const childText = children.map(extractPlainText).filter(Boolean)

  if (tagName === 'br') return '\n'
  if (tagName === 'p') return childText.join('').trim()
  if (tagName === 'li') return childText.join('').trim()
  if (tagName === 'ul' || tagName === 'ol') {
    return childText
      .map((item) => item.trim())
      .filter(Boolean)
      .join('\n')
  }

  return childText.join('')
}

function shouldIgnoreNode(node) {
  const tagName = getTagName(node)
  if (tagName === 'nav') return true
  const className = node?.props?.class || ''
  const id = node?.props?.id || ''
  if (typeof className === 'string' && className.includes('toc')) return true
  if (typeof id === 'string' && id.includes('toc')) return true
  return false
}

const SKIP_FAQ_HEADINGS = new Set([
  'a voir egalement',
  'voir egalement',
  'a voir aussi',
  'sommaire',
  'table des matieres',
  'table of contents',
])

function buildFaqItems(bodyChildren) {
  const items = []
  let currentQuestion = ''
  let currentAnswerParts = []

  const pushCurrent = () => {
    if (!currentQuestion) return
    const answer = currentAnswerParts
      .map((part) => part.trim())
      .filter(Boolean)
      .join('\n\n')
    const question = currentQuestion.trim()
    if (question && answer) {
      items.push({ q: question, a: answer })
    }
    currentQuestion = ''
    currentAnswerParts = []
  }

  for (const node of bodyChildren) {
    if (items.length >= 20) break

    if (isHeading(node, 2)) {
      pushCurrent()
      const questionText = extractPlainText(node).trim()
      const normalized = normalizeHeadingText(questionText)
      if (!questionText || SKIP_FAQ_HEADINGS.has(normalized)) {
        currentQuestion = ''
        currentAnswerParts = []
        continue
      }
      currentQuestion = questionText
      continue
    }

    if (isHeading(node, 1)) {
      continue
    }

    if (!currentQuestion) {
      continue
    }

    if (shouldIgnoreNode(node)) {
      continue
    }

    const text = extractPlainText(node).trim()
    if (text) {
      currentAnswerParts.push(text)
    }
  }

  if (items.length < 20) {
    pushCurrent()
  }

  return items.slice(0, 20)
}

// Setup IntersectionObserver for TOC
onMounted(() => {
  const observerOptions = {
    root: null,
    threshold: 0,
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        currentlyActiveToc.value = id
      }
    })
  }, observerOptions)

  // Track all sections that have an `id` applied
  setTimeout(() => {
    document
      .querySelectorAll('article h2[id], article h3[id]')
      .forEach((section) => {
        observer.observe(section)
      })
  }, 100)
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Head metadata with structured data
const config = useRuntimeConfig()
const articleCanonicalUrl = canonicalUrl(
  config.public.siteUrl,
  `/eco-conception/${route.params.slug}`,
)
const hubCanonicalUrl = canonicalUrl(config.public.siteUrl, '/eco-conception')
const homeCanonicalUrl = canonicalUrl(config.public.siteUrl, '/')
const seoTitle = computed(
  () => article.value?.seo?.title || article.value?.title || '',
)
const seoDesc = computed(
  () =>
    article.value?.seo?.description ||
    article.value?.description ||
    `Article sur l’éco-conception web : ${article.value?.title || ''}`.trim(),
)
const ogImage = computed(() => {
  const image = article.value?.seo?.ogImage || article.value?.img
  if (!image) {
    return `${config.public.siteUrl}/beabot.png`
  }
  return image.startsWith('http') ? image : `${config.public.siteUrl}${image}`
})
const robots = computed(() => article.value?.seo?.robots || 'index,follow')
const breadcrumbList = computed(() => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'BeAbot',
      item: homeCanonicalUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Éco-conception',
      item: hubCanonicalUrl,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: article.value?.title,
      item: articleCanonicalUrl,
    },
  ],
}))
const blogPostingStructuredData = computed(() => ({
  '@type': 'BlogPosting',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': articleCanonicalUrl,
  },
  inLanguage: 'fr-FR',
  headline: seoTitle.value,
  description: seoDesc.value,
  datePublished: article.value?.date,
  dateModified: article.value?.updatedAt || article.value?.date,
  author: {
    '@type': 'Person',
    name: 'Benoît Abot',
    url: config.public.siteUrl,
  },
  publisher: {
    '@type': 'Organization',
    name: 'BeAbot',
    url: config.public.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${config.public.siteUrl}/beabot.png`,
    },
  },
  image: [ogImage.value],
}))
const faqStructuredData = computed(() => ({
  '@type': 'FAQPage',
  '@id': `${articleCanonicalUrl}#faq`,
  inLanguage: 'fr-FR',
  mainEntity: faqItems.value.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}))

useHead(
  computed(() => ({
    title: seoTitle.value,
    titleTemplate: '%s | BeAbot',

    meta: [
      { hid: 'description', name: 'description', content: seoDesc.value },
      { hid: 'robots', name: 'robots', content: robots.value },

      // Open Graph
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'BeAbot' },
      { hid: 'og:title', property: 'og:title', content: seoTitle.value },
      {
        hid: 'og:description',
        property: 'og:description',
        content: seoDesc.value,
      },
      { hid: 'og:url', property: 'og:url', content: articleCanonicalUrl },
      { hid: 'og:image', property: 'og:image', content: ogImage.value },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },

      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:title', name: 'twitter:title', content: seoTitle.value },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: seoDesc.value,
      },
      { hid: 'twitter:image', name: 'twitter:image', content: ogImage.value },
    ],

    link: [{ hid: 'canonical', rel: 'canonical', href: articleCanonicalUrl }],

    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            ...(isFaq.value
              ? [faqStructuredData.value, breadcrumbList.value]
              : [blogPostingStructuredData.value, breadcrumbList.value]),
          ],
        }),
      },
    ],
  })),
)
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_colors.scss" as *;
@use "~/assets/css/vars/_typo.scss" as *;
@use "~/assets/css/vars/_spacing.scss" as *;
h1 {
  margin: 0.95em 0;
}

.eco-article-main {
  padding-bottom: clamp(10rem, 16vw, 16rem);
}
.eco-article-section {
  padding-top: clamp(1rem, 4vw, 2rem);
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
        margin-top: 0.2rem;
      }
      .selector {
        text-align: left;
        padding-left: 0;
        margin-top: -1rem;
        margin-left: -19px;

        li {
          display: inline;
          list-style: none;
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

    :deep(.nuxt-content) {
      z-index: 3;
    }

    :deep(.prose) {
      z-index: 3;
    }

    :deep(.prose-container) {
      z-index: 3;
    }

    // Target article content directly (ContentRenderer outputs without wrapper class)
    // ContentRenderer renders content directly inside <article>, so we need :deep() for each selector
    article {
      :deep(p) {
        max-width: 66ch;
        margin-bottom: $space-s;
      }

      :deep(ul),
      :deep(ol) {
        max-width: 66ch;
        margin-bottom: $space-s;
        padding-left: 1.5em;

        li {
          margin-bottom: $space-2xs;
          line-height: 1.6;
          list-style-position: outside;

          // Ensure bold text in lists doesn't look like headings
          strong {
            font-weight: $bold;
            font-size: inherit; // Same size as parent
          }
        }
      }

      :deep(ul) {
        list-style-type: disc;
      }

      :deep(ol) {
        list-style-type: decimal;
      }

      :deep(a) {
        background: linear-gradient($gris3, $gris3) right bottom / 100% 0.15em
          no-repeat;
        transition: background-size 0.4s;
        &:hover {
          background-size: 100% 0.26em;
        }
      }

      :deep(.lien--vert) {
        background: linear-gradient($vert, $vert) right bottom / 100% 0.25em
          no-repeat;
        transition: background-size 0.4s;
        &:hover {
          background-size: 100% 0.56em;
        }
      }

      :deep(h2) {
        line-height: calc(2px + 2ex + 2px);
        margin-top: $space-xl; // Très grand espace AVANT (64px -> 104px)
        margin-bottom: $space-3xs; // Minimal APRÈS (4px -> 6px)
        font-size: min(max(1.929409988rem, 4.950306412vw), 2.8797164rem);
      }

      :deep(h3) {
        font-size: 1.7798rem;
        line-height: calc(2px + 2ex + 2px);
        margin-top: $space-l; // Grand espace AVANT (40px -> 64px)
        margin-bottom: $space-3xs; // Minimal APRÈS (4px -> 6px)
        font-size: min(max(1.192466rem, 4.587334vw), 1.7798rem);
      }

      :deep(h4) {
        font-weight: normal;
        margin-top: $space-m; // Espace moyen AVANT (24px -> 40px)
        margin-bottom: $space-3xs; // Minimal APRÈS (4px -> 6px)
      }

      :deep(blockquote) {
        background: $gris6;
        border-left: 10px solid $gris4;
        color: $gris1;
        margin: 1.5em 10px;
        padding: 1em 10px;
        border-radius: 0.5rem;
        quotes: '\201C' '\201D' '\2018' '\2019';
      }

      :deep(.citation) {
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
  background-image: url('/img/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>

<style src="~/assets/css/article-content.scss" lang="scss"></style>
