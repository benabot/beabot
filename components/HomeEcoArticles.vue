<template>
  <section class="container container-blog">
    <hr />
    <h3 class="h2 text-gris2 text-black">
      éco-conception&nbsp;<span>:</span>
      <br />
      <span class="text-fin">derniers articles</span>
    </h3>

    <div class="container-blog__box">
      <div
        v-for="(article, index) in latestArticles"
        :key="article._path || index"
        class="boite-para__para"
        :class="articleCardClass(index)"
      >
        <BaseHeading
          gris
          :titre="article.title || 'Article'"
          :stitre="articleSubtitle(article)"
        />
        <p class="text-gris2">
          {{ article.description || '' }}
        </p>
        <BaseButton :to="articleLink(article)" />
      </div>

      <div class="oeuf b">
        <AppLink to="/eco-conception/" aria-label="voir le blog">
          <svg class="lien" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M18.4,13h-4.9c-0.3,0-0.6,0.2-0.6,0.6v4.9c0,0.3-0.2,0.6-0.6,0.6h-0.9c-0.3,0-0.6-0.2-0.6-0.6v-4.9c0-0.3-0.2-0.6-0.6-0.6
	H5.6C5.2,13,5,12.8,5,12.4v-0.9C5,11.2,5.2,11,5.6,11h4.9c0.3,0,0.6-0.2,0.6-0.6V5.6C11,5.2,11.2,5,11.6,5h0.9C12.8,5,13,5.2,13,5.6
	v4.9c0,0.3,0.2,0.6,0.6,0.6h4.9c0.3,0,0.6,0.2,0.6,0.6v0.9C19,12.8,18.8,13,18.4,13z"
            />
          </svg>
        </AppLink>
        <Oeuf class="fond" width="80%" transform="rotate(-95)" fill="#04d94f" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { withTrailingSlash } from '~/utils/seo-url'

const { data: articles } = await useAsyncData('home-latest-eco-articles', () =>
  queryContent('articles')
    .only(['title', 'description', 'tag', '_path', 'date'])
    .sort({ date: -1 })
    .limit(2)
    .find()
)

const latestArticles = computed(() => articles.value || [])

function articleLink(article) {
  if (!article || !article._path) return '/eco-conception/'
  return withTrailingSlash(
    article._path.replace(/^\/articles\//, '/eco-conception/')
  )
}

function articleSubtitle(article) {
  if (!article || !article.tag || article.tag.length === 0) return 'Éco-conception'
  const ecoTag = article.tag.find((tag) => {
    const lower = tag.toLowerCase()
    return lower.includes('éco') || lower.includes('eco')
  })
  return ecoTag || 'Éco-conception'
}

function articleCardClass(index) {
  return index === 0 ? 'a' : 'c'
}
</script>
