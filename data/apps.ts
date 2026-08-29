import { canonicalUrl } from '~/utils/seo-url'

export interface AppPreview {
  src?: string
  alt: string
  available: boolean
  label: string
  fit?: 'cover' | 'contain'
}

export interface AppGalleryItem {
  src: string
  alt: string
  title: string
  subtitle: string
}

export interface AppIndexEntry {
  slug: string
  name: string
  platform: string
  stage: string
  tagline?: string
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
  es?: AppLegalContent
  de?: AppLegalContent
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

export interface AppPricingBenefit {
  title: string
  description: string
}

export interface AppPricingContent {
  title: string
  intro: string
  plans: AppPricingPlan[]
  premiumBenefits?: AppPricingBenefit[]
}

export interface AppDetailPoint {
  label: string
  value: string
  description?: string
  featured?: boolean
}

export interface AppBeforeAfter {
  before: { src: string; alt: string; label: string }
  after: { src: string; alt: string; label: string }
  caption: string
}

export interface AppDetailContent {
  slug: string
  name: string
  platform: string
  stage: string
  href: string
  appStoreUrl?: string
  intro: string
  summary: string
  heroLines?: string[]
  overview: string[]
  showVisual: boolean
  capabilities?: string[]
  useCases?: string[]
  detailPoints: AppDetailPoint[]
  limits?: string[]
  principles?: string[]
  beforeAfter?: AppBeforeAfter
  preview: AppPreview
  gallery?: AppGalleryItem[]
  faq: AppFaqItem[]
  faqSections?: AppFaqSection[]
  pricing?: AppPricingContent
  legal: AppLegalTabsContent
  cta: AppCta
  seo: {
    title: string
    description: string
    image?: string
  }
}

export interface DuoSpendReleaseState {
  availableVersion: string
  submittedVersion: string
  nextVersion: string
  reviewState: 'submitted-awaiting-review'
}

export interface DuoSpendReleaseEntry {
  version: string
  title: string
  summary: string
  points: string[]
  status?: string
  callout?: {
    title: string
    text: string
  }
}

export interface DuoSpendReleasesContent {
  heroTitle: string
  heroIntro: string
  roadmapLabel: string
  versions: DuoSpendReleaseEntry[]
  productLabel: string
  finalRoadmapLabel: string
  seo: {
    title: string
    description: string
    image: string
  }
}

export interface DuoSpendRoadmapItem {
  title: string
  description: string
  status: string
}

export interface DuoSpendRoadmapSection {
  title: string
  intro: string
  items: DuoSpendRoadmapItem[]
}

export interface DuoSpendRoadmapContent {
  heroTitle: string
  heroIntro: string
  heroNote: string
  ideaLabel: string
  releasesLabel: string
  next: DuoSpendRoadmapSection
  after: DuoSpendRoadmapSection
  principles: {
    title: string
    items: string[]
  }
  suggestion: {
    title: string
    text: string
    note: string
  }
  productLabel: string
  finalReleasesLabel: string
  seo: {
    title: string
    description: string
    image: string
  }
}

export interface CollectionPageSchemaInput {
  siteUrl: string
  pageUrl: string
  name: string
  description: string
}

export interface SoftwareApplicationSchemaInput {
  name: string
  description: string
  url: string
  operatingSystem: string
  applicationCategory: string
  image?: string
  offers?: Array<{
    name: string
    price: string
    priceCurrency: string
    description?: string
  }>
  author?: {
    name: string
    url: string
  }
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

export const appsIndexContent = {
  title: 'Applications iOS et macOS',
  heroTitle: 'Des apps utiles pour garder le fil.',
  heroSubtitle:
    'Une habitude à tenir. Des dépenses à clarifier. Une séance à lancer. Une réunion à préparer. Des apps courtes, directes, pensées pour faire une chose sans vous retenir.',
  proofLine: [
    'Sans compte inutile',
    'Sans réseau social',
    'Sans tableau de bord envahissant',
  ],
  manifestoTitle: 'Ouvrir. Faire. Fermer.',
  manifestoBody:
    'Ces apps ne cherchent pas à vous retenir. Elles rendent une action plus claire, puis disparaissent.',
  principles: [
    'une action principale claire',
    'peu d’écrans',
    "pas de compte obligatoire quand ce n'est pas nécessaire",
    'pas de réseau social',
    'pas de gamification agressive',
    'des données limitées à l’usage réel',
  ],
  ctaTitle: 'Par quoi commencer ?',
  ctaBody:
    'Chaque app répond à un moment précis. Choisissez celle qui correspond à ce que vous voulez suivre, clarifier ou préparer maintenant.',
  intro: [
    'Des apps iOS et macOS conçues pour aller à l’essentiel : moins de bruit, moins de comptes, moins de réglages inutiles, plus de valeur concrète.',
    'Chaque app part d’un usage précis et cherche à rester agréable dans la durée : simple à ouvrir, rapide à comprendre, utile sans prendre toute la place.',
  ],
  meta: '',
  seo: {
    title: 'Applications iPhone sobres et privées — BeAbot Apps',
    description:
      'Découvrez les apps BeAbot : FocusOne, DuoSpend et Siturem. Des apps iOS sobres pour tenir une habitude, clarifier une dépense ou lancer une séance.',
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'focus-one',
    name: 'FocusOne',
    platform: 'iOS',
    stage: 'Disponible',
    tagline: 'Tenir une habitude.',
    summary:
      'Un compteur privé pour choisir une seule routine, la cocher aujourd’hui et garder la série visible.',
    href: '/apps/focus-one/',
    featured: true,
    preview: {
      src: '/img/apps/focus-one/00-onboarding.webp',
      alt: 'Écran de création d’une routine dans FocusOne sur iPhone',
      available: true,
      label: 'Capture temporaire',
      fit: 'contain',
    },
  },
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    stage: 'Disponible',
    tagline: 'Clarifier les dépenses à deux.',
    summary:
      'Ajoutez les dépenses d’un projet commun, voyez qui a payé quoi, équilibrez simplement.',
    href: '/apps/duo-spend/',
    featured: true,
    preview: {
      src: '/img/apps/duospend-vignette-apps.webp',
      alt: 'Vignette de l’app DuoSpend',
      available: true,
      label: 'Capture actuelle',
      fit: 'contain',
    },
  },
  {
    slug: 'siturem',
    name: 'Siturem',
    platform: 'iOS',
    stage: 'Prépublication',
    tagline: 'Un cadre stable pour méditer.',
    summary:
      'Lancez une séance structurée avec un cadre clair, peu de réglages et une sortie progressive.',
    href: '/apps/siturem/',
    featured: false,
    preview: {
      src: '/img/siturem/siturem-landing.webp',
      alt: 'Aperçu de Siturem sur iPhone',
      available: true,
      label: 'Capture actuelle',
      fit: 'cover',
    },
  },
  {
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    stage: 'Prépublication',
    tagline: 'Préparer le Mac avant une réunion.',
    summary:
      'Ouvrez ce qu’il faut, masquez le reste, revenez à votre espace habituel après l’appel.',
    href: '/apps/meeting-mode/',
    featured: false,
    preview: {
      src: '/img/apps/meeting-mode_vignette-apps.webp',
      alt: 'Aperçu de Meeting Mode sur macOS',
      available: true,
      label: 'Capture actuelle',
      fit: 'cover',
    },
  },
]

const focusOneFaqSections: AppFaqSection[] = [
  {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'FocusOne remplace-t-elle une app d’habitudes classique ?',
        answer:
          'Pas exactement. FocusOne ne cherche pas à tout suivre. Elle sert à installer une seule routine à la fois, avec un geste quotidien clair.',
      },
      {
        question: 'Pourquoi une seule habitude active ?',
        answer:
          'Parce qu’une routine tenue vaut mieux que dix objectifs abandonnés. FocusOne privilégie la constance plutôt que l’accumulation.',
      },
      {
        question: 'Que contient la version gratuite ?',
        answer:
          'La version gratuite permet de créer une habitude active, de la valider chaque jour, de suivre son streak, d’utiliser des rappels simples et les widgets de base.',
      },
      {
        question: 'Que débloque Premium ?',
        answer:
          'Premium ajoute l’historique complet, les stats avancées, les widgets moyen et grand, les archives, les icônes premium, les couleurs supplémentaires, les durées d’engagement, les paliers célébrés et un joker mensuel.',
      },
      {
        question: 'Combien coûte Premium ?',
        answer:
          'FocusOne Premium coûte 14,99 € par an ou 39,99 € en achat unique.',
      },
      {
        question: 'Est-ce qu’il faut créer un compte ?',
        answer: 'Non. FocusOne ne demande pas de compte pour fonctionner.',
      },
      {
        question: 'Mes données restent-elles privées ?',
        answer:
          'Oui. Vos données restent sur votre iPhone et peuvent être synchronisées via iCloud si vous l’activez. La page de confidentialité détaille précisément le fonctionnement.',
      },
      {
        question: 'Est-ce que FocusOne affiche de la publicité ?',
        answer: 'Non. FocusOne ne repose pas sur la publicité.',
      },
    ],
  },
]

