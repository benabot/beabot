<template>
  <div class="eco-pillar">
    <section class="eco-hero" aria-labelledby="eco-hero-title">
      <Oeuf
        class="eco-oeuf eco-oeuf--hero-1"
        width="24%"
        transform="rotate(-38)"
        fill="#04d94f"
      />
      <Oeuf
        class="eco-oeuf eco-oeuf--hero-2"
        width="18%"
        transform="rotate(24)"
        fill="#0439d9"
      />
      <div class="eco-shell eco-hero__grid">
        <div class="eco-hero__copy">
          <p class="eco-eyebrow">Éditorial & expertise</p>
          <h1 id="eco-hero-title" class="eco-title">
            Éco-conception <span>web</span>
          </h1>
          <p class="eco-subtitle">
            Performance, accessibilité, sobriété : une méthode de conception
            pour produire des sites plus légers, plus durables et plus utiles.
          </p>
          <p class="eco-lead">
            L’éco-conception web consiste à concevoir des sites et des
            interfaces qui servent réellement l’usage, limitent le superflu et
            restent lisibles dans le temps. Cette page rassemble les repères
            essentiels de beabot.fr et conserve l’archive éditoriale dédiée au
            sujet.
          </p>
          <div class="eco-actions">
            <AppLink
              class="eco-button eco-button--primary"
              to="#eco-principles"
            >
              Découvrir l’approche
            </AppLink>
            <AppLink class="eco-button eco-button--secondary" to="/portfolio/">
              Voir des réalisations
            </AppLink>
            <AppLink class="eco-link" to="/contact/">Me contacter</AppLink>
          </div>
        </div>

        <aside class="eco-hero__panel" aria-label="Repères de lecture">
          <p class="eco-panel__kicker">Ce que vous trouverez ici</p>
          <div class="eco-panel__grid">
            <article
              v-for="item in heroHighlights"
              :key="item.title"
              class="eco-panel__card"
            >
              <h2>{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </article>
          </div>
          <div class="eco-panel__links">
            <AppLink
              class="eco-link eco-link--compact"
              to="/eco-conception/l-eco-conception-web/"
            >
              Définir l’éco-conception
            </AppLink>
            <AppLink
              class="eco-link eco-link--compact"
              to="/eco-conception/la-consommation-energetique-du-numerique/"
            >
              Comprendre les impacts
            </AppLink>
          </div>
        </aside>
      </div>
    </section>

    <section
      class="eco-section eco-section--dark eco-section--promise"
      data-nav-theme="light"
      aria-labelledby="eco-promise-title"
    >
      <Oeuf
        class="eco-oeuf eco-oeuf--promise-1"
        width="18%"
        transform="rotate(-42)"
        fill="#0439d9"
      />
      <Oeuf
        class="eco-oeuf eco-oeuf--promise-2"
        width="14%"
        transform="rotate(18)"
        fill="#04d94f"
      />
      <div class="eco-shell eco-section__split">
        <header class="eco-section__header">
          <p class="eco-eyebrow">Repères</p>
          <h2 id="eco-promise-title" class="eco-section__title">
            Une méthode de conception, pas un vernis marketing
          </h2>
        </header>

        <div class="eco-copy">
          <p>
            L’éco-conception web vise à réduire ce qui coûte inutilement en
            données, en calcul, en maintenance et en attention. Son objectif
            n’est pas de produire un site pauvre, mais un site plus juste :
            mieux hiérarchisé, plus rapide, plus accessible et plus durable.
          </p>
          <p>
            Ce n’est ni une simple optimisation de fin de projet, ni un discours
            décoratif sur l’hébergement ou la sobriété. C’est une manière de
            relier design, contenu, performance, accessibilité et choix
            techniques dès le départ.
          </p>
        </div>
      </div>
    </section>

    <section
      class="eco-section eco-section--impacts"
      aria-labelledby="eco-impacts-title"
    >
      <div class="eco-shell">
        <header class="eco-section__intro">
          <div>
            <p class="eco-eyebrow">Contexte</p>
            <h2 id="eco-impacts-title" class="eco-section__title">
              Les impacts du numérique
            </h2>
          </div>
          <p class="eco-section__lede">
            Réduire l’empreinte d’un site commence par comprendre où se situent
            les principaux impacts du numérique. Les ordres de grandeur
            ci-dessous reprennent les repères exposés dans les contenus de
            référence du site.
          </p>
        </header>

        <div class="eco-impact-grid">
          <article
            v-for="impact in impacts"
            :key="impact.title"
            class="eco-impact-card"
          >
            <p class="eco-impact-card__value">{{ impact.value }}</p>
            <h3>{{ impact.title }}</h3>
            <p>{{ impact.description }}</p>
          </article>
        </div>

        <div class="eco-section__footer">
          <AppLink
            class="eco-link"
            to="/eco-conception/la-consommation-energetique-du-numerique/"
          >
            Voir l’article sur les impacts du numérique
          </AppLink>
        </div>
      </div>
    </section>

    <section
      id="eco-principles"
      class="eco-section eco-section--dark eco-section--principles"
      data-nav-theme="light"
      aria-labelledby="eco-principles-title"
    >
      <Oeuf
        class="eco-oeuf eco-oeuf--principles-1"
        width="16%"
        transform="rotate(-92)"
        fill="#f2a81d"
      />
      <Oeuf
        class="eco-oeuf eco-oeuf--principles-2"
        width="19%"
        transform="rotate(22)"
        fill="#04d94f"
      />
      <div class="eco-shell eco-definition">
        <div class="eco-definition__copy">
          <p class="eco-eyebrow">Définition</p>
          <h2 id="eco-principles-title" class="eco-section__title">
            Qu’est-ce que l’éco-conception ?
          </h2>
          <p class="eco-section__lede">
            Sur BeAbot, l’éco-conception est abordée comme une démarche de
            qualité : partir d’un besoin réel, clarifier l’usage, limiter la
            complexité inutile et construire une base qui tient dans le temps.
          </p>
          <p class="eco-definition__text">
            Elle ne se réduit pas à quelques optimisations techniques. Elle
            commence dans le cadrage, se confirme dans le design, se traduit
            dans le développement et se vérifie dans la maintenance.
          </p>
          <AppLink class="eco-link" to="/eco-conception/l-eco-conception-web/">
            Lire la définition complète
          </AppLink>
        </div>

        <div class="eco-principles-grid">
          <article
            v-for="principle in principles"
            :key="principle.title"
            class="eco-principle-card"
          >
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="eco-section eco-section--benefits"
      aria-labelledby="eco-benefits-title"
    >
      <div class="eco-shell">
        <header class="eco-section__intro">
          <div>
            <p class="eco-eyebrow">Bénéfices</p>
            <h2 id="eco-benefits-title" class="eco-section__title">
              Des bénéfices concrets pour le projet
            </h2>
          </div>
          <p class="eco-section__lede">
            L’éco-conception web n’améliore pas seulement l’impact
            environnemental. Elle aide aussi à produire des sites plus crédibles
            et plus efficaces, côté usage comme côté maintenance.
          </p>
        </header>

        <div class="eco-benefits-grid">
          <article
            v-for="benefit in benefits"
            :key="benefit.title"
            class="eco-benefit-card"
          >
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section
      id="eco-resources"
      class="eco-section eco-section--alt eco-section--resources"
      aria-labelledby="eco-resources-title"
    >
      <div class="eco-shell">
        <header class="eco-section__intro eco-section__intro--split">
          <div>
            <p class="eco-eyebrow">Ressources</p>
            <h2 id="eco-resources-title" class="eco-section__title">
              Ressources et retours d’expérience
            </h2>
          </div>
          <div class="eco-section__actions">
            <p class="eco-section__lede">
              La page reste aussi une archive éditoriale. Vous y retrouvez des
              articles de fond, des retours d’expérience WordPress, des audits
              et des sujets plus ciblés sur les images, la typographie ou la
              performance.
            </p>
            <div class="eco-section__links">
              <AppLink class="eco-link eco-link--compact" to="/portfolio/">
                Voir mes réalisations
              </AppLink>
              <AppLink
                class="eco-link eco-link--compact"
                to="/eco-conception/audit-site-web/"
              >
                Préparer un audit
              </AppLink>
              <AppLink
                class="eco-link eco-link--compact"
                to="/eco-conception/refonte-site-eco-concu/"
              >
                Préparer une refonte
              </AppLink>
              <AppLink
                class="eco-link eco-link--compact"
                to="/eco-conception/wordpress-freelance-lille/"
              >
                Choisir un freelance WordPress
              </AppLink>
              <AppLink class="eco-link eco-link--compact" to="/greenlight/">
                Découvrir Greenlight
              </AppLink>
            </div>
          </div>
        </header>

        <div class="eco-featured-grid">
          <article
            v-for="article in featuredArticles"
            :key="article.path"
            class="eco-resource-card"
          >
            <p class="eco-resource-card__meta">
              {{ articlePreviewTags(article).join(' • ') }}
            </p>
            <h3>
              <AppLink :to="articleLink(article)">
                {{ article.title || 'Article' }}
              </AppLink>
            </h3>
            <p>{{ article.description || '' }}</p>
            <AppLink class="eco-link" :to="articleLink(article)">
              Lire l’article
            </AppLink>
          </article>
        </div>

        <div id="eco-archive" class="eco-archive">
          <Oeuf
            class="eco-oeuf eco-oeuf--archive-1"
            width="17%"
            transform="rotate(-34)"
            fill="#0439d9"
          />
          <Oeuf
            class="eco-oeuf eco-oeuf--archive-2"
            width="14%"
            transform="rotate(28)"
            fill="#04d94f"
          />
          <div class="eco-archive__header">
            <div>
              <p class="eco-eyebrow">Blog</p>
              <h3>Tous les articles éco-conception web</h3>
            </div>
            <p class="eco-archive__lede">
              Filtrez par thème ou recherchez un sujet précis sans quitter la
              page pilier.
            </p>
          </div>

          <div class="eco-toolbar">
            <div
              class="eco-filter-group"
              aria-label="Filtrer les articles par thème"
            >
              <button
                type="button"
                class="eco-filter"
                :aria-pressed="!selectedTag"
                :class="{ 'eco-filter--active': !selectedTag }"
                @click="updateTag('')"
              >
                Tout
                <span>{{ allArticles.length }}</span>
              </button>
              <button
                v-for="tag in availableTags"
                :key="tag.label"
                type="button"
                class="eco-filter"
                :aria-pressed="selectedTag === tag.label"
                :class="{ 'eco-filter--active': selectedTag === tag.label }"
                @click="updateTag(tag.label)"
              >
                {{ tag.label }}
                <span>{{ tag.count }}</span>
              </button>
            </div>

            <label class="eco-search">
              <span class="sr-only">Rechercher un article</span>
              <input
                v-model="searchQuery"
                type="search"
                autocomplete="off"
                placeholder="Rechercher un article"
              />
            </label>
          </div>

          <p class="eco-results">
            {{ filteredArticles.length }}
            {{
              filteredArticles.length > 1
                ? 'articles visibles'
                : 'article visible'
            }}
          </p>

          <div class="eco-archive-grid">
            <article
              v-for="article in filteredArticles"
              :key="article.path"
              class="eco-archive-card"
            >
              <p class="eco-archive-card__meta">
                {{ formatDate(displayDate(article)) }}
              </p>
              <h3>
                <AppLink :to="articleLink(article)">
                  {{ article.title || 'Article' }}
                </AppLink>
              </h3>
              <p>{{ article.description || '' }}</p>
              <div class="eco-archive-card__footer">
                <div class="eco-tag-list" aria-label="Tags de l’article">
                  <span
                    v-for="tag in articlePreviewTags(article)"
                    :key="`${article.path}-${tag}`"
                    class="eco-tag"
                  >
                    {{ tag }}
                  </span>
                </div>
                <AppLink
                  class="eco-link eco-link--compact"
                  :to="articleLink(article)"
                >
                  Lire
                </AppLink>
              </div>
            </article>
          </div>

          <p v-if="!filteredArticles.length" class="eco-empty">
            Aucun article ne correspond à cette recherche.
          </p>
        </div>
      </div>
    </section>

    <section
      class="eco-section eco-section--faq"
      aria-labelledby="eco-faq-title"
    >
      <div class="eco-shell eco-faq">
        <div class="eco-faq__intro">
          <p class="eco-eyebrow">FAQ</p>
          <h2 id="eco-faq-title" class="eco-section__title">
            Questions fréquentes
          </h2>
          <p class="eco-section__lede">
            Les objections les plus courantes sur l’éco-conception reviennent
            souvent aux mêmes questions : coût, design, compatibilité WordPress
            ou intérêt réel pour le SEO. Voici une sélection courte pour poser
            le cadre.
          </p>
          <Oeuf
            class="eco-oeuf eco-oeuf--faq eco-oeuf--faq-main"
            width="76%"
            transform="rotate(-58)"
            fill="#04d94f"
          />
          <Oeuf
            class="eco-oeuf eco-oeuf--faq eco-oeuf--faq-secondary"
            width="34%"
            transform="rotate(24)"
            fill="#0439d9"
          />
        </div>

        <div class="eco-faq__content">
          <details
            v-for="(item, index) in faqPreviewItems"
            :key="item.q"
            class="eco-faq-item"
            :open="index === 0"
          >
            <summary>{{ item.q }}</summary>
            <div class="eco-faq-item__answer">
              <p
                v-for="(paragraph, paragraphIndex) in faqAnswerParagraphs(
                  item.a,
                )"
                :key="`${item.q}-${paragraphIndex}`"
              >
                {{ paragraph }}
              </p>
            </div>
          </details>

          <AppLink class="eco-link" to="/eco-conception/faq-eco-conception/">
            Voir la FAQ complète
          </AppLink>
        </div>
      </div>
    </section>

    <section
      class="eco-section eco-section--cta"
      aria-labelledby="eco-cta-title"
    >
      <div class="eco-shell">
        <div class="eco-final" data-nav-theme="light">
          <Oeuf
            class="eco-oeuf eco-oeuf--cta-1"
            width="16%"
            transform="rotate(-26)"
            fill="#0439d9"
          />
          <Oeuf
            class="eco-oeuf eco-oeuf--cta-2"
            width="13%"
            transform="rotate(38)"
            fill="#f2a81d"
          />
          <Oeuf
            class="eco-oeuf eco-oeuf--cta-3"
            width="11%"
            transform="rotate(-82)"
            fill="#04d94f"
          />
          <p class="eco-eyebrow eco-eyebrow--light">Freelance disponible</p>
          <h2 id="eco-cta-title" class="eco-final__title">
            Un projet web à éco-concevoir ? Je suis disponible.
          </h2>
          <p class="eco-final__text">
            Vous cherchez un développeur qui applique ces principes à un site
            WordPress ou Nuxt ? Basé à Lille, j’interviens sur des audits, des
            refontes et des développements web sobres en Hauts-de-France et en
            remote.
          </p>
          <div class="eco-actions eco-actions--centered">
            <AppLink class="eco-button eco-button--primary" to="/contact/">
              Discutons de votre projet
            </AppLink>
            <AppLink
              class="eco-button eco-button--ghost"
              to="/eco-conception/audit-site-web/"
            >
              Voir l’audit de site web
            </AppLink>
            <AppLink class="eco-button eco-button--ghost" to="/portfolio/">
              Voir mes réalisations
            </AppLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { canonicalUrl, withTrailingSlash } from '~/utils/seo-url'

