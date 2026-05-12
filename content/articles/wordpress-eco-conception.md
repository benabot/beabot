---
title: Éco-concevoir un site WordPress
description: Guide pratique pour concevoir un site WordPress sobre, performant et durable. Méthode, choix techniques et bonnes pratiques.
chapo: Guide pratique pour concevoir un site WordPress sobre, performant et durable. Méthode, choix techniques et bonnes pratiques.
seo:
  title: "WordPress éco-conception : thème sobre"
  description: Guide pratique pour concevoir un site WordPress sobre, performant et durable. Méthode, choix techniques et bonnes pratiques.
  ogImage: /img/og/wordpress-eco-conception.png
tag: ['WordPress', 'Éco-conception', 'WebDesign', 'Performance']
date: 2025-10-28
updatedAt: 2025-10-28
temps: 5
---

WordPress alimente près de 40 % du web. Sa réputation de lourdeur vient rarement de l'outil lui-même, mais de ses usages : thèmes surchargés, extensions empilées, fonctionnalités jamais utilisées.

Bien configuré, WordPress peut être **rapide, léger et durable**. Cet article propose une méthode pour y parvenir, étape par étape.

---

## Commencer par les besoins, pas par l'outil

Un site éco-conçu commence toujours par un travail de clarification. Avant de parler de thème ou d'extensions, il faut identifier ce que le site doit accomplir : informer, valoriser une activité, générer des contacts, vendre.

Cette étape conditionne tout le reste. L'éco-conception repose sur un principe simple : **chaque fonctionnalité a un coût**. Plus un site est complexe, plus il consomme de ressources, plus il sera difficile à maintenir.

Le rôle du concepteur est d'accompagner le client pour distinguer l'essentiel du superflu. Un carrousel est-il vraiment nécessaire ? Ce formulaire à douze champs ne pourrait-il pas être simplifié ? Cette intégration externe apporte-t-elle une vraie valeur ?

C'est à ce stade que se construit un projet cohérent et sobre. Sans ce travail en amont, aucune optimisation ultérieure ne compensera des choix mal posés.

---

## Choisir un thème léger et maîtrisé

Le thème WordPress détermine une grande partie du poids et de la complexité du site.

Les thèmes "tout-en-un" proposent des dizaines de fonctionnalités, de mises en page et d'options. Cette flexibilité a un coût : des fichiers volumineux, des scripts chargés systématiquement, des requêtes inutiles.

Un thème éco-conçu fait le choix inverse :

- **Chargement minimal** : seuls les styles et scripts utilisés sont inclus.
- **Structure simple** : pas de constructeur de page lourd (Elementor, Divi, WPBakery).
- **Personnalisation ciblée** : les options correspondent aux besoins réels, pas à tous les cas possibles.

### Exemple : functions.php minimaliste

```php
<?php
// Déclarer uniquement les supports nécessaires
add_theme_support('title-tag');
add_theme_support('post-thumbnails');
add_theme_support('html5', ['search-form', 'gallery', 'caption']);

// Un seul fichier CSS, pas de dépendances inutiles
function theme_enqueue_styles() {
    wp_enqueue_style(
        'theme-style',
        get_stylesheet_uri(),
        [],
        filemtime(get_stylesheet_directory() . '/style.css')
    );
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

// Supprimer les ressources WordPress inutilisées
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
```

Le développement d'un thème sur mesure permet d'aller plus loin, mais un thème léger bien choisi (Developer Theme, starter theme) peut suffire pour de nombreux projets.

---

## Limiter les extensions au strict nécessaire

Les extensions sont utiles, mais leur accumulation est l'une des principales causes de lourdeur. Chaque extension ajoute du code, des requêtes et parfois des connexions à des services externes.

Quelques principes :

- **Une extension = un besoin précis.** Éviter les plugins "couteau suisse" qui font tout.
- **Vérifier le poids.** Certaines extensions ajoutent des scripts sur toutes les pages, même là où elles ne servent pas.
- **Préférer le code natif.** Un snippet de quelques lignes remplace souvent une extension entière.
- **Auditer régulièrement.** Désactiver et supprimer ce qui n'est plus utilisé.

### Exemple : remplacer une extension par du code natif

Désactiver les commentaires sans extension :

```php
// Désactiver les commentaires sur tout le site
add_action('admin_init', function () {
    // Désactiver le support des commentaires pour tous les types de posts
    foreach (get_post_types() as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
});

// Masquer les commentaires existants
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);
add_filter('comments_array', '__return_empty_array', 10, 2);

// Retirer le menu Commentaires de l'admin
add_action('admin_menu', function () {
    remove_menu_page('edit-comments.php');
});
```

Les extensions de sécurité, de cache ou de formulaires sont souvent nécessaires. L'enjeu n'est pas de s'en passer, mais de les choisir avec discernement.

---

## Maîtriser les images

Les images représentent généralement la plus grande part du poids des pages.

Quelques règles simples :

- **Dimensionner avant d'uploader.** Une image de 4000 px pour un affichage de 800 px est un gaspillage.
- **Compresser systématiquement.** Les outils comme Squoosh, TinyPNG ou ImageOptim réduisent le poids sans perte visible.
- **Utiliser les formats modernes.** WebP offre un excellent rapport qualité/poids. AVIF va encore plus loin.
- **Activer le lazy loading.** Les images hors écran ne doivent pas bloquer le chargement initial.

