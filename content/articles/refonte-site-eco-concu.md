---
title: 'Refonte de site éco-conçu : méthode et budget'
chapo: 'Une refonte ne se résume pas à un nouveau design. Voici comment aborder ça sérieusement — et ce que ça coûte vraiment.'
description: 'Méthode et budget pour une refonte de site éco-conçue : audit préalable, choix technique, livrables et fourchettes de prix.'
seo:
  title: 'Refonte de site web éco-conçu : méthode et budget'
  description: 'Comment planifier et budgéter une refonte de site web éco-conçue : audit, choix technique WordPress ou Nuxt, étapes et fourchettes de coût.'
date: 2026-04-27
updatedAt: 2026-04-27
temps: 7
tag: ['Eco-conception', 'WordPress', 'Performance']
conversion:
  service: wordpress
  cta: true
---

La majorité des refontes ratent leur objectif. Pas parce que le design est mauvais, pas parce que le développeur n'était pas compétent — mais parce que personne n'a posé les vraies questions avant de commencer. Le client voulait "quelque chose de plus moderne". Le prestataire a livré un nouveau template. Résultat : un site qui ressemble à autre chose mais qui pèse 4 Mo, charge en 6 secondes et perd des positions en trois mois. La refonte a coûté 8 000 €. L'ancien site était mieux.

Ce guide ne vous explique pas comment choisir une palette de couleurs. Il vous explique comment éviter ce scénario.

## Pourquoi une refonte sans audit est une erreur

Refaire un site sans avoir mesuré ce qui ne va pas dans l'existant, c'est poser du parquet neuf sans savoir si le plancher est pourri. On masque, on n'améliore pas.

Un site a une histoire. Il a des pages qui fonctionnent bien en SEO, des URLs indexées par Google depuis des années, du contenu que les utilisateurs trouvent. Il a aussi des dettes techniques, des plugins inutiles, du CSS accumulé depuis 2017. Tout ça doit être cartographié avant de toucher quoi que ce soit.

Ce qui arrive quand on ne fait pas d'audit : les redirections 301 oubliées qui cassent le référencement, le contenu qui performait bien et qu'on a supprimé sans le savoir, la dette technique qu'on recopie dans le nouveau site parce qu'on ne l'a pas identifiée. La refonte "propre" embarque alors tous les problèmes de l'ancien site, avec un nouveau design par-dessus.

## Étape 1 — L'audit avant de toucher quoi que ce soit

L'audit n'est pas une option. C'est le fondement sur lequel tout le reste repose.

