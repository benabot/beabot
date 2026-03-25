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

export interface AppPricingPlan {
  name: string
  price: string
  description: string
  items: string[]
}

export interface AppPricingContent {
  title: string
  intro: string
  plans: AppPricingPlan[]
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
  pricing?: AppPricingContent
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
    summary: 'Gérez vos dépenses communes. Sans prise de tête.',
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
  intro: 'Gérez vos dépenses communes. Sans prise de tête.',
  summary:
    'Une seule question compte : qui doit combien à qui ? DuoSpend y répond en un coup d’œil, pour chaque projet que vous partagez à deux.',
  overview: [
    'Vous organisez un voyage, un mariage, des travaux ou un emménagement. L’un avance les frais, l’autre rembourse, mais le solde n’est pas toujours évident à suivre.',
    'DuoSpend est conçue pour deux. Créez un projet, ajoutez vos dépenses, choisissez qui paie quoi et en quelle proportion. L’app calcule le solde net en temps réel et l’affiche clairement.',
    'DuoSpend est développée avec les technologies Apple (Swift, SwiftUI, SwiftData), sans framework tiers ni dépendance externe. Le support est assuré directement par son auteur.',
  ],
  detailPoints: [
    {
      label: 'Un solde',
      value: 'Qui doit quoi à qui.',
    },
    {
      label: 'Par projet',
      value: 'Voyage, mariage, travaux, bébé.',
    },
    {
      label: 'Répartition',
      value: '50/50 ou sur mesure.',
    },
    {
      label: 'Local',
      value: 'Les données restent sur l’iPhone.',
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
      question: "L’app fonctionne-t-elle sans connexion ?",
      answer: 'Oui. Toutes les données sont stockées localement sur votre iPhone.',
    },
    {
      question: 'Faut-il créer un compte ?',
      answer: 'Non. Aucun compte, aucune inscription.',
    },
    {
      question: 'L’app est-elle disponible sur Android ?',
      answer:
        'Non. DuoSpend est une app iPhone uniquement, conçue pour l’écosystème Apple.',
    },
    {
      question: 'Peut-on synchroniser entre deux iPhones ?',
      answer:
        'Pas encore en v1.0. La synchronisation iCloud sera ajoutée dans une version ultérieure.',
    },
    {
      question: 'Les paiements sont-ils sécurisés ?',
      answer:
        'Les achats sont gérés directement par Apple via l’App Store. DuoSpend ne voit jamais vos coordonnées bancaires.',
    },
  ],
  pricing: {
    title: 'Tarifs',
    intro: 'Une formule gratuite pour démarrer, une formule Pro pour aller plus loin.',
    plans: [
      {
        name: 'Gratuit',
        price: '0 €',
        description: 'Pour commencer avec un projet complet.',
        items: ['1 projet complet', 'Fonctions essentielles incluses'],
      },
      {
        name: 'DuoSpend Pro',
        price: '6,99 €',
        description: 'Achat unique, à vie.',
        items: [
          'Projets illimités',
          "Widgets pour l'écran d'accueil",
          'Export PDF',
          'Aucun abonnement',
        ],
      },
    ],
  },
  legal: {
    fr: {
      title: 'Politique de confidentialité',
      paragraphs: [
        'DuoSpend ne collecte aucune donnée personnelle identifiable.',
        'Les projets que vous créez et les dépenses que vous enregistrez sont stockés localement sur votre iPhone avec SwiftData. Les données restent sur l’appareil jusqu’à suppression ou désinstallation.',
        'Lorsque vous utilisez les widgets de l’écran d’accueil, une copie réduite des données peut être partagée entre l’app et l’extension widget via un App Group local géré par iOS.',
        'Si vous achetez DuoSpend Pro, la transaction est gérée par Apple via l’App Store. DuoSpend ne reçoit ni ne stocke vos informations de paiement. Seul l’état de l’achat est conservé localement.',
        'DuoSpend n’intègre aucun système de tracking, aucune publicité et aucun SDK tiers comme Firebase, Amplitude ou Mixpanel.',
        'La version 1.0 fonctionne hors ligne. Aucune synchronisation iCloud n’est active à ce stade.',
        'Vous pouvez supprimer toutes vos données depuis Réglages → Données → Supprimer toutes les données. L’action est irréversible.',
        'DuoSpend n’est pas destinée aux enfants de moins de 13 ans.',
        'Pour toute question, la page DuoSpend reste le point de contact.',
      ],
    },
    en: {
      title: 'Privacy policy',
      paragraphs: [
        'DuoSpend does not collect any personally identifiable information.',
        'Projects and expenses are stored locally on your iPhone with SwiftData. Data stays on the device until you delete it or uninstall the app.',
        'When you use the home screen widgets, a limited copy of your data may be shared between the app and the widget extension through a local App Group managed by iOS.',
        'If you purchase DuoSpend Pro, Apple handles the transaction through the App Store. DuoSpend does not receive or store payment information. Only the purchase state is kept locally.',
        'DuoSpend includes no tracking, no advertising, and no third-party SDKs such as Firebase, Amplitude, or Mixpanel.',
        'Version 1.0 works fully offline. No iCloud sync is active at this stage.',
        'You can delete all your data from Settings → Data → Delete all data. This action is irreversible.',
        'DuoSpend is not intended for children under 13.',
        'For any question, the DuoSpend page remains the contact point.',
      ],
    },
  },
  cta: {
    title: "Être informé de la sortie de l'app",
    description:
      "L'app n'est pas encore publiée. Laissez votre adresse pour recevoir la suite quand elle sera prête.",
    secondaryLabel: 'Retour aux apps',
    secondaryTo: '/apps/',
  },
  seo: {
    title: 'DuoSpend — dépenses communes à deux',
    description:
      "DuoSpend suit les dépenses communes à deux, garde les données sur l'iPhone et fonctionne hors ligne.",
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
