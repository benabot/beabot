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
  featured?: boolean
}

export interface AppFaqItem {
  question: string
  answer: string
}

export interface AppFaqSection {
  title: string
  items: AppFaqItem[]
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
  faqSections?: AppFaqSection[]
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
  intro: 'Deux applications natives en préparation. Une pour iOS, une pour macOS.',
  seo: {
    title: 'Apps',
    description: 'Applications BeAbot en préparation.',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    stage: 'Prépublication',
    summary: 'Dépenses partagées.',
    href: '/apps/duo-spend/',
    featured: true,
    preview: {
      src: '/img/duospend.webp',
      alt: 'Capture de l’app DuoSpend',
      available: true,
      label: 'Capture actuelle',
    },
  },
  {
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    stage: 'Prépublication',
    summary: 'Préparation de réunions.',
    href: '/apps/meeting-mode/',
    featured: false,
    preview: {
      alt: 'Emplacement de capture pour Meeting Mode',
      available: false,
      label: 'Capture à venir',
    },
  },
]

const duoSpendFaqSections: AppFaqSection[] = [
  {
    title: 'Premiers pas',
    items: [
      {
        question: "C'est quoi DuoSpend exactement ?",
        answer:
          "DuoSpend est une app iPhone pour gérer les dépenses d'un projet commun à deux. Mariage, voyage, emménagement, travaux, projet bébé - vous enregistrez vos dépenses, l'app calcule qui doit combien à qui. Rien de plus.",
      },
      {
        question: "Pour qui c'est fait ?",
        answer:
          "Pour les couples qui partagent des dépenses sur un projet précis. Pas pour les groupes d'amis, pas pour les entreprises - pour vous deux, dans un contexte défini.",
      },
      {
        question: 'Faut-il créer un compte ?',
        answer: 'Non. Pas de compte, pas d’email, pas de mot de passe. Vous ouvrez l’app et vous commencez.',
      },
      {
        question: "L'app fonctionne-t-elle sans connexion ?",
        answer:
          'Oui. DuoSpend fonctionne entièrement hors ligne. Tout est stocké sur votre iPhone - pas besoin de Wi-Fi ou de données mobiles.',
      },
      {
        question: "L'app est-elle disponible sur Android ?",
        answer:
          'Non. DuoSpend est une app iPhone uniquement, conçue avec les technologies Apple (Swift, SwiftUI). Une version Android n’est pas prévue.',
      },
    ],
  },
  {
    title: 'Fonctionnement',
    items: [
      {
        question: 'Comment fonctionne le calcul de la balance ?',
        answer:
          "Pour chaque dépense, l'app calcule la part théorique de chaque partenaire selon la répartition choisie (50/50 ou personnalisée). Elle compare cette part avec ce que chacun a réellement payé. L'écart cumulé donne la balance nette : une seule phrase, un seul montant.",
      },
      {
        question: 'Peut-on avoir une répartition autre que 50/50 ?',
        answer:
          'Oui. Quand vous ajoutez une dépense, vous choisissez "50/50" ou une répartition personnalisée (ex. 70/30, 60/40). Chaque dépense peut avoir sa propre répartition.',
      },
      {
        question: 'Peut-on avoir plusieurs projets en même temps ?',
        answer:
          'Oui. Chaque projet est indépendant, avec ses propres partenaires, son budget et son solde. Par exemple : un projet "Vacances été" et un projet "Travaux salon" en parallèle. Au-delà du premier projet, DuoSpend Pro est nécessaire.',
      },
      {
        question: "L'app gère-t-elle plusieurs devises ?",
        answer:
          'Non, pas encore. DuoSpend fonctionne avec une seule devise (€ par défaut selon votre région). La gestion multi-devises est dans le backlog pour une version future.',
      },
      {
        question: 'Peut-on exporter les données ?',
        answer:
          'Oui, avec DuoSpend Pro : générez un récapitulatif PDF de n’importe quel projet, avec la liste des dépenses et la balance finale.',
      },
    ],
  },
  {
    title: 'DuoSpend Pro',
    items: [
      {
        question: 'C’est quoi DuoSpend Pro ?',
        answer:
          'Un achat unique à 6,99 € qui débloque les projets illimités, les widgets pour l’écran d’accueil et l’export PDF. Pas d’abonnement, pas de renouvellement - vous payez une fois.',
      },
      {
        question: 'Pourquoi ne pas tout laisser gratuit ?',
        answer:
          'DuoSpend est développée et maintenue par une seule personne. L’achat Pro permet de financer le développement continu sans dépendre de la publicité ou de la revente de données.',
      },
      {
        question: 'La version gratuite est-elle vraiment utilisable ?',
        answer:
          'Oui. Avec un projet gratuit, vous avez accès à toutes les fonctionnalités essentielles : dépenses illimitées, balance en temps réel, répartitions personnalisées, budget de projet.',
      },
      {
        question: "L'achat Pro est-il partageable avec ma famille ?",
        answer:
          'Oui, si le partage familial est activé sur votre compte Apple, DuoSpend Pro est automatiquement partagé avec votre groupe familial.',
      },
      {
        question: "J'ai changé d'iPhone — comment récupérer mon achat ?",
        answer:
          'Ouvrez DuoSpend, allez dans Réglages et appuyez sur "Restaurer mes achats". L’App Store retrouve votre licence via votre identifiant Apple.',
      },
    ],
  },
  {
    title: 'Widgets',
    items: [
      {
        question: 'Comment ajouter un widget DuoSpend sur mon écran d’accueil ?',
        answer:
          'Maintenez votre doigt sur l’écran d’accueil → mode édition → appuyez sur + → cherchez "DuoSpend" → choisissez la taille (petit, moyen ou grand) → ajoutez. DuoSpend Pro est requis.',
      },
      {
        question: 'Quels widgets sont disponibles ?',
        answer:
          'Trois tailles : petit (balance nette du projet), moyen (balance + barre de contribution), grand (balance + barre + dernières dépenses).',
      },
      {
        question: 'Quel projet s’affiche dans le widget ?',
        answer:
          'Automatiquement le projet le plus récent. La possibilité de choisir le projet directement depuis le widget est prévue dans une prochaine version.',
      },
    ],
  },
  {
    title: 'Confidentialité et données',
    items: [
      {
        question: 'Mes données sont-elles envoyées sur un serveur ?',
        answer: 'Non. DuoSpend ne dispose d’aucun serveur. Vos données restent sur votre iPhone.',
      },
      {
        question: "L'app contient-elle des trackers ou de la pub ?",
        answer:
          'Non. Pas de publicité, pas d’analytique, pas de SDK tiers. Votre vie privée est un invariant du produit, pas un argument marketing.',
      },
      {
        question: 'Que se passe-t-il si je désinstalle l’app ?',
        answer:
          'Toutes vos données locales sont supprimées. Si vous souhaitez garder une trace, exportez vos projets en PDF (Pro) avant de désinstaller.',
      },
      {
        question: 'Puis-je supprimer mes données sans désinstaller l’app ?',
        answer:
          'Oui. Réglages → Données → "Supprimer toutes les données". Cette action est irréversible.',
      },
      {
        question: "Est-ce que l'app fonctionne avec iCloud ?",
        answer:
          'Pas en v1.0 - les données restent sur votre appareil. La synchronisation iCloud (même compte Apple, plusieurs appareils) est prévue pour la v1.1.',
      },
    ],
  },
  {
    title: 'Synchronisation et avenir',
    items: [
      {
        question: 'Peut-on utiliser l’app à deux sur deux iPhones différents ?',
        answer:
          'Pas encore en v1.0. La synchronisation entre deux iPhones sur le même compte Apple arrive en v1.1. Le partage entre deux comptes Apple différents (chacun son iPhone) est prévu pour la v2.0 - c’est la feature la plus demandée.',
      },
      {
        question: 'Quelles fonctionnalités sont prévues ?',
        answer:
          'v1.1 : synchronisation iCloud (même compte Apple). v2.0 : partage entre deux comptes Apple (la vraie sync couple). Plus tard : catégories de dépenses, graphiques, recherche, templates de projets.',
      },
      {
        question: 'Comment signaler un bug ou suggérer une fonctionnalité ?',
        answer:
          'Via la page support : beabot.fr/apps/duo-spend/. L’app est développée par une seule personne - les retours sont lus et pris en compte.',
      },
    ],
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
  faq: duoSpendFaqSections.flatMap((section) => section.items),
  faqSections: duoSpendFaqSections,
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
