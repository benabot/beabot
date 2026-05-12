<template>
  <main class="greenlight-page">
    <section class="greenlight-hero" aria-labelledby="greenlight-hero-title">
      <div class="greenlight-shell greenlight-hero__grid">
        <div class="greenlight-hero__copy">
          <p class="greenlight-eyebrow">Thème WordPress Gutenberg</p>
<h1 id="greenlight-hero-title" class="greenlight-title">
  Greenlight, le thème WordPress Gutenberg sobre, rapide et éco-conçu
</h1>
<p class="greenlight-subtitle">
  Greenlight-free est un thème WordPress minimaliste, mesurable et libre.
  La version premium ajoute le contrôle de l'optimisation, le SEO avancé
  et la personnalisation fine — et vous évite d'installer une pile de
  plugins superflus pour y arriver.
</p>
<p class="greenlight-lead">
  Un thème WordPress pensé pour durer : rapide à charger, simple à
  maintenir, indépendant des mises à jour de plugins tiers. Les métriques
  affichées — EcoIndex A, moins de 115 ko, 6 requêtes HTTP — sont
  mesurées sur la version free, sans optimisation supplémentaire.
</p>
          <div class="greenlight-actions">
            <a
              class="greenlight-button greenlight-button--primary"
              :href="freeDownloadUrl"
              download="greenlight-free-v1.0.0.zip"
            >
              Télécharger Greenlight-free
            </a>
            <AppLink
              class="greenlight-button greenlight-button--secondary"
              to="/contact/"
            >
              Me contacter pour Greenlight premium
            </AppLink>
            <AppLink class="greenlight-link" :to="versionsLink">
              Comparer les versions
            </AppLink>
          </div>

          <div class="greenlight-hero__proof">
            <p class="greenlight-hero__proof-label">Greenlight-free en chiffres</p>
            <ul
              class="greenlight-proof__metrics greenlight-proof__metrics--hero"
              aria-label="Preuves Greenlight-free"
            >
              <li v-for="metric in proofMetrics" :key="metric.value">
                <strong>{{ metric.value }}</strong>
                <span>{{ metric.label }}</span>
              </li>
            </ul>
            <p class="greenlight-hero__proof-note">
              Mesures observées sur la base Greenlight-free.
            </p>
          </div>
        </div>

        <aside class="greenlight-hero__visual" aria-label="Aperçu produit">
          <figure
            class="greenlight-media greenlight-hero__figure greenlight-hero__figure--hero"
          >
            <div class="greenlight-media__frame">
              <img
                :src="heroVisuals.main.src"
                :alt="heroVisuals.main.alt"
                :width="heroVisuals.main.width"
                :height="heroVisuals.main.height"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>
            <figcaption class="greenlight-media__caption">
              {{ heroVisuals.main.caption }}
            </figcaption>
          </figure>

          <figure
            class="greenlight-media greenlight-hero__figure greenlight-hero__figure--support"
          >
            <div class="greenlight-media__frame">
              <img
                :src="heroVisuals.support.src"
                :alt="heroVisuals.support.alt"
                :width="heroVisuals.support.width"
                :height="heroVisuals.support.height"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption class="greenlight-media__caption">
              {{ heroVisuals.support.caption }}
            </figcaption>
          </figure>

          <figure
            class="greenlight-media greenlight-hero__figure greenlight-hero__figure--network"
          >
            <div class="greenlight-media__frame">
              <img
                :src="heroVisuals.network.src"
                :alt="heroVisuals.network.alt"
                :width="heroVisuals.network.width"
                :height="heroVisuals.network.height"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption class="greenlight-media__caption">
              {{ heroVisuals.network.caption }}
            </figcaption>
          </figure>
        </aside>
      </div>
    </section>

    <section
      id="versions"
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-versions-title"
    >
      <div class="greenlight-shell">
        <header class="greenlight-section__intro">
          <p class="greenlight-eyebrow">Versions</p>
          <h2 id="greenlight-versions-title" class="greenlight-section__title">
            Deux versions, deux usages
          </h2>
          <p class="greenlight-section__lede">
            Greenlight-free donne la base la plus légère. Greenlight premium
            reprend ce socle et ajoute le travail de fond attendu par un vrai
            projet.
          </p>
        </header>

        <div class="greenlight-version-grid">
          <article
            v-for="version in versionCards"
            :key="version.name"
            class="greenlight-version"
            :class="{
              'greenlight-version--free': version.accent === 'free',
              'greenlight-version--premium': version.accent === 'premium',
            }"
          >
            <figure class="greenlight-media greenlight-version__media">
              <div class="greenlight-media__frame">
                <img
                  :src="version.media.src"
                  :alt="version.media.alt"
                  :width="version.media.width"
                  :height="version.media.height"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption class="greenlight-media__caption">
                {{ version.media.caption }}
              </figcaption>
            </figure>

            <div class="greenlight-version__body">
              <p class="greenlight-version__badge">{{ version.badge }}</p>
              <h3>{{ version.name }}</h3>
              <p class="greenlight-version__summary">
                {{ version.summary }}
              </p>
              <p class="greenlight-version__description">
                {{ version.description }}
              </p>
              <p v-if="version.note" class="greenlight-version__note">
                {{ version.note }}
              </p>

              <ul
                v-if="version.proof?.length"
                class="greenlight-version__proof"
                :aria-label="`Preuves pour ${version.name}`"
              >
                <li v-for="metric in version.proof" :key="metric.value">
                  <strong>{{ metric.value }}</strong>
                  <span>{{ metric.label }}</span>
                </li>
              </ul>

              <ul class="greenlight-version__list">
                <li v-for="feature in version.features" :key="feature">
                  {{ feature }}
                </li>
              </ul>

              <div class="greenlight-actions greenlight-actions--card">
                <a
                  v-if="version.accent === 'free'"
                  class="greenlight-button greenlight-button--secondary"
                  :href="version.cta.href"
                  download="greenlight-free-v1.0.0.zip"
                >
                  {{ version.cta.label }}
                </a>
                <AppLink
                  v-else
                  class="greenlight-button greenlight-button--primary"
                  :to="version.cta.href"
                >
                  {{ version.cta.label }}
                </AppLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="greenlight-section"
      aria-labelledby="greenlight-proof-title"
    >
      <div class="greenlight-shell greenlight-proof">
        <div class="greenlight-proof__copy">
          <p class="greenlight-eyebrow">Preuves techniques</p>
          <h2 id="greenlight-proof-title" class="greenlight-section__title">
            Greenlight-free tient sa promesse technique.
          </h2>
          <p class="greenlight-section__lede">
            Greenlight-free est un thème WordPress Gutenberg extrêmement léger.
            Il ne charge que 6 requêtes HTTP. Sa page pèse moins de 115 ko. Son
            DOM reste contenu à 148 éléments. Il atteint un EcoIndex A.
          </p>
          <p class="greenlight-proof__note">
            Mesures observées sur la base Greenlight-free.
          </p>
        </div>

        <figure class="greenlight-media greenlight-proof__figure">
          <div class="greenlight-media__frame">
            <img
              :src="proofVisual.src"
              :alt="proofVisual.alt"
              :width="proofVisual.width"
              :height="proofVisual.height"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption class="greenlight-media__caption">
            {{ proofVisual.caption }}
          </figcaption>
        </figure>

        <ul
          class="greenlight-proof__metrics greenlight-proof__metrics--impact"
          aria-label="Métriques Greenlight-free"
        >
          <li v-for="metric in proofMetrics" :key="metric.value">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-gallery-title"
    >
      <div class="greenlight-shell">
        <header class="greenlight-section__intro">
          <p class="greenlight-eyebrow">Captures produit</p>
          <h2 id="greenlight-gallery-title" class="greenlight-section__title">
            Voir Greenlight en situation
          </h2>
          <p class="greenlight-section__lede">
            Quelques vues suffisent pour juger la base, la lecture du front, la
            personnalisation et l'administration. La démonstration reste
            directe.
          </p>
          <ul class="greenlight-gallery__steps" aria-label="Ordre de lecture">
            <li>Vue d'ensemble</li>
            <li>Lecture du front</li>
            <li>Personnalisation</li>
            <li>Administration</li>
          </ul>
        </header>

        <div class="greenlight-gallery" aria-label="Galerie des captures Greenlight">
          <figure
            v-for="item in galleryItems"
            :key="item.src"
            class="greenlight-media greenlight-gallery__item"
            :class="item.class"
          >
            <div class="greenlight-media__frame">
              <img
                :src="item.src"
                :alt="item.alt"
                :width="item.width"
                :height="item.height"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption class="greenlight-media__caption">
              {{ item.caption }}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section
      id="faq"
      class="greenlight-section"
      aria-labelledby="greenlight-faq-title"
    >
      <div class="greenlight-shell">
        <header class="greenlight-section__intro">
          <p class="greenlight-eyebrow">FAQ</p>
          <h2 id="greenlight-faq-title" class="greenlight-section__title">
            Questions fréquentes
          </h2>
        </header>

        <div class="greenlight-faq">
          <details
            v-for="item in faqItems"
            :key="item.question"
            class="greenlight-faq__item"
          >
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section
      class="greenlight-section"
      aria-labelledby="greenlight-mandate-title"
    >
      <div class="greenlight-shell">
        <article class="greenlight-mandate">
          <div class="greenlight-mandate__copy">
            <p class="greenlight-eyebrow">Déléguer</p>
            <h2 id="greenlight-mandate-title" class="greenlight-section__title">
              Besoin d’un site WordPress sobre construit sur Greenlight ?
            </h2>
            <p class="greenlight-section__lede">
              Je peux intervenir en mission freelance pour installer,
              configurer et optimiser un site WordPress sur la base Greenlight.
              L’objectif reste simple : un site lisible, sobre et maintenable,
              sans pile de plugins ajoutée par défaut.
            </p>
            <AppLink
              class="greenlight-button greenlight-button--primary"
              to="/contact/"
            >
              Parler de votre site WordPress
            </AppLink>
          </div>
        </article>
      </div>
    </section>

    <section
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-cta-title"
    >
      <div class="greenlight-shell">
        <article class="greenlight-final-cta">
          <div class="greenlight-final-cta__copy">
            <p class="greenlight-eyebrow">Dernier choix</p>
            <h2 id="greenlight-cta-title" class="greenlight-section__title">
              Choisir sa porte d'entrée
            </h2>
            <p class="greenlight-section__lede">
              Téléchargez Greenlight-free si vous voulez la base légère.
              Contactez-moi pour Greenlight premium si votre projet demande
              plus de travail de fond.
            </p>
          </div>

          <div class="greenlight-choice-grid">
            <article class="greenlight-choice greenlight-choice--free">
              <p class="greenlight-choice__badge">Greenlight-free</p>
              <h3>La base légère</h3>
              <p>
                Thème WordPress Gutenberg extrêmement léger. 6 requêtes HTTP,
                moins de 115 ko, DOM 148, EcoIndex A.
              </p>
              <a
                class="greenlight-button greenlight-button--secondary"
                :href="freeDownloadUrl"
                download="greenlight-free-v1.0.0.zip"
              >
                Télécharger Greenlight-free
              </a>
            </article>

            <article class="greenlight-choice greenlight-choice--premium">
              <p class="greenlight-choice__badge">Greenlight premium</p>
              <h3>Le site plus édité</h3>
              <p>
                Édition de thème avancée, gestion du SEO, optimisation des
                images, cache, minification quand c'est pertinent et
                optimisation WordPress globale, sans empiler des plugins mal
                coordonnés.
              </p>
              <AppLink
                class="greenlight-button greenlight-button--primary"
                to="/contact/"
              >
                Me contacter pour une mission Greenlight
              </AppLink>
            </article>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import {
  buildGreenlightBreadcrumbSchema,
  buildGreenlightFaqSchema,
  buildGreenlightProductSchema,
} from '~/data/greenlight'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/greenlight')
const ogImage = absoluteUrl(
  config.public.siteUrl,
  '/img/greenlight-free/greenlight-free_front-1.webp',
)