export const duoSpendReleaseState: DuoSpendReleaseState = {
  availableVersion: '1.0.2',
  submittedVersion: '1.0.3',
  nextVersion: '1.1.0',
  reviewState: 'submitted-awaiting-review',
}

export const duoSpendReleasesContent: DuoSpendReleasesContent = {
  heroTitle: 'Notes de version',
  heroIntro:
    'DuoSpend évolue par petites étapes, avec la même priorité : garder la gestion des dépenses à deux simple, privée et lisible.',
  roadmapLabel: 'Voir les nouveautés à venir',
  versions: [
    {
      version: '1.1.0',
      title: 'DuoSpend 1.1.0',
      status: 'SOUMISE À L’APP STORE',
      summary:
        'Une mise à jour centrée sur la personnalisation, la vue d’ensemble du couple et les widgets.',
      points: [
        'Profils du couple avec prénoms et couleurs personnalisées.',
        'Thèmes et icônes pour différencier les projets.',
        'Nouvelle vue d’ensemble du couple pour voir ce que chacun a avancé et qui doit combien à qui.',
        'Archivage des projets terminés sans perdre leur historique.',
        'Trois nouveaux widgets : Solde du couple, Projet configurable et Projets actifs.',
        'Micro-célébrations discrètes après certains moments positifs.',
        'Améliorations générales de l’expérience et de la stabilité.',
      ],
    },
    {
      version: duoSpendReleaseState.submittedVersion,
      title: '1.0.3 — Partager un projet plus simplement',
      status: 'Disponible sur l’App Store',
      summary:
        'Cette version ajoute la transmission d’un projet à votre partenaire sous la forme d’un fichier .duospend.',
      points: [
        'Partagez un projet depuis DuoSpend.',
        'Importez un projet reçu sur un autre iPhone.',
        'Mettez à jour manuellement un projet existant à partir d’un nouveau fichier.',
        'DuoSpend Pro est également compatible avec le partage familial Apple : un seul achat peut être partagé au sein de votre groupe familial, sans partager ni synchroniser les projets.',
        'Le transfert reste volontaire et ponctuel : aucune synchronisation permanente n’est activée en arrière-plan.',
        'Les données de DuoSpend restent gérées localement sur l’appareil.',
      ],
      callout: {
        title: 'Pas encore une synchronisation',
        text: 'Le partage par fichier permet de transmettre ponctuellement un projet à l’autre personne. Une collaboration entre les deux iPhone reste une évolution envisagée pour plus tard.',
      },
    },
    {
      version: duoSpendReleaseState.availableVersion,
      title: '1.0.2 — Des dépenses plus faciles à comprendre',
      summary:
        'Cette version clarifie la différence entre la personne qui avance l’argent et la part réellement supportée par chacun.',
      points: [
        'Libellés « Avancé par » et « Part à charge » plus explicites.',
        'Affichage direct de la somme que l’un doit à l’autre pour les dépenses concernées.',
        'Répartition personnalisée plus facile à lire.',
        'Calculs et affichages mieux couverts et fiabilisés.',
      ],
    },
    {
      version: '1.0.1',
      title: '1.0.1 — Lisibilité et finitions',
      summary:
        'Une mise à jour consacrée à la cohérence visuelle et à la lecture des projets sur iPhone.',
      points: [
        'Cartes de projets plus lisibles.',
        'Couleurs des deux partenaires plus cohérentes.',
        'Présentation améliorée des contributions et des dépenses sur iPhone.',
        'Corrections et finitions visuelles.',
      ],
    },
    {
      version: '1.0',
      title: '1.0 — Première version de DuoSpend',
      summary:
        'La première version pose les bases : créer un projet commun, définir son budget, saisir les dépenses des deux partenaires et comprendre simplement qui a avancé quoi et quel est le solde.',
      points: [
        'Projets avec budget pour deux partenaires.',
        'Dépenses partagées à 50/50 ou avec une répartition personnalisée.',
        'Balance du couple claire, sans connexion bancaire.',
        'Données conservées localement sur l’iPhone.',
        'DuoSpend Pro en achat unique pour les projets illimités, les widgets et l’export PDF.',
      ],
    },
  ],
  productLabel: 'Découvrir DuoSpend',
  finalRoadmapLabel: 'Voir les prochaines évolutions',
  seo: {
    title: 'Notes de version de DuoSpend — Nouveautés et améliorations',
    description:
      'Découvrez les nouvelles fonctionnalités, améliorations et corrections apportées à DuoSpend au fil des versions.',
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

export const duoSpendRoadmapContent: DuoSpendRoadmapContent = {
  heroTitle: 'Ce qui arrive ensuite',
  heroIntro:
    'DuoSpend évolue sans chercher à accumuler les fonctions. Chaque nouveauté doit rendre les dépenses à deux plus simples à comprendre, plus agréables à suivre ou plus faciles à partager.',
  heroNote:
    'Cette roadmap présente les orientations actuelles. L’ordre et le contenu peuvent évoluer en fonction des retours et des contraintes de développement.',
  ideaLabel: 'Proposer une idée',
  releasesLabel: 'Voir les notes de version',
  next: {
    title: 'v1.2 — Statistiques avancées et confort Pro',
    intro:
      'La prochaine étape fonctionnelle approfondira la lecture des dépenses et le confort des projets Pro.',
    items: [
      {
        title: 'Catégories et icônes de dépenses',
        description:
          'Classez les dépenses par catégorie et associez-leur des icônes faciles à reconnaître.',
        status: 'Prévu',
      },
      {
        title: 'Statistiques avancées et tendances',
        description:
          'Suivez l’évolution des dépenses et les tendances utiles d’un projet.',
        status: 'Prévu',
      },
      {
        title: 'Recherche et filtres',
        description:
          'Retrouvez plus rapidement une dépense dans les projets qui durent.',
        status: 'Prévu',
      },
      {
        title: 'Export PDF enrichi',
        description:
          'Obtenez un récapitulatif plus complet de l’historique d’un projet.',
        status: 'Prévu',
      },
      {
        title: 'Conversion manuelle de devises',
        description:
          'Convertissez manuellement les montants pour les projets utilisant plusieurs devises.',
        status: 'Prévu',
      },
      {
        title: 'Notification de budget à 80 %',
        description:
          'Recevez une notification lorsqu’un projet atteint 80 % de son budget.',
        status: 'Prévu',
      },
    ],
  },
  after: {
    title: 'v2.0 — Collaboration réelle',
    intro:
      'Cette étape future permettra aux deux partenaires de collaborer sur un même projet.',
    items: [
      {
        title: 'CloudKit Sharing entre deux comptes Apple',
        description:
          'Partagez et mettez à jour un projet entre les comptes Apple des deux partenaires.',
        status: 'Plus tard',
      },
    ],
  },
  principles: {
    title: 'Ce qui restera au cœur de DuoSpend',
    items: [
      'Une app pensée pour deux personnes.',
      'Pas de connexion à votre banque.',
      'Pas de publicité.',
      'Pas de tracking publicitaire.',
      'Des données de projet conservées localement sur l’iPhone.',
      'Un achat unique pour DuoSpend Pro, pas d’abonnement.',
    ],
  },
  suggestion: {
    title: 'Une idée pour DuoSpend ?',
    text: 'DuoSpend est développé indépendamment et les retours concrets sont précieux. Si une fonction vous manque ou si quelque chose pourrait être plus simple, vous pouvez le proposer.',
    note: 'Une proposition ne garantit pas son ajout à l’app : elle sert à mieux comprendre les besoins et à orienter les prochaines versions.',
  },
  productLabel: 'Découvrir DuoSpend',
  finalReleasesLabel: 'Voir les notes de version',
  seo: {
    title: 'Roadmap DuoSpend — Les prochaines nouveautés',
    description:
      'Découvrez les fonctionnalités prévues et les pistes étudiées pour les prochaines versions de DuoSpend, et proposez vos idées.',
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

const duoSpendFaqSections: AppFaqSection[] = [
  {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'À quoi sert DuoSpend ?',
        answer:
          'DuoSpend aide à suivre les dépenses partagées à deux. Vous ajoutez une dépense, indiquez qui a payé, choisissez la répartition, puis l’app affiche simplement qui doit quoi.',
      },
      {
        question: 'Pour qui est-ce fait ?',
        answer:
          'Pour les couples, colocataires, amis ou proches qui partagent des frais sur un projet ou une période précise : voyage, mariage, travaux, emménagement, vacances ou dépenses du quotidien.',
      },
      {
        question: 'Pourquoi ne pas utiliser un tableur ?',
        answer:
          'Un tableur fonctionne, mais il demande de tout tenir à la main. DuoSpend garde une lecture plus simple : dépenses, répartition et solde net au même endroit.',
      },
      {
        question: 'Peut-on faire autre chose que du 50/50 ?',
        answer:
          'Oui. Chaque dépense peut être partagée à parts égales ou avec une répartition personnalisée, par exemple 60/40 ou 70/30.',
      },
      {
        question: 'Que contient la version gratuite ?',
        answer:
          'La version gratuite permet de gérer un projet complet avec les fonctions essentielles : budget, dépenses, répartitions et solde clair.',
      },
      {
        question: 'Que débloque DuoSpend Pro ?',
        answer:
          'DuoSpend Pro débloque les projets illimités, les widgets pour l’écran d’accueil et l’export PDF, avec un achat unique. DuoSpend Pro est également compatible avec le partage familial Apple.',
      },
      {
        question: 'Combien coûte DuoSpend Pro ?',
        answer:
          'DuoSpend Pro coûte 6,99 € dans la zone euro, en achat unique. Le prix peut varier selon le pays dans l’App Store. Il n’y a pas d’abonnement.',
      },
      {
        question: 'Faut-il créer un compte ?',
        answer: 'Non. DuoSpend ne demande pas de compte pour fonctionner.',
      },
      {
        question: 'Mes données restent-elles privées ?',
        answer:
          'Oui. Vos projets et dépenses restent sur votre iPhone dans la version actuelle. La page de confidentialité détaille précisément le fonctionnement.',
      },
      {
        question: 'Peut-on utiliser DuoSpend à deux sur deux iPhones ?',
        answer:
          `La version ${duoSpendReleaseState.submittedVersion}, soumise à l’App Store, ajoute le partage d’un projet avec votre partenaire à l’aide d’un fichier DuoSpend. Le partenaire pourra l’importer sur son iPhone, puis importer une nouvelle version du fichier pour mettre à jour le projet. Le transfert restera manuel : DuoSpend ne synchronisera pas automatiquement les deux iPhone.`,
      },
      {
        question: 'DuoSpend Pro peut-il être partagé en famille ?',
        answer:
          'Oui. DuoSpend Pro est un achat unique compatible avec le partage familial Apple. L’achat peut être partagé avec les membres éligibles de votre groupe familial selon vos réglages Apple.',
      },
    ],
  },
]

const situremFaqSections: AppFaqSection[] = [
  {
    title: 'Positionnement',
    items: [
      {
        question: 'Pour qui Siturem est-elle conçue ?',
        answer:
          'Siturem s’adresse d’abord aux pratiquants qui savent déjà méditer et qui recherchent un cadre stable, discret et répétable. Elle n’est pas pensée comme une app de découverte ou de relaxation guidée.',
      },
      {
        question: 'Est-ce une app de méditation guidée ?',
        answer:
          'Non, pas au sens classique. Siturem ne propose ni bibliothèque de contenus ni programmes progressifs. Elle structure une séance avec peu d’options pour laisser plus de place à la pratique elle-même.',
      },
      {
        question:
          'Pourquoi ne pas utiliser simplement le minuteur natif de l’iPhone ?',
        answer:
          'Parce que le minuteur donne un temps, mais pas un cadre. Siturem ajoute une structure stable avec une introduction, une phase de pratique et un retour au calme, tout en restant beaucoup plus sobre qu’une app de contenu.',
      },
    ],
  },
  {
    title: 'Fonctionnement',
    items: [
      {
        question: 'Comment se déroule une séance ?',
        answer:
          'Chaque séance suit une structure en trois phases : une introduction de 2 min 30 pour s’installer, une phase de méditation dont la durée dépend du temps total choisi, puis un retour au calme de 1 min 32 pour sortir progressivement.',
      },
      {
        question: 'Quelle est la durée minimale ?',
        answer:
          'La durée minimale prévue est de 6 minutes. Cela laisse suffisamment de place pour les trois temps de la séance sans réduire la pratique à un simple minuteur.',
      },
      {
        question: 'Quelles options sont prévues ?',
        answer:
          'Siturem reste volontairement limitée : durée totale, mode d’accompagnement, gong final, ambiance sonore optionnelle, rappels discrets pendant la séance et suivi de pratique sobre.',
      },
      {
        question: 'L’app enregistre-t-elle les séances dans Apple Health ?',
        answer:
          'Oui, l’intégration HealthKit est prévue comme option. Elle sert à inscrire vos séances dans l’écosystème Santé d’Apple, sans être nécessaire au fonctionnement de base de l’app.',
      },
    ],
  },
  {
    title: 'Confidentialité et sortie',
    items: [
      {
        question: 'Faut-il créer un compte ?',
        answer:
          'Non. Siturem est pensée comme un outil natif, sans compte imposé, sans publicité et sans logique de plateforme.',
      },
      {
        question: 'Y a-t-il du tracking ou des SDK tiers ?',
        answer:
          'La page de présentation est conçue autour d’une logique sobre : pas de tracking invasif, pas de profilage marketing et une collecte de données limitée à ce qui est utile au fonctionnement de l’app et aux intégrations Apple activées par l’utilisateur.',
      },
      {
        question: 'Siturem est-elle déjà publiée ?',
        answer:
          'Pas encore. La page présente le produit, ses principes, le support et sa politique de confidentialité.',
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
  intro:
    'Meeting Mode prépare votre Mac pour une réunion, une démo ou un partage d’écran en un clic : il ouvre ce qu’il faut, masque le reste, affiche un écran propre, puis propose un restore simple et compréhensible.',
  summary: 'Préparer, montrer, restaurer depuis la barre de menu.',
  overview: [
    'Meeting Mode reste centré sur un flux court, fiable et compréhensible.',
  ],
  capabilities: [
    'ouvrir les applications, liens et fichiers de votre preset',
    'masquer les apps visibles qui ne font pas partie de la session',
    'afficher un écran propre avant le partage avec le clean screen overlay',
    'restaurer ce que l’app a réellement changé pendant la session',
  ],
  useCases: [
    'démos produit',
    'visios clients',
    'entretiens',
    'partage d’écran et support',
    'présentations internes',
    'tout call avec des apps et liens récurrents à ouvrir',
  ],
  detailPoints: [
    {
      label: 'Un vrai flux en un clic',
      value:
        'Vous choisissez un preset, vous lancez la session, et l’app exécute l’essentiel immédiatement.',
      description:
        'Pas de configuration à chaque fois. Un preset mémorise vos apps, liens et fichiers utiles. Start Session les ouvre, masque le reste, et affiche un écran propre — en une action.',
      featured: true,
    },
    {
      label: 'Pensé pour le partage d’écran',
      value:
        'L’objectif n’est pas la productivité générale. L’objectif est de rendre l’écran propre, lisible et présentable avant un partage.',
      description:
        'La session prépare le contexte attendu et retire ce qui gêne la lecture.',
    },
    {
      label: 'Restore clair, sans magie',
      value:
        'Meeting Mode tente de restaurer uniquement ce qu’il a réellement modifié pendant la session.',
      description:
        'Le retour reste compréhensible : l’app ne promet pas de reconstruire un bureau qu’elle n’a pas touché.',
    },
    {
      label: 'Local d’abord',
      value:
        'Les presets et l’état de session sont stockés localement. Pas de cloud imposé, pas de compte, pas de couche inutile.',
      description:
        'Les informations utiles restent sur le Mac pour garder le flux simple.',
    },
  ],
  preview: {
    src: '/img/apps/meeting-mode_hero.webp',
    alt: 'Écran principal de Meeting Mode sur macOS',
    available: true,
    label: "Aperçu de l'app",
    fit: 'cover',
  },
  showVisual: false,
  gallery: [
    {
      src: '/img/apps/meeting-mode_avant.webp',
      alt: "Bureau macOS standard avant le lancement d'une session Meeting Mode",
      title: 'Avant',
      subtitle: 'Bureau standard',
    },
    {
      src: '/img/apps/meeting-mode_preset_1.webp',
      alt: "Écran de configuration d'un preset dans Meeting Mode",
      title: 'Preset',
      subtitle: 'Configuration de la session',
    },
    {
      src: '/img/apps/meeting-mode_actif.webp',
      alt: 'Session Meeting Mode active sur macOS',
      title: 'Session active',
      subtitle: 'Clean screen overlay',
    },
    {
      src: '/img/apps/meeting-mode_reglages.webp',
      alt: 'Réglages de Meeting Mode',
      title: 'Réglages',
      subtitle: 'Préférences locales',
    },
    {
      src: '/img/apps/meeting-mode_apres.webp',
      alt: 'Bureau après restore par Meeting Mode',
      title: 'Après',
      subtitle: 'Restore de session',
    },
  ],
  beforeAfter: {
    before: {
      src: '/img/apps/meeting-mode_avant.webp',
      alt: "Bureau macOS standard avant le lancement d'une session Meeting Mode",
      label: 'Avant',
    },
    after: {
      src: '/img/apps/meeting-mode_apres.webp',
      alt: "Bureau macOS après le lancement d'une session Meeting Mode — écran propre",
      label: 'Après',
    },
    caption:
      'En un clic, Meeting Mode ouvre ce qu’il faut et masque le reste. L’écran est prêt pour le partage.',
  },
  faq: [
    {
      question: 'À quoi sert Meeting Mode ?',
      answer:
        'Meeting Mode sert à préparer rapidement votre Mac avant une réunion, une démo, un entretien ou un partage d’écran. L’app peut ouvrir vos apps, liens et fichiers utiles, masquer certaines apps visibles, afficher un écran propre, puis proposer un restore simple à la fin.',
    },
    {
      question: 'Sur quel système l’app fonctionne-t-elle ?',
      answer:
        'Meeting Mode est une app macOS. Elle a été pensée comme une app de barre de menu.',
    },
    {
      question: 'Qu’est-ce qu’un preset ?',
      answer:
        'Un preset est une configuration réutilisable. Il peut contenir des apps à ouvrir, des liens, des fichiers locaux, une checklist et l’option de clean screen.',
    },
    {
      question: 'Que fait exactement “Start Session” ?',
      answer:
        'Start Session lance les éléments du preset, masque en best effort les apps visibles hors preset, active l’écran propre si demandé, puis marque la session comme active.',
    },
    {
      question: 'Que fait “Restore Session” ?',
      answer:
        'Restore Session retire l’overlay et tente de restaurer uniquement ce que Meeting Mode a réellement changé pendant la session.',
    },
    {
      question: 'Est-ce que l’app ferme tout automatiquement à la fin ?',
      answer:
        'Non. Meeting Mode reste volontairement prudent. Le restore est best effort et limité au scope réel de la session. L’app ne promet pas de refermer parfaitement chaque fenêtre, chaque onglet ou chaque document.',
    },
    {
      question:
        'Est-ce que Meeting Mode gère les fenêtres, les Spaces ou les onglets du navigateur ?',
      answer:
        'Non. Ce n’est pas le but du produit. Meeting Mode ne cherche pas à devenir un gestionnaire avancé du bureau macOS.',
    },
    {
      question: 'Est-ce que mes données quittent mon Mac ?',
      answer:
        'Le fonctionnement prévu de l’app est principalement local : presets, préférences et état de session sont stockés localement. Si cette politique change un jour, la privacy policy et les informations App Store devront être mises à jour.',
    },
    {
      question: 'Est-ce que l’app nécessite un compte ?',
      answer: 'Non, l’usage prévu n’impose pas de compte.',
    },
    {
      question:
        'Est-ce que l’app a besoin de permissions sensibles comme l’accessibilité ou l’enregistrement d’écran ?',
      answer:
        'Dans l’état actuel documenté du projet, l’implémentation ne repose pas sur une demande obligatoire d’Accessibility, d’Automation ou de Screen Recording pour son flux principal. Les limites éventuelles viennent surtout du comportement de macOS lui-même.',
    },
    {
      question: 'Puis-je créer plusieurs presets ?',
      answer:
        'Oui. Vous pouvez créer, modifier et supprimer plusieurs presets.',
    },
    {
      question: 'L’app fonctionne-t-elle hors connexion ?',
      answer:
        'Oui pour le fonctionnement local de base. En revanche, les URLs de vos presets dépendent naturellement de la disponibilité du réseau et du service cible.',
    },
    {
      question: 'Est-ce qu’il y a une synchronisation cloud ?',
      answer: 'Non. Ce n’est pas dans le périmètre du produit à ce stade.',
    },
    {
      question: 'Pourquoi ne pas promettre un restore parfait ?',
      answer:
        'Parce que ce serait trompeur. Sur macOS, certaines actions inter-apps restent limitées ou fragiles. Meeting Mode préfère un restore compréhensible et honnête plutôt qu’une promesse irréaliste.',
    },
  ],
  legal: {
    fr: {
      title: 'Confidentialité',
      paragraphs: [
        'Meeting Mode respecte votre vie privée.',
        'Cette politique de confidentialité explique quelles données sont traitées par l’application Meeting Mode, dans quel but, et quels choix vous avez en tant qu’utilisateur.',
        'Meeting Mode est conçue pour fonctionner principalement en local sur votre Mac. L’application enregistre localement vos presets et préférences, gère une session active et un restore simple, et ne requiert pas de compte utilisateur.',
        'Les données stockées localement peuvent inclure vos presets, vos préférences d’application, votre langue choisie, vos raccourcis configurés, l’état de session nécessaire au restore, ainsi que des chemins de fichiers, URLs ou références d’apps que vous avez ajoutés à vos presets.',
        'Dans la version actuelle, les données sont stockées localement sur votre appareil. Une synchronisation iCloud optionnelle est prévue dans une prochaine version ; cette politique sera mise à jour en conséquence.',
        'Les données locales servent uniquement à exécuter les presets que vous avez configurés, ouvrir les apps, liens et fichiers demandés, mémoriser vos réglages, restaurer au mieux l’état de session réellement modifié, et améliorer la continuité d’usage après une fermeture inattendue.',
        'Meeting Mode ne collecte pas de données personnelles sur ses serveurs dans le cadre du fonctionnement local standard, ne crée pas de compte utilisateur, ne suit pas votre activité à des fins publicitaires, ne vend pas vos données, ne profile pas votre comportement et ne transmet pas vos presets à ses serveurs.',
        'L’app n’utilise pas de publicité ciblée ni de tracking inter-apps ou inter-sites. Si cela change, cette politique sera mise à jour en conséquence.',
        'Meeting Mode peut utiliser des APIs système macOS nécessaires à son fonctionnement, par exemple pour ouvrir des applications, ouvrir des liens ou afficher un overlay visuel. L’application ne demande pas plus d’accès que nécessaire.',
        'Nous ne partageons pas de données personnelles avec des tiers dans le cadre du fonctionnement local standard. En revanche, lorsque vous ouvrez un site web, un lien, un document ou une application tierce via un preset, l’utilisation de ce service tiers est régie par ses propres conditions.',
        'Les données enregistrées par Meeting Mode sont conservées localement sur votre appareil aussi longtemps que vous utilisez l’application ou jusqu’à leur suppression.',
        'Meeting Mode est conçu pour limiter la circulation des données en privilégiant le stockage local lorsque cela suffit.',
        'Selon votre pays de résidence, vous pouvez disposer de droits relatifs à vos données personnelles. Pour toute question, utilisez le contact prévu par la page produit.',
        'Meeting Mode n’est pas conçu spécifiquement pour les enfants. La politique pourra être mise à jour si l’application ou ses pratiques évoluent.',
      ],
    },
    en: {
      title: 'Legal',
      paragraphs: [
        'Meeting Mode respects your privacy.',
        'This privacy policy explains what data is processed by the Meeting Mode app, for what purpose, and what choices you have as a user.',
        'Meeting Mode is designed to operate primarily locally on your Mac. The app stores presets and preferences locally, manages an active session and a simple restore flow, and does not require a user account.',
        'Locally stored data may include your presets, app preferences, selected language, configured shortcuts, the session state needed for restore, and file paths, URLs, or app references you added to your presets.',
        'In the current version, data is stored locally on your device. Optional iCloud sync is planned for a future version; this policy will be updated accordingly.',
        'Local data is used only to run the presets you configured, open the requested apps, links, and files, remember your settings, restore, on a best-effort basis, the session state actually changed, and preserve continuity after an unexpected closure.',
        'Meeting Mode does not collect personal data on its servers in the standard local operation, does not create user accounts, does not track users for advertising purposes, does not sell data, does not profile behavior, and does not send your presets to its servers.',
        'The app does not use targeted advertising or cross-app / cross-site tracking. If that changes, this policy will be updated accordingly.',
        'Meeting Mode may use macOS system APIs required for its functionality, for example to open applications, open links, or display a visual overlay. The app is designed not to request more access than necessary.',
        'We do not share personal data with third parties in the standard local operation. When you open a third-party website, link, document, or app through a preset, that third-party service is governed by its own terms.',
        'Data stored by Meeting Mode is kept locally on your device for as long as you use the app or until you remove it.',
        'Meeting Mode is designed to minimize unnecessary data exposure by relying on local storage whenever that is sufficient.',
        'Depending on your country or region, you may have rights regarding your personal data. For any question, use the contact point provided on the product page.',
        'Meeting Mode is not specifically directed to children. This policy may be updated if the app or its practices evolve.',
      ],
    },
  },
  cta: {
    title: 'Informations pratiques',
    description:
      'Retrouvez sur cette page les captures, le support et la confidentialité.',
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/?app=meeting-mode&type=support',
  },
  seo: {
    title: 'Meeting Mode — app macOS pour réunions',
    description:
      'Meeting Mode prépare votre Mac en un clic : ouvre vos apps, masque le reste, affiche un écran propre. App macOS de barre de menu, locale, sans compte.',
    image: '/img/apps/meeting-mode_vignette-apps.webp',
  },
}

export const focusOneContent: AppDetailContent = {
  slug: 'focus-one',
  name: 'FocusOne',
  platform: 'iOS',
  stage: 'Disponible sur l’App Store',
  href: '/apps/focus-one/',
  appStoreUrl: 'https://apps.apple.com/app/focusone/id6769842298',
  intro: 'Une seule promesse à tenir.',
  summary:
    'Choisissez une habitude, cochez-la aujourd’hui, gardez votre série visible. FocusOne vous aide à tenir une seule chose à la fois, sans compte, sans réseau social, sans écran inutile.',
  heroLines: [
    'Choisissez une habitude, cochez-la aujourd’hui, gardez votre série visible.',
    'Une seule chose à la fois, sans compte, sans réseau social, sans écran inutile.',
  ],
  overview: [
    'Beaucoup d’apps d’habitudes commencent avec une bonne intention, puis finissent par ressembler à des tableaux de bord : plusieurs routines à gérer, des graphiques partout, des objectifs empilés, des rappels qui s’accumulent.',
    'À force de vouloir tout suivre, on finit parfois par ne plus rien tenir.',
    'FocusOne prend le chemin inverse : une seule habitude active, une action claire, un retour immédiat.',
    'Vous choisissez une routine simple — méditer, marcher, lire, boire de l’eau, écrire quelques lignes — puis vous la validez chaque jour en un geste. L’app vous aide à garder le fil sans prendre toute la place.',
  ],
  detailPoints: [
    {
      label: 'Une seule habitude active',
      value:
        'Choisir une routine, la cocher aujourd’hui, garder la série visible.',
      description:
        'La première décision est volontairement simple : une seule chose à tenir, assez visible pour revenir demain sans rouvrir tout un tableau de bord.',
      featured: true,
    },
    {
      label: 'Un geste par jour',
      value: 'Une promesse. Un tap par jour.',
      description: 'Le suivi reste rapide, même les jours chargés.',
    },
    {
      label: 'Un streak motivant',
      value: 'Un repère simple pour garder l’élan.',
      description: 'Voyez les jours tenus et reprenez vite si besoin.',
    },
    {
      label: 'Des rappels sobres',
      value: 'Un ou deux rappels, pas une avalanche.',
      description:
        'De quoi ne pas oublier, sans transformer votre téléphone en machine à notifications.',
    },
    {
      label: 'Une journée adaptée à votre rythme',
      value: 'Votre journée ne s’arrête pas forcément à minuit.',
      description:
        'Définissez l’heure de début de journée pour que votre streak suive votre rythme réel.',
    },
    {
      label: 'Des widgets utiles',
      value: 'Votre routine visible d’un coup d’œil.',
      description:
        'Gardez un œil sur votre objectif depuis l’écran d’accueil ou l’écran verrouillé.',
    },
  ],
  preview: {
    src: '/img/apps/focus-one/03-aujourd-hui.webp',
    alt: 'Écran principal FocusOne avec validation de la routine du jour',
    available: true,
    label: "Aperçu de l'app",
    fit: 'contain',
  },
  showVisual: false,
  gallery: [
    {
      src: '/img/apps/focus-one/02-creation.webp',
      alt: 'Écran de création d’une routine dans FocusOne',
      title: 'Créer une routine',
      subtitle: 'Choisir un nom, une icône, une couleur et un rythme',
    },
    {
      src: '/img/apps/focus-one/03-serie-active.webp',
      alt: 'Écran principal FocusOne avec validation de la routine du jour',
      title: 'Cocher aujourd’hui',
      subtitle: 'L’action essentielle reste visible dès l’ouverture',
    },
    {
      src: '/img/apps/focus-one/04-streak.webp',
      alt: 'Vue du streak et de la progression dans FocusOne',
      title: 'Garder son streak',
      subtitle: 'Série actuelle, record et progression en un coup d’œil',
    },
    {
      src: '/img/apps/focus-one/07-stats.webp',
      alt: 'Statistiques mensuelles et calendrier de progression dans FocusOne',
      title: 'Suivre la régularité',
      subtitle: 'Calendrier, historique et repères sans tableau de bord lourd',
    },
    {
      src: '/img/apps/focus-one/08-widget.webp',
      alt: 'Widget iOS FocusOne affichant la routine active',
      title: 'Voir sans ouvrir',
      subtitle: 'Widget iOS pour garder la routine et le streak visibles',
    },
    {
      src: '/img/apps/focus-one/step-1.webp',
      alt: 'Écran FocusOne célébrant un palier de streak atteint',
      title: 'Célébrer les paliers',
      subtitle: 'Des moments visuels sobres quand la série avance',
    },
  ],
  faq: focusOneFaqSections.flatMap((section) => section.items),
  faqSections: focusOneFaqSections,
  pricing: {
    title: 'Tarifs',
    intro:
      'FocusOne garde son cœur simple et gratuit. Premium ajoute de la profondeur quand vous voulez suivre votre progression dans le temps.',
    plans: [
      {
        name: 'Gratuit',
        price: '0 €',
        description: 'Pour commencer une routine avec un geste clair.',
        items: [
          'Une habitude active',
          'Validation quotidienne',
          'Streak actuel',
          'Rappels simples',
          'Widgets de base',
          'Statistiques essentielles',
        ],
      },
      {
        name: 'Premium',
        price: '14,99 € / an ou 39,99 € en achat unique',
        description:
          'Pour garder l’historique, personnaliser l’app et accompagner vos routines sur la durée.',
        items: [
          'Historique complet au-delà de 30 jours',
          'Stats avancées',
          'Widgets moyen et grand',
          'Archives et routine suivante',
          'Icônes, couleurs et durées d’engagement',
          'Paliers de streak célébrés',
          'Joker mensuel pour protéger votre série',
        ],
      },
    ],
    premiumBenefits: [
      {
        title: 'Stats avancées',
        description:
          'Des vues plus riches pour comprendre votre progression sans complexifier l’app.',
      },
      {
        title: 'Historique complet',
        description:
          'Gardez vos mois passés au-delà de la fenêtre gratuite de 30 jours.',
      },
      {
        title: 'Widgets avancés',
        description:
          'Débloquez les formats moyen et grand pour suivre votre routine d’un coup d’œil.',
      },
      {
        title: 'Archives',
        description:
          'Terminez une routine, archivez-la, puis passez à la suivante.',
      },
      {
        title: 'Icônes premium',
        description:
          'Plus de symboles pour reconnaître vos routines plus vite.',
      },
      {
        title: 'Durées d’engagement',
        description: 'Cadrez une routine sur 7, 10, 15 ou 30 jours.',
      },
      {
        title: 'Couleurs étendues',
        description: 'Personnalisez l’app sans alourdir l’expérience.',
      },
      {
        title: 'Paliers célébrés',
        description:
          'Des moments visuels à 7, 14, 30, 60, 100, 200 et 365 jours.',
      },
      {
        title: 'Protection de série',
        description: 'Un joker mensuel quand la vie s’en mêle.',
      },
    ],
  },
  legal: {
    fr: {
      title: 'Politique de confidentialité',
      paragraphs: [
        'FocusOne ne collecte aucune donnée personnelle identifiable.',
        'Votre habitude active et vos check-ins journaliers sont stockés localement sur votre iPhone via Core Data. Si la synchronisation iCloud est activée sur votre appareil, ces données sont également synchronisées sur vos autres appareils Apple via iCloud — sans passer par un serveur tiers.',
        'Quelques préférences sont conservées localement dans les réglages système de l’iPhone : état d’onboarding, préférences de notifications, état de l’abonnement et date de début de la période d’essai. Ces données restent sur l’appareil.',
        'Lorsque vous utilisez les widgets de l’écran d’accueil, un snapshot réduit de vos données est partagé entre l’app et l’extension widget via un App Group local géré par iOS.',
        'Si vous activez les rappels quotidiens, FocusOne programme des notifications locales sur votre iPhone. Aucune notification distante n’est utilisée.',
        'Si vous souscrivez à FocusOne Premium — abonnement annuel ou accès à vie — la transaction est gérée par Apple via l’App Store. FocusOne ne reçoit ni ne stocke vos informations de paiement. Seul l’état de l’achat est conservé localement.',
        'FocusOne n’intègre aucun système de tracking, aucune publicité et aucun SDK tiers comme Firebase, Amplitude ou Mixpanel.',
        'Pour supprimer vos données, désactivez la synchronisation iCloud pour FocusOne dans Réglages → [votre nom] → iCloud, puis supprimez l’app de votre iPhone.',
        'FocusOne n’est pas destinée aux enfants de moins de 13 ans.',
        'Pour toute question, la page FocusOne reste le point de contact.',
      ],
    },
    en: {
      title: 'Privacy Policy',
      paragraphs: [
        'FocusOne does not collect any personally identifiable information.',
        'Your active habit and daily check-ins are stored locally on your iPhone using Core Data. If iCloud is enabled on your device, this data is also synced to your other Apple devices via iCloud — without going through any third-party server.',
        'A few preferences are kept locally in iPhone system storage: onboarding state, notification preferences, subscription status, and trial start date. This data stays on the device.',
        'When you use the home screen widgets, a limited snapshot of your data is shared between the app and the widget extension through a local App Group managed by iOS.',
        'If you enable daily reminders, FocusOne schedules local notifications on your iPhone. No remote push notifications are used.',
        'If you subscribe to FocusOne Premium — yearly subscription or lifetime access — Apple handles the transaction through the App Store. FocusOne does not receive or store payment information. Only the purchase state is kept locally.',
        'FocusOne includes no tracking, no advertising, and no third-party SDKs such as Firebase, Amplitude, or Mixpanel.',
        'To delete your data, disable iCloud sync for FocusOne in Settings → [your name] → iCloud, then delete the app from your iPhone.',
        'FocusOne is not intended for children under 13.',
        'For any question, the FocusOne page remains the contact point.',
      ],
    },
  },
  cta: {
    title: 'Informations pratiques',
    description:
      'Retrouvez sur cette page les captures, les tarifs, le support et la confidentialité.',
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/?app=focus-one&type=support',
  },
  seo: {
    title: 'FocusOne — compteur privé d’habitude et de série',
    description:
      'FocusOne vous aide à tenir une seule promesse personnelle à la fois. Choisissez une habitude, cochez-la chaque jour et suivez votre série sans compte ni réseau social.',
    image: '/img/apps/focus-one/03-aujourd-hui.webp',
  },
}

export const duoSpendContent: AppDetailContent = {
  slug: 'duo-spend',
  name: 'DuoSpend',
  platform: 'iOS',
  stage: 'Disponible sur l’App Store',
  href: '/apps/duo-spend/',
  appStoreUrl: 'https://apps.apple.com/us/app/duospend/id6769080529',
  intro: 'Qui doit combien à qui ?',
  summary:
    "DuoSpend aide les couples à suivre les dépenses d'un projet commun : voyage, emménagement, mariage, travaux. Chacun ajoute ce qu’il a payé, l’app calcule ce qu’il reste à équilibrer.",
  heroLines: [
    "DuoSpend aide les couples à suivre les dépenses d'un projet commun : voyage, emménagement, mariage, travaux.",
    'Chacun ajoute ce qu’il a payé, l’app calcule ce qu’il reste à équilibrer, sans banque connectée et sans tableur.',
  ],
  overview: [
    'Les dépenses d’un projet à deux s’accumulent vite : voyage, emménagement, mariage, travaux, week-end ou vacances.',
    'Au début, tout semble évident. Puis on oublie qui a payé quoi, on reporte les calculs, on garde une note dans un coin, ou on finit dans un tableur que personne n’a envie de tenir.',
    'DuoSpend simplifie ce suivi : chaque dépense est ajoutée en quelques secondes, les soldes restent lisibles, et chacun sait ce qu’il doit ou ce qu’il a avancé.',
  ],
  detailPoints: [
    {
      label: 'Dépenses partagées',
      value: 'Un projet commun, deux personnes, un solde lisible.',
      description:
        'Chaque paiement rejoint le même fil : voyage, mariage, travaux ou emménagement. L’app garde qui a payé quoi et ce qu’il reste à équilibrer.',
      featured: true,
    },
    {
      label: 'Soldes clairs',
      value: 'Qui a payé quoi, qui doit quoi.',
      description:
        'DuoSpend calcule automatiquement qui a avancé de l’argent et combien il reste à équilibrer.',
    },
    {
      label: 'Pensé pour deux',
      value: 'Couple, colocation, amis ou proches.',
      description:
        'Un usage simple pour garder des comptes propres sans transformer l’app en outil de comptabilité.',
    },
    {
      label: 'Sans tableur',
      value: 'Plus de notes dispersées ni de calculs à la main.',
      description: 'L’app garde le fil pour vous, projet après projet.',
    },
    {
      label: 'Lecture rapide',
      value: 'Une situation claire en quelques secondes.',
      description:
        'Une interface sobre pour comprendre l’équilibre des comptes sans fouiller.',
    },
    {
      label: 'Disponible',
      value: 'L’app est publiée sur l’App Store.',
      description:
        'DuoSpend est gratuite au téléchargement, avec DuoSpend Pro en achat intégré unique.',
    },
  ],
  preview: {
    src: '/img/apps/duospend-hero.webp',
    alt: "Écran d'accueil de DuoSpend sur iPhone 15",
    available: true,
    label: "Aperçu de l'app",
    fit: 'contain',
  },
  showVisual: false,
  gallery: [
    {
      src: '/img/apps/duospend-resume.webp',
      alt: 'Aperçu de l’écran résumé DuoSpend',
      title: 'Résumé',
      subtitle: 'Vue d’ensemble du projet',
    },
    {
      src: '/img/apps/duospend-depense1.webp',
      alt: 'Aperçu de la première dépense dans DuoSpend',
      title: 'Dépense 1',
      subtitle: 'Saisie et partage',
    },
    {
      src: '/img/apps/duospend-depense2.webp',
      alt: 'Aperçu de la seconde dépense dans DuoSpend',
      title: 'Dépense 2',
      subtitle: 'Suivi de la balance',
    },
    {
      src: '/img/apps/duospend-ajout-depense.webp',
      alt: 'Aperçu de l’ajout d’une dépense dans DuoSpend',
      title: 'Ajout',
      subtitle: 'Entrée rapide',
    },
    {
      src: '/img/apps/duospend-export-pdf.webp',
      alt: 'Aperçu de l’export PDF dans DuoSpend',
      title: 'Export PDF',
      subtitle: 'Récapitulatif partageable',
    },
    {
      src: '/img/apps/duospend-nouveau-projet.webp',
      alt: 'Aperçu de la création d’un projet dans DuoSpend',
      title: 'Nouveau projet',
      subtitle: 'Démarrage du suivi',
    },
  ],
  faq: duoSpendFaqSections.flatMap((section) => section.items),
  faqSections: duoSpendFaqSections,
  pricing: {
    title: 'Tarifs',
    intro: 'Gratuit au téléchargement · DuoSpend Pro : 6,99 €.',
    plans: [
      {
        name: 'Gratuit',
        price: 'Gratuit',
        description: 'Téléchargez DuoSpend et gérez un premier projet partagé.',
        items: ['1 projet complet', 'Fonctions essentielles incluses'],
      },
      {
        name: 'DuoSpend Pro',
        price: '6,99 €',
        description:
          'Achat intégré unique via l’App Store. Prix localisé selon le pays.',
        items: [
          'Projets illimités',
          "Widgets pour l'écran d'accueil",
          'Export PDF',
          'Partage familial Apple',
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
        `Dans la version actuellement disponible (${duoSpendReleaseState.availableVersion}), les projets et dépenses sont stockés localement sur votre iPhone avec SwiftData. La version ${duoSpendReleaseState.submittedVersion}, soumise à l’App Store, ajoute la création d’un fichier que vous choisissez vous-même d’enregistrer ou d’envoyer via les services proposés par iOS. DuoSpend n’envoie pas vos projets vers un serveur.`,
        'DuoSpend ne synchronise pas automatiquement les projets entre les appareils dans cette version.',
        'Lorsque vous utilisez les widgets de l’écran d’accueil, une copie réduite des données peut être partagée entre l’app et l’extension widget via un App Group local géré par iOS.',
        'Si vous achetez DuoSpend Pro, la transaction est gérée par Apple via l’App Store. DuoSpend Pro peut être partagé avec les membres éligibles de votre groupe familial Apple lorsque le partage familial est activé. DuoSpend ne reçoit ni ne stocke vos informations de paiement. Seul l’état de l’achat est conservé localement.',
        'DuoSpend n’intègre aucun système de tracking, aucune publicité et aucun SDK tiers comme Firebase, Amplitude ou Mixpanel.',
        'La version actuelle fonctionne hors ligne.',
        'Vous pouvez supprimer toutes vos données depuis Réglages → Données → Supprimer toutes les données. L’action est irréversible.',
        'DuoSpend n’est pas destinée aux enfants de moins de 13 ans.',
        'Pour toute question, la page DuoSpend reste le point de contact.',
      ],
    },
    en: {
      title: 'Privacy policy',
      paragraphs: [
        'DuoSpend does not collect any personally identifiable information.',
        `In the currently available version (${duoSpendReleaseState.availableVersion}), projects and expenses are stored locally on your iPhone using SwiftData. Version ${duoSpendReleaseState.submittedVersion}, submitted to the App Store, adds a project file that you choose to save or send using the services provided by iOS. DuoSpend does not upload your projects to a server.`,
        'DuoSpend does not automatically sync projects between devices in this version.',
        'When you use the home screen widgets, a limited copy of your data may be shared between the app and the widget extension through a local App Group managed by iOS.',
        'If you purchase DuoSpend Pro, the transaction is handled by Apple through the App Store. DuoSpend Pro can be shared with eligible members of your Apple Family Sharing group when Family Sharing is enabled. DuoSpend does not receive or store your payment information. Only the purchase state is kept locally.',
        'DuoSpend includes no tracking, no advertising, and no third-party SDKs such as Firebase, Amplitude, or Mixpanel.',
        'The current version works fully offline.',
        'You can delete all your data from Settings → Data → Delete all data. This action is irreversible.',
        'DuoSpend is not intended for children under 13.',
        'For any question, the DuoSpend page remains the contact point.',
      ],
    },
  },
  cta: {
    title: 'Informations pratiques',
    description:
      'Retrouvez sur cette page les captures, les tarifs, le support et la confidentialité.',
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/?app=duo-spend&type=support',
  },
  seo: {
    title: 'DuoSpend — App de dépenses partagées pour couples',
    description:
      'DuoSpend aide les couples à suivre les dépenses d’un projet commun : voyage, emménagement, mariage ou travaux, sans banque connectée ni tableur.',
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

export const situremContent: AppDetailContent = {
  slug: 'siturem',
  name: 'Siturem',
  platform: 'iOS',
  stage: 'Prépublication',
  href: '/apps/siturem/',
  intro: 'Une séance structurée, sans bruit autour.',
  summary:
    'Méditation structurée pour pratiquants autonomes, sans catalogue de contenus ni promesse bien-être excessive.',
  overview: [
    "La plupart des apps de méditation misent sur le contenu guidé, les programmes, les notifications et la gamification. Pour un pratiquant déjà autonome, cela crée souvent plus de bruit que d'aide.",
    "Siturem prend la direction inverse : une séance prête à l'emploi, structurée en trois temps, avec peu d'options et aucune surcharge éditoriale. L'app ne cherche pas à enseigner la méditation. Elle sert à installer un cadre fiable et à s'effacer derrière la pratique.",
  ],
  detailPoints: [
    {
      label: 'Structure',
      value: '3 phases fixes : introduction, pratique, retour.',
      description:
        "Le cœur de Siturem repose sur une séance stable et reproductible. Vous lancez l'app, vous entrez dans le cadre, puis vous laissez la pratique prendre le relais.",
      featured: true,
    },
    {
      label: 'Durée minimale',
      value: '6 minutes pour préserver la cohérence de la séance.',
      description:
        'Le cadre évite les sessions trop courtes qui cassent l’entrée, la pratique et le retour.',
    },
    {
      label: 'Accompagnement',
      value:
        'Silencieux, structuré ou guidé léger, avec gong et rappels discrets.',
      description:
        'Les réglages servent la séance, sans transformer Siturem en catalogue de contenus.',
    },
    {
      label: 'Suivi',
      value:
        'Temps total, historique 7 / 30 jours et streak discret, sans gamification agressive.',
      description:
        'Quelques repères suffisent pour revoir sa régularité sans ajouter de pression.',
    },
    {
      label: 'Données',
      value:
        'Approche locale, sans compte imposé. Intégration HealthKit optionnelle.',
      description:
        'Les données restent limitées à l’usage réel et aux intégrations activées.',
    },
  ],
  preview: {
    src: '/img/siturem/siturem-landing.webp',
    alt: 'Écran principal de Siturem sur iPhone',
    available: true,
    label: "Aperçu de l'app",
    fit: 'contain',
  },
  showVisual: true,
  gallery: [
    {
      src: '/img/siturem/siturem-meditation-screen.webp',
      alt: 'Séance de méditation en cours dans Siturem',
      title: 'Séance',
      subtitle: 'Le timer s’efface derrière la pratique',
    },
    {
      src: '/img/siturem/siturem-interface.webp',
      alt: 'Réglages de séance dans Siturem',
      title: 'Réglages',
      subtitle: 'Durée, ambiance, gong et rappels',
    },
    {
      src: '/img/siturem/siturem-intro-1.webp',
      alt: 'Première étape d’introduction dans Siturem',
      title: 'Introduction',
      subtitle: 'Entrer dans la séance sans bruit',
    },
    {
      src: '/img/siturem/siturem-intro-2.webp',
      alt: 'Deuxième écran d’introduction dans Siturem',
      title: 'Cadre',
      subtitle: 'Une structure stable, sans surcharge',
    },
    {
      src: '/img/siturem/siturem-intro-3.webp',
      alt: 'Troisième écran d’introduction dans Siturem',
      title: 'Retour',
      subtitle: 'Sortir progressivement de la pratique',
    },
  ],
  faq: situremFaqSections.flatMap((section) => section.items),
  faqSections: situremFaqSections,
  legal: {
    fr: {
      title: 'Politique de confidentialité',
      paragraphs: [
        'Dernière mise à jour : 22 avril 2026.',
        'Cette politique décrit comment Siturem traite les données personnelles lorsque vous utilisez l’application iOS et la page associée publiée sur beabot.fr.',
        'Responsable du traitement : beabot.fr. Projet concerné : Siturem. Contact : hello@beabot.fr.',
        'Selon votre usage, Siturem peut traiter des préférences de séance, la durée choisie, des réglages audio, les paramètres de gong ou de rappels, la langue de l’interface et des statistiques locales de pratique.',
        'Les données de séance peuvent inclure la date et l’heure, la durée prévue, la durée réalisée, le nombre de séances et des statistiques agrégées comme le temps total, les périodes de 7 ou 30 jours, le streak actuel ou le meilleur streak.',
        'Si vous activez l’intégration Apple Health / HealthKit, Siturem peut écrire des données liées à vos séances dans l’app Santé. Aucun accès à HealthKit n’a lieu sans votre consentement explicite.',
        'Comme toute app, Siturem peut aussi traiter certaines informations techniques strictement nécessaires à son fonctionnement, à sa sécurité, à la résolution d’erreurs ou à sa distribution via l’écosystème Apple.',
        'Par principe, Siturem n’a pas vocation à imposer un compte utilisateur, vendre vos données, exploiter vos séances à des fins publicitaires, publier vos données de pratique ni imposer un suivi analytique invasif.',
        'Les données servent uniquement à faire fonctionner l’app, mémoriser vos réglages, calculer vos statistiques, enregistrer une séance dans Apple Health si vous avez activé cette option, améliorer la stabilité et répondre à vos demandes.',
        'Les traitements reposent selon les cas sur l’exécution du service, votre consentement pour les fonctions optionnelles comme HealthKit, l’intérêt légitime pour la sécurité et la maintenance, ou une obligation légale.',
        'Une partie importante des données est conçue pour être stockée localement sur votre appareil. Si certains traitements impliquent Apple ou des prestataires strictement nécessaires, ils restent soumis à leurs propres conditions et politiques.',
        'Les données ne sont pas revendues. Elles peuvent être partagées avec Apple si cela est nécessaire au fonctionnement de l’app, à HealthKit, aux achats intégrés, au support ou à la distribution, avec des prestataires techniques indispensables au site, ou si la loi l’exige.',
        'Les préférences et statistiques locales restent stockées tant que vous utilisez l’application ou jusqu’à leur suppression. Les messages envoyés au support peuvent être conservés le temps nécessaire au traitement de la demande.',
        'Des mesures raisonnables sont mises en œuvre pour protéger les données. Selon votre pays et le droit applicable, vous pouvez disposer de droits d’accès, de rectification, d’effacement, de limitation, d’opposition, de portabilité et de retrait du consentement.',
        'Cette politique peut être mise à jour pour refléter une évolution de l’application, un changement de prestataire ou une modification légale. Pour toute question relative à la confidentialité : hello@beabot.fr.',
      ],
    },
    en: {
      title: 'Privacy policy',
      paragraphs: [
        'Last updated: April 22, 2026.',
        'This policy explains how Siturem processes personal data when you use the iOS application and the related page published on beabot.fr.',
        'Data controller: beabot.fr. Project: Siturem. Contact: hello@beabot.fr.',
        'Depending on how you use the app, Siturem may process session preferences, selected duration, audio settings, gong or reminder settings, interface language, and local practice statistics.',
        'Session data may include date and time, planned duration, completed duration, number of sessions, and aggregated statistics such as total practice time, 7-day or 30-day activity, current streak, or best streak.',
        'If you enable Apple Health / HealthKit integration, Siturem may write data related to your sessions to Apple Health. Siturem does not access HealthKit without your explicit consent.',
        'Like any application, Siturem may also process limited technical information strictly necessary for operation, security, error resolution, or distribution through Apple’s ecosystem.',
        'By design, Siturem is not intended to require a mandatory account, sell your data, use your sessions for advertising, publish your practice data, or impose invasive analytics tracking.',
        'Your data is used only to operate the app, save settings, calculate practice statistics, record a session in Apple Health if enabled, improve stability and compatibility, and respond to your requests.',
        'Processing relies, depending on the situation, on performance of the requested service, your consent for optional features such as HealthKit, legitimate interest for maintenance and security, or legal obligation.',
        'A significant part of Siturem data is designed to remain stored locally on your device. If Apple or strictly necessary technical providers are involved, their own terms and policies apply.',
        'Your data is not sold. It may be shared with Apple when necessary for app operation, HealthKit, in-app purchases, support, or App Store distribution, with essential technical providers, or where required by law.',
        'Local preferences and statistics remain stored as long as you use the app or until they are deleted. Support messages may be retained for the time needed to process your request and any follow-up.',
        'Reasonable safeguards are implemented to protect data. Depending on applicable law, you may have rights of access, rectification, erasure, restriction, objection, portability, and withdrawal of consent.',
        'This policy may be updated to reflect changes in the app, providers, or legal requirements. For any privacy-related question: hello@beabot.fr.',
      ],
    },
    es: {
      title: 'Política de privacidad',
      paragraphs: [
        'Última actualización: 22 de abril de 2026.',
        'Esta política explica cómo Siturem trata los datos personales cuando utiliza la aplicación iOS y la página relacionada publicada en beabot.fr.',
        'Responsable del tratamiento: beabot.fr. Proyecto: Siturem. Contacto: hello@beabot.fr.',
        'Según el uso que haga de la aplicación, Siturem puede tratar preferencias de sesión, duración seleccionada, ajustes de audio, configuración de gong o recordatorios, idioma de la interfaz y estadísticas locales de práctica.',
        'Los datos de sesión pueden incluir fecha y hora, duración prevista, duración realizada, número de sesiones y estadísticas agregadas como tiempo total practicado, actividad de 7 o 30 días, racha actual o mejor racha.',
        'Si activa Apple Health / HealthKit, Siturem puede escribir datos relacionados con sus sesiones en Apple Health. Siturem no accede a HealthKit sin su consentimiento explícito.',
        'Como cualquier aplicación, Siturem también puede tratar información técnica mínima estrictamente necesaria para su funcionamiento, seguridad, resolución de errores o distribución a través del ecosistema Apple.',
        'Por principio, Siturem no está pensada para exigir una cuenta obligatoria, vender sus datos, utilizar sus sesiones con fines publicitarios, publicar sus datos de práctica ni imponer un seguimiento analítico invasivo.',
        'Los datos se usan únicamente para hacer funcionar la aplicación, guardar sus ajustes, calcular estadísticas, registrar una sesión en Apple Health si la opción está activada, mejorar la estabilidad y responder a sus solicitudes.',
        'El tratamiento se basa, según el caso, en la ejecución del servicio, su consentimiento para funciones opcionales como HealthKit, el interés legítimo para mantenimiento y seguridad, o una obligación legal.',
        'Una parte importante de los datos está diseñada para almacenarse localmente en su dispositivo. Si intervienen Apple o proveedores técnicos estrictamente necesarios, se aplican sus propias condiciones y políticas.',
        'Sus datos no se venden. Solo pueden compartirse con Apple cuando sea necesario para el funcionamiento de la app, HealthKit, compras integradas, soporte o distribución, con proveedores técnicos esenciales o cuando la ley lo exija.',
        'Las preferencias y estadísticas locales permanecen almacenadas mientras utilice la aplicación o hasta que se eliminen. Los mensajes enviados al soporte pueden conservarse el tiempo necesario para tramitar su solicitud.',
        'Se aplican medidas razonables para proteger los datos. Según la legislación aplicable, puede tener derechos de acceso, rectificación, supresión, limitación, oposición, portabilidad y retirada del consentimiento.',
        'Esta política puede actualizarse para reflejar cambios en la aplicación, en los proveedores o en los requisitos legales. Para cualquier cuestión de privacidad: hello@beabot.fr.',
      ],
    },
    de: {
      title: 'Datenschutzerklärung',
      paragraphs: [
        'Letzte Aktualisierung: 22. April 2026.',
        'Diese Erklärung erläutert, wie Siturem personenbezogene Daten verarbeitet, wenn Sie die iOS-App und die zugehörige Seite auf beabot.fr nutzen.',
        'Verantwortlicher: beabot.fr. Projekt: Siturem. Kontakt: hello@beabot.fr.',
        'Je nach Nutzung kann Siturem Sitzungseinstellungen, ausgewählte Dauer, Audioeinstellungen, Gong- oder Erinnerungseinstellungen, Sprache der Benutzeroberfläche und lokale Praxisstatistiken verarbeiten.',
        'Zu den Sitzungsdaten können Datum und Uhrzeit, geplante Dauer, tatsächliche Dauer, Anzahl der Sitzungen sowie aggregierte Statistiken wie gesamte Praxiszeit, Aktivität über 7 oder 30 Tage, aktuelle Serie oder beste Serie gehören.',
        'Wenn Sie Apple Health / HealthKit aktivieren, kann Siturem Daten zu Ihren Sitzungen in Apple Health schreiben. Ein Zugriff auf HealthKit erfolgt nicht ohne Ihre ausdrückliche Einwilligung.',
        'Wie jede App kann Siturem außerdem minimale technische Informationen verarbeiten, die für Betrieb, Sicherheit, Fehlerbehebung oder die Verteilung über das Apple-Ökosystem unbedingt erforderlich sind.',
        'Grundsätzlich ist Siturem nicht darauf ausgelegt, ein Pflichtkonto zu verlangen, Daten zu verkaufen, Sitzungen für Werbung zu nutzen, Praxisdaten zu veröffentlichen oder invasives Tracking einzusetzen.',
        'Die Daten werden nur verwendet, um die App zu betreiben, Einstellungen zu speichern, Praxisstatistiken zu berechnen, eine Sitzung in Apple Health zu erfassen, die Stabilität zu verbessern und auf Anfragen zu antworten.',
        'Die Verarbeitung stützt sich je nach Fall auf die Erbringung des Dienstes, Ihre Einwilligung für optionale Funktionen wie HealthKit, das berechtigte Interesse an Wartung und Sicherheit oder auf gesetzliche Pflichten.',
        'Ein wesentlicher Teil der Daten ist dafür vorgesehen, lokal auf Ihrem Gerät gespeichert zu bleiben. Wenn Apple oder unbedingt notwendige technische Dienstleister beteiligt sind, gelten deren eigene Bedingungen und Richtlinien.',
        'Ihre Daten werden nicht verkauft. Sie können nur mit Apple geteilt werden, wenn dies für den Betrieb der App, HealthKit, In-App-Käufe, Support oder die Verteilung erforderlich ist, mit essenziellen technischen Dienstleistern oder wenn das Gesetz es verlangt.',
        'Lokale Einstellungen und Statistiken bleiben gespeichert, solange Sie die Anwendung nutzen oder bis sie gelöscht werden. An den Support gesendete Nachrichten können für die Bearbeitung Ihrer Anfrage aufbewahrt werden.',
        'Es werden angemessene Schutzmaßnahmen umgesetzt. Je nach anwendbarem Recht können Ihnen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit und Widerruf der Einwilligung zustehen.',
        'Diese Erklärung kann aktualisiert werden, um Änderungen der App, der Dienstleister oder der rechtlichen Anforderungen abzubilden. Bei Fragen zum Datenschutz: hello@beabot.fr.',
      ],
    },
  },
  cta: {
    title: 'Informations pratiques',
    description:
      'Retrouvez sur cette page les captures, le support et la confidentialité.',
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/?app=siturem&type=support',
  },
  seo: {
    title: 'Siturem — timer iOS pour méditer',
    description:
      'Siturem est un timer de méditation iOS conçu pour offrir un cadre stable, régulier et sans distraction aux pratiquants avancés.',
    image: '/img/siturem/siturem-landing.webp',
  },
}

export const buildCollectionPageSchema = ({
  siteUrl,
  pageUrl,
  name,
  description,
}: CollectionPageSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name,
  description,
  url: pageUrl,
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'BeAbot',
    url: siteUrl,
  },
})

export const buildSoftwareApplicationSchema = ({
  name,
  description,
  url,
  operatingSystem,
  applicationCategory,
  image,
  offers,
  author,
}: SoftwareApplicationSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  description,
  url,
  operatingSystem,
  applicationCategory,
  ...(image ? { image } : {}),
  ...(offers?.length
    ? {
        offers: offers.map((offer) => ({
          '@type': 'Offer',
          name: offer.name,
          price: offer.price,
          priceCurrency: offer.priceCurrency,
          ...(offer.description ? { description: offer.description } : {}),
        })),
      }
    : {}),
  ...(author
    ? {
        author: {
          '@type': 'Person',
          name: author.name,
          url: author.url,
        },
      }
    : {}),
})

export const buildFaqSchema = (items: AppFaqItem[]) => ({
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

export const buildItemListSchema = (
  siteUrl: string,
  items: AppIndexEntry[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: canonicalUrl(siteUrl, item.href),
  })),
})

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
