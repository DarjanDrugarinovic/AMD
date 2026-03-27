# 01 — Overview

The client is a React + Vite SPA that lives in the `client/` subdirectory. GitHub Pages only serves static files — there is no server, so Django cannot run there.

## How it works

- The Vite build produces a static `dist/` folder
- Mock data is bundled into the build at compile time (no backend needed)
- GitHub Actions builds and deploys `dist/` to the `gh-pages` branch automatically on every push to `main`
- GitHub Pages serves the `gh-pages` branch

## Live URL

```
https://DarjanDrugarinovic.github.io/AMD/
```