const seo = {
  title: 'Greenlight — thème WordPress éco-conçu',
  description:
    'Greenlight est un thème WordPress sobre et rapide : 6 requêtes HTTP, moins de 115 ko, DOM 148 et EcoIndex A sur la base gratuite.',
}

const heroVisuals = {
  main: {
    src: '/img/greenlight-free/greenlight-free_front-1.webp',
    alt: 'Capture de la page d’accueil Greenlight-free, base Gutenberg',
    width: 1320,
    height: 766,
    caption: 'Vue d’ensemble Greenlight-free',
  },
  support: {
    src: '/img/greenlight/greenlight-customizer-2.webp',
    alt: 'Capture de l’interface de personnalisation Greenlight premium',
    width: 1320,
    height: 759,
    caption: 'Greenlight premium, édition avancée',
  },
  network: {
    src: '/img/greenlight-free/greenlight-free_network.webp',
    alt: 'Capture des requêtes réseau de Greenlight-free',
    width: 1320,
    height: 321,
    caption: '6 requêtes HTTP observées',
  },
} as const

const versionCards = [
  {
    name: 'Greenlight-free',
    badge: 'Version légère',
    summary: 'La base la plus légère pour démarrer sans bruit.',
    description:
      'Greenlight-free est un thème WordPress Gutenberg extrêmement léger. Il ne charge que 6 requêtes HTTP, sa page pèse moins de 115 ko, son DOM reste à 148 éléments et il atteint un EcoIndex A.',
    media: {
      src: '/img/greenlight-free/greenlight-free_front-2.webp',
      alt: 'Capture de la page d’accueil Greenlight-free avec articles',
      width: 1320,
      height: 813,
      caption: 'Base éditoriale prête à l’emploi',
    },
    proof: [
      { value: '6 requêtes HTTP', label: 'sur la base Greenlight-free' },
      { value: '< 115 ko', label: 'poids de page mesuré' },
      { value: 'DOM 148', label: 'structure contenue' },
      { value: 'EcoIndex A', label: 'sobriété validée' },
    ],
    features: [
      'Thème WordPress Gutenberg',
      'Lecture simple et hiérarchie nette',
      'Base sérieuse pour un site sobre',
      'Très peu de surface technique à maintenir',
    ],
    cta: {
      label: 'Télécharger Greenlight-free',
      href: '/greenlight-free-v1.0.0.zip',
    },
    accent: 'free',
  },
  {
    name: 'Greenlight',
    badge: 'Version premium',
    summary: 'Le prolongement naturel pour un site édité et mieux tenu.',
    description:
      'Greenlight premium reprend le socle sobre de Greenlight-free et l’étend avec une édition de thème avancée, du SEO, l’optimisation des images, le cache, la minification quand c’est pertinent et l’optimisation WordPress globale.',
    media: {
      src: '/img/greenlight/greenlight-admin-2.webp',
      alt: 'Capture de l’interface d’administration Greenlight premium',
      width: 1320,
      height: 809,
      caption: 'Administration et réglages avancés',
    },
    features: [
      'Édition de thème avancée',
      'Gestion du SEO',
      'Optimisation des images et du cache',
      'Minification des ressources quand c’est pertinent',
      'Optimisation WordPress globale',
      'Blocs et composants adaptés au projet',
      'Personnalisation avancée',
    ],
    note:
      'L’objectif n’est pas d’ajouter du gras, mais d’adapter un socle propre à un besoin réel sans empiler des plugins SEO, cache, image ou minification ajoutés sans cohérence.',
    cta: {
      label: 'Me contacter pour Greenlight premium',
      href: '/contact/',
    },
    accent: 'premium',
  },
] as const

