# 04 — OpenAPI 3.0 Schema / Swagger UI

**drf-spectacular** is the standard for Django REST Framework projects (generates OpenAPI 3.0 schema + Swagger UI).

## Install

```bash
uv add drf-spectacular
```

## `core/settings.py`

```python
INSTALLED_APPS = [
    ...
    'drf_spectacular',
]

REST_FRAMEWORK = {
    ...
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
}
```

## `core/urls.py`

```python
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    ...
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
]
```

Then open `http://localhost:8000/api/docs/` — it auto-generates the UI from your views with no extra annotations needed.
