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

export interface AppDetailContent {
  slug: string
  name: string
  platform: string
  href: string
  intro: string
  summary: string
  overview: string[]
  details: string[]
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
  title: 'Apps',
  intro: 'Pages de présentation des applications.',
  closingText: 'Contenu et visuels à compléter.',
  links: [
    {
      label: 'Portfolio',
      to: '/portfolio/',
    },
    {
      label: 'Blog',
      to: '/eco-conception/',
    },
  ],
  seo: {
    title: 'Apps',
    description: 'Index des pages apps du site BeAbot.',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    summary: 'App macOS. Présentation en préparation.',
    href: '/apps/meeting-mode/',
    preview: {
      alt: 'Emplacement de capture pour Meeting Mode',
      available: false,
      label: 'Capture à ajouter',
    },
  },
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    summary: 'App iOS. Présentation en préparation.',
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
  href: '/apps/meeting-mode/',
  intro: 'App macOS.',
  summary: 'Présentation en préparation.',
  overview: [
    'Résumé à compléter.',
    'Cette page sert de base de structure avant ajout du contenu final.',
  ],
  details: [
    'Fonctionnalités à préciser.',
    'Captures et métadonnées à compléter.',
  ],
  preview: {
    alt: 'Emplacement de capture pour Meeting Mode',
    available: false,
    label: 'Capture à ajouter',
  },
  faq: [
    {
      question: 'Disponibilité',
      answer: 'Informations à confirmer.',
    },
  ],
  legal: {
    fr: {
      title: 'Français',
      paragraphs: [
        'Texte provisoire à compléter avant publication sur l’App Store.',
        'Contact : hello@beabot.fr.',
      ],
    },
    en: {
      title: 'English',
      paragraphs: [
        'Temporary text to complete before App Store release.',
        'Contact: hello@beabot.fr.',
      ],
    },
  },
  cta: {
    title: "Être informé de la sortie de l'app",
    description: "L'app n'est pas encore publiée.",
    secondaryLabel: 'Retour aux apps',
    secondaryTo: '/apps/',
  },
  seo: {
    title: 'Meeting Mode',
    description: 'Page de présentation de Meeting Mode.',
  },
}

export const duoSpendContent: AppDetailContent = {
  slug: 'duo-spend',
  name: 'DuoSpend',
  platform: 'iOS',
  href: '/apps/duo-spend/',
  intro: 'App iOS.',
  summary: 'Présentation en préparation.',
  overview: [
    'Résumé à compléter.',
    'Cette page sert de base de structure avant ajout du contenu final.',
  ],
  details: [
    'Fonctionnalités à préciser.',
    'Captures et métadonnées à compléter.',
  ],
  preview: {
    src: '/img/duospend.webp',
    alt: 'Capture de l’app DuoSpend',
    available: true,
    label: 'Capture actuelle',
  },
  faq: [
    {
      question: 'Disponibilité',
      answer: 'Informations à confirmer.',
    },
  ],
  legal: {
    fr: {
      title: 'Français',
      paragraphs: [
        'Texte provisoire à compléter avant publication sur l’App Store.',
        'Contact : hello@beabot.fr.',
      ],
    },
    en: {
      title: 'English',
      paragraphs: [
        'Temporary text to complete before App Store release.',
        'Contact: hello@beabot.fr.',
      ],
    },
  },
  cta: {
    title: "Être informé de la sortie de l'app",
    description: "L'app n'est pas encore publiée.",
    secondaryLabel: 'Retour aux apps',
    secondaryTo: '/apps/',
  },
  seo: {
    title: 'DuoSpend',
    description: 'Page de présentation de DuoSpend.',
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
