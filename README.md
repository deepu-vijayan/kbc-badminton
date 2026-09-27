# KBC Badminton — concept site

A concept redesign for KBC Badminton (Camellia, NSW) in a "Kinetic Dark"
style. Built with React + Vite. **Not the club's official website.**

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`. In the repo's **Settings → Pages**, set
**Source** to **GitHub Actions** (one-time).

Asset paths are relative (`base: "./"` in `vite.config.js`), so the build
works under any repository name.

## Editing content

Club facts, timetable, prices, links and photos all live in
`src/data/content.js`. Photos go in `public/shots/`.
