---
title: 'WordPress vs Nuxt pour un site vitrine éco-conçu'
chapo: 'Deux outils sérieux, deux philosophies différentes. Lequel choisir pour un site vitrine sobre et maintenable ?'
description: "Comparatif WordPress vs Nuxt pour un site vitrine éco-conçu : performance, maintenabilité, coût et cas d'usage."
seo:
  title: 'WordPress vs Nuxt pour un site vitrine éco-conçu'
  description: "WordPress ou Nuxt pour un site vitrine éco-conçu ? Comparatif honnête : performance, coût, maintenabilité et cas d'usage pour choisir la bonne stack."
date: 2026-04-27
updatedAt: 2026-04-27
temps: 8
tag: ['WordPress', 'Eco-conception', 'Performance']
conversion:
  service: wordpress
  cta: true
---

La question revient souvent dans les discussions avec des clients ou d'autres développeurs : WordPress ou Nuxt pour un site vitrine ? Pas React en général, pas Webflow, pas Wix — ces deux-là précisément. WordPress parce qu'il reste la référence absolue du CMS web, avec 43 % des sites mondiaux. Nuxt parce que c'est la stack que j'utilise pour mes propres projets et que beaucoup de développeurs Vue.js adoptent pour les sites statiques. Ce sont deux outils sérieux, avec des équipes actives, des écosystèmes matures et des cas d'usage légitimes. La question n'est pas laquelle est "meilleure" en absolu — c'est laquelle convient à votre situation.

Je vais répondre directement, avec les avantages et les limites réels des deux, et une recommandation claire à la fin. Ce que j'essaie d'éviter ici, c'est le comparatif mou qui se termine par "ça dépend de votre contexte" sans jamais dire à quoi ça ressemble concrètement.

## WordPress — forces et limites pour l'éco-conception

WordPress est puissant précisément parce qu'il est généraliste. Un CMS avec une interface d'administration, une base de données, des milliers de plugins, des thèmes en pagaille. Pour un client qui veut gérer son contenu seul, c'est souvent le choix naturel : la courbe de prise en main est raisonnable, la documentation abonde, et trouver quelqu'un pour maintenir le site est facile.

Mais WordPress traîne des problèmes structurels qui compliquent l'éco-conception. Chaque page est générée dynamiquement depuis une base de données PHP — sauf si un plugin de cache s'en mêle. Les requêtes HTTP sont nombreuses par défaut. Un thème commercial chargera facilement 30 à 50 fichiers CSS et JS sur une page d'accueil simple. L'éditeur Gutenberg a amélioré les choses, mais les page builders (Elementor, Divi, WPBakery) restent courants et sont de véritables désastres en termes de performance.

Un WordPress bien fait — thème sur-mesure en blocs Gutenberg natifs, plugins réduits au strict nécessaire, cache serveur actif, hébergement sérieux — peut atteindre des performances correctes. J'y suis arrivé sur des projets clients. Mais c'est une configuration qui demande de la rigueur, du temps, et une vraie connaissance du CMS. Ce n'est pas l'état par défaut d'un site WordPress sorti de l'agence standard.

Il y a aussi la question de la surface d'attaque. WordPress est la cible numéro un des attaques automatisées. Plugins non mis à jour, thèmes abandonnés, xmlrpc.php ouvert — maintenir un WordPress en production demande une vigilance constante. C'est du temps, donc du coût.

## Nuxt SSG — avantages techniques, contraintes d'usage

Nuxt en mode SSG (Static Site Generation) génère un ensemble de fichiers HTML, CSS et JS statiques au moment du build. Il n'y a plus de PHP, plus de base de données, plus de serveur applicatif. Le site est servi depuis un CDN ou un hébergement statique. C'est le choix que j'ai fait pour <a href="/eco-conception/l-eco-conception-web/" class="lien--vert">ce site et pour mes projets d'éco-conception</a> — les raisons sont techniques et concrètes.

Un site Nuxt SSG bien configuré démarre léger : pas de requête base de données, pas d'exécution PHP, pas de plugin de cache à configurer. Lighthouse à 95+ n'est pas un exploit, c'est le point de départ normal. Le code est versionné avec Git, les déploiements sont automatisés via Netlify ou Vercel, et la sécurité est réduite à sa plus simple expression (pas de surface serveur exposée).

