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
  title: 'Mes apps Apple',
  intro: 'Applications du site.',
  closingText: 'D’autres pages seront ajoutées ici.',
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
    description: 'Pages des applications BeAbot.',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    summary: 'Page à venir.',
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
    summary: 'Page à venir.',
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
  intro: 'macOS.',
  summary: 'Page à compléter.',
  overview: ['Texte à venir.'],
  details: ['Visuels à ajouter.', 'Détails à préciser.'],
  preview: {
    alt: 'Emplacement de capture pour Meeting Mode',
    available: false,
    label: 'Capture à ajouter',
  },
  faq: [
    {
      question: 'La page est-elle finalisée ?',
      answer: 'Non.',
    },
    {
      question: 'La sortie est-elle annoncée ?',
      answer: 'Pas encore.',
    },
  ],
  legal: {
    fr: {
      paragraphs: [
        'Texte provisoire à compléter avant publication.',
        'Contact : hello@beabot.fr.',
      ],
    },
    en: {
      paragraphs: [
        'Temporary text to complete before publication.',
        'Contact: hello@beabot.fr.',
      ],
    },
  },
  cta: {
    title: 'Être informé de la sortie',
    description: "L'app n'est pas encore publiée.",
    secondaryLabel: 'Retour aux apps',
    secondaryTo: '/apps/',
  },
  seo: {
    title: 'Meeting Mode',
    description: 'Page Meeting Mode.',
  },
}

export const duoSpendContent: AppDetailContent = {
  slug: 'duo-spend',
  name: 'DuoSpend',
  platform: 'iOS',
  href: '/apps/duo-spend/',
  intro: 'iOS.',
  summary: 'Page à compléter.',
  overview: ['Texte à venir.'],
  details: ['Visuels à ajouter.', 'Détails à préciser.'],
  preview: {
    src: '/img/duospend.webp',
    alt: 'Capture de l’app DuoSpend',
    available: true,
    label: 'Capture actuelle',
  },
  faq: [
    {
      question: 'La page est-elle finalisée ?',
      answer: 'Non.',
    },
    {
      question: 'La sortie est-elle annoncée ?',
      answer: 'Pas encore.',
    },
  ],
  legal: {
    fr: {
      paragraphs: [
        'Texte provisoire à compléter avant publication.',
        'Contact : hello@beabot.fr.',
      ],
    },
    en: {
      paragraphs: [
        'Temporary text to complete before publication.',
        'Contact: hello@beabot.fr.',
      ],
    },
  },
  cta: {
    title: 'Être informé de la sortie',
    description: "L'app n'est pas encore publiée.",
    secondaryLabel: 'Retour aux apps',
    secondaryTo: '/apps/',
  },
  seo: {
    title: 'DuoSpend',
    description: 'Page DuoSpend.',
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
