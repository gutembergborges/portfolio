# portfolio

Personal portfolio of Gutemberg Borges, Senior Software Engineer: selected projects, stack and a short bio.

**Stack:** Vue 3 (Composition API, `<script setup>`), TypeScript, Vite. Deployed to GitHub Pages with GitHub Actions.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # type-check + production build into dist/
```

## Edit content

All text lives in [`src/data.ts`](src/data.ts): profile, stack and project cards. Layout code never needs to change to add a project.

## Deploy

1. Push to `main`.
2. In the repo, open **Settings → Pages → Source: GitHub Actions** (one-time).
3. The workflow in `.github/workflows/deploy.yml` builds and publishes to `https://gutembergborges.github.io/portfolio/`.

If you rename the repo, set `BASE_PATH=/<new-name>/` or edit `vite.config.ts`.

## Design notes

- Light and dark themes follow the OS setting (`prefers-color-scheme`).
- Accessible: skip link, landmarks, visible focus rings, reduced-motion respected.
- No tracking, no cookies, no personal contact data beyond public profile links.

## License

MIT
