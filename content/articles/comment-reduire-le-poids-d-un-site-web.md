---
title: "Comment réduire le poids d'un site web"
description: Réduire le poids d'un site web ne consiste pas seulement à compresser quelques images. C'est une démarche globale qui touche les contenus, le design, le code, les dépendances et la maintenance.
chapo: Réduire le poids d'un site web ne consiste pas seulement à compresser quelques images. C'est une démarche globale qui touche les contenus, le design, le code, les dépendances et la maintenance.
tag: ['Éco-conception', 'Performance', 'WebDesign', 'SEO']
seo:
  title: "Réduire le poids d'un site web : méthode complète"
  description: "Méthode concrète pour alléger une page web : images, CSS, JavaScript, polices, ressources tierces, WordPress et bonnes pratiques d'éco-conception."
  ogImage: /beabot.png
  robots: index,follow
date: 2026-04-26
updatedAt: 2026-04-26
temps: 7
---

En 2024, la page web médiane pesait plus de 2 Mo. C'est trois fois plus qu'en 2012 — pour souvent moins de contenu utile.

Cette inflation ne vient pas d'une décision consciente. Elle vient de l'empilement : un plugin par-ci, une police externe par-là, un script de tracking ajouté sans vraiment y penser. Aucun de ces choix n'est catastrophique pris séparément. Ensemble, ils font un site lent, coûteux à maintenir et inutilement énergivore.

Dans une démarche d'<a href="/eco-conception/l-eco-conception-web/" class="lien--vert">éco-conception web</a>, le poids d'une page n'est pas seulement un indicateur technique. Il traduit une série de choix : ce qu'on affiche, ce qu'on charge, ce qu'on exécute, ce qu'on impose au terminal de l'utilisateur.

Un site plus léger est généralement plus rapide, plus accessible, plus facile à maintenir et mieux compris par les moteurs de recherche. C'est l'un des rares sujets où l'intérêt environnemental, l'expérience utilisateur et le SEO vont franchement dans le même sens.

## Commencer par mesurer

Avant de réduire le poids d'un site, il faut savoir ce qui pèse.

La première étape consiste à ouvrir les outils de développement du navigateur, onglet **Network**, désactiver le cache, puis recharger la page. On obtient alors une vision assez honnête de ce que le site demande réellement :

- le nombre de requêtes HTTP ;
- le poids total transféré ;
- le poids des images ;
- le poids du JavaScript ;
- le poids des CSS ;
- les polices chargées ;
- les ressources tierces ;
- les fichiers inutilisés.

Cette étape rejoint ce que je détaille dans l'article <a href="/eco-conception/audit-eco-conception/" class="lien--vert">Audit éco-conception web : par où commencer</a>. Sans mesure initiale, on travaille à l'aveugle. On risque de passer du temps sur des détails alors que les vrais problèmes sont ailleurs.

Un objectif raisonnable pour une page éditoriale simple : rester sous **1 Mo**, viser quelques centaines de kilo-octets lorsque c'est possible, et surtout limiter le nombre de requêtes.

## Supprimer avant d'optimiser

La meilleure ressource est celle qu'on ne charge pas.

Avant de compresser, concaténer ou différer, il faut poser une question plus simple : **est-ce utile ?**

Quelques exemples concrets : un carrousel demande du JavaScript, des images supplémentaires et nuit à l'accessibilité. Une vidéo en hero peut peser plusieurs mégaoctets pour un contenu que personne ne regarde jusqu'au bout. Un script de tracking tiers ouvre une connexion vers un domaine externe à chaque visite. Une animation CSS légère peut souvent remplacer une bibliothèque JavaScript entière.

La question n'est pas "peut-on se permettre d'ajouter ça ?" mais "qu'est-ce qu'on perd si on ne l'ajoute pas ?".

L'éco-conception ne consiste pas à appauvrir l'interface. Elle consiste à accorder les moyens employés avec l'objectif du site. C'est une logique de sobriété fonctionnelle : conserver ce qui sert réellement l'utilisateur, supprimer le reste.

Cette réflexion doit intervenir dès le design. Une page pensée simplement sera toujours plus facile à alléger qu'une page trop ambitieuse qu'on essaie ensuite de corriger techniquement.

## Maîtriser les images

Les images sont souvent le premier poste de poids d'une page web.

Elles posent trois problèmes :

- elles pèsent lourd ;
- elles multiplient les requêtes ;
- elles peuvent bloquer ou ralentir l'affichage initial.

La première règle est triviale : ne pas envoyer une image de 3000 pixels si elle s'affiche en 800 pixels. Le navigateur saura la réduire visuellement, mais l'utilisateur aura quand même téléchargé le fichier complet.

Les bonnes pratiques de base :

