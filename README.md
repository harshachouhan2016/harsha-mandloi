# Harsha Mandloi — Portfolio

Personal portfolio for Harsha Mandloi — Frontend Developer based in Edison, NJ.

**Live:** https://harshachouhan2016.github.io/harsha-mandloi/

## Stack

- **Vite** — dev server & bundler
- **React 18** — UI (plain JavaScript + JSX, no TypeScript)
- **Tailwind CSS v4** (CSS-first config) — utility classes + design tokens
- **Custom CSS** — typography, marquee animation, hero rise animation, complex layouts
- **GitHub Actions** — automatic deploy to GitHub Pages on push to `main`

## Local development

```bash
npm install
npm run dev        # http://localhost:5173/harsha-mandloi/
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the built site locally
```

## Editing content

All copy lives in `src/data/`. Update those files and re-deploy — no component changes needed.

| File | What's in it |
|---|---|
| `src/data/experience.js` | Job entries, dates, bullets |
| `src/data/projects.js` | Project cards |
| `src/data/skills.js` | Skills lists |
| `src/data/education.js` | Education entries |
| `src/data/writing.js` | Blog/writing entries |

For visual tweaks: `src/index.css` (theme tokens at the top in `@theme { ... }`).

## Deploy

Workflow at `.github/workflows/deploy.yml` runs on every push to `main` and publishes to GitHub Pages automatically.

**One-time setup:** Repo Settings → Pages → Source = "GitHub Actions".