type EcoArticle = {
  title?: string
  description?: string
  tag?: string[] | string | null
  path?: string
  date?: string | Date
  updatedAt?: string | Date
}

type ContentNode = unknown

type FaqArticle = EcoArticle & {
  body?: {
    children?: ContentNode[]
    value?: ContentNode[]
  }
}

const heroHighlights = [
  {
    title: 'Définir',
    description:
      'Comprendre ce que l’éco-conception web est réellement, au-delà des raccourcis techniques.',
  },
  {
    title: 'Mesurer',
    description:
      'Relier impacts, performance, accessibilité et qualité d’usage plutôt que traiter chaque sujet isolément.',
  },
  {
    title: 'Appliquer',
    description:
      'Retours d’expérience, articles pratiques et exemples WordPress pour passer du principe au projet.',
  },
] as const

const impacts = [
  {
    value: '3,8 %',
    title: 'Émissions globales',
    description:
      'Part du numérique dans les émissions mondiales de gaz à effet de serre. Un rappel utile face au mythe d’un web immatériel.',
  },
  {
    value: '15 %',
    title: 'Data centers',
    description:
      'Part des émissions attribuées aux serveurs. Important, mais loin d’être le seul poste à considérer.',
  },
  {
    value: '32 %',
    title: 'Réseaux',
    description:
      'Part des émissions liées au transport des données. Chaque requête inutile a donc un coût réel.',
  },
  {
    value: '63 %',
    title: 'Terminaux',
    description:
      'Part des émissions attribuées aux équipements des utilisateurs. La durabilité des appareils reste le levier principal.',
  },
] as const

