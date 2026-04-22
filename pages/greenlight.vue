<template>
  <main class="greenlight-page">
    <section class="greenlight-hero" aria-labelledby="greenlight-hero-title">
      <div class="greenlight-shell greenlight-hero__grid">
        <div class="greenlight-hero__copy">
          <p class="greenlight-eyebrow">Produit WordPress</p>
          <h1 id="greenlight-hero-title" class="greenlight-title">
            {{ content.hero.title }}
          </h1>
          <p class="greenlight-subtitle">
            {{ content.hero.subtitle }}
          </p>
          <p class="greenlight-lead">
            {{ content.hero.description }}
          </p>
          <div class="greenlight-actions">
            <AppLink
              class="greenlight-button greenlight-button--primary"
              :to="versionsLink"
            >
              Découvrir Greenlight
            </AppLink>
            <a
              v-if="hasFreeDownload"
              class="greenlight-button greenlight-button--secondary"
              :href="content.freeDownloadUrl"
            >
              Télécharger Greenlight-free
            </a>
            <AppLink class="greenlight-link" to="/contact/">
              Me contacter pour un projet sur mesure
            </AppLink>
          </div>
        </div>

        <aside class="greenlight-hero__panel" aria-label="Promesse produit">
          <p class="greenlight-panel__kicker">Ce que Greenlight renforce</p>
          <ul class="greenlight-panel__list">
            <li v-for="item in content.heroHighlights" :key="item.title">
              <strong>{{ item.title }}</strong>
              <span>{{ item.description }}</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>

    <section
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-why-title"
    >
      <div class="greenlight-shell greenlight-section__split">
        <header class="greenlight-section__heading">
          <p class="greenlight-eyebrow">Pourquoi Greenlight</p>
          <h2 id="greenlight-why-title" class="greenlight-section__title">
            {{ content.why.title }}
          </h2>
        </header>

        <div class="greenlight-copy">
          <p v-for="paragraph in content.why.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="greenlight-section"
      aria-labelledby="greenlight-benefits-title"
    >
      <div class="greenlight-shell">
        <header class="greenlight-section__intro">
          <p class="greenlight-eyebrow">Bénéfices</p>
          <h2 id="greenlight-benefits-title" class="greenlight-section__title">
            Ce que Greenlight apporte concrètement
          </h2>
        </header>

        <div class="greenlight-card-grid">
          <article
            v-for="item in content.concreteBenefits"
            :key="item.title"
            class="greenlight-card"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-projects-title"
    >
      <div class="greenlight-shell greenlight-projects">
        <div>
          <p class="greenlight-eyebrow">Usages</p>
          <h2 id="greenlight-projects-title" class="greenlight-section__title">
            Pour quels projets ?
          </h2>
        </div>

        <ul class="greenlight-projects__list">
          <li v-for="item in content.projectTypes" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section
      id="versions"
      class="greenlight-section"
      aria-labelledby="greenlight-versions-title"
    >
      <div class="greenlight-shell">
        <header class="greenlight-section__intro">
          <p class="greenlight-eyebrow">Versions</p>
          <h2 id="greenlight-versions-title" class="greenlight-section__title">
            Deux versions selon vos besoins
          </h2>
          <p class="greenlight-section__lede">
            Greenlight-free sert à démarrer sur une base claire. Greenlight va
            plus loin pour les projets qui ont besoin de visibilité, de maîtrise
            éditoriale et de personnalisation avancée.
          </p>
        </header>

        <div class="greenlight-version-grid">
          <article
            v-for="version in content.versions"
            :key="version.name"
            class="greenlight-version"
            :class="{
              'greenlight-version--strong': version.accent === 'strong',
            }"
          >
            <p class="greenlight-version__badge">{{ version.badge }}</p>
            <h3>{{ version.name }}</h3>
            <p class="greenlight-version__description">
              {{ version.description }}
            </p>
            <ul class="greenlight-version__list">
              <li v-for="feature in version.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <ul
              v-if="version.limits?.length"
              class="greenlight-version__limits"
            >
              <li v-for="limit in version.limits" :key="limit">
                {{ limit }}
              </li>
            </ul>
            <AppLink
              v-if="version.accent === 'strong'"
              class="greenlight-link"
              to="/contact/"
            >
              Me parler d'un projet Greenlight
            </AppLink>
          </article>
        </div>
      </div>
    </section>

    <section
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-business-title"
    >
      <div class="greenlight-shell">
        <header class="greenlight-section__intro">
          <p class="greenlight-eyebrow">Positionnement</p>
          <h2 id="greenlight-business-title" class="greenlight-section__title">
            Ce que Greenlight vend réellement
          </h2>
        </header>

        <div class="greenlight-card-grid greenlight-card-grid--business">
          <article
            v-for="item in content.businessBenefits"
            :key="item.title"
            class="greenlight-card greenlight-card--compact"
          >
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="greenlight-section"
      aria-labelledby="greenlight-durable-title"
    >
      <div class="greenlight-shell greenlight-proof">
        <div>
          <p class="greenlight-eyebrow">Preuves secondaires</p>
          <h2 id="greenlight-durable-title" class="greenlight-section__title">
            Une approche plus durable de WordPress
          </h2>
          <p class="greenlight-section__lede">
            La promesse n'est pas seulement éditoriale. Elle repose aussi sur
            des choix techniques utiles, lisibles et assumés.
          </p>
        </div>

        <ul class="greenlight-proof__list">
          <li v-for="item in content.technicalProofs" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-custom-title"
    >
      <div class="greenlight-shell">
        <article class="greenlight-custom">
          <div>
            <p class="greenlight-eyebrow">Sur mesure</p>
            <h2 id="greenlight-custom-title" class="greenlight-section__title">
              {{ content.customBase.title }}
            </h2>
            <p class="greenlight-section__lede">
              {{ content.customBase.description }}
            </p>
          </div>

          <AppLink
            class="greenlight-button greenlight-button--secondary"
            to="/contact/"
          >
            Me parler d'un projet
          </AppLink>
        </article>
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
            v-for="item in content.faq"
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
      class="greenlight-section greenlight-section--alt"
      aria-labelledby="greenlight-cta-title"
    >
      <div class="greenlight-shell">
        <article class="greenlight-final-cta">
          <p class="greenlight-eyebrow">Aller plus loin</p>
          <h2 id="greenlight-cta-title" class="greenlight-section__title">
            {{ content.finalCta.title }}
          </h2>
          <p class="greenlight-section__lede">
            {{ content.finalCta.description }}
          </p>
          <div class="greenlight-actions greenlight-actions--centered">
            <a
              v-if="hasFreeDownload"
              class="greenlight-button greenlight-button--secondary"
              :href="content.freeDownloadUrl"
            >
              Télécharger Greenlight-free
            </a>
            <AppLink
              class="greenlight-button greenlight-button--primary"
              :to="versionsLink"
            >
              Découvrir Greenlight
            </AppLink>
            <AppLink class="greenlight-link" to="/contact/">
              Me contacter
            </AppLink>
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
  greenlightPageContent,
} from '~/data/greenlight'
import { absoluteUrl, canonicalUrl } from '~/utils/seo-url'

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/greenlight')
const ogImage = absoluteUrl(config.public.siteUrl, '/beabot.png')
const content = greenlightPageContent
const hasFreeDownload = Boolean(content.freeDownloadUrl)
const versionsLink = { path: '/greenlight/', hash: '#versions' }

