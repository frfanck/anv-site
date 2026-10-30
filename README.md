# Aimons-Nous Vivants (ANV)

Site statique de l'association Aimons-Nous Vivants, réalisé en HTML, CSS et JavaScript. Aucun outil de compilation n'est nécessaire ; ouvrir `index.html` pour un aperçu local.

## Pages

- Accueil : `index.html`
- Présentation : `presentation.html`
- Actions : `actions.html`
- Bar-Restaurant : `restaurant.html`
- Demandes d'aide : `fiches.html`
- Contact : `contact.html`
- Mentions légales : `mentions-legales.html`
- Confidentialité : `confidentialite.html`

## Déploiement GitHub Pages

La configuration préparée suppose un dépôt public nommé `anv-site` sous le compte `frfanck`, donc l'adresse `https://frfanck.github.io/anv-site/`. Si le nom du dépôt change, mettre à jour `robots.txt` et `sitemap.xml`.

1. Créer le dépôt GitHub `frfanck/anv-site` et pousser la branche `main`.
2. Dans **Settings → Pages**, choisir **GitHub Actions** comme source.
3. Vérifier dans l'onglet **Actions** que le workflow **Deploy static site to GitHub Pages** se termine sans erreur.

Le workflow se déclenche à chaque mise à jour de `main`. Les fichiers `robots.txt` et `sitemap.xml` utilisent l'URL GitHub Pages prévue.

## Formulaires et confidentialité

GitHub Pages ne traite pas les formulaires. Les formulaires actuels sont configurés pour Netlify Forms (`data-netlify="true"`) et ne recevront aucune demande s'ils sont publiés uniquement sur GitHub Pages. Pour conserver leur fonctionnement, héberger le site sur Netlify relié au dépôt GitHub et vérifier la détection, les notifications et les tests de soumission dans Netlify.

Les fiches recueillent des données personnelles potentiellement sensibles, notamment de santé. Avant toute collecte réelle, choisir un service adapté, vérifier ses garanties et règles de confidentialité, limiter l'accès aux réponses et définir leur durée de conservation.

Le fichier `_headers` convient à certains hébergeurs comme Netlify ; GitHub Pages ne l'applique pas.

## Vérification JavaScript

```powershell
node --check script.js
node --check fiches.js
node --check intro.js
```