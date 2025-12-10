# 🚀 Configuration Netlify - BeAbot Nuxt 3

> Documentation complète de la configuration Netlify pour le projet BeAbot

**Date de création** : 9 décembre 2025
**Projet** : BeAbot - Blog éco-conception web
**Framework** : Nuxt 3.14+
**Hébergement** : Netlify

---

## 📋 VUE D'ENSEMBLE

Le projet BeAbot utilise Netlify pour :
1. **Hébergement statique** (SSG - Static Site Generation)
2. **Formulaire de contact** (Netlify Forms)
3. **Build automatique** via Git push
4. **CDN mondial** pour performance optimale
5. **HTTPS automatique**

---

## 📂 FICHIERS DE CONFIGURATION

### 1. netlify.toml (racine du projet)
Fichier de configuration principal pour Netlify.

**Emplacement** : `/netlify.toml`

#### Sections principales :

##### [build] - Configuration de build
```toml
[build]
  command = "yarn generate"
  publish = ".output/public"
  environment = { NODE_VERSION = "18" }
```

**Explications** :
- `command` : Commande Nuxt 3 pour générer le site statique
- `publish` : Dossier de sortie Nuxt 3 (⚠️ Nuxt 2 utilisait `dist/`)
- `NODE_VERSION` : Node.js 18 minimum requis pour Nuxt 3

##### [[headers]] - En-têtes HTTP

**Sécurité** :
```toml
X-Frame-Options = "DENY"              # Empêche l'embedding iframe
X-Content-Type-Options = "nosniff"    # Empêche MIME sniffing
X-XSS-Protection = "1; mode=block"    # Protection XSS basique
Referrer-Policy = "strict-origin-when-cross-origin"
```

**Performance** :
```toml
Cache-Control = "public, max-age=31536000, immutable"  # Assets
Cache-Control = "public, max-age=0, must-revalidate"  # HTML
```

##### [[redirects]] - Redirections
```toml
from = "https://beabot.netlify.com/*"
to = "https://beabot.netlify.app/:splat"
status = 301
force = true
```

**Note** : Redirige l'ancien domaine `.netlify.com` vers `.netlify.app`

##### [[plugins]] - Plugins Netlify

1. **@netlify/plugin-lighthouse** : Audits automatiques à chaque déploiement
2. **netlify-plugin-submit-sitemap** : Soumission automatique sitemap.xml

**Installation** (dans Netlify UI) :
```bash
# Ces plugins s'installent automatiquement si configurés dans netlify.toml
# Ou manuellement via Netlify UI > Site settings > Plugins
```

---

### 2. public/contact-form.html
Fichier HTML statique pour détection du formulaire par Netlify.

**Emplacement** : `/public/contact-form.html`

**Pourquoi ce fichier ?**
- Netlify Forms nécessite un formulaire HTML statique pour la détection
- Dans une SPA/SSG, le formulaire est géré par JavaScript (Vue)
- Ce fichier "fantôme" permet à Netlify de détecter la structure du formulaire

**Structure** :
```html
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/"
  hidden
>
  <input type="hidden" name="form-name" value="contact" />
  <label>Ne pas remplir : <input name="bot-field" /></label>
  <label>Nom <input type="text" name="name" /></label>
  <label>Email <input type="email" name="email" /></label>
  <label>Message <textarea name="message"></textarea></label>
</form>
```

**Champs requis** :
- `name="contact"` : Identifiant du formulaire
- `data-netlify="true"` : Active Netlify Forms
- `netlify-honeypot="bot-field"` : Protection anti-spam
- `form-name` hidden field : Nécessaire pour les soumissions AJAX

---

## 📧 CONFIGURATION FORMULAIRE CONTACT

### Fichier Vue : pages/contact.vue

Le formulaire réel est dans `pages/contact.vue` avec Composition API.

#### Points clés du code :

1. **Attributs HTML** (identiques au fichier statique) :
```vue
<form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/"
  @submit.prevent="onSubmit"
>
```

2. **Soumission AJAX** :
```js
const body = encode({
  'form-name': 'contact',
  name: form.name,
  email: form.email,
  message: form.message,
  'bot-field': form.botField
})

await fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body
})
```

3. **Protection anti-spam (Honeypot)** :
```vue
<p class="hidden">
  <label>Ne pas remplir : <input name="bot-field" v-model="form.botField" /></label>
</p>
```

