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
}

export const projects: Project[] = [
  // === PROJETS ÉCO-CONÇUS (featured) ===
  {
    id: 'cycloplomberie',
    title: 'La Cyclo-Plomberie',
    subtitle: 'Site vitrine éco-conçu pour un plombier à vélo',
    image: 'cyclop.png',
    url: 'https://cycloplomberie-amiens.fr',
    featured: true,
    tags: ['WordPress', 'Éco-conçu', 'WebDesign'],
    context: 'Artisan plombier intervenant à vélo, souhaitant un site sobre reflétant sa démarche écologique et locale.',
    role: 'Design, développement WordPress, éco-conception',
    stack: ['WordPress', 'PHP', 'CSS', 'Thème sur-mesure'],
    metrics: {
      ecoIndex: 'A',
      requests: 4,
      pageWeight: '< 200 Ko',
      lighthouse: 95
    }
  },
  {
    id: 'petite-boucle',
    title: 'La petite boucle',
    subtitle: 'Refonte éco-conçue pour une collecte solidaire en triporteur',
    image: 'lpb.png',
    url: 'https://lapetiteboucle.fr/',
    featured: true,
    tags: ['WordPress', 'Éco-conçu', 'WebDesign'],
    context: 'Association de collecte de cartouches d\'encre en triporteur électrique. Refonte complète d\'un site existant.',
    role: 'Audit du site existant, refonte design, développement WordPress',
    stack: ['WordPress', 'PHP', 'CSS', 'Thème sur-mesure'],
    metrics: {
      ecoIndex: 'A',
      improvement: 'EcoIndex C → A, -60% poids'
    },
    articleLink: '/eco-conception/theme-wordpress-eco-conception/'
  },
  {
    id: 'aave',
    title: 'AAVE',
    subtitle: 'Site associatif pour la vallée de l\'Esches',
    image: 'aave.png',
    url: 'https://vallee-esches.fr/',
    featured: false,
    tags: ['WordPress', 'WebDesign'],
    context: 'Association pour l\'aménagement de la vallée de l\'Esches, valorisation des actions environnementales locales.',
    role: 'Design, développement WordPress',
    stack: ['WordPress', 'PHP', 'CSS']
  },

  // === PROJETS VUE.JS / NUXT ===
  {
    id: 'amc2',
    title: 'AMC2',
    subtitle: 'Site vitrine et catalogue produits en ligne',
    image: 'amc2.png',
    url: 'https://www.amc2.fr',
    featured: true,
    tags: ['VueJs', 'Nuxt', 'WordPress', 'WebDesign'],
    context: 'PME industrielle souhaitant moderniser sa présence web avec un catalogue produits dynamique.',
    role: 'Design, développement front Nuxt, intégration API WordPress headless',
    stack: ['Nuxt', 'Vue.js', 'WordPress Headless', 'API REST']
  },
  {
    id: 'guide-rse-carte',
    title: 'Guide RSE Banque Populaire',
    subtitle: 'Carte interactive des engagements RSE',
    image: 'guideBleu1.png',
    url: 'https://www.guide-rse.banquepopulaire.fr/actions-rse',
    featured: false,
    tags: ['VueJs', 'WebDesign'],
    context: 'Visualisation géographique des actions RSE de la Banque Populaire sur le territoire français.',
    role: 'Développement front, intégration cartographique',
    stack: ['Vue.js', 'Bootstrap', 'Leaflet']
  },
  {
    id: 'guide-rse-dataviz',
    title: 'Guide RSE Banque Populaire',
    subtitle: 'Interface de visualisation de données',
    image: 'guideBleu2.png',
    url: 'https://www.guide-rse.banquepopulaire.fr/resultats-2020',
    featured: false,
    tags: ['VueJs', 'WebDesign'],
    context: 'Dashboard de data visualization pour présenter les résultats RSE annuels.',
    role: 'Développement front, data visualization',
    stack: ['Vue.js', 'Bootstrap', 'Chart.js']
  },
  {
    id: 'app-noel',
    title: 'App Noël',
    subtitle: 'Application pédagogique d\'apprentissage informatique',
    image: 'appNoel.png',
    url: 'https://app-noel.netlify.app',
    featured: false,
    tags: ['VueJs', 'WebDesign'],
    context: 'Application ludique pour apprendre les bases de l\'interface d\'un ordinateur.',
    role: 'Conception, design, développement',
    stack: ['Vue.js']
  }
]

// Filtres disponibles
export const filters = [
  { id: 'all', label: 'Tous', count: projects.length },
  { id: 'vjs', label: 'Vue.js', count: projects.filter(p => p.tags.includes('VueJs') || p.tags.includes('Nuxt')).length },
  { id: 'wp', label: 'WordPress', count: projects.filter(p => p.tags.includes('WordPress')).length },
  { id: 'eco', label: 'Éco-conçu', count: projects.filter(p => p.tags.includes('Éco-conçu')).length },
  { id: 'design', label: 'WebDesign', count: projects.filter(p => p.tags.includes('WebDesign')).length }
]

// Compétences techniques
export const skills = {
  frontend: {
    title: 'Front-end',
    items: ['Vue.js', 'Nuxt', 'HTML/CSS', 'JavaScript', 'TypeScript']
  },
  cms: {
    title: 'CMS & Back',
    items: ['WordPress', 'Headless CMS', 'PHP', 'API REST']
  },
  eco: {
    title: 'Éco-conception',
    items: ['EcoIndex', 'RGESN', 'Performance', 'Accessibilité']
  },
  tools: {
    title: 'Outils',
    items: ['Git', 'Docker', 'VS Code', 'Netlify']
  },
  methods: {
    title: 'Méthodes',
    items: ['Agile', 'SSG/SSR', 'CI/CD', 'Tests']
  },
  design: {
    title: 'Design',
    items: ['Figma', 'UI/UX', 'Typographie', 'Responsive']
  }
}