La contrainte principale est réelle et non négligeable : il faut être développeur pour modifier la structure du site. Un client ne peut pas ouvrir une interface et changer la navigation ou ajouter une section — pas sans accès au code. Nuxt Content permet de gérer le contenu des articles en Markdown, ce qui convient à beaucoup de cas, mais ça suppose que le client soit à l'aise avec Git ou qu'on lui fournisse un CMS headless (Contentful, Sanity, etc.) en complément.

Pour une <a href="/eco-conception/refonte-site-eco-concu/" class="lien--vert">refonte orientée éco-conception</a>, Nuxt SSG est le choix le plus direct pour atteindre des métriques solides sans contorsions techniques. Mais si l'autonomie du client sur la structure du site est non négociable, l'équation devient plus complexe.

## Tableau comparatif

| Critère                                | WordPress                                      | Nuxt SSG                                       |
| -------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| Performance brute                      | ⚠️ Variable selon configuration                | ✅ Excellente par défaut                       |
| Éco-conception                         | ⚠️ Possible mais demande rigueur               | ✅ Naturellement sobre                         |
| SEO                                    | ✅ Mature (Yoast, sitemap auto)                | ✅ Complet si bien configuré                   |
| Coût total (hébergement + maintenance) | ⚠️ Hébergement PHP requis + maintenance active | ✅ Hébergement statique gratuit ou quasi       |
| Autonomie client                       | ✅ Interface admin complète                    | ❌ Limité au contenu Markdown                  |
| Maintenance technique                  | ❌ Mises à jour fréquentes, risques sécurité   | ✅ Dépendances stables, déploiement automatisé |

## Cas d'usage — quand WordPress, quand Nuxt

**Choisir WordPress quand :**

- Le client doit pouvoir modifier lui-même la structure des pages (menus, blocs, sections) sans passer par un développeur.
- Le projet inclut un WooCommerce ou un système de gestion de contenu complexe (annuaires, listings, formulaires avancés).
- Le budget maintenance est limité et le client préfère un écosystème où il peut trouver facilement de l'aide.

**Choisir Nuxt SSG quand :**

- Le site est relativement stable dans sa structure (portfolio, vitrine, landing page, blog).
- La performance et la sobriété numérique sont des critères prioritaires — pas juste des arguments marketing.
- Le client fait confiance à un développeur pour les évolutions structurelles et veut un site durable, maintenable, sans dette technique accumulée.
- L'hébergement zéro-coût sur Netlify ou Vercel est un avantage réel.

Ce que j'évite de dire ici : "les deux peuvent fonctionner". Techniquement vrai, pratiquement inutile. Pour un site vitrine de 5 à 10 pages avec un contenu qui ne change pas tous les jours, Nuxt SSG est objectivement plus simple à maintenir, plus performant et moins coûteux à long terme. Le seul frein sérieux, c'est l'autonomie client sur la structure — et c'est un frein réel qu'il faut nommer.

## Ce que je recommande selon le contexte

Pour un site vitrine professionnel — consultant, cabinet, artisan, PME — où le client met à jour ses textes et ses images mais ne restructure pas son site chaque semaine : **Nuxt SSG**. Les arguments sont simples : moins de surface de panne, moins de maintenance, meilleures performances, empreinte réduite. C'est ce que j'utilise pour mes propres projets, ce n'est pas anodin.

Pour un site qui doit vraiment être géré par le client sans passer par un développeur pour les modifications structurelles : **WordPress avec Gutenberg natif**, sans page builder, sans thème commercial chargé. Un thème sur-mesure léger, un hébergement avec cache serveur (Kinsta, WP Engine, ou un VPS bien configuré), et une liste de plugins courte et maîtrisée. C'est faisable et ça tient dans le temps, à condition de ne pas prendre de raccourcis au départ.

Ce que je ne recommande pas : WordPress avec Elementor ou Divi pour un projet qui se réclame de l'éco-conception. C'est une contradiction dans les termes. Les <a href="/services/" class="lien--vert">services WordPress, Nuxt et audit que je propose</a> partent du même principe : pas de gras inutile, pas de dépendances superflues, un site qui fait exactement ce qu'il doit faire.

Les deux stacks peuvent produire de bons résultats si elles sont utilisées avec rigueur. Aucune ne compense un brief flou. Le choix de la stack vient en deuxième — après avoir compris ce que le site doit réellement faire, pour qui, et sur quels critères de succès.

---

Besoin d'aide pour choisir entre WordPress et Nuxt ? Je peux analyser votre projet et vous orienter. [Découvrir mes services WordPress / Nuxt](/services/) ou [me contacter directement](/contact/).
