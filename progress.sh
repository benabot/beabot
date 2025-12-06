#!/bin/bash

# 📊 BeAbot - Progression Quick Fixes
# Usage: ./progress.sh

echo "📊 PROGRESSION QUICK FIXES P0"
echo "================================"
echo ""

# Vérifier branch actuelle
BRANCH=$(git branch --show-current)
echo "🌳 Branch actuelle: $BRANCH"

if [ "$BRANCH" != "fix/quick-fixes-p0" ]; then
    echo "⚠️  Tu n'es pas sur la branch fix/quick-fixes-p0"
    echo "   Exécuter: git checkout fix/quick-fixes-p0"
    exit 1
fi

echo ""
echo "✅ Tâches à faire:"
echo ""

# AUDIT-01: UTF-8
if grep -q "Lâ€™Ã©co-conception" nuxt.config.js 2>/dev/null; then
    echo "❌ AUDIT-01: Encodage UTF-8 (10 min)"
    echo "   → Fichier: nuxt.config.js"
else
    echo "✅ AUDIT-01: Encodage UTF-8 - DONE"
fi

# AUDIT-02: v-for :key
VFOR_WITHOUT_KEY=$(grep -r "v-for" components/ pages/ 2>/dev/null | grep -v ":key" | wc -l)
if [ "$VFOR_WITHOUT_KEY" -gt 0 ]; then
    echo "❌ AUDIT-02: v-for sans :key ($VFOR_WITHOUT_KEY trouvés) (30 min)"
    echo "   → Chercher: grep -r 'v-for' components/ pages/ | grep -v ':key'"
else
    echo "✅ AUDIT-02: v-for :key - DONE"
fi

# AUDIT-03: Images alt
IMG_WITHOUT_ALT=$(grep -r "<img" components/ pages/ 2>/dev/null | grep -v 'alt=' | wc -l)
SVG_WITHOUT_ARIA=$(grep -r "<svg" components/ 2>/dev/null | grep -v 'role=' | wc -l)
MISSING_ALT=$((IMG_WITHOUT_ALT + SVG_WITHOUT_ARIA))

if [ "$MISSING_ALT" -gt 0 ]; then
    echo "❌ AUDIT-03: Images alt manquants ($MISSING_ALT trouvés) (45 min)"
    echo "   → img sans alt: $IMG_WITHOUT_ALT"
    echo "   → svg sans role: $SVG_WITHOUT_ARIA"
else
    echo "✅ AUDIT-03: Images alt - DONE"
fi

# AUDIT-04: Contraste (manuel)
echo "⚠️  AUDIT-04: Contraste couleurs (30 min)"
echo "   → Test manuel: https://webaim.org/resources/contrastchecker/"

echo ""
echo "📝 Fichiers modifiés:"
git status --short

echo ""
echo "💡 Prochaine étape:"
echo "   1. Faire les corrections (voir TODO.md)"
echo "   2. Tester: yarn dev"
echo "   3. Commit: git commit -m 'fix(scope): message'"
echo ""
