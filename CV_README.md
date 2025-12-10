# 📄 Comment ajouter ton CV au site

## 📍 Emplacement

Place ton fichier CV dans: `/public/cv.pdf` ou `/public/CV-Benoit-Abot.pdf`

## 🔒 Non-indexable configuré

### 1. Via robots.txt
Le fichier `public/robots.txt` empêche l'indexation:
```
Disallow: /cv.pdf
Disallow: /CV-*.pdf
```

### 2. Via headers Netlify
Le fichier `netlify.toml` ajoute le header HTTP:
```
X-Robots-Tag: noindex, nofollow
```

## 🌐 URL d'accès

Une fois déployé, ton CV sera accessible à:
- `https://beabot.netlify.app/cv.pdf`
- `https://beabot.netlify.app/CV-Benoit-Abot.pdf`

## ✅ Étapes pour ajouter le CV

1. **Copier le fichier**:
   ```bash
   cp ~/chemin/vers/ton-cv.pdf /Users/benoitabot/Sites/beabot/public/cv.pdf
   ```

2. **Committer**:
   ```bash
   git add public/cv.pdf
   git commit -m "feat: Add CV PDF (non-indexable)"
   ```

3. **Le CV sera déployé automatiquement** avec le prochain push vers Netlify

## 🔍 Vérification

Après déploiement, vérifie que le CV n'est pas indexable:
1. Visite: `https://beabot.netlify.app/robots.txt`
2. Teste avec: `curl -I https://beabot.netlify.app/cv.pdf | grep X-Robots`
   - Doit afficher: `X-Robots-Tag: noindex, nofollow`

## 📝 Notes

- ✅ Le CV est accessible directement via URL
- ✅ Le CV n'apparaîtra PAS dans les résultats Google
- ✅ Cache configuré: 1 heure (peut être mis à jour rapidement)
- ✅ Headers de sécurité appliqués
