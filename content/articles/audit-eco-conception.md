---
title: "Audit éco-conception web : par où commencer"
description: Avant d'optimiser un site, encore faut-il savoir ce qu'on mesure et pourquoi. Cet article pose les bases d'un audit éco-conception sérieux, des outils aux indicateurs, sans se perdre dans des chiffres décontextualisés.
chapo: Avant d'optimiser un site, encore faut-il savoir ce qu'on mesure et pourquoi. Cet article pose les bases d'un audit éco-conception sérieux, des outils aux indicateurs, sans se perdre dans des chiffres décontextualisés.
tag: ['Éco-conception', 'Audit', 'Performance', 'WebDesign']
seo:
  title: "Audit éco-conception web — par où commencer"
  description: "Méthode, outils et indicateurs pour auditer un site web éco-conçu. Guide complet : EcoIndex, PageSpeed, poids de page. Point de départ pour toute optimisation."
  ogImage: /beabot.png
  robots: index,follow
date: 2026-03-26
updatedAt: 2026-03-26
temps: 8
---

On me pose souvent la question dans les deux sens : "par où on commence ?" quand on veut optimiser un site, et "comment on sait qu'on a progressé ?" une fois qu'on l'a fait. Les deux questions ont la même réponse : par un audit.

Mais "faire un audit" est une expression qui recouvre des réalités très différentes. Passer Lighthouse en vert, coller son URL dans EcoIndex, compiler une liste de recommandations automatiques — c'est un début, pas un audit. Ce qui suit est une tentative de poser les bases d'une démarche un peu plus rigoureuse.

## Ce qu'on mesure, et pourquoi ça compte

L'éco-conception web vise à <a href="/eco-conception/l-eco-conception-web/" class="lien--vert">réduire l'empreinte environnementale d'un site</a>, principalement en limitant les échanges réseau (nombre de requêtes, volume de données transférées) et les traitements côté client qui sollicitent le terminal de l'utilisateur.

Ces deux leviers ont un impact direct sur la consommation électrique du poste client pendant la navigation, et indirectement sur l'usure des équipements. Rappelons que la fabrication des terminaux représente les trois quarts des émissions de gaz à effet de serre du numérique — tout ce qui évite de solliciter inutilement un appareil vieillissant contribue à prolonger sa durée de vie.

En pratique, un audit éco-conception mesure principalement :

