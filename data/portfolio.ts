/**
 * Données structurées des projets portfolio
 * Utilisées par la page portfolio.vue
 */

export interface ProjectMetrics {
  ecoIndex?: string
  requests?: number
  pageWeight?: string
  lighthouse?: number
  improvement?: string
}

export interface Project {
  id: string
  title: string
  subtitle: string
  image: string
  url: string
  featured: boolean
  tags: string[]
  context: string
  role: string
  stack: string[]
  metrics?: ProjectMetrics
  articleLink?: string
  githubLink?: string
  objectPosition?: string
}

export const projects: Project[] = [
  {
    id: 'chasse-patate',
    title: 'BORDUR',
    subtitle: 'jeu de plateau cycliste',
    image: 'chasse-patate.webp',
    url: 'https://bordur.fr',
    featured: false,
    tags: ['WebDesign', 'VueJs', 'SQL'],
    context: 'Jeu de plateau cycliste accessible en ligne.',
    role: 'Webdesign, développement front et gestion des données',
    stack: ['Vue.js', 'SQL'],
    githubLink: 'https://github.com/benabot/cycling-sim-game-game-code',
  },
  {
    id: 'siturem',
    title: 'Siturem',
    subtitle: 'Méditation timer pour pratiquants avancés',
    image: '/img/siturem/siturem-landing.webp',
    url: '/apps/siturem/',
    featured: false,
    tags: ['iOS', 'Swift'],
    context:
      'Application iOS de meditation avec minuterie pensée pour des pratiquants avancés.',
    role: "Conception produit, design d'interface et développement iOS natif",
    stack: ['Swift', 'SwiftUI'],
    githubLink: 'https://github.com/benabot/siturem',
  },

  // === APPS iOS (Swift) ===
  {
    id: 'duospend',
    title: 'DuoSpend',
    subtitle: 'App iOS de gestion de budget partagé pour couples',
    image: 'duospend.webp',
    url: '',
    featured: false,
    tags: ['iOS', 'Swift'],
    context:
      'Application de suivi des dépenses communes sur des projets partagés (voyage, mariage, colocation…). Une question, une réponse : "Qui doit combien à qui ?"',
    role: 'Conception, architecture MVVM, développement Swift',
    stack: ['Swift 6', 'SwiftUI', 'SwiftData', 'iCloud'],
    githubLink: 'https://github.com/benabot/DuoSpend',
  },
  {
    id: 'focusone',
    title: 'FocusOne',
    subtitle: "App iOS de suivi d'une micro-habitude quotidienne",
    image: 'focusone.webp',
    url: '',
    featured: false,
    tags: ['iOS', 'Swift'],
    context:
      'Un tap par jour pour suivre une habitude. Streak engine, widget Home Screen & Lock Screen, sync iCloud. Simple, sobre, local-first.',
    role: 'Conception, développement Swift',
    stack: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit', 'WidgetKit'],
    githubLink: 'https://github.com/benabot/focusone',
  },

  // === PROJETS ÉCO-CONÇUS (featured) ===
  {
    id: 'cycloplomberie',
    title: 'La Cyclo-Plomberie',
    subtitle: 'Site vitrine éco-conçu pour un plombier à vélo',
    image: 'cyclop.webp',
    url: 'https://cycloplomberie-amiens.fr',
    featured: true,
    tags: ['WordPress', 'Éco-conçu', 'WebDesign'],
    context: 'Site vitrine sobre pour un plombier à vélo engagé localement.',
    role: 'Design, développement WordPress, éco-conception',
    stack: ['WordPress', 'PHP', 'CSS', 'Thème sur-mesure'],
    metrics: {
      ecoIndex: 'A',
      requests: 4,
      pageWeight: '< 200 Ko',
      lighthouse: 95,
    },
  },
  {
    id: 'petite-boucle',
    title: 'La petite boucle',
    subtitle: 'Refonte éco-conçue pour une collecte solidaire en triporteur',
    image: 'lpb.webp',
    url: '',
    featured: true,
    tags: ['WordPress', 'Éco-conçu', 'WebDesign'],
    context:
      "Refonte éco-conçue du site d'une association de collecte en triporteur.",
    role: 'Audit du site existant, refonte design, développement WordPress',
    stack: ['WordPress', 'PHP', 'CSS', 'Thème sur-mesure'],
    metrics: {
      ecoIndex: 'A',
      improvement: 'EcoIndex C → A, -60% poids',
    },
    articleLink: '/eco-conception/theme-wordpress-eco-conception/',
    githubLink: 'https://github.com/benabot/lapetiteboucle',
  },
  {
    id: 'aave',
    title: 'AAVE',
    subtitle: "Site associatif pour la vallée de l'Esches",
    image: 'aave.webp',
    url: 'https://vallee-esches.fr/',
    featured: false,
    tags: ['WordPress', 'WebDesign'],
    context: 'Site vitrine pour une association environnementale locale.',
    role: 'Design, développement WordPress',
    stack: ['WordPress', 'PHP', 'CSS'],
  },

  // === PROJETS VUE.JS / NUXT ===
  {
    id: 'amc2',
    title: 'AMC2',
    subtitle: 'Site vitrine et catalogue produits en ligne',
    image: 'amc2.webp',
    url: 'https://www.amc2.fr',
    featured: true,
    tags: ['VueJs', 'Nuxt', 'WordPress', 'WebDesign'],
    context: 'Catalogue produits moderne pour une PME industrielle.',
    role: 'Design, développement front Nuxt, intégration API WordPress headless',
    stack: ['Nuxt', 'Vue.js', 'WordPress Headless', 'API REST'],
    objectPosition: 'center top',
  },
  {
    id: 'guide-rse-carte',
    title: 'Guide RSE Banque Populaire',
    subtitle: 'Carte interactive des engagements RSE',
    image: 'guideBleu1.webp',
    url: 'https://web.archive.org/web/20200920085252/https://www.guide-rse.banquepopulaire.fr/actions-rse',
    featured: false,
    tags: ['VueJs', 'WebDesign'],
    context: "Carte interactive des actions RSE d'une banque.",
    role: 'Développement front, intégration cartographique',
    stack: ['Vue.js', 'Bootstrap', 'Leaflet'],
    githubLink: 'https://github.com/benabot/svgMapVuejs',
    objectPosition: 'center top',
  },
  {
    id: 'guide-rse-dataviz',
    title: 'Guide RSE Banque Populaire',
    subtitle: 'Interface de visualisation de données',
    image: 'guideBleu2.webp',
    url: 'https://web.archive.org/web/20220523090433/https://www.guide-rse.banquepopulaire.fr/resultats-2020',
    featured: false,
    tags: ['VueJs', 'WebDesign'],
    context: 'Dataviz des résultats RSE annuels.',
    role: 'Développement front, data visualization',
    stack: ['Vue.js', 'Bootstrap', 'Chart.js'],
    objectPosition: 'center top',
  },
  {
    id: 'app-noel',
    title: 'App Noël',
    subtitle: "Application pédagogique d'apprentissage informatique",
    image: 'appNoel.webp',
    url: 'https://app-noel.netlify.app',
    featured: false,
    tags: ['VueJs', 'WebDesign'],
    context: "Application pédagogique d'initiation à l'informatique.",
    role: 'Conception, design, développement',
    stack: ['Vue.js'],
  },
]

