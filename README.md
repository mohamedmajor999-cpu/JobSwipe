# JobSwipe MVP

Static front-end MVP implementing two mobile-inspired screens:

- **Swipe Stack** (candidate side)
- **Live Pulse** (dispatcher side)

## Prévisualiser depuis GitHub (recommandé)

Ce repo inclut un workflow GitHub Pages (`.github/workflows/deploy-pages.yml`) qui déploie automatiquement l'app statique.

### Étapes exactes dans GitHub

1. **Push ce code dans ton repo GitHub** (branche `main` recommandée).
2. Va dans **Settings → Pages**.
3. Dans **Build and deployment**, choisis **Source: GitHub Actions**.
4. Va dans l'onglet **Actions** et vérifie que le workflow **Deploy static site to GitHub Pages** est vert.
5. Une fois fini, ouvre l'URL :
   - `https://<ton-user>.github.io/<ton-repo>/start.html`
6. Clique sur **▶️ Prévisualiser l'application** pour ouvrir `index.html`.

## Prévisualisation locale en 1 clic

1. Ouvre `start.html` (double-clic).
2. Clique sur le bouton **▶️ Prévisualiser l'application**.

## Option terminal (locale)

```bash
cd /workspace/JobSwipe
./preview.sh
```

Puis ouvre `http://localhost:4173`.