const principles = [
  {
    title: 'Utile',
    description:
      'Le service répond à un besoin clair. On évite les fonctionnalités décoratives qui alourdissent sans améliorer l’usage.',
  },
  {
    title: 'Utilisable',
    description:
      'Accessibilité, lisibilité, hiérarchie et performance servent la compréhension avant l’effet.',
  },
  {
    title: 'Sobre',
    description:
      'On limite les dépendances, les médias et les traitements superflus pour garder une base légère et lisible.',
  },
  {
    title: 'Durable',
    description:
      'Le site reste maintenable, réutilisable et capable d’évoluer sans devoir reconstruire tout l’édifice.',
  },
] as const

const benefits = [
  {
    title: 'Plus rapide',
    description:
      'Des pages plus légères se chargent plus vite et donnent une impression de fluidité plus nette.',
  },
  {
    title: 'Mieux référencé',
    description:
      'Structure claire, performance et qualité éditoriale vont dans le même sens pour le référencement naturel.',
  },
  {
    title: 'Plus accessible',
    description:
      'Une interface hiérarchisée et lisible profite à tous les publics, pas seulement à un utilisateur “idéal”.',
  },
  {
    title: 'Plus simple à maintenir',
    description:
      'Moins de couches inutiles, moins de dette technique et une base plus stable dans le temps.',
  },
  {
    title: 'Plus crédible',
    description:
      'Le site inspire davantage confiance quand le fond, la forme et les performances racontent la même chose.',
  },
  {
    title: 'Plus cohérent avec une démarche RSE',
    description:
      'Le discours sur l’impact ou la responsabilité est soutenu par des choix concrets, visibles et mesurables.',
  },
] as const

const featuredResourcePaths = [
  '/eco-conception/audit-eco-conception',
  '/eco-conception/wordpress-eco-conception',
  '/eco-conception/theme-wordpress-eco-conception',
] as const

const config = useRuntimeConfig()
const pageUrl = canonicalUrl(config.public.siteUrl, '/eco-conception')
const pageTitle = 'Éco-conception web : méthode et ressources'
const pageDescription =
  'Page pilier sur l’éco-conception web : impacts du numérique, principes, bénéfices concrets, ressources éditoriales, FAQ et liens vers les réalisations BeAbot.'

const { data: articles } = await useAsyncData<EcoArticle[]>(
  'eco-pillar-articles',
  () =>
    queryCollection('articles')
      .select('title', 'description', 'tag', 'path', 'date', 'updatedAt')
      .order('date', 'DESC')
      .all(),
)

const { data: faqArticle } = await useAsyncData<FaqArticle | null>(
  'eco-pillar-faq',
  () =>
    queryCollection('articles')
      .path('/eco-conception/faq-eco-conception')
      .first(),
)

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: pageUrl,
  ogImage: `${config.public.siteUrl}/beabot.png`,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: `${config.public.siteUrl}/beabot.png`,
})

const tagsStore = useTags()
const route = useRoute()
const searchQuery = ref('')

const allArticles = computed(() => articles.value || [])

function articleLink(article: EcoArticle) {
  if (!article || !article.path) return '/eco-conception/'
  return withTrailingSlash(article.path)
}

