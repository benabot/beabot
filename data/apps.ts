export interface AppFaqItem {
  question: string
  answer: string
}

export interface PrivacyPolicySection {
  title: string
  paragraphs: string[]
}

export interface AppPrivacyPolicy {
  fr: PrivacyPolicySection[]
  en: PrivacyPolicySection[]
}

export interface AppPreview {
  src?: string
  alt: string
  available: boolean
  label: string
}

export interface AppCta {
  label: string
  to: string
  note: string
}

export interface AppLandingEntry {
  slug: string
  name: string
  platform: string
  promise: string
  description: string
  href: string
  preview: AppPreview
  ctaLabel: string
}

export interface AppPageContent {
  slug: string
  name: string
  platform: string
  heroTitle: string
  heroLead: string
  heroDescription: string
  problem: string[]
  preview: AppPreview
  faq: AppFaqItem[]
  privacy: AppPrivacyPolicy
  cta: AppCta
  seo: {
    title: string
    description: string
  }
}

export interface MeetingModeContent extends AppPageContent {
  whatItDoes: string[]
  inPractice: string[]
  limits: string[]
  pricing: string[]
}

export interface DuoSpendContent extends AppPageContent {
  captureNotes: string[]
}

export const appsLandingIntro = [
  'Meeting Mode aide à préparer un Mac avant une réunion, sans passer par dix réglages dispersés.',
  'DuoSpend sert à noter des dépenses partagées, comprendre l’équilibre du budget et retrouver l’information vite.',
]

export const appsLandingEntries: AppLandingEntry[] = [
  {
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    promise: 'Préparer un Mac pour une réunion en quelques gestes clairs.',
    description:
      'L’app rassemble les réglages utiles avant un appel ou un partage d’écran. Le but est simple : éviter les oublis, pas ajouter une couche de complexité.',
    href: '/apps/meeting-mode/',
    preview: {
      alt: 'Aperçu à venir de Meeting Mode sur macOS',
      available: false,
      label: 'Capture à venir',
    },
    ctaLabel: 'Voir la page Meeting Mode',
  },
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    promise:
      'Suivre un budget partagé sans tableur, sans calcul mental, sans ambiguïté.',
    description:
      'DuoSpend aide à savoir qui a payé, pour quoi, et qui doit combien à qui. L’interface reste courte, lisible et pensée pour un usage à deux.',
    href: '/apps/duo-spend/',
    preview: {
      src: '/img/duospend.webp',
      alt: 'Capture de l’app DuoSpend sur iPhone',
      available: true,
      label: 'Capture de l’app',
    },
    ctaLabel: 'Voir la page DuoSpend',
  },
]

const meetingModePrivacy: AppPrivacyPolicy = {
  fr: [
    {
      title: 'Version française',
      paragraphs: [
        'Meeting Mode est conçu pour limiter au maximum la circulation inutile de données. Quand un traitement peut être fait localement sur l’appareil, cette approche est privilégiée.',
        'Dans l’état actuel de cette page, aucune collecte publicitaire, aucun profilage commercial et aucune revente de données ne sont annoncés. Si une fonctionnalité future devait nécessiter un traitement externe, cette politique serait mise à jour avant sa mise à disposition.',
        'Les informations que vous saisissez ou configurez dans l’app sont destinées à son fonctionnement. Elles restent, autant que possible, sur votre appareil ou dans les services que vous activez vous-même.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        'Pour toute question liée à la confidentialité ou au fonctionnement de l’app, vous pouvez écrire à hello@beabot.fr.',
      ],
    },
  ],
  en: [
    {
      title: 'English version',
      paragraphs: [
        'Meeting Mode is designed to avoid unnecessary data transfers whenever possible. When processing can stay on the device, that local approach is preferred.',
        'At the current stage described on this page, no advertising tracking, no commercial profiling, and no sale of personal data are announced. If a future feature requires external processing, this policy will be updated before release.',
        'Information you enter or configure in the app is used to make the app work. As far as possible, it remains on your device or within the services you explicitly enable.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        'For privacy-related questions, you can contact hello@beabot.fr.',
      ],
    },
  ],
}