### Limiter les tailles d'images générées

WordPress génère automatiquement plusieurs tailles d'images. Il est possible de limiter ces tailles au strict nécessaire :

```php
// Définir uniquement les tailles utilisées par le thème
add_image_size('hero', 1600, 900, true);
add_image_size('card', 600, 400, true);
add_image_size('thumb', 300, 300, true);

// Désactiver les tailles par défaut inutiles
add_filter('intermediate_image_sizes_advanced', function ($sizes) {
    unset($sizes['medium_large']);  // 768px
    unset($sizes['1536x1536']);     // 2x medium_large
    unset($sizes['2048x2048']);     // 2x large
    return $sizes;
});

// Limiter la largeur maximale du srcset
add_filter('max_srcset_image_width', function () {
    return 1600;
});
```

Pour aller plus loin sur l'optimisation des images, voir [Images et éco-conception web](/eco-conception/images-eco-conception/).

---

## Optimiser le code et les ressources

Un site éco-conçu repose sur un code simple et bien structuré.

### Côté HTML/CSS

- Limiter les niveaux d'imbrication.
- Éviter les styles inline répétitifs.
- Regrouper et minifier les fichiers CSS.

```css
/* Éviter la surcharge de sélecteurs */
/* ❌ Mauvais */
body .site-content .main-area article.post .entry-content p.intro {}

/* ✅ Bon */
.post-intro {}
```

### Côté JavaScript

Charger les scripts en différé et supprimer ceux qui sont inutilisés :

```php
// Charger les scripts avec defer
add_filter('script_loader_tag', function ($tag, $handle, $src) {
    if (is_admin()) {
        return $tag;
    }
    // Ajouter defer aux scripts non critiques
    if (in_array($handle, ['theme-script', 'contact-form'])) {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}, 10, 3);

// Désactiver jQuery si non nécessaire (attention aux dépendances)
add_action('wp_enqueue_scripts', function () {
    if (!is_admin()) {
        wp_deregister_script('jquery');
    }
});
```

### Côté serveur

```php
// Limiter le nombre de révisions
define('WP_POST_REVISIONS', 3);

// Augmenter l'intervalle d'autosave (en secondes)
define('AUTOSAVE_INTERVAL', 300);
```

Nettoyer régulièrement la base de données :

```sql
-- Supprimer les révisions anciennes
DELETE FROM wp_posts WHERE post_type = 'revision';

-- Supprimer les métadonnées orphelines
DELETE FROM wp_postmeta WHERE post_id NOT IN (SELECT ID FROM wp_posts);

-- Optimiser les tables
OPTIMIZE TABLE wp_posts, wp_postmeta, wp_options;
```

---

## Mesurer et suivre dans le temps

L'éco-conception ne repose pas sur des intentions. Elle se mesure.

Quelques outils utiles :

- **[EcoIndex](https://www.ecoindex.fr)** : score environnemental basé sur le poids, les requêtes et la complexité DOM.
- **[PageSpeed Insights](https://pagespeed.web.dev)** : performance, accessibilité, bonnes pratiques.
- **[WebPageTest](https://www.webpagetest.org)** : analyse détaillée du chargement.
- **Query Monitor** (extension WordPress) : requêtes SQL, hooks, scripts chargés.

### Métriques à surveiller

| Métrique | Cible | Outil |
|----------|-------|-------|
| Poids total | < 1 Mo | WebPageTest |
| Requêtes HTTP | < 30 | DevTools |
| LCP | < 2.5s | PageSpeed |
| EcoIndex | A ou B | EcoIndex |

Ces mesures permettent de vérifier les choix effectués et d'identifier les points d'amélioration. Elles permettent aussi de suivre l'évolution du site : sans vigilance, la complexité s'accumule au fil des ajouts.

---

## Un équilibre, pas un absolu

L'éco-conception WordPress n'est pas une quête de perfection. C'est une démarche d'équilibre entre :

- les besoins du projet,
- les contraintes techniques,
- les moyens disponibles,
- l'impact environnemental.

Un site sobre n'est pas un site pauvre. C'est un site qui fait exactement ce qu'on attend de lui, sans superflu, avec un code maîtrisé et une maintenance facilitée.

C'est aussi, souvent, un site plus rapide, plus fiable et plus agréable à utiliser.

---

## Pour aller plus loin

- [Qu'est-ce que l'éco-conception web](/eco-conception/l-eco-conception-web/) — les principes fondamentaux.
- [Images et éco-conception web](/eco-conception/images-eco-conception/) — guide complet sur l'optimisation des images.
- [La petite boucle](/eco-conception/theme-wordpress-eco-conception/) — retour d'expérience sur un thème WordPress éco-conçu.
- [Typographie et éco-conception](/eco-conception/typographie-ecoconception/) — un levier souvent sous-estimé.
- [Thème WordPress ultra léger](https://github.com/benabot/wp-theme-cycloplomberie) que j'ai réalisé pour le site [La cycloplomberie](https://cycloplomberie-amiens.fr)