function normalizeSearchText(value = '') {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeTagLabel(tag = '') {
  const normalized = normalizeSearchText(tag)

  if (!normalized) return ''
  if (normalized === 'eco-conception') return 'Éco-conception'
  if (normalized === 'webdesign') return 'WebDesign'
  if (normalized === 'wordpress') return 'WordPress'
  if (normalized === 'seo') return 'SEO'
  if (normalized === 'images') return 'Images'
  if (normalized === 'performance') return 'Performance'
  if (normalized === 'typographie') return 'Typographie'
  if (normalized === 'audit') return 'Audit'

  return tag.trim()
}

function articleTags(article: EcoArticle) {
  const rawTags = article.tag

  if (Array.isArray(rawTags)) return rawTags
  if (typeof rawTags === 'string') return [rawTags]
  return []
}

function articlePreviewTags(article: EcoArticle) {
  return articleTags(article)
    .map((tag) => normalizeTagLabel(tag))
    .filter(Boolean)
}

const selectedTag = computed(() => normalizeTagLabel(tagsStore.tag.value || ''))

const availableTags = computed(() => {
  const preferredOrder = [
    'Éco-conception',
    'WordPress',
    'Performance',
    'WebDesign',
    'SEO',
    'Images',
    'Typographie',
    'Audit',
  ]
  const counts = new Map<string, number>()

  for (const article of allArticles.value) {
    for (const tag of articlePreviewTags(article)) {
      counts.set(tag, (counts.get(tag) || 0) + 1)
    }
  }

  return Array.from(counts.entries())
    .sort(([left], [right]) => {
      const leftIndex = preferredOrder.indexOf(left)
      const rightIndex = preferredOrder.indexOf(right)

      if (leftIndex === -1 && rightIndex === -1) {
        return left.localeCompare(right, 'fr')
      }

      if (leftIndex === -1) return 1
      if (rightIndex === -1) return -1
      return leftIndex - rightIndex
    })
    .map(([label, count]) => ({ label, count }))
})

const featuredArticles = computed(() =>
  featuredResourcePaths.flatMap((path) => {
    const article = allArticles.value.find((entry) => entry.path === path)
    return article ? [article] : []
  }),
)

const filteredArticles = computed(() => {
  const query = normalizeSearchText(searchQuery.value)

  return allArticles.value.filter((article) => {
    const tags = articlePreviewTags(article)
    const matchesTag = !selectedTag.value || tags.includes(selectedTag.value)

    if (!matchesTag) return false
    if (!query) return true

    const haystack = normalizeSearchText(
      [article.title, article.description, ...articlePreviewTags(article)]
        .filter(Boolean)
        .join(' '),
    )

    return haystack.includes(query)
  })
})

function updateTag(tag: string) {
  tagsStore.setTag(normalizeTagLabel(tag))
}

watch(
  () => route.query.tag,
  (queryTag) => {
    const tagValue = Array.isArray(queryTag) ? queryTag[0] : queryTag
    if (typeof tagValue !== 'string') return
    tagsStore.setTag(normalizeTagLabel(tagValue))
  },
  { immediate: true },
)

function formatDate(date?: string | Date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function displayDate(article: EcoArticle) {
  if (!article.updatedAt || !article.date) return article.updatedAt || article.date
  return new Date(article.updatedAt) > new Date(article.date)
    ? article.updatedAt
    : article.date
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function getTagName(node: ContentNode) {
  if (Array.isArray(node) && typeof node[0] === 'string') return node[0]

  if (!isRecord(node)) return ''

  const tagName = node.tag || node.tagName || node.name
  return typeof tagName === 'string' ? tagName : ''
}

function getNodeChildren(node: ContentNode): ContentNode[] {
  if (!Array.isArray(node)) {
    return isRecord(node) && Array.isArray(node.children) ? node.children : []
  }

  const [, maybeProps, ...children] = node
  const hasProps = isRecord(maybeProps)

  return hasProps ? children : node.slice(1)
}

function getNodeProps(node: ContentNode): Record<string, unknown> {
  if (!Array.isArray(node)) {
    return isRecord(node) && isRecord(node.props) ? node.props : {}
  }

  const maybeProps = node[1]
  if (isRecord(maybeProps)) {
    return maybeProps
  }

  return {}
}

function isHeading(node: ContentNode, level: number) {
  const tagName = getTagName(node)
  if (tagName === `h${level}`) return true
  return isRecord(node) && node.type === 'heading' && node.depth === level
}

function extractPlainText(node: ContentNode): string {
  if (!node) return ''
  if (typeof node === 'string') return node

  if (Array.isArray(node)) {
    const tagName = getTagName(node)
    const childText = getNodeChildren(node).map((child) =>
      extractPlainText(child),
    )

    if (tagName === 'br') return '\n'
    if (tagName === 'p' || tagName === 'li') return childText.join('').trim()
    if (tagName === 'ul' || tagName === 'ol') {
      return childText
        .map((item: string) => item.trim())
        .filter(Boolean)
        .join('\n')
    }

    return childText.join('')
  }

  if (!isRecord(node)) return ''
  if (node.type === 'text') {
    return typeof node.value === 'string' ? node.value : ''
  }
  if (node.type === 'comment') return ''

  const tagName = getTagName(node)
  const children = getNodeChildren(node)
  const childText = children.map((child) => extractPlainText(child))

  if (tagName === 'br') return '\n'
  if (tagName === 'p' || tagName === 'li') return childText.join('').trim()
  if (tagName === 'ul' || tagName === 'ol') {
    return childText
      .map((item: string) => item.trim())
      .filter(Boolean)
      .join('\n')
  }

  return childText.join('')
}

function normalizeHeadingText(text: string) {
  return normalizeSearchText(text)
}

function shouldIgnoreNode(node: ContentNode) {
  const tagName = getTagName(node)
  if (tagName === 'nav') return true

  const props = getNodeProps(node)
  const className = props.class || ''
  const id = props.id || ''

  return (
    (typeof className === 'string' && className.includes('toc')) ||
    (typeof id === 'string' && id.includes('toc'))
  )
}

const skippedFaqHeadings = new Set([
  'a voir egalement',
  'voir egalement',
  'a voir aussi',
  'sommaire',
  'table des matieres',
  'table of contents',
  'ressources',
])

function buildFaqItems(bodyChildren: ContentNode[]) {
  const items: Array<{ q: string; a: string }> = []
  let currentQuestion = ''
  let currentAnswerParts: string[] = []

  const pushCurrent = () => {
    if (!currentQuestion) return

    const answer = currentAnswerParts
      .map((part) => part.trim())
      .filter(Boolean)
      .join('\n\n')

    if (currentQuestion.trim() && answer) {
      items.push({
        q: currentQuestion.trim(),
        a: answer,
      })
    }

    currentQuestion = ''
    currentAnswerParts = []
  }

  for (const node of bodyChildren) {
    if (items.length >= 8) break

    if (isHeading(node, 2)) {
      pushCurrent()

      const questionText = extractPlainText(node).trim()
      const normalized = normalizeHeadingText(questionText)

      if (!questionText || skippedFaqHeadings.has(normalized)) {
        currentQuestion = ''
        currentAnswerParts = []
        continue
      }

      currentQuestion = questionText
      continue
    }

    if (isHeading(node, 1) || shouldIgnoreNode(node) || !currentQuestion) {
      continue
    }

    const text = extractPlainText(node).trim()
    if (text) {
      currentAnswerParts.push(text)
    }
  }

  pushCurrent()
  return items
}

function faqBodyChildren(article?: FaqArticle | null) {
  const body = article?.body
  if (!body) return []
  if (Array.isArray(body.value)) return body.value
  if (Array.isArray(body.children)) return body.children
  return []
}

const faqPreviewItems = computed(() =>
  buildFaqItems(faqBodyChildren(faqArticle.value)).slice(0, 4),
)

function faqAnswerParagraphs(answer: string) {
  return answer
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

const collectionSchema = computed(() => ({
  '@type': 'CollectionPage',
  name: 'Éco-conception web',
  description: pageDescription,
  url: pageUrl,
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'BeAbot',
    url: config.public.siteUrl,
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: allArticles.value.length,
    itemListElement: allArticles.value.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: canonicalUrl(config.public.siteUrl, articleLink(article)),
      name: article.title || 'Article',
    })),
  },
}))

