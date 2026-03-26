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
}

export interface BreadcrumbEntry {
  name: string
  path: string
}

export const appsIndexContent = {
  title: 'Applications iOS & macOS',
  intro: [
    "Des applications iOS et macOS pensées pour aller à l'essentiel.",
    "Chaque app est conçue de la même façon que mes sites : sobre, sans couche inutile. Pas de compte imposé, pas de tracking. Vos données vous appartiennent.",
    "Certaines sont gratuites ou à achat unique, d'autres proposeront un abonnement optionnel. Dans tous les cas : un usage clair, une valeur réelle.",
  ],
  meta: '',
  seo: {
    title: 'Apps iOS & macOS — BeAbot',
    description:
      "DuoSpend et Meeting Mode : deux apps natives Swift, sans tracking, sans SDK tiers. D'autres apps à venir, certaines gratuites, certaines avec abonnement.",
    image: '/img/apps/duospend-vignette-apps.webp',
  },
}

export const appsIndexEntries: AppIndexEntry[] = [
  {
    slug: 'duo-spend',
    name: 'DuoSpend',
    platform: 'iOS',
    stage: 'Prépublication',
    summary: "Une app pour couple ou tous ceux qui ont des projets à deux. Qui doit combien à qui\u00a0? Un coup d'œil suffit.\nVoyage, mariage, emménagement — chaque projet a son solde.",
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
    summary: 'Préparez votre Mac avant une réunion en un clic. Ouvrez le bon, masquez le reste.',
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
        answer: 'Non. DuoSpend ne dispose d’aucun serveur. Vos données vous appartiennent.',
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
    title: 'Meeting Mode — App macOS menu bar pour réunions | BeAbot',
    description:
      'Meeting Mode prépare votre Mac en un clic : ouvre vos apps, masque le reste, affiche un écran propre. App macOS de barre de menu, locale, sans compte.',
    image: '/img/apps/meeting-mode_vignette-apps.webp',
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
    "Vous organisez un voyage, un mariage, des travaux ou un emménagement. L’un avance les frais, l’autre rembourse — mais le solde n’est jamais évident à suivre.",
    "DuoSpend est conçue pour deux. Créez un projet, ajoutez vos dépenses, choisissez qui paie quoi et en quelle proportion. L’app calcule le solde net en temps réel, sans tracking, sans compte imposé, sans SDK tiers.",
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
      value: 'Vos données vous appartiennent. Pas de tracking, pas de SDK tiers.',
    },
    {
      label: 'Technologie',
      value: 'Swift natif, sans dépendance externe. Support assuré directement par son auteur.',
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
    description: "DuoSpend arrive bientôt. Laissez votre adresse — je vous préviens dès l'ouverture.",
    secondaryLabel: 'Une question ? Contactez-moi',
    secondaryTo: '/contact/',
  },
  seo: {
    title: 'DuoSpend — App iPhone pour dépenses à deux | BeAbot',
    description:
      'DuoSpend calcule qui doit combien à qui, sur chaque projet commun. Hors ligne, sans compte, sans pub. Achat unique 6,99 €.',
    image: '/img/apps/duospend-vignette-apps.webp',
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
}: SoftwareApplicationSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  description,
  url,
  operatingSystem,
  applicationCategory,
  ...(image ? { image } : {}),
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
