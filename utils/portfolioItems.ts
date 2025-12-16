export type PortfolioCategory = 'vjs' | 'wp' | 'eco' | 'webDesign'

export interface PortfolioItem {
  key: string
  titre: string
  sousTitre: string
  description?: string
  stitre?: string
  backgroundUrl: string
  imageWidth?: number
  imageHeight?: number
  chips: string[]
  lien: string
  categories: PortfolioCategory[]
  anchor?: string
  createdAt?: string
}

// Anchors must stay in sync with the id attributes of projects in pages/portfolio.vue
export const portfolioItems: PortfolioItem[] = [
  {
    key: 'cycloplomberie',
    titre: 'La Cyclo-Plomberie',
    sousTitre: 'Votre plombier à vélo à Amiens et alentours',
    description: 'Site vitrine WordPress pour un plombier à vélo, design sobre et éco-conçu.',
    backgroundUrl: 'cyclop.png',
    imageWidth: 644,
    imageHeight: 374,
    chips: ['WebDesign', 'WordPress', 'Éco-conçu'],
    lien: 'https://cycloplomberie-amiens.fr',
    categories: ['eco', 'webDesign', 'wp'],
    anchor: 'cycloplomberie',
    createdAt: '2024-07-01',
  },
  {
    key: 'petiteboucle',
    titre: 'La petite boucle',
    sousTitre: "Collecte de cartouches d'encre en triporteur électrique",
    description:
      "Refonte WordPress éco-conçue pour une collecte locale en triporteur, axée sur la sobriété.",
    backgroundUrl: 'lpb.png',
    imageWidth: 650,
    imageHeight: 367,
    chips: ['WebDesign', 'WordPress', 'Éco-conçu'],
    lien: 'https://lapetiteboucle.fr/',
    categories: ['eco', 'webDesign', 'wp'],
    anchor: 'petite-boucle',
    createdAt: '2024-04-01',
  },
  {
    key: 'amc2',
    titre: 'AMC2',
    sousTitre: 'Site vitrine et catalogue en ligne',
    description:
      "Vitrine et catalogue d'entreprise. Réalisé avec NuxtJS et WordPress (headless CMS).",
    backgroundUrl: 'amc2.png',
    imageWidth: 612,
    imageHeight: 340,
    chips: ['WebDesign', 'VueJs', 'Nuxt', 'WordPress (headless)'],
    lien: 'https://www.amc2.fr',
    categories: ['vjs', 'webDesign', 'wp'],
    anchor: 'site1',
    createdAt: '2023-11-01',
  },
  {
    key: 'guiderse-carte',
    titre: 'Guide RSE Banque Populaire',
    sousTitre: 'Carte interactive',
    description: 'Carte interactive pour le guide RSE de la Banque populaire. Réalisée avec VueJs.',
    backgroundUrl: 'guideBleu1.png',
    imageWidth: 2556,
    imageHeight: 1332,
    chips: ['WebDesign', 'VueJs', 'Bootstrap'],
    lien: 'https://www.guide-rse.banquepopulaire.fr/actions-rse',
    categories: ['vjs', 'webDesign'],
    anchor: 'site2',
    createdAt: '2023-08-01',
  },
  {
    key: 'guiderse-dataviz',
    titre: 'Guide RSE Banque Populaire',
    sousTitre: 'Interface de visualisation de données',
    description: 'Interface de visualisation de données pour le guide RSE Banque Populaire.',
    backgroundUrl: 'guideBleu2.png',
    imageWidth: 2556,
    imageHeight: 1332,
    chips: ['WebDesign', 'VueJs', 'Bootstrap'],
    lien: 'https://www.guide-rse.banquepopulaire.fr/resultats-2020',
    categories: ['vjs', 'webDesign'],
    anchor: 'guide-rse-dataviz',
    createdAt: '2023-05-01',
  },
  {
    key: 'app-noel',
    titre: 'App noël',
    sousTitre: "Application d'apprentissage à l'interface d'un ordinateur",
    description: "Application ludique d'initiation à l'interface d'un ordinateur, en VueJs.",
    backgroundUrl: 'appNoel.png',
    imageWidth: 2556,
    imageHeight: 1332,
    chips: ['WebDesign', 'VueJs'],
    lien: 'https://app-noel.netlify.app',
    categories: ['vjs', 'webDesign'],
    anchor: 'app-noel',
    createdAt: '2023-02-01',
  },
  {
    key: 'aave',
    titre: 'AAVE',
    sousTitre: "Association pour l'aménagement de la vallée de l'Esches",
    description: "Site WordPress pour une association, avec design léger et éco-conception.",
    backgroundUrl: 'aave.png',
    imageWidth: 510,
    imageHeight: 540,
    chips: ['WebDesign', 'WordPress'],
    lien: 'https://vallee-esches.fr/',
    categories: ['eco', 'webDesign', 'wp'],
    anchor: 'aave',
    createdAt: '2022-11-01',
  },
]