const faqSchema = computed(() => {
  if (!faqPreviewItems.value.length) return null

  return {
    '@type': 'FAQPage',
    name: 'FAQ éco-conception web',
    url: `${pageUrl}#eco-faq`,
    inLanguage: 'fr-FR',
    mainEntity: faqPreviewItems.value.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
})

useHead(() => {
  const graph = [collectionSchema.value]

  if (faqSchema.value) {
    graph.push(faqSchema.value)
  }

  return {
    titleTemplate: '%s | BeAbot',
    link: [{ rel: 'canonical', href: pageUrl }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      },
    ],
  }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
@use "~/assets/css/vars/_colors.scss" as *;
@use "~/assets/css/vars/_typo.scss" as *;

.eco-pillar {
  --surface: #f3f1ea;
  --surface-soft: #faf8f2;
  --surface-strong: #ffffff;
  --surface-muted: rgba(255, 255, 255, 0.72);
  --text-primary: #11110d;
  --text-secondary: rgba(17, 17, 13, 0.76);
  --text-muted: rgba(17, 17, 13, 0.56);
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.12),
      transparent 24rem
    ),
    linear-gradient(180deg, #f4f2ec 0%, #f8f7f3 40%, #f1efe9 100%);
  color: var(--text-primary);
}

.eco-shell {
  width: min(100%, 72rem);
  margin: 0 auto;
}

.eco-hero,
.eco-section {
  padding-top: clamp(4rem, 7vw, 6.5rem);
  padding-bottom: clamp(4rem, 7vw, 6.5rem);
}

.eco-hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  padding-top: clamp(7rem, 12vw, 9.5rem);
  background:
    radial-gradient(
      circle at 85% 15%,
      rgba(0, 168, 62, 0.12),
      transparent 20rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.28), transparent 74%);
}

.eco-hero::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(17, 17, 13, 0),
    rgba(17, 17, 13, 0.14),
    rgba(17, 17, 13, 0)
  );
}

.eco-hero .eco-shell {
  position: relative;
  z-index: 1;
}

.eco-section--alt {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.52),
    rgba(255, 255, 255, 0.22)
  );
}

.eco-section--resources {
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.48), rgba(244, 242, 236, 0)),
    linear-gradient(90deg, rgba(4, 57, 217, 0.035), rgba(0, 168, 62, 0.035));
}

.eco-section--dark {
  --surface-muted: rgba(255, 255, 255, 0.055);
  --text-primary: #f7f5ef;
  --text-secondary: rgba(247, 245, 239, 0.78);
  --text-muted: rgba(247, 245, 239, 0.56);
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.16),
      transparent 22rem
    ),
    radial-gradient(
      circle at bottom left,
      rgba(4, 57, 217, 0.12),
      transparent 18rem
    ),
    linear-gradient(180deg, #10110d 0%, #171712 100%);
  color: var(--text-primary);
}

.eco-section--dark .eco-shell {
  position: relative;
  z-index: 1;
}

.eco-section--promise {
  padding-top: clamp(3.6rem, 6vw, 5.25rem);
  padding-bottom: clamp(3.6rem, 6vw, 5.25rem);
}

.eco-section--principles {
  padding-top: clamp(5rem, 8vw, 8rem);
  padding-bottom: clamp(5rem, 8vw, 8rem);
  background:
    radial-gradient(
      circle at 12% 18%,
      rgba(242, 168, 29, 0.16),
      transparent 18rem
    ),
    radial-gradient(
      circle at 88% 72%,
      rgba(0, 168, 62, 0.18),
      transparent 22rem
    ),
    linear-gradient(180deg, #0d0f0b 0%, #181813 56%, #0f100c 100%);
}

.eco-section--impacts,
.eco-section--benefits,
.eco-section--faq {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.eco-section--impacts {
  background:
    radial-gradient(
      circle at 12% 18%,
      rgba(242, 168, 29, 0.09),
      transparent 15rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.34), rgba(244, 242, 236, 0));
}

.eco-section--impacts::before {
  content: '';
  position: absolute;
  right: -5rem;
  bottom: 12%;
  width: min(24vw, 16rem);
  aspect-ratio: 1;
  border-radius: 46% 54% 49% 51%;
  background: rgba(0, 168, 62, 0.08);
  transform: rotate(-18deg);
}

.eco-section--benefits {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12),
    rgba(255, 255, 255, 0.42) 54%,
    rgba(244, 242, 236, 0.1)
  );
}

.eco-section--faq {
  padding-top: clamp(4.5rem, 8vw, 7.2rem);
  background:
    radial-gradient(
      circle at 78% 18%,
      rgba(4, 57, 217, 0.06),
      transparent 16rem
    ),
    linear-gradient(
      180deg,
      rgba(244, 242, 236, 0.06),
      rgba(255, 255, 255, 0.34)
    );
}

.eco-hero__grid,
.eco-section__split,
.eco-definition,
.eco-faq {
  display: grid;
  gap: clamp(1.5rem, 4vw, 3rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.82fr);
    align-items: start;
  }
}