const duoSpendPrivacy: AppPrivacyPolicy = {
  fr: [
    {
      title: 'Version française',
      paragraphs: [
        'DuoSpend manipule des informations de budget partagé. L’objectif est de les garder aussi proches que possible de vos appareils et des services que vous choisissez d’utiliser.',
        'Aucune collecte publicitaire ni revente de données n’est annoncée. Si une synchronisation via des services Apple est activée par l’utilisateur, les données concernées suivent alors les conditions et mécanismes de ces services.',
        'Les données de dépenses servent uniquement à afficher, organiser et équilibrer votre budget partagé. Cette page ne décrit aucune exploitation commerciale de ces informations.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        'Pour toute question sur la confidentialité de DuoSpend, vous pouvez écrire à hello@beabot.fr.',
      ],
    },
  ],
  en: [
    {
      title: 'English version',
      paragraphs: [
        'DuoSpend handles shared budget information. The goal is to keep that data as close as possible to your devices and to the services you explicitly choose to use.',
        'No advertising tracking and no sale of personal data are announced. If the user enables synchronization through Apple services, the relevant data then follows the conditions and mechanisms of those services.',
        'Expense data is used only to display, organize, and balance a shared budget. This page does not describe any commercial use of that information.',
      ],
    },
    {
      title: 'Contact',
      paragraphs: [
        'For privacy questions about DuoSpend, you can contact hello@beabot.fr.',
      ],
    },
  ],
}

export const meetingModeContent: MeetingModeContent = {
  slug: 'meeting-mode',
  name: 'Meeting Mode',
  platform: 'macOS',
  heroTitle: 'Préparer un Mac avant une réunion, sans dispersion.',
  heroLead:
    'Meeting Mode aide à vérifier rapidement l’essentiel avant un appel, une démonstration ou un partage d’écran.',
  heroDescription:
    'L’idée n’est pas de transformer le Mac en cockpit. L’app sert à regrouper des actions utiles avant une réunion pour réduire les oublis et repartir avec une machine prête.',
  problem: [
    'Avant une réunion, les mêmes vérifications reviennent souvent : ne pas afficher la mauvaise fenêtre, éviter une notification mal placée, retrouver un réglage utile au dernier moment.',
    'Le problème n’est pas la difficulté technique. C’est l’accumulation de petits détails qui cassent le démarrage d’un échange ou donnent une impression de flottement.',
  ],
  whatItDoes: [
    'Rassembler dans une même interface les actions utiles avant un appel ou un partage d’écran.',
    'Donner un état lisible plutôt qu’obliger à ouvrir plusieurs panneaux système.',
    'Aider à passer d’un Mac “usage courant” à un Mac “réunion” sans procédure mentale trop longue.',
  ],
  inPractice: [
    'Ouvrir l’app quelques minutes avant la réunion.',
    'Vérifier les points nécessaires pour votre usage du moment.',
    'Fermer l’app une fois le poste prêt, sans changer vos habitudes pour le reste de la journée.',
  ],
  limits: [
    'Meeting Mode ne promet pas de corriger tous les aléas d’une réunion à votre place.',
    'L’app ne remplace ni les tests réseau, ni la préparation du contenu, ni la qualité des outils tiers utilisés pendant l’appel.',
    'Elle ne cherche pas non plus à masquer la logique du système : son rôle est de clarifier, pas de rendre le Mac opaque.',
  ],
  pricing: [
    'Le prix définitif n’est pas encore communiqué.',
    'Cette section sera mise à jour dès que la formule de distribution sera arrêtée.',
    'En attendant, la page sert surtout à documenter l’usage, le périmètre et la politique de confidentialité.',
  ],
  preview: {
    alt: 'Capture à venir de Meeting Mode sur macOS',
    available: false,
    label: 'Capture à venir',
  },
  faq: [
    {
      question: 'À qui s’adresse Meeting Mode ?',
      answer:
        'À toute personne qui utilise son Mac en réunion et veut préparer son poste plus vite, sans relire une checklist dispersée dans plusieurs menus.',
    },
    {
      question: 'Est-ce une app pour les équipes IT uniquement ?',
      answer:
        'Non. L’angle retenu ici est l’usage quotidien. L’app vise surtout les personnes qui veulent un poste prêt, clair et prévisible avant un appel.',
    },
    {
      question: 'L’app remplace-t-elle les réglages système ?',
      answer:
        'Non. Elle sert à mieux y accéder ou à mieux les regrouper autour d’un moment précis : juste avant une réunion.',
    },
  ],
  privacy: meetingModePrivacy,
  cta: {
    label: 'Me contacter à propos de Meeting Mode',
    to: '/contact/',
    note: 'Disponibilité et distribution en préparation.',
  },
  seo: {
    title: 'Meeting Mode — Préparer un Mac avant une réunion',
    description:
      'Meeting Mode est une app macOS pensée pour préparer un Mac avant une réunion, un appel ou un partage d’écran, avec une approche sobre et concrète.',
  },
}

