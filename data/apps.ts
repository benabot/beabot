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
  showVisual: boolean
  capabilities?: string[]
  useCases?: string[]
  detailPoints: AppDetailPoint[]
  limits?: string[]
  principles?: string[]
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
  }
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

export const appsIndexContent = {
  title: 'Applications iOS & macOS',
  intro: 'Deux apps natives conçues pour aller droit au but.',
  meta: "Pas d'abonnement caché, pas de compte imposé.",
  seo: {
    title: 'Applications iOS & macOS — BeAbot',
    description:
      'DuoSpend pour gérer vos dépenses à deux, Meeting Mode pour préparer votre Mac avant une réunion. Deux apps natives Swift, sans abonnement.',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    stage: 'Prépublication',
    summary: "Solde net en un coup d'œil.",
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
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    stage: 'Prépublication',
    summary: 'Préparer un Mac avant une réunion.',
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
  intro:
    'Meeting Mode prépare votre Mac pour une réunion, une démo ou un partage d’écran en un clic : il ouvre ce qu’il faut, masque le reste, affiche un écran propre, puis propose un restore simple et compréhensible.',
  summary: 'Préparer, montrer, restaurer.',
  overview: [
    'Meeting Mode reste centré sur un flux court, fiable et compréhensible.',
  ],
  capabilities: [
    'ouvrir des applications utiles à votre réunion',
    'ouvrir des URLs et des fichiers locaux',
    'masquer, en best effort, les apps visibles qui ne font pas partie du preset',
    'afficher un écran visuellement propre avec le clean screen overlay',
    'restaurer ensuite ce que l’app a réellement modifié',
  ],
  useCases: [
    'des démos produit',
    'des visios clients',
    'des entretiens',
    'du support en partage d’écran',
    'des présentations internes',
    'des calls où il faut ouvrir toujours les mêmes éléments, tout en évitant d’exposer le reste',
  ],
  detailPoints: [
    {
      label: 'Un vrai flux en un clic',
      value:
        'Vous choisissez un preset, vous lancez la session, et l’app exécute l’essentiel immédiatement.',
    },
    {
      label: 'Pensé pour le partage d’écran',
      value:
        'L’objectif n’est pas la productivité générale. L’objectif est de rendre l’écran propre, lisible et présentable avant un partage.',
    },
    {
      label: 'Restore clair, sans magie',
      value:
        'Meeting Mode tente de restaurer uniquement ce qu’il a réellement modifié pendant la session.',
    },
    {
      label: 'Local d’abord',
      value:
        'Les presets et l’état de session sont stockés localement. Pas de cloud imposé, pas de compte, pas de couche inutile.',
    },
  ],
  limits: [
    'la restauration parfaite de toutes les fenêtres',
    "la fermeture précise d'un onglet de navigateur déjà ouvert",
    "la fermeture précise d'un document dans une app déjà en cours d'exécution",
    'la reconstruction exacte des Spaces, bureaux virtuels ou états de minimisation',
  ],
  principles: [
    'la fiabilité',
    'la simplicité',
    'la rapidité d’usage',
    'la clarté du restore',
    'la finition visuelle',
  ],
  preview: {
    alt: 'Emplacement de capture pour Meeting Mode',
    available: false,
    label: 'Capture à venir',
  },
  showVisual: false,
  faq: [
    {
      question: 'À quoi sert Meeting Mode ?',
      answer:
        "Meeting Mode sert à préparer rapidement votre Mac avant une réunion, une démo, un entretien ou un partage d’écran. L’app peut ouvrir vos apps, liens et fichiers utiles, masquer certaines apps visibles, afficher un écran propre, puis proposer un restore simple à la fin.",
    },
    {
      question: 'Sur quel système l’app fonctionne-t-elle ?',
      answer: 'Meeting Mode est une app macOS. Elle a été pensée comme une app de barre de menu.',
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
      question: 'Est-ce que Meeting Mode gère les fenêtres, les Spaces ou les onglets du navigateur ?',
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
      answer: 'Oui. Vous pouvez créer, modifier et supprimer plusieurs presets.',
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
      title: 'Mentions légales',
      paragraphs: [
        'Meeting Mode respecte votre vie privée.',
        'Cette politique de confidentialité explique quelles données sont traitées par l’application Meeting Mode, dans quel but, et quels choix vous avez en tant qu’utilisateur.',
        'Meeting Mode est conçue pour fonctionner principalement en local sur votre Mac. L’application enregistre localement vos presets et préférences, gère une session active et un restore simple, et ne requiert pas de compte utilisateur.',
        'Les données stockées localement peuvent inclure vos presets, vos préférences d’application, votre langue choisie, vos raccourcis configurés, l’état de session nécessaire au restore, ainsi que des chemins de fichiers, URLs ou références d’apps que vous avez ajoutés à vos presets.',
        'Ces données restent stockées localement sur votre appareil, sauf si vous décidez vous-même de les exporter, les partager ou les sauvegarder par un autre moyen.',
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
        'This data remains stored locally on your device unless you choose to export, share, or back it up yourself through another means.',
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
    title: "Être informé de la sortie de l'app",
    description: "L'app n'est pas encore publiée. Laissez votre adresse pour recevoir la suite quand elle sera prête.",
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/',
  },
  seo: {
    title: 'Meeting Mode — App macOS menu bar pour réunions | BeAbot',
    description:
      'Meeting Mode prépare votre Mac en un clic : ouvre vos apps, masque le reste, affiche un écran propre. App macOS barre de menu, locale, sans compte.',
  },
}

export const duoSpendContent: AppDetailContent = {
  slug: 'duo-spend',
  name: 'DuoSpend',
  platform: 'iOS',
  stage: 'Prépublication',
  href: '/apps/duo-spend/',
  intro: "Qui doit combien à qui ? Un coup d'œil suffit.",
  summary: 'Un suivi simple pour vos projets partagés.',
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
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/',
  },
  seo: {
    title: 'DuoSpend — App iPhone pour dépenses à deux | BeAbot',
    description:
      'DuoSpend calcule qui doit combien à qui, sur chaque projet commun. Hors ligne, sans compte, sans pub. Achat unique 6,99 €.',
  },
}

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

export const buildItemListSchema = (siteUrl: string, items: AppIndexEntry[]) => ({
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
