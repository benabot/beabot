export interface GreenlightFeature {
  title: string
  description: string
}

export interface GreenlightVersion {
  name: string
  badge: string
  description: string
  features: string[]
  limits?: string[]
  accent: 'soft' | 'strong'
}

export interface GreenlightFaqItem {
  question: string
  answer: string
}

export const greenlightPageContent = {
  freeDownloadUrl: '',
  seo: {
    title: 'Greenlight — thème WordPress éco-conçu',
    description:
      'Greenlight, un socle WordPress premium, rapide, accessible et durable. Une version free pour démarrer simplement, une version premium pour aller plus loin.',
  },
  hero: {
    title: 'Greenlight — thème WordPress éco-conçu',
    subtitle:
      'Un socle WordPress premium, rapide, accessible et durable, pensé pour transformer la sobriété technique en avantage de marque et en levier de visibilité.',
    description:
      "Greenlight est un thème WordPress conçu pour produire des sites plus rapides, plus sobres, plus lisibles et plus crédibles, sans dépendre d'une usine à gaz technique.",
  },
  heroHighlights: [
    {
      title: 'Rapidité',
      description:
        'Une base plus légère pour charger vite, rester lisible et mieux tenir dans le temps.',
    },
    {
      title: 'Visibilité',
      description:
        'Une structure plus propre pour poser de meilleures bases SEO et éditoriales.',
    },
    {
      title: 'Cohérence',
      description:
        'Une mise en oeuvre alignée avec un discours RSE, impact ou durabilité.',
    },
  ],
  why: {
    title: "Un thème WordPress qui va à l'essentiel",
    paragraphs: [
      "Beaucoup de thèmes WordPress promettent de tout faire : effets visuels, panneaux d'options, modules, dépendances et couches de personnalisation. À l'arrivée, ils compliquent le fond, alourdissent l'interface et finissent par brouiller le message de marque.",
      'Greenlight prend le contre-pied de cette logique. Il privilégie une structure lisible, une hiérarchie éditoriale nette et une base plus saine pour produire un site professionnel, crédible et maintenable, sans surcouche inutile.',
    ],
  },
  concreteBenefits: [
    {
      title: 'Un site plus crédible',
      description:
        'Une esthétique éditoriale sobre, une hiérarchie claire et un cadre plus juste pour inspirer confiance dès la première visite.',
    },
    {
      title: 'Une meilleure base de visibilité',
      description:
        'Une structure plus propre pour le contenu, le maillage, les pages de service et une stratégie SEO moins freinée par la technique.',
    },
    {
      title: 'Une expérience plus fluide',
      description:
        "Des pages plus rapides, plus lisibles et plus faciles à parcourir sur mobile comme sur desktop, sans surcharge d'effets.",
    },
    {
      title: 'Une sobriété technique utile',
      description:
        "Moins de couches à maintenir, moins d'arbitrages parasites et une base qui reste plus simple à faire évoluer.",
    },
  ] satisfies GreenlightFeature[],
  projectTypes: [
    "Site vitrine d'entreprise",
    'Média éditorial',
    'Site de marque orienté contenu',
    'Activité locale ou B2B',
    'Organisation avec un discours RSE, impact ou durabilité',
  ],
  versions: [
    {
      name: 'Greenlight-free',
      badge: 'Version légère',
      description:
        'Une base propre, personnalisable avec Gutenberg, pour démarrer sur un thème clair et maintenable.',
      features: [
        'Base légère et structure claire',
        'Personnalisation simple avec Gutenberg',
        'Approche sobre et maintenable',
        'Cadre pertinent pour un site simple ou un premier projet',
      ],
      limits: ['Sans SEO natif avancé', 'Sans personnalisation avancée'],
      accent: 'soft',
    },
    {
      name: 'Greenlight',
      badge: 'Version premium',
      description:
        "La version pensée pour les projets professionnels qui ont besoin de visibilité, de maîtrise éditoriale et d'une image plus nette.",
      features: [
        'SEO natif avancé',
        'Personnalisation avancée',
        'Structure éditoriale plus riche',
        'Base plus solide pour un projet pro ou sur mesure',
      ],
      limits: [],
      accent: 'strong',
    },
  ] satisfies GreenlightVersion[],
  businessBenefits: [
    {
      title: 'Une image de marque plus nette',
      description:
        'Un site plus clair, plus lisible et plus maîtrisé donne une impression de solidité immédiate.',
    },
    {
      title: 'Une base plus propre pour le SEO',
      description:
        'Greenlight facilite un travail de contenu et de structure plus cohérent, plus utile et plus durable dans le temps.',
    },
    {
      title: 'Une meilleure conversion par la sobriété',
      description:
        "En retirant le superflu, le site met mieux en avant l'offre, les preuves et les appels à l'action.",
    },
    {
      title: 'Une cohérence entre discours et mise en oeuvre',
      description:
        "Pour une marque qui parle d'impact, de RSE ou de responsabilité, la forme compte autant que le fond.",
    },
  ] satisfies GreenlightFeature[],
  technicalProofs: [
    'Poids de page réduit',
    'Peu de scripts et pas de jQuery',
    'Structure sémantique claire',
    'Optimisation des images',
    'Minification des ressources',
    'Cache HTML sur la sortie statique',
    'Nettoyage des éléments WordPress inutiles',
    'Base plus simple à maintenir',
  ],
  customBase: {
    title: 'Greenlight peut aussi servir de base à un site sur mesure',
    description:
      "Greenlight peut être installé tel quel pour aller à l'essentiel, ou servir de socle à une réalisation sur mesure. Dans ce cadre, il devient une base solide pour construire un site plus spécifique, sans repartir d'une usine à gaz.",
  },
  faq: [
    {
      question: 'Greenlight-free suffit-il pour un site simple ?',
      answer:
        "Oui. Greenlight-free est pensé pour fournir une base légère, propre et personnalisable avec Gutenberg. Pour un site vitrine simple ou un premier projet, c'est une base pertinente.",
    },
    {
      question: 'Quelle est la différence principale avec Greenlight ?',
      answer:
        'Greenlight ajoute les réglages SEO avancés et les options de personnalisation avancées. Il vise les projets qui ont besoin de plus de maîtrise éditoriale, de visibilité et de souplesse.',
    },
    {
      question: 'Greenlight est-il adapté à un site éditorial ?',
      answer:
        'Oui. Sa logique éditoriale, sa lisibilité et sa structure claire en font une bonne base pour un site de contenu ou une marque qui publie régulièrement.',
    },
    {
      question: "L'éco-conception nuit-elle au design ?",
      answer:
        "Non. L'éco-conception ne signifie pas renoncer à la qualité visuelle. Elle pousse surtout à être plus juste : mieux hiérarchiser, éliminer le bruit et produire un site plus net, plus fluide et souvent plus crédible.",
    },
  ] satisfies GreenlightFaqItem[],
  finalCta: {
    title: 'Commencer simplement, ou aller plus loin',
    description:
      "Greenlight-free permet de découvrir l'approche sur une base légère et propre. Greenlight va plus loin pour les projets qui ont besoin de visibilité, de maîtrise et de souplesse.",
  },
}

