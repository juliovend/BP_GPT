# Bruit Parasite — Site vitrine statique

## 1) Présentation du projet
Landing page one-page pour le collectif théâtral fictif **Bruit Parasite**. Le site est statique, sans backend, et pensé pour un déploiement simple sur Hostinger.

## 2) Structure des fichiers
```
bruit-parasite/
  index.html
  css/
    style.css
  js/
    script.js
  assets/
    images/
  README.md
```

## 3) Comment ouvrir le site en local
1. Ouvrez le dossier `bruit-parasite`.
2. Double-cliquez sur `index.html` dans un navigateur.

## 4) Comment remplacer les images
Placez vos images dans `assets/images/` avec ces noms :
- `hero-stage.jpg`
- `spectacle-1.jpg`, `spectacle-2.jpg`, `spectacle-3.jpg`
- `atelier-1.jpg`, `atelier-2.jpg`, `atelier-3.jpg` (facultatif dans cette version)
- `equipe-1.jpg` à `equipe-5.jpg`

Le site reste lisible même sans images grâce aux placeholders CSS.

## 5) Comment modifier les textes
Tous les textes du site sont directement dans `index.html` :
- sections (hero, manifeste, spectacles, ateliers, équipe, contact)
- footer

## 6) Comment modifier les couleurs et typographies
Dans `css/style.css` :
- palette dans `:root`
- polices utilisées : Syne (titres), Inter (texte), IBM Plex Mono (labels)

## 7) Comment héberger sur Hostinger
1. Conservez les fichiers statiques tels quels.
2. Connectez-vous à Hostinger.
3. Ouvrez le **Gestionnaire de fichiers**.
4. Entrez dans `public_html`.
5. Envoyez `index.html`, `css/`, `js/`, `assets/`.
6. Vérifiez que `index.html` est bien à la racine de `public_html`.
7. Ouvrez votre nom de domaine pour tester le site.

## 8) Notes sur le formulaire de contact statique
Le formulaire est volontairement statique :
- pas d’envoi réel sans backend
- message de confirmation affiché côté navigateur
- lien direct `mailto:contact@bruitparasite.fr` disponible