.eco-eyebrow,
.eco-panel__kicker,
.eco-resource-card__meta,
.eco-archive-card__meta {
  margin: 0;
  font-size: 0.76rem;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.eco-eyebrow {
  margin-bottom: 0.9rem;
}

.eco-eyebrow--light {
  color: var(--text-muted);
}

.eco-title,
.eco-section__title,
.eco-final__title {
  margin: 0;
  letter-spacing: -0.045em;
  line-height: 0.94;
}

.eco-title {
  max-width: 10ch;
  font-size: clamp(3rem, 6vw, 5.6rem);
}

.eco-title span {
  color: color.adjust($vert-raw, $lightness: 6%);
}

.eco-section__title,
.eco-final__title {
  font-size: clamp(2.1rem, 4vw, 3.4rem);
}

.eco-subtitle,
.eco-lead,
.eco-copy p,
.eco-section__lede,
.eco-impact-card p,
.eco-principle-card p,
.eco-benefit-card p,
.eco-resource-card p,
.eco-archive-card p,
.eco-definition__text,
.eco-final__text,
.eco-faq-item__answer p,
.eco-archive__lede {
  color: var(--text-secondary);
}

.eco-subtitle {
  max-width: 38rem;
  margin: 1.35rem 0 0;
  font-size: clamp(1.08rem, 1.45vw, 1.35rem);
  line-height: 1.45;
}

.eco-lead {
  max-width: 42rem;
  margin: 1.5rem 0 0;
  font-size: clamp(1rem, 1.2vw, 1.08rem);
}

.eco-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  margin-top: 2rem;
}

.eco-actions--centered {
  justify-content: center;
}

.eco-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: 0.85rem 1.2rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.eco-button:hover,
.eco-button:focus-visible {
  transform: translateY(-1px);
}

.eco-button--primary {
  background: linear-gradient(
    135deg,
    color.adjust($vert-raw, $lightness: 14%),
    $vert 72%
  );
  color: $gris1;
  box-shadow: 0 1rem 2rem rgba(0, 168, 62, 0.18);
}

.eco-button--secondary {
  background: rgba(17, 17, 13, 0.05);
  color: var(--text-primary);
}

.eco-button--ghost {
  background: rgba(17, 17, 13, 0.06);
  color: var(--text-primary);
}

.eco-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  background: linear-gradient(currentColor, currentColor) left bottom / 0 0.12em
    no-repeat;
  transition: background-size 0.25s ease;
}

.eco-link:hover,
.eco-link:focus-visible {
  background-size: 100% 0.12em;
}

.eco-link--compact {
  font-size: 0.88rem;
}

.eco-link--light {
  color: var(--text-primary);
}

.eco-oeuf {
  position: absolute;
  z-index: 0;
  opacity: 0.14;
  pointer-events: none;
}

.eco-oeuf--hero-1 {
  top: 9%;
  right: -5%;
  opacity: 0.11;
}

.eco-oeuf--hero-2 {
  bottom: 4%;
  left: -4%;
  opacity: 0.08;
}

.eco-oeuf--promise-1 {
  top: -5%;
  right: -3%;
}

.eco-oeuf--promise-2 {
  bottom: -20%;
  left: -4%;
  opacity: 0.16;
}

.eco-oeuf--principles-1 {
  top: -10%;
  left: -4%;
  opacity: 0.16;
}

.eco-oeuf--principles-2 {
  right: -2%;
  bottom: -18%;
}

.eco-oeuf--cta-1 {
  top: -12%;
  right: -4%;
  opacity: 0.18;
}

.eco-oeuf--cta-2 {
  bottom: -18%;
  left: -3%;
  opacity: 0.14;
}

.eco-oeuf--cta-3 {
  top: 40%;
  left: 8%;
  opacity: 0.1;
}

.eco-oeuf--archive-1 {
  top: -10%;
  right: -4%;
  opacity: 0.17;
}

.eco-oeuf--archive-2 {
  bottom: -18%;
  left: -3%;
  opacity: 0.12;
}

.eco-oeuf--faq-main {
  top: calc(100% + 1.4rem);
  left: clamp(-2.8rem, -4vw, -1rem);
  opacity: 0.12;
  transform-origin: center;
}

.eco-oeuf--faq-secondary {
  top: calc(100% + 10rem);
  left: clamp(9rem, 18vw, 14rem);
  opacity: 0.08;
  transform-origin: center;
}

.eco-hero__panel,
.eco-archive,
.eco-impact-card,
.eco-principle-card,
.eco-benefit-card,
.eco-resource-card,
.eco-archive-card,
.eco-faq-item {
  background: var(--surface-muted);
  box-shadow:
    0 1rem 2.5rem rgba(29, 27, 19, 0.08),
    0 0.4rem 1rem rgba(29, 27, 19, 0.04);
}

.eco-hero__panel {
  position: relative;
  overflow: hidden;
  padding: clamp(1.25rem, 3vw, 1.8rem);
  border-radius: 2rem;
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.12),
      transparent 12rem
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.94),
      rgba(248, 246, 239, 0.88)
    );
  border: 1px solid rgba(17, 17, 13, 0.08);
}

.eco-hero__panel::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 0.25rem;
  background: linear-gradient(
    90deg,
    color.adjust($vert-raw, $lightness: 8%),
    rgba(4, 57, 217, 0.42),
    rgba(242, 168, 29, 0.34)
  );
}

.eco-panel__grid {
  display: grid;
  gap: 0.8rem;
}

.eco-panel__card {
  padding: 1rem 1rem 1.05rem;
  border-radius: 1.35rem;
  background: rgba(17, 17, 13, 0.03);
}

.eco-panel__card h2 {
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: -0.03em;
}

.eco-panel__card p {
  margin: 0.45rem 0 0;
  color: var(--text-secondary);
}

.eco-panel__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.15rem;
}

.eco-section__intro,
.eco-archive__header {
  display: grid;
  gap: 1rem;
  margin-bottom: clamp(1.75rem, 4vw, 2.75rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 26rem);
    align-items: end;
  }
}

.eco-section__intro--split {
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
}

.eco-section--resources .eco-section__intro {
  padding: clamp(1.25rem, 3vw, 2rem);
  border-radius: 2rem;
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.08),
      transparent 14rem
    ),
    rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(17, 17, 13, 0.06);
}

.eco-section--impacts .eco-section__intro,
.eco-section--benefits .eco-section__intro,
.eco-section--faq .eco-faq {
  position: relative;
  z-index: 1;
}

.eco-section--impacts .eco-section__intro {
  align-items: start;
}

.eco-section--impacts .eco-section__title {
  max-width: 9ch;
}

.eco-section--impacts .eco-section__lede {
  padding-top: 0.2rem;
  font-size: clamp(1.02rem, 1.25vw, 1.14rem);
  line-height: 1.55;
}

.eco-section__actions {
  display: grid;
  gap: 1rem;
}

.eco-section__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.eco-section__lede,
.eco-archive__lede {
  margin: 0;
  max-width: 38rem;
  font-size: 1rem;
}

.eco-copy {
  display: grid;
  gap: 1rem;
}

.eco-copy p,
.eco-definition__text,
.eco-final__text {
  margin: 0;
  font-size: 1rem;
}

.eco-impact-grid,
.eco-benefits-grid,
.eco-featured-grid,
.eco-archive-grid {
  display: grid;
  gap: 1rem;
}

