# Harsha Mandloi — Portfolio

Personal portfolio for Harsha Mandloi — Frontend Developer based in Edison, NJ.

**Live:** https://harshachouhan2016.github.io/harsha-mandloi/

## Stack

- **Vite** — dev server & bundler
- **React 18** + **TypeScript** — UI
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

## Project structure

```
├── public/
│   ├── harsha-portrait.jpg
│   └── Harsha-Mandloi-Resume.pdf
├── src/
│   ├── components/        # one file per section
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── SectionHead.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Writing.tsx
│   │   ├── Resume.tsx
│   │   ├── Contact.tsx
│   │   └── Reveal.tsx     # IntersectionObserver fade-up wrapper
│   ├── data/              # content lives here — edit these to update the site
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── education.ts
│   │   ├── testimonials.ts
│   │   └── writing.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          # Tailwind v4 @theme tokens + custom CSS
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Editing content

All copy lives in `src/data/`. Update those files and re-deploy — no component changes needed.

## Deploy to GitHub Pages

The repo includes a workflow at `.github/workflows/deploy.yml`. On every push to `main`:

1. The workflow installs deps, runs `npm run build`, and uploads `dist/` as a Pages artifact.
2. GitHub Pages serves it at `https://<user>.github.io/<repo>/`.

**One-time setup in the repo settings:**

- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**
- Push to `main` — the workflow runs automatically and publishes the site

If you rename the repo, update the `base:` path in `vite.config.ts` to match the new name.

## First-time push to GitHub

From the project root:

```bash
git init
git add .
git commit -m "Initial commit — portfolio v1"
git branch -M main
git remote add origin https://github.com/harshachouhan2016/harsha-mandloi.git
git push -u origin main --force
```

The `--force` overwrites any existing content on `main`. Drop it if you want to preserve the current repo contents and merge instead.