Un <a href="/eco-conception/audit-site-web/" class="lien--vert">audit éco-conception</a> sérieux couvre au minimum quatre dimensions : la performance technique (Core Web Vitals, LCP, CLS, poids de page), le SEO actuel (quelles pages ranke, quels backlinks existent, quelle structure d'URLs est indexée), l'expérience utilisateur (parcours réels, taux de rebond, pages d'entrée) et l'empreinte technique (nombre de requêtes, scripts tiers, images non optimisées).

À la sortie de l'audit, on dispose d'une liste de ce qui fonctionne et qu'on doit conserver, de ce qui est cassé et qu'on doit corriger, et de ce qui est inutile et qu'on peut supprimer. Sans ce document, les décisions de refonte sont des paris.

L'audit prend entre un et cinq jours selon la taille du site. C'est du temps facturé — mais c'est le seul investissement qui protège l'ensemble du projet.

## Étape 2 — Choisir la stack (WordPress vs Nuxt vs autre)

Le choix technique n'est pas une question de préférence personnelle du développeur. C'est une question de cas d'usage, de compétences côté client et de contraintes de maintenance.

**WordPress** est pertinent quand le client ou son équipe doit éditer le contenu régulièrement, sans passer par un développeur. L'écosystème est mature, les éditeurs (dont Gutenberg natif) permettent une autonomie réelle. La contrepartie : un site WordPress mal configuré est lourd, vulnérable aux plugins et difficile à maintenir sur la durée. Un WordPress bien fait — thème sur-mesure, Gutenberg natif, zéro page builder — peut être performant. Mais ça demande de la rigueur.

**Nuxt / Vue.js** ou une solution statique est pertinent pour les sites à contenu stable, les blogs, les portfolios et les sites vitrine qui n'ont pas besoin d'une interface d'édition complexe. Le résultat est léger, ultra-performant, sans surface d'attaque côté serveur. La contrepartie : toute modification de contenu passe par un développeur ou un CMS headless.

Le <a href="/eco-conception/wordpress-vs-nuxt/" class="lien--vert">comparatif WordPress vs Nuxt</a> détaille les critères de choix selon votre profil. Il n'y a pas de bonne réponse universelle — il y a une bonne réponse pour votre situation.

## Étape 3 — Ce qu'on garde, ce qu'on jette (contenu, SEO, code)

C'est l'étape qui demande le plus de rigueur et que la plupart des projets bâclent.

**Côté contenu** : inventorier toutes les URLs existantes, identifier celles qui ont du trafic organique ou des backlinks, décider lesquelles migrent, lesquelles sont fusionnées et lesquelles sont supprimées avec une redirection appropriée. Chaque page supprimée sans redirection 301 est une perte de jus SEO et un 404 potentiel pour un utilisateur.

**Côté code** : ne rien réutiliser par défaut. L'ancien code a été écrit dans un contexte différent, avec des outils différents. Recommencer proprement est souvent plus rapide que de tenter de refactoriser un héritage incompréhensible. Exception : les intégrations spécifiques (APIs métier, fonctionnalités sur-mesure) qui ont coûté cher à développer et qui fonctionnent — celles-là méritent d'être portées.

**Côté SEO** : les balises title et descriptions existantes qui performent bien doivent être conservées ou améliorées, jamais supprimées par distraction. Le plan de redirection doit être finalisé avant la mise en production, pas après.

## Refonte partielle vs refonte complète — quand choisir laquelle

Une refonte complète n'est pas toujours la bonne réponse. C'est parfois la solution la plus chère pour un problème qui pouvait être résolu autrement.

**Refonte partielle** : le site est techniquement sain mais visuellement daté, ou une section spécifique pose problème. On intervient chirurgicalement — nouveau thème graphique, refonte d'un tunnel de conversion, optimisation de la performance. Moins de risques, moins de coût, et souvent un résultat plus rapide.

**Refonte complète** : la dette technique est trop lourde pour être patchée, la stack est obsolète (un Prestashop 1.6, un Joomla non maintenu, un WordPress sous PHP 7.2), ou le modèle du site a fondamentalement changé. Là, repartir de zéro est justifié — à condition de bien préparer la migration.

Le test simple : si l'audit révèle que plus de 60% des problèmes sont structurels (stack, architecture, dette de code), une refonte complète est probablement nécessaire. Si les problèmes sont surtout de surface (design, contenu, quelques optimisations), une refonte partielle suffit.

## Budget réaliste — fourchettes par type de projet

Ces fourchettes correspondent à un travail sérieux : audit préalable, développement propre, plan de redirection, tests et formation.

| Type de projet                                | Fourchette indicative |
| --------------------------------------------- | --------------------- |
| Refonte partielle (design + optimisation)     | 2 500 – 5 000 €       |
| Refonte complète site vitrine (WordPress)     | 5 000 – 10 000 €      |
| Refonte complète site vitrine (Nuxt/statique) | 4 000 – 8 000 €       |
| Refonte e-commerce (WooCommerce)              | 8 000 – 18 000 €      |
| Audit préalable seul                          | 800 – 2 500 €         |
| TJM freelance senior                          | 450 – 650 €/j         |

Un devis significativement en dessous de ces fourchettes doit appeler une question directe : qu'est-ce qui n'est pas inclus ? L'audit préalable ? Le plan de redirection ? Les tests cross-navigateurs ? La formation à la prise en main ? Ces omissions se paient toujours, en temps ou en argent, quelques mois après la mise en ligne.

## Les critères d'une refonte réussie

Une refonte réussie ne se mesure pas à "c'est plus joli qu'avant". Elle se mesure sur des indicateurs objectifs.

**EcoIndex** : le score d'éco-conception de la page d'accueil doit progresser. Un site refait sérieusement devrait viser un score A ou B. Si le nouveau site est plus lourd que l'ancien, quelque chose s'est mal passé.

**Lighthouse** : les scores Performance, Accessibilité et SEO doivent être au-dessus de 90 sur les pages principales. Ce n'est pas un objectif cosmétique — c'est un indicateur de qualité technique réelle.

**SEO** : aucune perte de trafic organique dans les 60 jours suivant la mise en ligne (hors saisonnalité). Si les positions s'effondrent, c'est que le plan de redirection était incomplet ou que du contenu indexé a disparu sans préparation.

**Maintenabilité** : le client peut mettre à jour son contenu sans appeler le développeur pour chaque virgule. Le code est documenté suffisamment pour qu'un autre développeur puisse reprendre le projet dans six mois. La maintenance annuelle est planifiée et budgétée, pas improvisée.

Ces critères doivent être formalisés dans le cahier des charges avant le démarrage du projet. Ce qui n'est pas défini au départ ne peut pas être vérifié à la fin.

Vous voulez en savoir plus sur mes [services de refonte, WordPress, Nuxt et audit](/services/) ? Les détails sont là.

---

Besoin d'un développeur web freelance à Lille pour votre refonte ? [Me confier ce type de mission](/services/) ou [me contacter directement](/contact/).