**Comment ça marche** :
- Champ caché pour les humains (CSS `display: none`)
- Les bots automatiques remplissent tous les champs
- Si `bot-field` est rempli, Netlify rejette la soumission

---

## 🔧 CONFIGURATION NETLIFY UI

### Variables d'environnement (optionnelles)

**Emplacement** : Netlify UI > Site settings > Environment variables

```bash
# Exemple de variables (si besoin futur)
NUXT_PUBLIC_SITE_URL=https://beabot.netlify.app
NUXT_PUBLIC_API_BASE=/api
```

### Notifications de formulaire

**Emplacement** : Netlify UI > Site settings > Forms > Form notifications

**Configuration recommandée** :
1. **Email notification** : Envoyer à `hello@beabot.fr`
2. **Slack webhook** (optionnel) : Notification temps réel
3. **Spam filters** : Activés par défaut (Akismet)

**Accès aux soumissions** :
- Netlify UI > Forms > [nom du formulaire]
- Export CSV disponible
- Webhook personnalisé possible

---

## 🚀 DÉPLOIEMENT

### Build Settings (Netlify UI)

**Site settings > Build & deploy > Build settings**

```
Build command:        yarn generate
Publish directory:    .output/public
Node version:         18
```

**⚠️ Important** : Si `netlify.toml` existe, il OVERRIDE les settings UI.

### Contextes de build

Le `netlify.toml` définit 3 contextes :

1. **Production** (main branch) :
   ```toml
   [context.production]
     command = "yarn generate"
   ```

2. **Deploy previews** (Pull Requests) :
   ```toml
   [context.deploy-preview]
     command = "yarn generate"
   ```

3. **Branch deploys** (autres branches) :
   ```toml
   [context.branch-deploy]
     command = "yarn generate"
   ```

### Déploiement continu

**Branche surveillée** : `main` (ou `master`)

**Workflow** :
1. `git push origin main`
2. Netlify détecte le push
3. Lance `yarn install`
4. Exécute `yarn generate`
5. Vérifie `.output/public/`
6. Déploie sur CDN
7. Purge cache CDN
8. Site live en ~2 min

---

## 🔍 VALIDATION PRE-BUILD

Le script `scripts/pre-build-check.js` valide la configuration Netlify :

```js
// Vérifie existence netlify.toml
check(fileExists('netlify.toml'), '❌ netlify.toml is missing')

// Vérifie commande de build
check(netlifyConfig.includes('yarn generate'),
  '❌ netlify.toml should use "yarn generate"')

// Vérifie répertoire de publication
check(netlifyConfig.includes('.output/public'),
  '❌ netlify.toml should publish ".output/public"')

// Vérifie formulaire HTML statique
check(fileExists('public/contact-form.html'),
  '❌ public/contact-form.html is missing')
```

**Exécution** :
```bash
yarn test                    # Manuel
yarn build                   # Auto (via prebuild)
yarn generate                # Auto (via pregenerate)
```

---

## ⚡ OPTIMISATIONS PERFORMANCE

### 1. Compression Assets

**Netlify gère automatiquement** :
- Brotli compression (meilleur que Gzip)
- Gzip fallback pour anciens navigateurs
- HTTP/2 Server Push

**Ancien module obsolète** :
- ❌ `nuxt-precompress` (plus nécessaire)

### 2. Cache Strategy

**Headers configurés** :
```toml
# Assets statiques (JS, CSS, fonts, images)
Cache-Control: public, max-age=31536000, immutable

# Pages HTML
Cache-Control: public, max-age=0, must-revalidate

# Service Worker
Cache-Control: public, max-age=0, must-revalidate
```

**Explication** :
- Assets : cache 1 an (hash dans nom de fichier)
- HTML : toujours revalider (contenu dynamique)
- SW : toujours revalider (gestion cache)

### 3. CDN Mondial

Netlify utilise un CDN multi-régions :
- Edge nodes dans 190+ pays
- Latence < 50ms en moyenne
- Automatic geographic routing

---

## 🐛 TROUBLESHOOTING

### Problème : Formulaire ne fonctionne pas

**Causes possibles** :

1. ❌ **Fichier statique manquant**
   ```bash
   # Vérifier présence
   ls public/contact-form.html

   # Si absent, recréer depuis le template
   ```

2. ❌ **Attributs form incorrects**
   ```vue
   <!-- ✅ CORRECT -->
   <form
     name="contact"
     data-netlify="true"
     netlify-honeypot="bot-field"
   >

   <!-- ❌ INCORRECT -->
   <form name="contact-form">  <!-- Nom différent -->
   <form data-netlify="false"> <!-- Désactivé -->
   ```

