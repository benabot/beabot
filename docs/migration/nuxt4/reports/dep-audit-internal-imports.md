# Audit imports internes Nuxt

Date : 29 avril 2026

## Resultat

- `"#internal/nuxt/paths": "./nuxt.paths.mjs"` :
  - present

Preuve :
- `dep-audit-internal-nuxt-paths.txt`

## Decision proposee

- DEP-6 doit etre traite avant ou pendant DEP-1.
- Risque : override interne Nuxt 3 incompatible avec Nuxt 4.
- Action recommandee : suppression dans un commit dedie avant `nuxt@4`, avec tests immediats.

Validation recommandee apres suppression future :

```bash
npm test
npm run generate
NUXT_PUBLIC_SITE_URL=https://beabot.fr SEO_CHECK_HTML=1 node scripts/seo-check.mjs
```

## Statut dans DEP-AUDIT

- Aucun changement effectue.
- `package.json` n'a pas ete modifie.
- DEP-6 reste non coche dans `TODO.md`.