- redimensionner les images avant intégration ;
- utiliser WebP ou AVIF quand c'est possible ;
- conserver JPEG pour les cas de compatibilité ;
- réserver PNG aux besoins réels de transparence ;
- utiliser SVG pour les logos, pictogrammes et illustrations simples ;
- ajouter `width` et `height` pour éviter les décalages de mise en page ;
- utiliser `loading="lazy"` pour les images hors écran ;
- ne pas appliquer le lazy loading à l'image principale de la page.

Exemple simple :

```html
<picture>
  <source srcset="/img/article.avif" type="image/avif">
  <source srcset="/img/article.webp" type="image/webp">
  <img
    src="/img/article.jpg"
    alt="Description utile de l'image"
    width="800"
    height="450"
    loading="lazy"
    decoding="async"
  >
</picture>
```

J'ai détaillé ce sujet dans <a href="/eco-conception/images-eco-conception/" class="lien--vert">Images et éco-conception web</a>. C'est généralement le chantier le plus rentable lorsqu'on veut alléger rapidement un site existant.

## Limiter les polices web

Les polices web sont souvent oubliées dans les audits rapides. Pourtant, elles ajoutent des fichiers, des requêtes et parfois des appels à des domaines tiers.

Une famille typographique avec plusieurs graisses peut vite représenter plusieurs centaines de kilo-octets. Et dans beaucoup de cas, elle n'apporte pas une valeur proportionnelle à son coût.

Trois approches sont possibles :

1. utiliser une **system font stack** ;
2. charger une seule police avec un nombre réduit de graisses ;
3. sous-ensemble les polices pour ne garder que les caractères nécessaires.

La solution la plus sobre reste l'utilisation des polices système :

```css
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, sans-serif;
}
```

Cela ne veut pas dire renoncer au design. Une bonne hiérarchie typographique, des espacements maîtrisés, des tailles cohérentes et un bon rythme vertical produisent souvent un meilleur résultat qu'une police externe mal utilisée.

Pour aller plus loin, voir <a href="/eco-conception/typographie-ecoconception/" class="lien--vert">Typographie et éco-conception</a>.

## Réduire le JavaScript

Le JavaScript coûte cher. Il doit être téléchargé, analysé, compilé puis exécuté. Sur un ordinateur récent, cela peut passer inaperçu. Sur un téléphone ancien ou une connexion médiocre, cela devient visible.

Réduire le poids d'un site, c'est donc réduire la quantité de JavaScript envoyée au navigateur.

Quelques principes simples :

- ne pas charger une bibliothèque pour quelques lignes de code ;
- supprimer les dépendances inutilisées ;
- fractionner le code par page ou par composant ;
- différer les scripts non critiques ;
- éviter les animations JavaScript lorsque CSS suffit ;
- limiter les scripts tiers ;
- tester le site sur un terminal modeste, pas seulement sur une machine de développement confortable.

Exemple :

```html
<script src="/js/main.js" defer></script>
```

`defer` permet au navigateur de continuer à parser le HTML sans bloquer le rendu de la page.

Dans un site éditorial ou vitrine, la bonne question est brutale : **a-t-on vraiment besoin de JavaScript pour cette interaction ?** Très souvent, HTML et CSS suffisent.

## Alléger le CSS

Le CSS est rarement le plus gros poste de poids, mais il peut devenir désordonné avec le temps : composants abandonnés, anciennes classes, règles redondantes, media queries répétées.

Un CSS plus léger repose sur quelques habitudes :

- éviter les sélecteurs trop complexes ;
- factoriser les règles communes ;
- supprimer le CSS inutilisé ;
- limiter les frameworks CSS si seule une petite partie est utilisée ;
- utiliser les propriétés natives modernes plutôt que des surcouches ;
- garder une logique de design system simple.

Exemple à éviter :

```css
body .page .main-content article .article-body p.intro {
  font-size: 1.2rem;
}
```

Version préférable :

```css
.article-intro {
  font-size: 1.2rem;
}
```

Un sélecteur plus simple est plus lisible, plus maintenable et généralement plus efficace.

## Se méfier des ressources tierces

Les ressources tierces sont l'un des grands angles morts du poids d'un site.

Google Fonts, analytics, pixels publicitaires, widgets sociaux, cartes embarquées, lecteurs vidéo externes : chaque ajout paraît isolément acceptable. Ensemble, ils dégradent rapidement les performances.

Le problème n'est pas seulement le poids du fichier. Une ressource tierce implique souvent :

- une résolution DNS ;
- une connexion TLS ;
- un domaine externe ;
- du JavaScript hors de votre contrôle ;
- parfois d'autres scripts appelés en cascade.

La bonne méthode consiste à faire l'inventaire des tiers, puis à justifier chacun d'eux.

Si un script ne sert pas directement l'utilisateur ou une décision métier réelle, il doit être supprimé.

## Cas WordPress : choisir plutôt qu'empiler

Sur WordPress, le poids vient rarement du CMS seul. Il vient surtout de l'empilement :