3. ❌ **Champ form-name manquant dans AJAX**
   ```js
   // ✅ CORRECT
   const body = encode({
     'form-name': 'contact',  // REQUIS
     name: form.name,
     email: form.email,
     message: form.message
   })
   ```

### Problème : Build échoue sur Netlify

**Diagnostics** :

1. **Vérifier Node.js version**
   ```toml
   [build.environment]
     NODE_VERSION = "18"  # Nuxt 3 nécessite ≥18
   ```

2. **Vérifier commande de build**
   ```bash
   # Tester localement
   yarn generate

   # Vérifier output
   ls -la .output/public/
   ```

3. **Vérifier dépendances**
   ```bash
   # Dans package.json
   "nuxt": "^3.14.1592"  # Doit être Nuxt 3
   ```

### Problème : Pages 404 après deploy

**Cause** : Répertoire de publication incorrect

**Solution** :
```toml
[build]
  publish = ".output/public"  # Nuxt 3
  # PAS "dist/" (Nuxt 2)
```

### Problème : Formulaire spam

**Solutions** :

1. **Activer Akismet** (Netlify UI > Forms > Spam filtering)
2. **Honeypot activé** (déjà fait via `netlify-honeypot="bot-field"`)
3. **reCAPTCHA v2** (optionnel) :
   ```vue
   <div
     class="g-recaptcha"
     data-sitekey="YOUR_SITE_KEY"
   ></div>
   ```

---

## 📊 MONITORING & ANALYTICS

### Lighthouse CI

**Configuration** (déjà dans netlify.toml) :
```toml
[[plugins]]
  package = "@netlify/plugin-lighthouse"
  [plugins.inputs]
    output_path = "reports/lighthouse.html"
```

**Rapports disponibles** :
- Netlify UI > Deploys > [deploy] > Plugin logs
- Fichier `reports/lighthouse.html` après build

**Métriques surveillées** :
- Performance Score
- Accessibility Score
- Best Practices Score
- SEO Score

### Netlify Analytics (optionnel, payant)

**Activation** : Netlify UI > Analytics

**Avantages** :
- Pas de cookies (RGPD-friendly)
- Server-side tracking (bloqueurs pubs ignorés)
- Métriques temps réel

---

## 🔐 SÉCURITÉ

### Headers configurés

1. **X-Frame-Options: DENY**
   - Empêche embedding dans iframe
   - Protection contre clickjacking

2. **X-Content-Type-Options: nosniff**
   - Force respect du Content-Type
   - Empêche exécution de fichiers malveillants

3. **X-XSS-Protection: 1; mode=block**
   - Protection XSS navigateur (legacy)
   - Redondant avec CSP moderne

4. **Referrer-Policy: strict-origin-when-cross-origin**
   - Limite fuites d'informations via Referer header

### Future : Content Security Policy

**À ajouter dans netlify.toml** (si besoin) :
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = """
      default-src 'self';
      script-src 'self' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
      connect-src 'self';
    """
```

---

## 📚 RESSOURCES UTILES

### Documentation officielle
- [Netlify Docs](https://docs.netlify.com/)
- [Netlify Forms](https://docs.netlify.com/forms/setup/)
- [Nuxt 3 Deployment](https://nuxt.com/docs/getting-started/deployment#static-hosting)
- [netlify.toml Reference](https://docs.netlify.com/configure-builds/file-based-configuration/)

### Support
- [Netlify Community](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

### Outils
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) : `npm install -g netlify-cli`
- [Netlify Dev](https://docs.netlify.com/cli/local-development/) : `netlify dev`

---

## ✅ CHECKLIST DEPLOY

Avant de pusher vers production :

- [ ] `yarn test` passe (49/49 checks)
- [ ] `yarn build` fonctionne localement
- [ ] `yarn generate` génère `.output/public/`
- [ ] `netlify.toml` existe et configuré
- [ ] `public/contact-form.html` existe
- [ ] Formulaire contact testé localement
- [ ] Headers sécurité configurés
- [ ] Redirections testées
- [ ] Lighthouse score > 90

---

**📝 Document créé par** : Claude Code
**📅 Date** : 9 décembre 2025
**🎯 Projet** : BeAbot - Migration Nuxt 2→3
**📌 Version** : 1.0.0
**🔄 À mettre à jour** : Si configuration Netlify change