const proofVisual = {
  src: '/img/greenlight-free/greenlight-free_network.webp',
  alt: 'Capture du relevé réseau Greenlight-free',
  width: 1320,
  height: 321,
  caption: 'Relevé réseau Greenlight-free',
} as const

const proofMetrics = [
  {
    value: '6 requêtes HTTP',
    label: 'Le réseau reste réduit au strict utile.',
  },
  {
    value: '< 115 ko',
    label: 'La page tient dans un budget de transfert léger.',
  },
  {
    value: 'DOM 148',
    label: 'La structure reste simple à rendre.',
  },
  {
    value: 'EcoIndex A',
    label: 'Le score confirme la sobriété.',
  },
] as const

const galleryItems = [
  {
    src: '/img/greenlight-free/greenlight-free_front-3.webp',
    alt: 'Capture de la page d’accueil Greenlight-free',
    width: 1320,
    height: 805,
    caption: 'Vue d’ensemble Greenlight-free',
    class: 'greenlight-gallery__item--featured',
  },
  {
    src: '/img/greenlight-free/greenlight-free_front-4.webp',
    alt: 'Capture d’une autre vue de Greenlight-free',
    width: 1320,
    height: 756,
    caption: 'Lecture du contenu',
    class: 'greenlight-gallery__item--regular',
  },
  {
    src: '/img/greenlight/greenlight-customizer-3.webp',
    alt: 'Capture du personnalisateur Greenlight premium',
    width: 1320,
    height: 755,
    caption: 'Personnalisation Greenlight premium',
    class: 'greenlight-gallery__item--regular',
  },
  {
    src: '/img/greenlight/greenlight-admin-1.webp',
    alt: 'Capture de l’administration Greenlight premium',
    width: 1320,
    height: 813,
    caption: 'Administration Greenlight premium',
    class: 'greenlight-gallery__item--wide',
  },
] as const