export const buildGreenlightFaqSchema = (items: GreenlightFaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const buildGreenlightBreadcrumbSchema = (siteUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Accueil',
      item: `${siteUrl}`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Greenlight',
      item: `${siteUrl}/greenlight/`,
    },
  ],
})

export const buildGreenlightProductSchema = (
  siteUrl: string,
  pageUrl: string,
  image?: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Greenlight',
  description: greenlightPageContent.hero.subtitle,
  category: 'WordPress Theme',
  url: pageUrl,
  ...(image ? { image } : {}),
  brand: {
    '@type': 'Brand',
    name: 'Greenlight',
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'BeAbot',
    url: siteUrl,
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Greenlight-free',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: pageUrl,
      description:
        'Version légère, propre, personnalisable avec Gutenberg, pour démarrer simplement.',
    },
    {
      '@type': 'Offer',
      name: 'Greenlight premium',
      availability: 'https://schema.org/PreOrder',
      url: `${siteUrl}/contact/`,
      description:
        'Version premium avec SEO natif avancé et personnalisation avancée.',
    },
  ],
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Greenlight-free',
      value:
        'Version légère, propre, personnalisable avec Gutenberg, pour démarrer simplement.',
    },
    {
      '@type': 'PropertyValue',
      name: 'Greenlight',
      value:
        'Version premium avec SEO natif avancé et personnalisation avancée.',
    },
  ],
})