const breadcrumbSchema = buildGreenlightBreadcrumbSchema(config.public.siteUrl)
const faqSchema = buildGreenlightFaqSchema(content.faq)
const productSchema = buildGreenlightProductSchema(
  config.public.siteUrl,
  pageUrl,
  ogImage,
)

useSeoMeta({
  title: content.seo.title,
  description: content.seo.description,
  ogTitle: content.seo.title,
  ogDescription: content.seo.description,
  ogType: 'website',
  ogSiteName: 'BeAbot',
  ogUrl: pageUrl,
  ogImage,
  twitterTitle: content.seo.title,
  twitterDescription: content.seo.description,
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
      children: JSON.stringify(productSchema),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema),
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(breadcrumbSchema),
    },
  ],
})
</script>

<style lang="scss" scoped>
.greenlight-page {
  background:
    radial-gradient(
      circle at top right,
      rgba(4, 217, 79, 0.12),
      transparent 26rem
    ),
    radial-gradient(
      circle at top left,
      rgba(4, 57, 217, 0.09),
      transparent 24rem
    ),
    #101011;
  color: #f2f2f2;
}

.greenlight-shell {
  width: min(100% - 2.5rem, 78rem);
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
  background: rgba(255, 255, 255, 0.025);
}

.greenlight-hero__grid,
.greenlight-section__split,
.greenlight-projects,
.greenlight-proof {
  display: grid;
  gap: 1.5rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr);
    align-items: start;
  }
}

.greenlight-eyebrow {
  display: inline-flex;
  margin: 0 0 1rem;
  padding: 0.35rem 0.78rem;
  border-radius: 999px;
  background: rgba(4, 217, 79, 0.1);
  color: #72f4a2;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.greenlight-title,
.greenlight-section__title {
  margin: 0;
  color: #f6f4f4;
  letter-spacing: -0.05em;
}

.greenlight-title {
  max-width: 12ch;
  font-size: clamp(3rem, 7vw, 5.35rem);
  line-height: 0.95;
}

.greenlight-subtitle {
  max-width: 44rem;
  margin: 1.35rem 0 0;
  font-size: clamp(1.12rem, 1.4vw, 1.3rem);
  line-height: 1.6;
  color: rgba(242, 240, 240, 0.92);
}

.greenlight-lead,
.greenlight-copy p,
.greenlight-section__lede {
  margin: 1.2rem 0 0;
  max-width: 42rem;
  color: rgba(226, 223, 223, 0.82);
  line-height: 1.75;
}

.greenlight-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  align-items: center;
  margin-top: 1.6rem;
}

