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

## Images du site
Placez les images du site dans `assets/images/` avec les noms suivants :
- `hero-stage.png`
- `spectacle-1.png`
- `spectacle-2.png`
- `spectacle-3.png`
- `atelier-1.png`
- `atelier-2.png`
- `atelier-3.png`
- `equipe-1.png`
- `equipe-2.png`
- `equipe-3.png`

Pour remplacer une image, conservez exactement le même nom de fichier et remplacez simplement le fichier dans `assets/images/`.

Formats recommandés :
- hero : format horizontal large, idéalement 16:9
- spectacles : format portrait/vertical, idéalement 4:5
- ateliers : format portrait/vertical, idéalement 4:5
- équipe : portraits verticaux, idéalement 4:5

Le site reste lisible même si une image est absente grâce aux fonds de secours et placeholders.

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
