# 01 — Django Project Initialization

## Prerequisites

- Python 3.12+
- `uv` installed

```
core/          ← project (settings, root urls)
api/           ← app (your API logic)
users/         ← another app (auth, user management)
products/      ← another app (product catalog)
```

Apps are reusable — you could drop a `users` app into another Django project.

## Steps

```bash
# Create project and venv
uv init .
uv venv

# Activate virtual environment
source .venv/Scripts/activate

# Install dependencies
uv add django djangorestframework djangorestframework-simplejwt psycopg2-binary python-decouple

# Create Django project (. means use current directory)
django-admin startproject core .

# Create first app
python manage.py startapp api

# Run initial migrations and verify server starts
python manage.py migrate
python manage.py runserver
```

## Register apps in `core/settings.py`

```python
INSTALLED_APPS = [
    # ...default apps...
    'rest_framework',
    'api',
]
```

## INSTALLED_APPS

- `rest_framework` — comes from the `djangorestframework` package installed via `uv add`
- `api` — the app created with `python manage.py startapp api` (the `api/` folder in your project)

Without registering them, Django won't pick up their models, URLs, or serializers.

## Project vs App

**Project** = the whole thing. Config, settings, URLs, entry point. Created once.

**App** = a module within the project with a specific responsibility. You can have many.

## Notes

- `uv` manages dependencies via `pyproject.toml` (no manual `requirements.txt` needed)
- `uv add` auto-creates `.venv` — deps install regardless of whether venv is activated
- Activation just puts venv binaries (like `django-admin`) on your PATH