const faqItems = [
  {
    question: 'Greenlight-free suffit-il pour un site simple ?',
    answer:
      'Oui. Greenlight-free est pensé comme un thème WordPress Gutenberg très léger pour un site vitrine, une présence locale ou une base de départ sobre et maintenable.',
  },
  {
    question: 'Pourquoi insister sur 6 requêtes HTTP et 148 éléments DOM ?',
    answer:
      'Parce que ce sont des signaux concrets de sobriété. Le thème garde le chargement et la structure sous contrôle au lieu de multiplier les couches inutiles.',
  },
  {
    question: 'Quelle est la différence entre Greenlight-free et Greenlight ?',
    answer:
      'Greenlight-free donne la base la plus légère. Greenlight premium reprend ce socle sobre et ajoute l’édition de thème avancée, le SEO, l’optimisation des images, le cache, la minification quand c’est pertinent et l’optimisation WordPress globale.',
  },
  {
    question: 'Le premium évite-t-il une pile de plugins superflus ?',
    answer:
      'C’est l’objectif. Greenlight premium traite dans le thème ce qui doit être traité dans le thème, pour éviter de compenser la faiblesse d’une base par une accumulation de plugins SEO, image, cache ou minification ajoutés sans cohérence.',
  },
  {
    question: 'Le thème reste-t-il compatible avec Gutenberg ?',
    answer:
      'Oui. C’est même son point de départ : une base WordPress Gutenberg simple, lisible et facile à faire évoluer.',
  },
] as const