.eco-impact-grid {
  position: relative;
  z-index: 1;
  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.eco-impact-card,
.eco-principle-card,
.eco-benefit-card,
.eco-resource-card,
.eco-archive-card {
  padding: 1.3rem;
  border-radius: 1.7rem;
}

.eco-impact-card {
  display: grid;
  gap: 0.8rem;
  min-height: 13rem;
  align-content: space-between;
  border: 1px solid rgba(17, 17, 13, 0.07);
  background:
    radial-gradient(circle at 80% 10%, rgba(0, 168, 62, 0.1), transparent 9rem),
    rgba(255, 255, 255, 0.82);
}

.eco-impact-card:nth-child(even) {
  transform: translateY(0.9rem);
}

.eco-impact-card:nth-child(3) {
  background:
    radial-gradient(
      circle at 80% 10%,
      rgba(4, 57, 217, 0.08),
      transparent 9rem
    ),
    rgba(255, 255, 255, 0.82);
}

.eco-impact-card__value {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 0.95;
  letter-spacing: -0.05em;
  color: color.adjust($vert-raw, $lightness: 2%);
}

.eco-impact-card h3,
.eco-principle-card h3,
.eco-benefit-card h3,
.eco-resource-card h3,
.eco-archive-card h3,
.eco-archive__header h3 {
  margin: 0;
  letter-spacing: -0.03em;
}

.eco-impact-card h3,
.eco-principle-card h3,
.eco-benefit-card h3,
.eco-resource-card h3,
.eco-archive-card h3 {
  font-size: clamp(1.15rem, 2vw, 1.45rem);
  line-height: 1.06;
}

.eco-impact-card p,
.eco-principle-card p,
.eco-benefit-card p,
.eco-resource-card p,
.eco-archive-card p {
  margin: 0;
  font-size: 0.96rem;
}

.eco-section__footer {
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 1.25rem;
}

.eco-definition__copy {
  display: grid;
  gap: 1rem;
}

.eco-section--principles .eco-definition {
  align-items: center;
}

.eco-section--principles .eco-section__title {
  max-width: 11ch;
  font-size: clamp(2.45rem, 5vw, 4.4rem);
}

.eco-section--principles .eco-definition__text {
  max-width: 34rem;
}

.eco-principles-grid {
  display: grid;
  gap: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.eco-benefits-grid {
  counter-reset: eco-benefits;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.eco-benefit-card,
.eco-principle-card {
  display: grid;
  gap: 0.8rem;
}

.eco-benefit-card {
  counter-increment: eco-benefits;
  position: relative;
  overflow: hidden;
  min-height: 12rem;
  align-content: end;
  padding-top: 3.4rem;
  border: 1px solid rgba(17, 17, 13, 0.06);
  background:
    radial-gradient(circle at 86% 0, rgba(0, 168, 62, 0.1), transparent 9rem),
    rgba(255, 255, 255, 0.78);
}

.eco-benefit-card::before {
  content: counter(eco-benefits, decimal-leading-zero);
  position: absolute;
  top: 1.15rem;
  left: 1.2rem;
  color: rgba(17, 17, 13, 0.34);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.eco-benefit-card::after {
  content: '';
  position: absolute;
  top: 1.15rem;
  right: 1.2rem;
  width: 2rem;
  height: 0.35rem;
  border-radius: 999px;
  background: color.adjust($vert-raw, $lightness: 4%);
}

.eco-benefit-card:nth-child(2),
.eco-benefit-card:nth-child(5) {
  transform: translateY(1rem);
}

.eco-benefit-card:nth-child(3n + 2)::after {
  background: rgba(4, 57, 217, 0.62);
}

.eco-benefit-card:nth-child(3n)::after {
  background: rgba(242, 168, 29, 0.72);
}

.eco-section--principles .eco-principle-card {
  min-height: 12rem;
  align-content: end;
  padding: clamp(1.25rem, 2vw, 1.55rem);
}

.eco-section--principles .eco-principle-card:nth-child(2),
.eco-section--principles .eco-principle-card:nth-child(3) {
  transform: translateY(1rem);
}

.eco-section--dark .eco-principle-card,
.eco-section--dark .eco-benefit-card,
.eco-section--dark .eco-impact-card,
.eco-section--dark .eco-resource-card,
.eco-section--dark .eco-archive-card,
.eco-section--dark .eco-faq-item {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.04)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: none;
}

.eco-section--dark .eco-impact-card__value {
  color: color.adjust($vert-raw, $lightness: 10%);
}

.eco-featured-grid {
  margin-top: clamp(1.5rem, 3vw, 2rem);

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
  }
}

.eco-resource-card {
  display: grid;
  gap: 0.85rem;
  position: relative;
  overflow: hidden;
  padding-left: 1.6rem;
  border: 1px solid rgba(17, 17, 13, 0.06);
  min-height: 15rem;
  align-content: space-between;
}

.eco-resource-card::before,
.eco-archive-card::before {
  content: '';
  position: absolute;
  top: 1.1rem;
  bottom: 1.1rem;
  left: 0.85rem;
  width: 0.2rem;
  border-radius: 999px;
  background: linear-gradient(
    180deg,
    rgba(0, 168, 62, 0.72),
    rgba(4, 57, 217, 0.36),
    rgba(242, 168, 29, 0.24)
  );
}

.eco-resource-card > *,
.eco-archive-card > * {
  position: relative;
  z-index: 1;
}

.eco-resource-card:nth-child(1) {
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.1),
      transparent 12rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(248, 246, 239, 0.9));
}

.eco-resource-card:nth-child(2) {
  background:
    radial-gradient(
      circle at top right,
      rgba(4, 57, 217, 0.08),
      transparent 12rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(247, 244, 235, 0.9));
}

.eco-resource-card:nth-child(3) {
  background:
    radial-gradient(
      circle at top right,
      rgba(242, 168, 29, 0.1),
      transparent 12rem
    ),
    linear-gradient(180deg, rgba(255, 255, 255, 0.94), rgba(248, 246, 239, 0.9));
}

.eco-resource-card:nth-child(2) {
  transform: translateY(1rem);
}

.eco-resource-card h3 a,
.eco-archive-card h3 a {
  background: none;
}

 .eco-archive {
  scroll-margin-top: clamp(5rem, 10vw, 7rem);
  margin-top: clamp(3rem, 5vw, 4.2rem);
  padding: clamp(1.45rem, 3.4vw, 2.25rem);
  border-radius: 2rem;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.16),
      transparent 15rem
    ),
    radial-gradient(
      circle at 18% 82%,
      rgba(4, 57, 217, 0.08),
      transparent 12rem
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.96),
      rgba(246, 243, 235, 0.94)
    );
  border: 1px solid rgba(17, 17, 13, 0.08);
  box-shadow:
    0 1.4rem 3rem rgba(29, 27, 19, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

.eco-archive::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(4, 57, 217, 0.08) 0%,
    rgba(0, 168, 62, 0.5) 30%,
    rgba(242, 168, 29, 0.28) 100%
  );
}

.eco-archive > :not(.eco-oeuf) {
  position: relative;
  z-index: 1;
}

.eco-archive__header {
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(17, 17, 13, 0.08);
}

