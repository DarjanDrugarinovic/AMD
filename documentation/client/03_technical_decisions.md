# 03 — Technical Decisions

## HashRouter instead of BrowserRouter

GitHub Pages has no server-side routing. With `BrowserRouter`, refreshing or navigating directly to any route (e.g. `/product/1`) returns a 404 — GitHub Pages looks for a file at that path and finds nothing.

`HashRouter` puts the route after a `#` (`/#/product/1`). The browser never sends the hash to the server, so GitHub Pages always serves `index.html` and React Router handles the rest client-side.

## `base: "./"` in vite.config.ts

The built asset paths are relative, so they resolve correctly regardless of where the app is served:

- Local dev → `localhost:5173/`
- GitHub Pages → `DarjanDrugarinovic.github.io/AMD/`

Using `base: "/AMD/"` would have broken local dev (app only accessible at `localhost:5173/AMD/`).

## `vite-tsconfig-paths` plugin

The codebase uses bare imports resolved via `baseUrl: "src"` in `tsconfig.app.json`:

```ts
import services from "api/services";   // resolves to src/api/services.ts
import env from "config/env";           // resolves to src/config/env.ts
```

Vite does not read `baseUrl` from tsconfig automatically. The `vite-tsconfig-paths` plugin bridges this. Without it the Vite build fails with module-not-found errors.
