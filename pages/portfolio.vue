<template>
  <main>
    <!-- Section Hero -->
    <section class="hero-portfolio">
      <!-- Œufs décoratifs en background -->
      <LazyOeuf
        class="hero-oeuf hero-oeuf-1"
        width="28%"
        transform="rotate(-45)"
        :fill="'#0439d9'"
      />
      <LazyOeuf
        class="hero-oeuf hero-oeuf-2"
        width="22%"
        transform="rotate(15)"
        :fill="'#f2a81d'"
      />
      <LazyOeuf
        class="hero-oeuf hero-oeuf-3"
        width="18%"
        transform="rotate(-85)"
        :fill="'#00a83e'"
      />

      <div class="hero-content">
        <p class="kicker">Portfolio</p>

        <h1>
          Benoît Abot<br />
          <span class="subtitle">Développeur web & designer<br />spécialisé en éco-conception</span>
        </h1>

        <p class="hero-description">
          Je conçois des sites performants, accessibles et sobres en ressources.
          Chaque projet est une occasion de prouver qu'efficacité et durabilité vont de pair.
        </p>

        <div class="hero-stats" aria-label="Statistiques du portfolio">
          <span class="stat-item">15 ans d'expérience</span>
          <span class="stat-separator">•</span>
          <span class="stat-item">Spécialiste éco-conception</span>
        </div>

        <div class="hero-cta">
          <a
            href="/cv.pdf"
            class="btn-primary"
            download
            aria-label="Télécharger mon CV au format PDF"
          >
            Voir mon CV ↓
          </a>
          <AppLink to="/contact/" class="btn-secondary">
            Me contacter →
          </AppLink>
        </div>
      </div>
    </section>

    <!-- Filtres projets -->
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
        @click="tout = true; select = ''"
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
          key="cycloplomberie"
          id="cycloplomberie"
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
          key="petiteboucle"
          id="petite-boucle"
          titre="La petite boucle"
          sous-titre="Collecte de cartouches d'encre en triporteur électrique"
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
          key="amc2"
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
          key="guidersebanque1"
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
          key="guidersebanque2"
          id="guide-rse-dataviz"
          titre="Guide RSE Banque Populaire"
          sous-titre="Interface de visualisation de données"
          background-url="guideBleu2.png"
          :chips="['WebDesign', 'VueJs', 'Bootstrap']"
          lien="https://www.guide-rse.banquepopulaire.fr/resultats-2020"
      /></transition>
      <transition name="fade">
        <LazyBoiteArticle
          v-if="tout || select === 'vjs' || select === 'webDesign'"
          key="appnoel"
          id="app-noel"
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
          key="aave"
          id="aave"
          titre="AAVE"
          sous-titre="Association pour l'aménagement de la vallée de l'Esches"
          background-url="aave.png"
          :chips="['WebDesign', 'WordPress']"
          lien="https://vallee-esches.fr/"
      /></transition>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const select = ref('')
const tout = ref(true)

const change = (valeur) => {
  select.value = valeur
  tout.value = false
}

import { canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const portfolioCanonicalUrl = canonicalUrl(config.public.siteUrl, '/portfolio')

useHead({
  title: 'portfolio',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content:
        'Différentes créations web dont certaines sont éco-conçues et toutes bâties à partir d\'un wedesign soigné.',
    },
  ],
  link: [
    {
      hid: 'canonical',
      rel: 'canonical',
      href: portfolioCanonicalUrl,
    },
  ],
})
</script>

<style lang="scss" scoped>
/* Hero Portfolio */
.hero-portfolio {
  position: relative;
  width: clamp(90vw, 85vw, 900px);
  margin: 3rem auto 4rem;
  padding: clamp(2rem, 4vw, 3.5rem);
  text-align: center;
  overflow: hidden;

  /* Fond subtil */
  background: linear-gradient(135deg, rgba(242, 240, 240, 0.4) 0%, rgba(217, 217, 217, 0.2) 100%);
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
}

/* Œufs flottants en background */
.hero-oeuf {
  position: absolute;
  z-index: 1;
  opacity: 0.15;
  pointer-events: none;
}

.hero-oeuf-1 {
  top: -8%;
  left: -5%;
}

.hero-oeuf-2 {
  bottom: -6%;
  right: -3%;
}

.hero-oeuf-3 {
  top: 45%;
  left: -4%;

  @media (max-width: 640px) {
    display: none;
  }
}

/* Contenu Hero (au-dessus des œufs) */
.hero-content {
  position: relative;
  z-index: 2;
}

.kicker {
  margin: 0 0 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
  opacity: 0.55;
  display: inline-block;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.18);
}

h1 {
  font-size: clamp(2.8rem, 6vw, 5.6rem);
  line-height: 0.95;
  margin: 0 0 1.5rem;
  color: $bleu2;
}

.subtitle {
  display: block;
  font-size: clamp(1.6rem, 3.5vw, 3rem);
  font-weight: 600;
  margin-top: 0.5rem;
  opacity: 0.85;
}

.hero-description {
  font-size: clamp(1.05rem, 2.2vw, 1.25rem);
  line-height: 1.6;
  margin: 0 auto 1.5rem;
  max-width: 600px;
  opacity: 0.9;
}

/* Stats */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0.8rem;
  margin: 1.5rem auto 2rem;
  font-size: clamp(0.9rem, 2vw, 1rem);
  font-weight: 600;
  opacity: 0.8;

  @media (max-width: 640px) {
    font-size: 0.85rem;
  }
}

.stat-item {
  white-space: nowrap;
}

.stat-separator {
  opacity: 0.5;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 16px;
  }
}

.btn-primary {
  background-color: #0dc763;
  color: white;
  border: 2px solid transparent;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  font-weight: 800;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.12s ease, filter 0.12s ease, box-shadow 0.12s ease,
    background-color 0.12s ease, color 0.12s ease, border-color 0.12s ease;
}

.btn-primary:hover {
  background-color: white;
  color: #0dc763;
  border-color: #0dc763;
  transform: translateY(-1px);
}

.btn-primary:focus,
.btn-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(4, 217, 79, 0.22);
}

.btn-secondary {
  color: $bleu2;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
  padding: 0.75rem 1.5rem;
  transition: opacity 0.12s ease;
}

.btn-secondary:hover {
  opacity: 0.7;
}

.btn-secondary:focus,
.btn-secondary:focus-visible {
  outline: 2px solid $bleu2;
  outline-offset: 4px;
  border-radius: 4px;
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

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
