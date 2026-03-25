import { canonicalUrl } from '~/utils/seo-url'

export interface AppPreview {
  src?: string
  alt: string
  available: boolean
  label: string
}

export interface AppIndexEntry {
  slug: string
  name: string
  platform: string
  stage: string
  summary: string
  href: string
  preview: AppPreview
}

export interface AppFaqItem {
  question: string
  answer: string
}

export interface AppLegalContent {
  title?: string
  paragraphs: string[]
}

export interface AppLegalTabsContent {
  fr: AppLegalContent
  en: AppLegalContent
}

export interface AppCta {
  title: string
  description: string
  secondaryLabel: string
  secondaryTo: string
}

export interface AppDetailPoint {
  label: string
  value: string
}

export interface AppDetailContent {
  slug: string
  name: string
  platform: string
  stage: string
  href: string
  intro: string
  summary: string
  overview: string[]
  detailPoints: AppDetailPoint[]
  preview: AppPreview
  faq: AppFaqItem[]
  legal: AppLegalTabsContent
  cta: AppCta
  seo: {
    title: string
    description: string
  }
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

export const appsIndexContent = {
  title: 'Mes Apps Apple',
  intro: 'Applications Apple en préparation.',
  closingText: 'Le blog et le portfolio restent accessibles.',
  links: [
    {
      label: 'Blog',
      to: '/eco-conception/',
    },
    {
      label: 'Portfolio',
      to: '/portfolio/',
    },
  ],
  seo: {
    title: 'Apps',
    description: 'Applications BeAbot en préparation.',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    stage: 'Prépublication',
    summary: 'Page à compléter.',
    href: '/apps/meeting-mode/',
    preview: {
      alt: 'Emplacement de capture pour Meeting Mode',
      available: false,
      label: 'Capture à venir',
    },
  },
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    stage: 'Prépublication',
    summary: 'Page à compléter.',
    href: '/apps/duo-spend/',
    preview: {
      src: '/img/duospend.webp',
      alt: 'Capture de l’app DuoSpend',
      available: true,
      label: 'Capture actuelle',
    },
  },
]

export const meetingModeContent: AppDetailContent = {
  slug: 'meeting-mode',
  name: 'Meeting Mode',
  platform: 'macOS',
  stage: 'Prépublication',
  href: '/apps/meeting-mode/',
  intro: 'Présentation à compléter.',
  summary: 'Contenu à compléter avant publication.',
  overview: ['Texte à compléter avant publication.'],
  detailPoints: [
    {
      label: 'Plateforme',
      value: 'macOS',
    },
    {
      label: 'Statut',
      value: 'Prépublication',
    },
    {
      label: 'Capture',
      value: 'À venir',
    },
    {
      label: 'Texte',
      value: 'À compléter',
    },
  ],
  preview: {
    alt: 'Emplacement de capture pour Meeting Mode',
    available: false,
    label: 'Capture à venir',
  },
  faq: [
    {
      question: 'Question à compléter',
      answer: 'Réponse à compléter.',
    },
    {
      question: 'Question à compléter',
      answer: 'Réponse à compléter.',
    },
  ],
  legal: {
    fr: {
      title: 'Mentions légales',
      paragraphs: [
        'Texte provisoire à compléter avant publication.',
        'Informations finales à ajouter avant mise en ligne.',
      ],
    },
    en: {
      title: 'Legal',
      paragraphs: [
        'Temporary copy to complete before publication.',
        'Final information will be added before launch.',
      ],
    },
  },
  cta: {
    title: 'Être informé',
    description: "Recevoir un message quand l'app est prête.",
    secondaryLabel: 'Retour aux apps',
    secondaryTo: '/apps/',
  },
  seo: {
    title: 'Meeting Mode',
    description: 'Présentation de Meeting Mode en cours de préparation.',
  },
}

export const duoSpendContent: AppDetailContent = {
  slug: 'duo-spend',
  name: 'DuoSpend',
  platform: 'iOS',
  stage: 'Prépublication',
  href: '/apps/duo-spend/',
  intro: 'Présentation à compléter.',
  summary: 'Contenu à compléter avant publication.',
  overview: ['Texte à compléter avant publication.'],
  detailPoints: [
    {
      label: 'Plateforme',
      value: 'iOS',
    },
    {
      label: 'Statut',
      value: 'Prépublication',
    },
    {
      label: 'Capture',
      value: 'Capture actuelle',
    },
    {
      label: 'Texte',
      value: 'À compléter',
    },
  ],
  preview: {
    src: '/img/duospend.webp',
    alt: 'Capture de l’app DuoSpend',
    available: true,
    label: 'Capture actuelle',
  },
  faq: [
    {
      question: 'Question à compléter',
      answer: 'Réponse à compléter.',
    },
    {
      question: 'Question à compléter',
      answer: 'Réponse à compléter.',
    },
  ],
  legal: {
    fr: {
      title: 'Mentions légales',
      paragraphs: [
        'Texte provisoire à compléter avant publication.',
        'Informations finales à ajouter avant mise en ligne.',
      ],
    },
    en: {
      title: 'Legal',
      paragraphs: [
        'Temporary copy to complete before publication.',
        'Final information will be added before launch.',
      ],
    },
  },
  cta: {
    title: 'Être informé',
    description: "Recevoir un message quand l'app est prête.",
    secondaryLabel: 'Retour aux apps',
    secondaryTo: '/apps/',
  },
  seo: {
    title: 'DuoSpend',
    description: 'Présentation de DuoSpend en cours de préparation.',
  },
}

export const buildBreadcrumbSchema = (
  siteUrl: string,
  items: BreadcrumbEntry[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: canonicalUrl(siteUrl, item.path),
  })),
})
