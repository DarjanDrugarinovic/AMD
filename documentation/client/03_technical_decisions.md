# 03 — Technical Decisions

## HashRouter instead of BrowserRouter

GitHub Pages has no server-side routing. With `BrowserRouter`, refreshing or navigating directly to any route (e.g. `/product/1`) returns a 404 — GitHub Pages looks for a file at that path and finds nothing.

`HashRouter` puts the route after a `#` (`/#/product/1`). The browser never sends the hash to the server, so GitHub Pages always serves `index.html` and React Router handles the rest client-side.

## `base: "/AMD/"` in vite.config.ts

Asset paths are built relative to `/AMD/`, matching where GitHub Pages serves the app (`DarjanDrugarinovic.github.io/AMD/`).

Local dev is unaffected as long as you access it at `localhost:5173/AMD/`. If that is inconvenient, change `base` to `"./"` for local work and back to `"/AMD/"` before pushing — or use an env variable to switch.

## Path aliases via Vite 8 native tsconfig support

The codebase uses bare imports resolved via `baseUrl: "src"` in `tsconfig.app.json`:

```ts
import services from "api/services";   // resolves to src/api/services.ts
import env from "config/env";           // resolves to src/config/env.ts
```

Vite 8 supports this natively via `resolve.tsconfigPaths: true` in `vite.config.ts`. No extra plugin is needed.