.greenlight-actions--centered {
  justify-content: center;
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
    border-color 0.25s ease,
    background-color 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}

.greenlight-button:hover,
.greenlight-link:hover {
  transform: translateY(-0.04rem);
}

.greenlight-button--primary {
  background: #0dc763;
  color: #0b0c0d;
}

.greenlight-button--primary:hover {
  background: #1adb73;
}

.greenlight-button--secondary {
  border-color: rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: #f2f2f2;
}

.greenlight-button--secondary:hover {
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.greenlight-link {
  color: #f2f2f2;
  font-weight: 600;
  background: linear-gradient(currentColor, currentColor) left bottom / 0 0.1em
    no-repeat;
  transition:
    background-size 0.25s ease,
    transform 0.25s ease;
}

.greenlight-link:hover {
  background-size: 100% 0.1em;
}

.greenlight-button:focus-visible,
.greenlight-link:focus-visible,
.greenlight-faq__item summary:focus-visible {
  outline: 2px solid rgba(13, 199, 99, 0.5);
  outline-offset: 4px;
}

.greenlight-hero__panel,
.greenlight-card,
.greenlight-version,
.greenlight-custom,
.greenlight-final-cta {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.025)
    ),
    rgba(12, 12, 13, 0.88);
  box-shadow: 0 1.25rem 3rem rgba(0, 0, 0, 0.2);
}

.greenlight-hero__panel {
  padding: 1.35rem;
  border-radius: 1.7rem;
}

.greenlight-panel__kicker {
  margin: 0 0 1rem;
  color: rgba(242, 240, 240, 0.72);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.greenlight-panel__list {
  display: grid;
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.greenlight-panel__list li {
  display: grid;
  gap: 0.3rem;
}

.greenlight-panel__list strong {
  color: #f6f4f4;
}

.greenlight-panel__list span {
  color: rgba(226, 223, 223, 0.76);
  line-height: 1.6;
}

.greenlight-section__heading,
.greenlight-section__intro {
  margin-bottom: 1.5rem;
}

.greenlight-section__title {
  max-width: 16ch;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1;
}

.greenlight-card-grid,
.greenlight-version-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.greenlight-card {
  padding: 1.35rem;
  border-radius: 1.5rem;
}

.greenlight-card--compact {
  min-height: 100%;
}

.greenlight-card h3,
.greenlight-version h3 {
  margin: 0 0 0.7rem;
  color: #f6f4f4;
  font-size: 1.3rem;
}

.greenlight-card p,
.greenlight-version p {
  margin: 0;
  color: rgba(226, 223, 223, 0.8);
  line-height: 1.7;
}

.greenlight-projects__list,
.greenlight-version__list,
.greenlight-version__limits,
.greenlight-proof__list {
  display: grid;
  gap: 0.7rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.greenlight-projects__list {
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.greenlight-projects__list li,
.greenlight-version__list li,
.greenlight-version__limits li,
.greenlight-proof__list li {
  padding: 0.9rem 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(242, 240, 240, 0.84);
}

.greenlight-version {
  display: grid;
  gap: 1rem;
  padding: 1.45rem;
  border-radius: 1.7rem;
}

.greenlight-version--strong {
  border-color: rgba(13, 199, 99, 0.32);
  background:
    radial-gradient(
      circle at top right,
      rgba(13, 199, 99, 0.14),
      transparent 12rem
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.025)
    ),
    rgba(12, 12, 13, 0.9);
}

.greenlight-version__badge {
  color: #72f4a2;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.greenlight-version__description {
  max-width: 36rem;
}

.greenlight-version__limits {
  gap: 0.5rem;
}

.greenlight-version__limits li {
  color: rgba(226, 223, 223, 0.66);
}

.greenlight-proof__list {
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.greenlight-custom,
.greenlight-final-cta {
  display: grid;
  gap: 1.2rem;
  padding: clamp(1.5rem, 3vw, 2.35rem);
  border-radius: 1.9rem;
}

.greenlight-custom {
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
  }
}

.greenlight-faq {
  display: grid;
  gap: 0.8rem;
}

.greenlight-faq__item {
  overflow: hidden;
  border-radius: 1.1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.greenlight-faq__item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.1rem;
  cursor: pointer;
  list-style: none;
  color: #f2f2f2;
  font-weight: 600;
}

.greenlight-faq__item summary::-webkit-details-marker {
  display: none;
}

.greenlight-faq__item summary::after {
  content: '+';
  color: #72f4a2;
  flex-shrink: 0;
}

.greenlight-faq__item[open] summary::after {
  content: '−';
}

.greenlight-faq__item p {
  margin: 0;
  padding: 0 1.1rem 1rem;
  color: rgba(226, 223, 223, 0.8);
  line-height: 1.7;
}

@media (max-width: $breakpoint-tablet) {
  .greenlight-shell {
    width: min(100% - 1.8rem, 78rem);
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
