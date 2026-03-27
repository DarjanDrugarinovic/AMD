# AMD

Live demo: https://DarjanDrugarinovic.github.io/AMD/

![Demo](documentation/demo.gif)

## Server

```bash
cd server
uv sync
uv run python manage.py migrate
uv run python manage.py runserver
```

## Database

```bash
cd server
uv run python manage.py shell -c "
import sqlite3, pathlib
db = pathlib.Path('db.sqlite3')
conn = sqlite3.connect(db)
conn.executescript(open('populate.sql').read())
conn.commit()
conn.close()
"
```

## Client

```bash
cd client
npm install
npm run dev
```

## GitHub Pages

The client is deployed to GitHub Pages via GitHub Actions. Since Django cannot run on GitHub Pages, the frontend uses mock data bundled at build time (`VITE_USE_MOCK=true`).

**Automatic deployment** — every push to `main` triggers `.github/workflows/main.yml`, which builds and pushes to the `gh-pages` branch. No secrets need to be configured.

**First-time setup** — in the repository Settings → Pages:

1. Source: **Deploy from a branch**
2. Branch: **gh-pages** / **(root)**

**Local vs deployed behaviour**

|                 | Local dev               | GitHub Pages                      |
| --------------- | ----------------------- | --------------------------------- |
| `VITE_USE_MOCK` | `false` (`.env`)        | `true` (workflow)                 |
| Data source     | Django backend          | Bundled JSON (`client/src/mock/`) |
| Router          | HashRouter (`/#/login`) | HashRouter (`/#/login`)           |