export const duoSpendContent: DuoSpendContent = {
  slug: 'duo-spend',
  name: 'DuoSpend',
  platform: 'iOS',
  heroTitle: 'Savoir qui doit combien à qui, sans tableur partagé.',
  heroLead:
    'DuoSpend organise les dépenses communes pour rendre la situation lisible rapidement, même quand les paiements s’enchaînent.',
  heroDescription:
    'L’app est pensée pour les usages du quotidien à deux : voyage, maison, colocation, projet commun. Le sujet n’est pas la finance abstraite, mais la clarté.',
  problem: [
    'Quand un budget est partagé, les dépenses arrivent au fil de l’eau et la mémoire ne suffit pas longtemps.',
    'Le vrai besoin n’est pas une usine à gaz. C’est une réponse rapide à une question simple : qui a payé quoi, et où en est l’équilibre ?',
  ],
  captureNotes: [
    'La capture existante montre l’app dans sa logique réelle : liste courte, information utile, lecture rapide.',
    'Le but n’est pas de multiplier les catégories ou les graphiques, mais d’aider à retrouver l’état d’un budget partagé au bon moment.',
  ],
  preview: {
    src: '/img/duospend.webp',
    alt: 'Capture de l’app DuoSpend sur iPhone',
    available: true,
    label: 'Capture de l’app',
  },
  faq: [
    {
      question: 'Pour quels usages DuoSpend a-t-elle été pensée ?',
      answer:
        'Pour les dépenses communes à deux : voyage, emménagement, vie quotidienne, événement ou projet partagé.',
    },
    {
      question: 'Faut-il connaître la comptabilité pour l’utiliser ?',
      answer:
        'Non. L’app vise justement à éviter les calculs manuels, les notes dispersées et les discussions floues autour des remboursements.',
    },
    {
      question: 'Est-ce une app bancaire ou de finance personnelle complète ?',
      answer:
        'Non. DuoSpend reste volontairement centrée sur le suivi concret des dépenses partagées, sans promesse de pilotage financier exhaustif.',
    },
  ],
  privacy: duoSpendPrivacy,
  cta: {
    label: 'Me contacter à propos de DuoSpend',
    to: '/contact/',
    note: 'Page de présentation et disponibilité en cours de préparation.',
  },
  seo: {
    title: 'DuoSpend — Budget partagé à deux sur iPhone',
    description:
      'DuoSpend est une app iOS de budget partagé pour suivre les dépenses communes, comprendre l’équilibre du budget et savoir rapidement qui doit combien à qui.',
  },
}