- le **nombre de requêtes HTTP** émises au chargement d'une page ;
- le **poids total des ressources** transférées (HTML, CSS, JS, images, fonts) ;
- le **poids du DOM** (nombre d'éléments HTML) ;
- la **complexité des scripts** exécutés côté client.

Ces quatre métriques sont à la base du calcul de l'EcoIndex, l'indicateur de référence en France pour évaluer l'impact environnemental d'une page web.

## EcoIndex : utile, mais à relativiser

L'<a href="https://www.ecoindex.fr" class="lien--vert" target="_blank" rel="noopener">EcoIndex</a> donne une note de A à G à une URL en se basant sur les métriques citées plus haut. Il est simple à utiliser, gratuit, et permet une comparaison rapide entre pages ou entre versions d'un même site.

Ses limites sont réelles. Il ne mesure pas le contenu affiché, pas l'utilité des fonctionnalités, pas la pertinence de ce qui est chargé. Un site vide obtiendrait un A parfait. Ce n'est pas un objectif en soi.

L'EcoIndex est utile comme **indicateur de tendance** et comme point de comparaison. Il est insuffisant comme seul critère de décision.

## Lighthouse : les performances sont une composante de l'éco-conception

Google Lighthouse est l'outil le plus répandu pour mesurer les performances d'une page web. Il audite quatre dimensions : Performance, Accessibilité, Bonnes pratiques, SEO.

<a href="/eco-conception/l-eco-conception-web/" class="lien--vert">Éco-conception et optimisation des performances</a> partagent de nombreuses techniques, mais ne poursuivent pas exactement les mêmes objectifs. Lighthouse mesure la vitesse perçue par l'utilisateur — LCP, FID, CLS (les Core Web Vitals). Ces métriques sont corrélées à l'impact environnemental sans s'y superposer parfaitement.

Un score Lighthouse de 90+ en performance est un bon signal. Ce n'est pas une garantie d'éco-conception : un site peut charger vite avec des scripts lourds mis en cache et peser lourd dès la deuxième visite.

Utilisez Lighthouse pour la performance perçue, EcoIndex pour les métriques réseau. Les deux se complètent.

## L'onglet Réseau du navigateur : l'outil le plus honnête

Les outils automatisés sont pratiques. Ils simplifient, c'est leur force et leur limite. Pour un audit sérieux, l'onglet Réseau des outils de développement du navigateur reste irremplaçable.

Il permet de voir, requête par requête :

- ce qui est chargé, dans quel ordre et pour quelle durée ;
- le poids réel de chaque ressource avant et après compression ;
- ce qui est chargé sans jamais être utilisé ;
- ce qui bloque le rendu de la page.

**La procédure de base :** ouvrir les DevTools (F12 ou Cmd+Option+I), aller dans l'onglet Network, cocher "Disable cache", recharger la page. Observer.

Ce que vous cherchez en priorité :

- des ressources JavaScript volumineuses chargées en amont (render-blocking) ;
- des images non redimensionnées ou dans des formats non optimisés (JPEG là où du WebP suffirait) ;
- des polices web entières chargées alors qu'on n'utilise que quelques glyphes ;
- des requêtes vers des services tiers (analytics, fonts, CDN publicitaires) qui s'accumulent.

## La question des tiers

Les ressources tierces — Google Fonts, Google Analytics, scripts de réseaux sociaux, pixels de tracking — sont souvent le premier poste d'optimisation d'un site existant. Elles ajoutent des requêtes vers des domaines externes, introduisent des temps de connexion supplémentaires (DNS lookup, handshake TLS) et sont hors de votre contrôle.

Sur des sites que j'ai audités, il n'est pas rare de voir 30 à 50 % des requêtes provenir de ressources tierces dont le bénéfice réel pour l'utilisateur est difficile à justifier.

La question n'est pas "peut-on optimiser ces scripts ?" mais "a-t-on besoin de ces scripts ?" L'audit est aussi un exercice de remise en question des choix fonctionnels, pas seulement techniques.

## Documenter pour comparer

Un audit ponctuel a une valeur limitée. Ce qui compte, c'est la comparaison dans le temps : avant/après une optimisation, entre deux versions d'une page, entre un site de référence et le vôtre.

Prenez l'habitude de noter, pour chaque audit :

- la date et les conditions de mesure (cache vidé, connexion simulée si pertinent) ;
- les métriques EcoIndex et Lighthouse ;
- le nombre de requêtes et le poids total de la page selon l'onglet Network ;
- les trois problèmes les plus impactants identifiés.

Cette documentation vaut plus que le score lui-même. Elle transforme l'audit en outil de pilotage.

## Un audit n'est pas une fin en soi

La démarche d'éco-conception implique de remettre en question les fonctionnalités, pas seulement de les optimiser. Un carrousel lourd peut être remplacé par une image fixe. Une bibliothèque JS peut être remplacée par quelques lignes de CSS natif. Un service analytique complet peut être remplacé par des statistiques serveur agrégées.

L'audit est le point de départ de cette réflexion. Il dit où vous en êtes, pas où vous devriez aller. Pour ça, il faut aussi décider ce que le site doit faire — et ce qu'il peut arrêter de faire.

<div class="citation">Mesurer, c'est bien. Savoir pourquoi on mesure, c'est mieux.<br />— principe de base de tout audit sérieux</div>

Si vous voulez aller plus loin, les articles sur les <a href="/eco-conception/images-eco-conception/" class="lien--vert">images</a> et la <a href="/eco-conception/typographie-ecoconception/" class="lien--vert">typographie</a> de ce blog détaillent deux postes d'optimisation fréquemment négligés.