const freeDownloadUrl = '/greenlight-free-v1.0.0.zip'
const versionsLink = { path: '/greenlight/', hash: '#versions' }

const breadcrumbSchema = buildGreenlightBreadcrumbSchema(config.public.siteUrl)
const faqSchema = buildGreenlightFaqSchema(faqItems)
const baseProductSchema = buildGreenlightProductSchema(
  config.public.siteUrl,
  pageUrl,
  ogImage,
)
const productSchema = {
  ...baseProductSchema,
  description: seo.description,
  image: ogImage,
  additionalProperty: [
    ...(baseProductSchema.additionalProperty ?? []),
    {
      '@type': 'PropertyValue',
      name: 'Greenlight-free',
      value:
        'Thème WordPress Gutenberg extrêmement léger, 6 requêtes HTTP, moins de 115 ko, DOM 148, EcoIndex A.',
    },
    {
      '@type': 'PropertyValue',
      name: 'HTTP requests',
      value: '6',
    },
    {
      '@type': 'PropertyValue',
      name: 'Page weight',
      value: '< 115 ko',
    },
    {
      '@type': 'PropertyValue',
      name: 'DOM size',
      value: '148',
    },
    {
      '@type': 'PropertyValue',
      name: 'EcoIndex',
      value: 'A',
    },
  ],
}

