# AMD

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