// Filtres disponibles
export const filters = [
  { id: 'all', label: 'Tous', count: projects.length },
  {
    id: 'vjs',
    label: 'Vue.js',
    count: projects.filter(
      (p) => p.tags.includes('VueJs') || p.tags.includes('Nuxt'),
    ).length,
  },
  {
    id: 'wp',
    label: 'WordPress',
    count: projects.filter((p) => p.tags.includes('WordPress')).length,
  },
  {
    id: 'eco',
    label: 'Éco-conçu',
    count: projects.filter((p) => p.tags.includes('Éco-conçu')).length,
  },
  {
    id: 'design',
    label: 'WebDesign',
    count: projects.filter((p) => p.tags.includes('WebDesign')).length,
  },
  {
    id: 'ios',
    label: 'iOS',
    count: projects.filter((p) => p.tags.includes('iOS')).length,
  },
]

// Compétences techniques
export const skills = {
  frontend: {
    title: 'Front-end',
    items: ['HTML/CSS', 'JavaScript', 'Vue.js', 'Nuxt', 'Svelte'],
  },
  backend: {
    title: 'Back-end / CMS',
    items: ['PHP', 'SQL', 'API REST', 'WordPress (thèmes & plugins)'],
  },
  quality: {
    title: 'Éco-conception / Qualité',
    items: ['Sobriété numérique', 'Performance', 'Accessibilité', 'SEO'],
  },
  devops: {
    title: 'DevOps',
    items: ['Git', 'Docker', 'Nginx', 'Bash', 'CI/CD'],
  },
  mobile: {
    title: 'iOS / Mobile',
    items: [
      'Swift',
      'SwiftUI',
      'SwiftData',
      'Core Data',
      'CloudKit',
      'WidgetKit',
    ],
  },
}