useSeoMeta({
  title: seo.title,
  description: seo.description,
  ogTitle: seo.title,
  ogDescription: seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  twitterTitle: seo.title,
  twitterDescription: seo.description,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage,
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: pageUrl,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(productSchema),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(faqSchema),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(breadcrumbSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
@use "~/assets/css/vars/_typo.scss" as *;
.greenlight-page {
  background:
    radial-gradient(
      circle at top right,
      rgba(13, 199, 99, 0.14),
      transparent 28rem
    ),
    radial-gradient(
      circle at top left,
      rgba(58, 112, 255, 0.08),
      transparent 24rem
    ),
    linear-gradient(180deg, #f7f3ea 0%, #f4f0e6 55%, #f8f6f0 100%);
  color: #1d2121;
}

.greenlight-shell {
  width: min(100% - 2.5rem, 77rem);
  margin: 0 auto;
}

.greenlight-hero,
.greenlight-section {
  padding: clamp(3.5rem, 8vw, 6rem) 0;
}

.greenlight-hero {
  padding-top: clamp(6rem, 11vw, 8.5rem);
}

.greenlight-section--alt {
  background: rgba(255, 255, 255, 0.48);
  border-block: 1px solid rgba(29, 33, 33, 0.06);
}

.greenlight-hero__grid {
  display: grid;
  gap: clamp(1.8rem, 3vw, 3rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    align-items: start;
  }
}

.greenlight-hero__copy {
  max-width: 42rem;
}

.greenlight-hero__visual {
  display: grid;
  gap: 1rem;
  align-items: start;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: auto auto;
  }
}

.greenlight-hero__figure--hero {
  @media (min-width: $breakpoint-tablet) {
    grid-column: 1 / -1;
  }
}

.greenlight-hero__figure--support {
  @media (min-width: $breakpoint-tablet) {
    grid-column: 2;
    grid-row: 2;
    transform: translateY(-0.35rem);
  }
}

.greenlight-hero__figure--network {
  @media (min-width: $breakpoint-tablet) {
    grid-column: 1;
    grid-row: 2;
    transform: translateY(0.9rem);
  }
}

.greenlight-eyebrow {
  display: inline-flex;
  margin: 0 0 1rem;
  padding: 0.35rem 0.78rem;
  border-radius: 999px;
  background: rgba(13, 199, 99, 0.12);
  color: #0e6e39;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.greenlight-title,
.greenlight-section__title {
  margin: 0;
  color: #1b1f20;
  letter-spacing: -0.05em;
}

.greenlight-title {
  max-width: 12ch;
  font-size: clamp(3rem, 7.3vw, 5.4rem);
  line-height: 0.94;
}

.greenlight-subtitle {
  max-width: 44rem;
  margin: 1.35rem 0 0;
  font-size: clamp(1.1rem, 1.35vw, 1.28rem);
  line-height: 1.62;
  color: rgba(29, 33, 33, 0.88);
}

.greenlight-lead,
.greenlight-section__lede {
  margin: 1.15rem 0 0;
  max-width: 42rem;
  color: rgba(29, 33, 33, 0.74);
  line-height: 1.75;
}

.greenlight-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
  margin-top: 1.7rem;
}

.greenlight-actions--card {
  margin-top: 0.2rem;
}

.greenlight-button,
.greenlight-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.9rem;
  border-radius: 999px;
  text-decoration: none;
}

.greenlight-button {
  padding: 0.78rem 1.2rem;
  border: 1px solid transparent;
  font-weight: 700;
  transition:
    border-color 0.22s ease,
    background-color 0.22s ease,
    color 0.22s ease,
    transform 0.22s ease;
}

.greenlight-button:hover,
.greenlight-link:hover {
  transform: translateY(-0.04rem);
}

.greenlight-button--primary {
  background: #0dc763;
  color: #0b0f0d;
}

.greenlight-button--primary:hover {
  background: #16d96f;
}

.greenlight-button--secondary {
  border-color: rgba(29, 33, 33, 0.14);
  background: rgba(255, 255, 255, 0.8);
  color: #1d2121;
}

.greenlight-button--secondary:hover {
  border-color: rgba(29, 33, 33, 0.2);
  background: rgba(255, 255, 255, 0.96);
}

.greenlight-link {
  color: #0f5d34;
  font-weight: 600;
  background: linear-gradient(currentColor, currentColor) left bottom / 0 0.1em
    no-repeat;
  transition:
    background-size 0.22s ease,
    transform 0.22s ease;
}

.greenlight-link:hover {
  background-size: 100% 0.1em;
}

.greenlight-button:focus-visible,
.greenlight-link:focus-visible,
.greenlight-faq__item summary:focus-visible {
  outline: 2px solid rgba(13, 199, 99, 0.6);
  outline-offset: 4px;
}

.greenlight-hero__proof {
  margin-top: 1.7rem;
  padding: 1.05rem;
  border-radius: 1.55rem;
  border: 1px solid rgba(13, 199, 99, 0.18);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.76)),
    rgba(255, 255, 255, 0.86);
  box-shadow: 0 1rem 2rem rgba(31, 33, 34, 0.07);
}

.greenlight-hero__proof-label {
  margin: 0 0 0.85rem;
  color: #0f5d34;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.greenlight-hero__proof-note {
  margin: 0.82rem 0 0;
  color: rgba(29, 33, 33, 0.66);
  font-size: 0.9rem;
  line-height: 1.55;
}

.greenlight-media {
  margin: 0;
  padding: 0.85rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(29, 33, 33, 0.1);
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 1rem 2.2rem rgba(31, 33, 34, 0.08);
}

.greenlight-media__frame {
  overflow: hidden;
  border-radius: 1rem;
  background: #f4f1e8;
}

.greenlight-media__frame img {
  display: block;
  width: 100%;
  height: auto;
}

