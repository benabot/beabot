<template>
  <section class="container container-blog container-blog--bleu">
    <hr />
    <h3 class="h2 text-gris2 text-black">
      portfolio&nbsp;<span>:</span>
      <br />
      <span class="text-fin">dernières créations</span>
    </h3>
    <div class="container-blog__box">
      <div
        v-for="(item, index) in latestItems"
        :key="item.key"
        class="boite-para__para"
        :class="itemCardClass(index)"
      >
        <BaseHeading
          gris
          :couleur="bleuCouleur"
          :titre="item.titre"
          :stitre="headingSubtitle(item)"
        />
        <p class="text-gris2">
          {{ item.description || item.sousTitre }}
        </p>
        <BaseButton :to="portfolioLink(item)" bleu>présentation</BaseButton>
      </div>
      <div class="oeuf b">
        <NuxtLink to="/portfolio" aria-label="voir le portfolio">
          <svg class="lien" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M18.4,13h-4.9c-0.3,0-0.6,0.2-0.6,0.6v4.9c0,0.3-0.2,0.6-0.6,0.6h-0.9c-0.3,0-0.6-0.2-0.6-0.6v-4.9c0-0.3-0.2-0.6-0.6-0.6
	H5.6C5.2,13,5,12.8,5,12.4v-0.9C5,11.2,5.2,11,5.6,11h4.9c0.3,0,0.6-0.2,0.6-0.6V5.6C11,5.2,11.2,5,11.6,5h0.9C12.8,5,13,5.2,13,5.6
	v4.9c0,0.3,0.2,0.6,0.6,0.6h4.9c0.3,0,0.6,0.2,0.6,0.6v0.9C19,12.8,18.8,13,18.4,13z"
            />
          </svg>
        </NuxtLink>
        <Oeuf class="fond" width="80%" transform="rotate(-95)" fill="#2561d9" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { portfolioItems } from '~/utils/portfolioItems'

const bleuCouleur = '#2561d9'

const latestItems = computed(() => {
  const sorted = [...portfolioItems].sort((a, b) => {
    const aDate = a.createdAt ? Date.parse(a.createdAt) : 0
    const bDate = b.createdAt ? Date.parse(b.createdAt) : 0
    return bDate - aDate
  })
  return sorted.slice(0, 2)
})

function portfolioLink(item) {
  const hash = item.anchor ? `#${item.anchor}` : ''
  return `/portfolio${hash}`
}

function headingSubtitle(item) {
  return item.stitre || 'dev'
}

function itemCardClass(index) {
  return index === 0 ? 'a' : 'c'
}
</script>
