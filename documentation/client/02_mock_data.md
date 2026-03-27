# 02 — Mock Data

Django cannot run on GitHub Pages, so all backend data is mocked client-side.

## Environment variable

| Context      | Value                  | How it is set                          |
|--------------|------------------------|----------------------------------------|
| Local dev    | `VITE_USE_MOCK=false`  | `client/.env`                          |
| GitHub Pages | `VITE_USE_MOCK=true`   | `.github/workflows/main.yml` `env:`    |

When `VITE_USE_MOCK=true`, every GET request is intercepted before reaching axios and returns data from the local JSON files instead.

## Mock JSON files

Located in `client/src/mock/`:

| File               | Contents                  |
|--------------------|---------------------------|
| `products.json`    | 15 AMD products           |
| `firmwares.json`   | 28 firmware entries       |
| `statistics.json`  | 28 statistic records      |
| `todos.json`       | 8 todos                   |

## How ID-parameterised routes are handled

The real API has routes like `GET /products/3/firmwares/` that accept an ID in the URL. Static files cannot do this. Instead, `client/src/api/mock-services.ts` pattern-matches the requested URL with a regex, then filters the already-imported JSON array in JavaScript:

```
/products/3/firmwares/  →  firmwares.json filtered by product_id === 3
/firmwares/19/statistics/  →  statistics.json filtered by firmware_id === 19
```

No file per ID is needed — all filtering happens in code.

## Where the switch lives

`client/src/api/services.ts` — the `get` method checks `env.USE_MOCK` and routes to `mock-services` instead of axios when true. Mutations (POST, PUT, DELETE) are not used in the app.
