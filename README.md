# Personal CV / Portfolio — Bioinformatics & Drug Delivery

A polished, interactive single-page portfolio built with **React + Vite**. Molecular/lab
aesthetic with an animated molecule-network background, scroll animations, a skills
dashboard, publication cards, GitHub project cards, and an **MD-simulation video gallery**
with a lightbox player.

## Quick start

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
```

## Editing your content

**Everything you edit lives in one file:** [`src/data/content.js`](src/data/content.js).
Update your name, bio, education, skills, software, publications, GitHub repos, thesis/
projects, and simulation videos there. No need to touch the components.

Drop images/logos/videos into [`public/assets/`](public/assets/README.md) and reference
them by path (e.g. `image: '/assets/publications/paper1.jpg'`). Leave a field as `''`
to keep the styled placeholder.

## Sections
Home · About · Education · Skills · Software · Publications · GitHub · Thesis · Simulations · Contact

## Theming
All colors live as CSS variables at the top of [`src/index.css`](src/index.css). A dark/light
toggle is built into the navbar. Change `--accent`, `--accent-2`, `--accent-3` to re-theme.

## Build & deploy

```bash
npm run build   # outputs static files to dist/
npm run preview # preview the production build locally
```

Deploy the `dist/` folder to any static host:
- **Vercel** (recommended): import the repo, framework auto-detected as Vite, deploys on every push.
- **Netlify**: connect the repo or drag-and-drop `dist/`.
- **GitHub Pages**: set `base: '/<repo-name>/'` in `vite.config.js`, then publish `dist/`.
- **Cloudflare Pages**: connect repo, build command `npm run build`, output dir `dist`.