.greenlight-media__caption {
  margin: 0.72rem 0 0;
  color: rgba(29, 33, 33, 0.62);
  font-size: 0.82rem;
  line-height: 1.45;
}

.greenlight-section__intro {
  margin-bottom: 1.55rem;
}

.greenlight-section__title {
  max-width: 16ch;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1;
}

.greenlight-version-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.greenlight-version {
  display: grid;
  gap: 1rem;
  padding: clamp(1.2rem, 2.4vw, 1.7rem);
  border-radius: 1.8rem;
  border: 1px solid rgba(29, 33, 33, 0.1);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 1rem 2.2rem rgba(31, 33, 34, 0.08);
}

.greenlight-version--free {
  border-color: rgba(13, 199, 99, 0.24);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(247, 251, 248, 0.92)),
    #fff;
  box-shadow: 0 1.2rem 2.5rem rgba(13, 199, 99, 0.08);
}

.greenlight-version--premium {
  border-color: rgba(13, 199, 99, 0.18);
  background:
    radial-gradient(circle at top right, rgba(13, 199, 99, 0.08), transparent 14rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.95), #fff);
}

.greenlight-version__media {
  padding-bottom: 0.82rem;
}

.greenlight-version__body {
  display: grid;
  gap: 0.95rem;
}

.greenlight-version__badge {
  margin: 0;
  color: #0f5d34;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.greenlight-version h3 {
  margin: 0;
  color: #1b1f20;
  font-size: 1.45rem;
  line-height: 1.1;
}

.greenlight-version__summary {
  margin: 0;
  color: rgba(29, 33, 33, 0.9);
  font-size: 1.04rem;
  font-weight: 600;
  line-height: 1.55;
}

.greenlight-version__description {
  margin: 0;
  color: rgba(29, 33, 33, 0.72);
  line-height: 1.7;
}

.greenlight-version__note {
  margin: 0;
  padding: 0.95rem 1rem;
  border-radius: 1rem;
  border: 1px solid rgba(13, 199, 99, 0.14);
  background: rgba(13, 199, 99, 0.08);
  color: rgba(29, 33, 33, 0.8);
  line-height: 1.65;
}

.greenlight-version__proof {
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 28rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.greenlight-version__proof li {
  display: grid;
  gap: 0.3rem;
  padding: 0.95rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(13, 199, 99, 0.14);
  box-shadow: 0 0.55rem 1.2rem rgba(31, 33, 34, 0.04);
}

.greenlight-version__proof strong {
  color: #1b1f20;
  font-size: 1.04rem;
  line-height: 1.2;
}

.greenlight-version__proof span {
  color: rgba(29, 33, 33, 0.66);
  font-size: 0.92rem;
  line-height: 1.45;
}

.greenlight-version__list {
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.greenlight-version__list li {
  padding: 0.9rem 1rem;
  border-radius: 1rem;
  background: rgba(29, 33, 33, 0.04);
  color: rgba(29, 33, 33, 0.8);
  line-height: 1.6;
}

.greenlight-proof {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
    align-items: start;
  }
}

.greenlight-proof__copy {
  max-width: 34rem;
}

.greenlight-proof__note {
  margin: 1rem 0 0;
  color: rgba(29, 33, 33, 0.7);
  line-height: 1.65;
}

.greenlight-proof__figure {
  @media (min-width: $breakpoint-tablet) {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: start;
  }
}

.greenlight-proof__metrics {
  display: grid;
  gap: 0.9rem;
  margin: 0;
  padding: 0;
  list-style: none;
  grid-template-columns: 1fr;
}

.greenlight-proof__metrics--hero {
  @media (min-width: 38rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.greenlight-proof__metrics--impact {
  @media (min-width: $breakpoint-tablet) {
    grid-column: 1 / -1;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.greenlight-proof__metrics li {
  display: grid;
  gap: 0.35rem;
  padding: 1rem;
  border-radius: 1.15rem;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(29, 33, 33, 0.1);
  box-shadow: 0 0.75rem 1.8rem rgba(31, 33, 34, 0.05);
}

.greenlight-proof__metrics--hero li {
  background: rgba(255, 255, 255, 0.9);
}

.greenlight-proof__metrics--impact li {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(248, 251, 249, 0.92)),
    #fff;
  border-color: rgba(13, 199, 99, 0.15);
}

.greenlight-proof__metrics strong {
  color: #1b1f20;
  font-size: 1.12rem;
  line-height: 1.15;
}

.greenlight-proof__metrics span {
  color: rgba(29, 33, 33, 0.66);
  line-height: 1.55;
}

.greenlight-gallery {
  display: grid;
  gap: 1rem;
  grid-auto-flow: dense;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: start;
  }
}

.greenlight-gallery__item--featured {
  @media (min-width: $breakpoint-tablet) {
    grid-column: span 2;
  }
}

.greenlight-gallery__item--regular {
  @media (min-width: $breakpoint-tablet) {
    grid-column: span 1;
  }
}

.greenlight-gallery__item--wide {
  @media (min-width: $breakpoint-tablet) {
    grid-column: 1 / -1;
  }
}

.greenlight-gallery__steps {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.15rem 0 0;
  padding: 0;
  list-style: none;
}

.greenlight-gallery__steps li {
  padding: 0.55rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(13, 199, 99, 0.14);
  background: rgba(13, 199, 99, 0.08);
  color: rgba(29, 33, 33, 0.82);
  font-size: 0.82rem;
  font-weight: 600;
}

.greenlight-faq {
  display: grid;
  gap: 0.8rem;
}

.greenlight-faq__item {
  overflow: hidden;
  border-radius: 1.1rem;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(29, 33, 33, 0.1);
  box-shadow: 0 0.75rem 1.8rem rgba(31, 33, 34, 0.05);
}

.greenlight-faq__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
  cursor: pointer;
  list-style: none;
  color: #1b1f20;
  font-weight: 600;
}

.greenlight-faq__item summary::-webkit-details-marker {
  display: none;
}

.greenlight-faq__item summary::after {
  content: '+';
  color: #0f5d34;
  flex-shrink: 0;
}

.greenlight-faq__item[open] summary::after {
  content: '−';
}

.greenlight-faq__item p {
  margin: 0;
  padding: 0 1.1rem 1rem;
  color: rgba(29, 33, 33, 0.74);
  line-height: 1.7;
}

.greenlight-final-cta {
  display: grid;
  gap: 1.35rem;
  padding: clamp(1.5rem, 3vw, 2.35rem);
  border-radius: 1.9rem;
  border: 1px solid rgba(29, 33, 33, 0.1);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.82)),
    #fff;
  box-shadow: 0 1rem 2.2rem rgba(31, 33, 34, 0.08);
}