.eco-archive__header h3 {
  font-size: clamp(1.65rem, 2.7vw, 2.35rem);
  line-height: 1;
}

.eco-toolbar {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1.45rem;
  background: rgba(255, 255, 255, 0.58);
  border: 1px solid rgba(17, 17, 13, 0.06);
}

.eco-filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.eco-filter {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.5rem;
  padding: 0.45rem 0.85rem;
  border: 0;
  border-radius: 999px;
  background: rgba(17, 17, 13, 0.05);
  color: var(--text-primary);
  font: inherit;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.eco-filter span {
  color: var(--text-muted);
  font-size: 0.82rem;
}

.eco-filter:hover,
.eco-filter:focus-visible {
  transform: translateY(-1px);
  background: rgba(17, 17, 13, 0.08);
}

.eco-filter--active {
  background: rgba(0, 168, 62, 0.12);
  color: color.adjust($vert-raw, $lightness: -6%);
}

.eco-filter--active span {
  color: inherit;
}

.eco-search input {
  width: 100%;
  min-height: 3rem;
  padding: 0.75rem 1rem;
  border: 0;
  border-radius: 1rem;
  background: rgba(17, 17, 13, 0.05);
  color: var(--text-primary);
  font: inherit;
}

.eco-search input::placeholder {
  color: var(--text-muted);
}

.eco-results {
  display: inline-flex;
  width: fit-content;
  margin: 1rem 0 0;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(17, 17, 13, 0.05);
  color: var(--text-muted);
  font-size: 0.92rem;
}

.eco-archive-grid {
  margin-top: 1rem;

  @media (min-width: $breakpoint-tablet) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.eco-archive-card {
  display: grid;
  gap: 0.85rem;
  position: relative;
  overflow: hidden;
  padding-left: 1.6rem;
  border: 1px solid rgba(17, 17, 13, 0.06);
}

.eco-archive-card:nth-child(odd) {
  background: rgba(255, 255, 255, 0.84);
}

.eco-archive-card:nth-child(even) {
  background: rgba(250, 247, 240, 0.92);
}

.eco-archive-card__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.eco-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.eco-tag {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  background: rgba(17, 17, 13, 0.05);
  color: var(--text-secondary);
  font-size: 0.8rem;
}

.eco-empty {
  margin-top: 1rem;
  color: var(--text-secondary);
}

.eco-faq__intro,
.eco-faq__content {
  display: grid;
  gap: 1rem;
}

.eco-faq__intro {
  position: relative;
  align-self: start;
  padding-top: 0.5rem;
}

.eco-faq__intro > :not(.eco-oeuf) {
  position: relative;
  z-index: 1;
}

.eco-section--faq .eco-section__title {
  max-width: 9ch;
}

.eco-faq__content {
  gap: 0.85rem;
}

.eco-faq-item {
  border-radius: 1.45rem;
  overflow: hidden;
  border: 1px solid rgba(17, 17, 13, 0.06);
}

.eco-faq-item summary {
  position: relative;
  padding: 1.2rem 3rem 1.2rem 1.3rem;
  list-style: none;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.eco-faq-item summary::-webkit-details-marker {
  display: none;
}

.eco-faq-item summary::after {
  content: '+';
  position: absolute;
  top: 50%;
  right: 1.25rem;
  transform: translateY(-50%);
  color: color.adjust($vert-raw, $lightness: -2%);
  font-size: 1.3rem;
  line-height: 1;
}

.eco-faq-item[open] summary::after {
  content: '–';
}

.eco-faq-item[open] {
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.08),
      transparent 9rem
    ),
    rgba(255, 255, 255, 0.82);
}

.eco-faq-item__answer {
  padding: 0 1.3rem 1.2rem;
}

.eco-faq-item__answer p + p {
  margin-top: 0.8rem;
}

.eco-section--cta {
  padding-top: clamp(3rem, 6vw, 5rem);
  padding-bottom: clamp(4.5rem, 8vw, 7.5rem);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.44)
  );
}

.eco-final {
  --text-primary: #f7f5ef;
  --text-secondary: rgba(247, 245, 239, 0.74);
  --text-muted: rgba(247, 245, 239, 0.56);
  position: relative;
  overflow: hidden;
  padding: clamp(2.2rem, 5vw, 4rem);
  border-radius: 2.2rem;
  background:
    radial-gradient(
      circle at top right,
      rgba(0, 168, 62, 0.16),
      transparent 20rem
    ),
    radial-gradient(
      circle at bottom left,
      rgba(4, 57, 217, 0.12),
      transparent 18rem
    ),
    linear-gradient(
      135deg,
      rgba(16, 17, 13, 0.98) 0%,
      rgba(23, 23, 18, 0.96) 100%
    );
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  gap: 1rem;
  justify-items: center;
  text-align: center;
  box-shadow:
    0 1.5rem 3rem rgba(8, 8, 7, 0.28),
    0 0.45rem 1rem rgba(8, 8, 7, 0.2);
}

.eco-final > :not(.eco-oeuf) {
  position: relative;
  z-index: 1;
}

.eco-final .eco-button--ghost {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
}

.eco-final__title {
  max-width: 12ch;
  font-size: clamp(2.25rem, 5vw, 4rem);
}

.eco-final__text {
  max-width: 38rem;
  margin: 0;
  color: var(--text-secondary);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

a:focus-visible,
button:focus-visible,
summary:focus-visible,
input:focus-visible {
  outline: 2px solid color.adjust($vert-raw, $lightness: 8%);
  outline-offset: 4px;
}

@media (max-width: $breakpoint-tablet) {
  .eco-hero,
  .eco-section {
    padding-top: 3.4rem;
    padding-bottom: 3.4rem;
  }

  .eco-hero {
    padding-top: 6.2rem;
  }

  .eco-impact-grid,
  .eco-benefits-grid,
  .eco-featured-grid,
  .eco-archive-grid,
  .eco-principles-grid {
    grid-template-columns: 1fr;
  }

  .eco-archive-card__footer {
    align-items: flex-start;
    flex-direction: column;
  }

  .eco-impact-card:nth-child(even),
  .eco-benefit-card:nth-child(2),
  .eco-benefit-card:nth-child(5),
  .eco-resource-card:nth-child(2),
  .eco-section--principles .eco-principle-card:nth-child(2),
  .eco-section--principles .eco-principle-card:nth-child(3) {
    transform: none;
  }

  .eco-section--resources .eco-section__intro,
  .eco-archive {
    border-radius: 1.5rem;
  }

  .eco-oeuf--hero-1 {
    right: -18%;
    opacity: 0.08;
  }

  .eco-oeuf--promise-2,
  .eco-oeuf--hero-2,
  .eco-oeuf--cta-3,
  .eco-oeuf--archive-2,
  .eco-oeuf--faq {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .eco-button,
  .eco-link,
  .eco-filter {
    transition: none;
  }
}
</style>
