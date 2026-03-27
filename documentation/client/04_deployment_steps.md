# 04 — Deployment Steps

## 1. Install dependencies locally

```
cd client
npm install
```

This installs `gh-pages` from `devDependencies` and locks it into `package-lock.json` so the CI install step can find it.

## 2. Push to main

The workflow at `.github/workflows/main.yml` triggers automatically and:

1. Installs dependencies inside `client/`
2. Builds with `VITE_USE_MOCK=true` (mock data bundled in, no Django needed)
3. Deploys `dist/` to the `gh-pages` branch

`GITHUB_TOKEN` and `GITHUB_REPOSITORY` are provided automatically by GitHub Actions. The workflow grants itself write access via `permissions: contents: write` — no custom secrets are needed.

## 3. Configure GitHub Pages (first time only)

Go to the repository **Settings → Pages**:

1. Source: **Deploy from a branch**
2. Branch: **gh-pages / (root)**

The site will be live at `https://DarjanDrugarinovic.github.io/AMD/`.