- thème trop généraliste ;
- constructeur de page lourd ;
- extensions nombreuses ;
- polices externes ;
- sliders ;
- bibliothèques CSS et JavaScript chargées partout ;
- images mal dimensionnées.

Un site WordPress sobre repose sur des choix plus stricts :

- thème léger ou thème sur mesure ;
- extensions limitées à des besoins précis ;
- désactivation des scripts inutiles ;
- images générées dans les bonnes tailles ;
- cache bien configuré ;
- aucun constructeur lourd si le projet ne le justifie pas.

Dans <a href="/eco-conception/wordpress-eco-conception/" class="lien--vert">Éco-concevoir un site WordPress</a>, je détaille cette logique : WordPress peut être rapide et durable, à condition de ne pas le transformer en catalogue d'extensions.

## Fixer un budget de performance

Un site finit toujours par grossir si personne ne surveille son poids.

La bonne pratique consiste à définir un budget :

- poids maximum de la page ;
- nombre maximum de requêtes ;
- poids maximum des images ;
- poids maximum du JavaScript ;
- score Lighthouse minimal ;
- score EcoIndex cible.

Ce budget peut être simple au départ. L'essentiel est de le documenter et de le vérifier régulièrement.

Exemple pour une page éditoriale :

| Indicateur | Objectif | Outil |
| --- | --- | --- |
| Poids total | < 800 Ko | DevTools → onglet Network |
| Requêtes HTTP | < 25 | DevTools → onglet Network |
| JavaScript initial | < 150 Ko | Lighthouse / PageSpeed Insights |
| Image principale | < 150 Ko | DevTools → onglet Network |
| Lighthouse Performance | > 90 | [PageSpeed Insights](https://pagespeed.web.dev) |
| EcoIndex | A ou B | [ecoindex.fr](https://www.ecoindex.fr) |

Ces chiffres ne sont pas universels. Une page article, une fiche produit, une application métier ou une galerie photo n'ont pas les mêmes contraintes. Mais sans limite explicite, chaque ajout semble acceptable. C'est ainsi qu'un site devient lourd.

## Penser maintenance éditoriale

Réduire le poids d'un site n'est pas seulement une affaire de développement.

Un site sobre peut devenir lourd en quelques mois si les contenus sont ajoutés sans méthode : images trop grandes, PDF énormes, vidéos embarquées, duplications, pages jamais supprimées.

Il faut donc intégrer quelques règles éditoriales :

- ne pas importer d'image non redimensionnée ;
- éviter les PDF lourds quand une page HTML suffit ;
- supprimer les médias inutilisés ;
- limiter les galeries automatiques ;
- documenter les formats attendus ;
- former les personnes qui alimentent le site.

C'est un point souvent négligé. Pourtant, un site web ne reste léger que si sa gestion quotidienne respecte les mêmes principes que sa conception.

## Une méthode simple

Pour réduire le poids d'un site existant, je procéderais dans cet ordre :

1. mesurer la page avec DevTools, Lighthouse et EcoIndex ;
2. identifier les ressources les plus lourdes ;
3. supprimer les fonctionnalités inutiles ;
4. optimiser les images ;
5. réduire les polices web ;
6. supprimer ou différer le JavaScript non critique ;
7. limiter les ressources tierces ;
8. nettoyer CSS et HTML ;
9. mettre en cache correctement les ressources statiques ;
10. documenter un budget de performance.

Cet ordre est important. Il évite de commencer par des micro-optimisations alors qu'une seule image, une police externe ou un script tiers peut peser plus lourd que tout le reste.

## Conclusion

Réduire le poids d'un site web, ce n'est pas faire la chasse aux kilo-octets par principe. C'est concevoir un site plus juste.

Sur le site de Cycloplomberie, le résultat d'une démarche rigoureuse aboutit à une page qui tient sous 200 Ko, en 4 requêtes, avec un EcoIndex A. Pas parce que c'était une contrainte — parce que chaque choix a été posé : cette image est-elle nécessaire ? Ce script apporte-t-il quelque chose à l'utilisateur ?

Un site léger ne demande pas moins d'attention. Il demande au contraire plus de discernement : choisir les bons contenus, les bons formats, les bonnes fonctionnalités et les bons outils. C'est précisément là que l'éco-conception rejoint le travail classique du web : clarifier, hiérarchiser, simplifier, mesurer, maintenir.

Si vous voulez savoir où en est votre site, le plus simple est de commencer par le mesurer. J'ai détaillé la méthode dans l'article <a href="/eco-conception/audit-eco-conception/" class="lien--vert">Audit éco-conception web : par où commencer</a>. Et si vous souhaitez qu'on travaille ensemble sur ce chantier, <a href="/greenlight/" class="lien--vert">Greenlight</a> est l'offre que j'ai construite pour ça.
