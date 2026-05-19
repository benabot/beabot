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
  intro: [
    'Des apps iOS et macOS conçues pour aller à l’essentiel : moins de bruit, moins de comptes, moins de réglages inutiles, plus de valeur concrète.',
    'Chaque app part d’un usage précis et cherche à rester agréable dans la durée : simple à ouvrir, rapide à comprendre, utile sans prendre toute la place.',
  ],
  meta: '',
  seo: {
    title: 'Apps iOS et macOS sobres',
    description:
      'DuoSpend, FocusOne, Meeting Mode et Siturem : apps natives iOS et macOS sobres, utiles, sans compte imposé ni publicité.',
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    stage: 'Prépublication',
    summary:
      "Une app pour couple ou tous ceux qui ont des projets à deux. Qui doit combien à qui\u00a0? Un coup d'œil suffit.\nVoyage, mariage, emménagement — chaque projet a son solde.",
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
    slug: 'focus-one',
    name: 'FocusOne',
    platform: 'iOS',
    stage: 'Prépublication',
    summary:
      'App iPhone minimaliste pour suivre une seule micro-habitude à la fois. Routine quotidienne, streak, rappels locaux et widgets, sans compte ni publicité.',
    href: '/apps/focus-one/',
    featured: true,
    preview: {
      src: '/img/apps/focus-one/06-onboarding.jpeg',
      alt: 'Écran de création d’une routine dans FocusOne sur iPhone',
      available: true,
      label: 'Capture temporaire',
      fit: 'contain',
    },
  },
  {
    slug: 'meeting-mode',
    name: 'Meeting Mode',
    platform: 'macOS',
    stage: 'Prépublication',
    summary:
      'Préparez votre Mac avant une réunion en un clic. Ouvrez le bon, masquez le reste.',
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
  {
    slug: 'siturem',
    name: 'Siturem',
    platform: 'iOS',
    stage: 'Prépublication',
    summary:
      'Méditation timer pour pratiquants avancés. Objectif : fournir un cadre stable pour pratiquer régulièrement, sans friction et sans distraction.',
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
]

const focusOneFaqSections: AppFaqSection[] = [
  {
    title: 'Questions fréquentes',
    items: [
      {
        question: 'FocusOne remplace-t-elle une app d’habitudes classique ?',
        answer:
          'Pas exactement. FocusOne ne cherche pas à tout suivre. Elle sert à installer une seule routine à la fois, avec moins de friction.',
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
        answer:
          'Non. Pas de compte, pas d’email, pas de mot de passe. Vous ouvrez l’app et vous commencez.',
      },
      {
        question: "L'app fonctionne-t-elle sans connexion ?",
        answer:
          'Oui. DuoSpend fonctionne entièrement hors ligne dans sa version actuelle. Vous n’avez pas besoin de Wi‑Fi ni de données mobiles.',
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
        question:
          'Comment ajouter un widget DuoSpend sur mon écran d’accueil ?',
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
        answer:
          'Non. DuoSpend ne dispose d’aucun serveur. Vos données vous appartiennent.',
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
          'Pas encore. La page présente le produit, ses principes et sa politique de confidentialité. Vous pouvez laisser votre adresse pour être prévenu à l’ouverture.',
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
    title: 'Soyez le premier à savoir.',
    description:
      "Meeting Mode arrive bientôt. Laissez votre adresse — je vous préviens dès l'ouverture.",
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/',
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
  stage: 'Prépublication',
  href: '/apps/focus-one/',
  intro: 'Une seule habitude. Chaque jour.',
  summary:
    'L’app iPhone qui vous aide à installer une routine sans vous noyer dans les objectifs, les graphiques et les réglages.',
  heroLines: [
    'L’app iPhone qui vous aide à installer une routine sans vous noyer dans les objectifs, les graphiques et les réglages.',
    'Choisissez une micro-habitude, cochez-la en un geste, gardez votre streak. Rien de plus que ce qu’il faut pour avancer avec régularité.',
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
      value: 'Moins de dispersion, plus de chances de tenir.',
      description:
        'FocusOne vous aide à concentrer votre énergie sur une routine à la fois.',
      featured: true,
    },
    {
      label: 'Un geste par jour',
      value: 'Ouvrez, cochez, repartez.',
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
    src: '/img/apps/focus-one/06-onboarding.jpeg',
    alt: 'Écran de création d’une routine dans FocusOne sur iPhone',
    available: true,
    label: "Aperçu de l'app",
    fit: 'contain',
  },
  showVisual: false,
  gallery: [
    {
      src: '/img/apps/focus-one/06-onboarding.jpeg',
      alt: 'Création d’une routine dans FocusOne',
      title: 'Création',
      subtitle: 'Nom, icône, couleur, rappels et heure de début de journée',
    },
    {
      src: '/img/apps/focus-one/welcome.webp',
      alt: 'Écran de bienvenue FocusOne présentant une seule routine à la fois',
      title: 'Découverte',
      subtitle: 'Une seule routine à la fois, plus claire et plus tenable',
    },
    {
      src: '/img/apps/focus-one/home-streak.webp',
      alt: 'Écran principal de FocusOne avec le bouton Fait',
      title: 'Aujourd’hui',
      subtitle: 'Une action claire : marquer l’habitude comme faite',
    },
    {
      src: '/img/apps/focus-one/home-streak.webp',
      alt: 'Suivi du streak quotidien dans FocusOne',
      title: 'Streak',
      subtitle: 'Série actuelle, meilleur streak et état du jour',
    },
    {
      src: '/img/apps/focus-one/06-onboarding.jpeg',
      alt: 'Statistiques mensuelles dans FocusOne',
      title: 'Statistiques',
      subtitle: 'Calendrier mensuel, complétion 7 et 30 jours',
    },
    {
      src: '/img/apps/focus-one/06-onboarding.jpeg',
      alt: 'Widget iOS FocusOne affichant la routine active',
      title: 'Widgets',
      subtitle: 'Aperçu rapide sur écran d’accueil ou verrouillé',
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
        description: 'Pour commencer une routine sans friction.',
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
    title: 'Soyez le premier à savoir.',
    description:
      "FocusOne arrive bientôt. Laissez votre adresse — je vous préviens dès l'ouverture.",
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/',
  },
  seo: {
    title: 'FocusOne — App iPhone pour suivre une seule habitude',
    description:
      'FocusOne est une app iPhone minimaliste pour installer une seule micro-habitude à la fois : routine quotidienne, streak, widgets et rappels sobres.',
    image: '/img/apps/focus-one/06-onboarding.jpeg',
  },
}

export const duoSpendContent: AppDetailContent = {
  slug: 'duo-spend',
  name: 'DuoSpend',
  platform: 'iOS',
  stage: 'Prépublication',
  href: '/apps/duo-spend/',
  intro: 'Conçue sans tracking, sans compte imposé, sans SDK tiers.',
  summary: 'Gérez vos dépenses communes à deux, avec un suivi simple et clair.',
  overview: [
    'Vous organisez un voyage, un mariage, des travaux ou un emménagement. L’un avance les frais, l’autre rembourse — mais le solde n’est jamais évident à suivre.',
    'DuoSpend est conçue pour deux. Créez un projet, ajoutez vos dépenses, choisissez qui paie quoi et en quelle proportion. L’app calcule le solde net en temps réel, sans tracking, sans compte imposé, sans SDK tiers.',
  ],
  detailPoints: [
    {
      label: 'Un solde',
      value: 'Un seul chiffre. Qui rembourse qui.',
      description:
        'Pas de tableau, pas de calculatrice. DuoSpend additionne chaque dépense, applique la répartition choisie, et affiche en permanence qui doit combien à qui — sur chaque projet.',
      featured: true,
    },
    {
      label: 'Par projet',
      value: 'Un projet, un espace dédié.',
    },
    {
      label: 'Répartition',
      value: 'Chacun sa part, définie à la dépense.',
    },
    {
      label: 'Local',
      value:
        'Vos données vous appartiennent. Pas de tracking, pas de SDK tiers.',
    },
    {
      label: 'Technologie',
      value:
        'Swift natif, sans dépendance externe. Support assuré directement par son auteur.',
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
    intro: "Gratuit pour commencer. Un achat unique pour ne plus s'arrêter.",
    plans: [
      {
        name: 'Gratuit',
        price: '0 €',
        description: 'Un projet. Toutes les fonctions. Gratuit.',
        items: ['1 projet complet', 'Fonctions essentielles incluses'],
      },
      {
        name: 'DuoSpend Pro',
        price: '6,99 €',
        description: 'Achat unique, à vie. Aucun abonnement.',
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
        'Dans la version actuelle, les projets que vous créez et les dépenses que vous enregistrez sont stockés localement sur votre iPhone avec SwiftData. Une synchronisation iCloud optionnelle est prévue dans une prochaine version ; cette politique sera mise à jour en conséquence.',
        'Lorsque vous utilisez les widgets de l’écran d’accueil, une copie réduite des données peut être partagée entre l’app et l’extension widget via un App Group local géré par iOS.',
        'Si vous achetez DuoSpend Pro, la transaction est gérée par Apple via l’App Store. DuoSpend ne reçoit ni ne stocke vos informations de paiement. Seul l’état de l’achat est conservé localement.',
        'DuoSpend n’intègre aucun système de tracking, aucune publicité et aucun SDK tiers comme Firebase, Amplitude ou Mixpanel.',
        'La version actuelle fonctionne hors ligne. Une synchronisation iCloud optionnelle est prévue dans une prochaine version.',
        'Vous pouvez supprimer toutes vos données depuis Réglages → Données → Supprimer toutes les données. L’action est irréversible.',
        'DuoSpend n’est pas destinée aux enfants de moins de 13 ans.',
        'Pour toute question, la page DuoSpend reste le point de contact.',
      ],
    },
    en: {
      title: 'Privacy policy',
      paragraphs: [
        'DuoSpend does not collect any personally identifiable information.',
        'In the current version, projects and expenses are stored locally on your iPhone with SwiftData. Optional iCloud sync is planned for a future version; this policy will be updated accordingly.',
        'When you use the home screen widgets, a limited copy of your data may be shared between the app and the widget extension through a local App Group managed by iOS.',
        'If you purchase DuoSpend Pro, Apple handles the transaction through the App Store. DuoSpend does not receive or store payment information. Only the purchase state is kept locally.',
        'DuoSpend includes no tracking, no advertising, and no third-party SDKs such as Firebase, Amplitude, or Mixpanel.',
        'The current version works fully offline. Optional iCloud sync is planned for a future version.',
        'You can delete all your data from Settings → Data → Delete all data. This action is irreversible.',
        'DuoSpend is not intended for children under 13.',
        'For any question, the DuoSpend page remains the contact point.',
      ],
    },
  },
  cta: {
    title: 'Soyez le premier à savoir.',
    description:
      "DuoSpend arrive bientôt. Laissez votre adresse — je vous préviens dès l'ouverture.",
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/',
  },
  seo: {
    title: 'DuoSpend — app iPhone pour dépenses à deux',
    description:
      'DuoSpend calcule qui doit combien à qui, sur chaque projet commun. Hors ligne, sans compte, sans pub. Achat unique 6,99 €.',
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

export const situremContent: AppDetailContent = {
  slug: 'siturem',
  name: 'Siturem',
  platform: 'iOS',
  stage: 'Prépublication',
  href: '/apps/siturem/',
  intro: 'Conçue pour offrir un cadre stable, régulier et sans distraction.',
  summary:
    'Un timer de méditation iOS pensé pour les pratiquants avancés, avec une structure de séance claire et un suivi discret.',
  overview: [
    "La plupart des apps de méditation misent sur le contenu guidé, les programmes, les notifications et la gamification. Pour un pratiquant déjà autonome, cela crée souvent plus de bruit que d'aide.",
    "Siturem prend la direction inverse : une séance prête à l'emploi, structurée en trois temps, avec peu d'options, peu de friction et aucune surcharge éditoriale. L'app ne cherche pas à enseigner la méditation. Elle sert à installer un cadre fiable et à s'effacer derrière la pratique.",
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
    },
    {
      label: 'Accompagnement',
      value:
        'Silencieux, structuré ou guidé léger, avec gong et rappels discrets.',
    },
    {
      label: 'Suivi',
      value:
        'Temps total, historique 7 / 30 jours et streak discret, sans gamification agressive.',
    },
    {
      label: 'Données',
      value:
        'Approche locale, sans compte imposé. Intégration HealthKit optionnelle.',
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
      subtitle: 'Entrer dans la séance sans friction',
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
    title: 'Soyez le premier à savoir.',
    description:
      "Siturem est en prépublication. Laissez votre adresse — je vous préviens dès l'ouverture.",
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/',
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
