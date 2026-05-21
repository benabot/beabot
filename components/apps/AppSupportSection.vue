<template>
  <section id="support" class="app-section app-section--support" :aria-labelledby="titleId">
    <div class="section-heading">
      <h2 :id="titleId">{{ locale === 'fr' ? 'Support' : 'Support' }}</h2>
      <p v-if="locale === 'fr'">
        Vous avez une question, un bug à signaler ou une suggestion pour {{ appName }} ?
      </p>
      <p v-else>
        Have a question, found a bug, or want to suggest an improvement for {{ appName }}?
      </p>
    </div>

    <div class="support-copy">
      <p v-if="locale === 'fr'">
        Consultez d’abord la FAQ ci-dessus : elle répond aux questions les plus fréquentes sur l’installation,
        l’usage, les données et la confidentialité.
      </p>
      <p v-else>
        Please check the FAQ above first: it covers the most common questions about setup, usage, data, and privacy.
      </p>

      <p v-if="locale === 'fr'">Si le problème persiste, indiquez si possible :</p>
      <p v-else>If the issue persists, please include:</p>

      <ul>
        <li v-if="locale === 'fr'">le modèle de votre appareil ;</li>
        <li v-else>your device model;</li>

        <li v-if="locale === 'fr'">la version de {{ osLabelFr }} ;</li>
        <li v-else>your {{ osLabelEn }} version;</li>

        <li v-if="locale === 'fr'">la version de l’app ;</li>
        <li v-else>the app version;</li>

        <li v-if="locale === 'fr'">les étapes permettant de reproduire le problème.</li>
        <li v-else>the steps needed to reproduce the issue.</li>
      </ul>

      <a :href="supportLink" class="support-link">
        {{ supportLabel }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  appName: string
  appSlug: string
  locale: 'fr' | 'en'
  osLabelFr: string
  osLabelEn: string
  titleId?: string
}>()

const titleId = computed(() => props.titleId ?? `${props.appSlug}-support-title`)

const supportLink = computed(() =>
  props.locale === 'fr'
    ? `/contact/?app=${props.appSlug}&type=support`
    : `/en/contact/?app=${props.appSlug}&type=support`,
)

const supportLabel = computed(() =>
  props.locale === 'fr'
    ? `Me contacter à propos de ${props.appName}`
    : `Contact support for ${props.appName}`,
)
</script>

<style scoped lang="scss">
@use "~/assets/css/vars/_colors.scss" as *;

.support-copy {
  display: grid;
  gap: 0.8rem;
}

.support-copy p {
  margin: 0;
  color: $gris2;
  line-height: 1.7;
}

.support-copy ul {
  margin: 0;
  padding-left: 1.2rem;
  color: $gris2;
  line-height: 1.7;
}

.support-link {
  width: fit-content;
  color: $vert;
  font-weight: 700;
  text-decoration: none;
}

.support-link:focus-visible {
  outline: 2px solid $vert;
  outline-offset: 3px;
  border-radius: 0.3rem;
}
</style>