.greenlight-final-cta__copy {
  max-width: 42rem;
}

.greenlight-choice-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.greenlight-choice {
  display: grid;
  gap: 0.95rem;
  padding: clamp(1.2rem, 2.4vw, 1.55rem);
  border-radius: 1.55rem;
  border: 1px solid rgba(29, 33, 33, 0.1);
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 0.9rem 2rem rgba(31, 33, 34, 0.06);
}

.greenlight-choice--free {
  border-color: rgba(13, 199, 99, 0.18);
}

.greenlight-choice--premium {
  border-color: rgba(13, 199, 99, 0.22);
  background:
    radial-gradient(circle at top right, rgba(13, 199, 99, 0.1), transparent 12rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 251, 248, 0.92));
}

.greenlight-choice__badge {
  margin: 0;
  color: #0f5d34;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

.greenlight-choice h3 {
  margin: 0;
  color: #1b1f20;
  font-size: 1.28rem;
  line-height: 1.2;
}

.greenlight-choice p {
  margin: 0;
  color: rgba(29, 33, 33, 0.74);
  line-height: 1.7;
}

.greenlight-choice .greenlight-button {
  width: fit-content;
}

.greenlight-mandate {
  display: grid;
  gap: 1.35rem;
  padding: clamp(1.8rem, 3.5vw, 2.8rem);
  border-radius: 1.9rem;
  border: 1px solid rgba(13, 199, 99, 0.22);
  background:
    radial-gradient(circle at top right, rgba(13, 199, 99, 0.1), transparent 18rem),
    linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(247, 251, 248, 0.92));
  box-shadow: 0 1rem 2.2rem rgba(31, 33, 34, 0.08);
}

.greenlight-mandate__copy {
  display: grid;
  gap: 1rem;
  max-width: 52rem;
}

.greenlight-mandate .greenlight-button {
  width: fit-content;
}

@media (max-width: $breakpoint-tablet) {
  .greenlight-shell {
    width: min(100% - 1.8rem, 77rem);
  }

  .greenlight-hero,
  .greenlight-section {
    padding: 3.3rem 0;
  }

  .greenlight-hero {
    padding-top: 5.9rem;
  }
}
</style>
