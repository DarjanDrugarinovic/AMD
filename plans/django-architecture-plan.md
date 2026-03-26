# Plan: Django Architecture Mirroring Node.js Separated Concerns

## Context
The existing Node.js backend has a clean layered architecture: thin routers → services (business logic, per operation folder) → TypeORM entities, with Zod schemas for validation, mapper files for response DTOs, and middleware for auth. The goal is to replicate this exact separation of concerns in the Django/DRF project at `server/`, which is already initialized with Django 6.0.3, DRF 3.17.1, simplejwt, and python-decouple — but has empty `api/` app files.

## Concept Mapping

| Node.js | Django Equivalent |
|---|---|
| `entities/User.ts` (TypeORM) | `api/models.py` (Django ORM) |
| `routers/index.ts` | `core/urls.py` (includes all url modules) |
| `routers/usersRouter.ts` | `api/urls/users.py` |
| Inline router handler (thin) | `api/views/users.py` (DRF APIView, thin) |
| `middleware/authorizeAdmin*.ts` | `api/permissions/is_admin.py` (DRF BasePermission) |
| `utils/getUserFromToken.ts` | `api/utils/get_user_from_token.py` (DRF BaseAuthentication) |
| `services/user/getUsers/types.ts` (Zod schema) | `api/services/user/get_users/serializers.py` (input serializer) |
| `services/user/getUsers/mapper.ts` | `api/services/user/get_users/serializers.py` (output ModelSerializer) |
| `services/user/getUsers/getUsers-service.ts` | `api/services/user/get_users/service.py` |
| `utils/response.ts` | `api/utils/response.py` |
| `utils/enums.ts` | `api/utils/enums.py` |

## Target Folder Structure

```
server/api/
├── models.py                            # All Django models
├── admin.py
├── migrations/
│
├── urls/                                # Mirrors routers/
│   ├── __init__.py
│   ├── users.py                         # Mirrors routers/usersRouter.ts
│   └── auth.py                          # Mirrors routers/authRouter.ts
│
├── views/                               # Thin views (mirror inline router handlers)
│   ├── __init__.py
│   ├── users.py
│   └── auth.py
│
├── permissions/                         # Mirrors middleware/authorize*.ts
│   ├── __init__.py
│   ├── is_admin.py
│   └── is_authenticated_user.py
│
├── services/                            # Business logic — exact mirror of services/
│   ├── user/
│   │   ├── get_users/
│   │   │   ├── __init__.py
│   │   │   ├── service.py               # Mirrors getUsers-service.ts
│   │   │   └── serializers.py           # Merges types.ts + mapper.ts
│   │   └── update_user_role/
│   │       ├── __init__.py
│   │       ├── service.py
│   │       └── serializers.py
│   └── auth/
│       └── login/
│           ├── __init__.py
│           ├── service.py
│           └── serializers.py
│
└── utils/
    ├── __init__.py
    ├── response.py                      # Mirrors utils/response.ts
    ├── enums.py                         # Mirrors utils/enums.ts
    ├── get_user_from_token.py           # Mirrors utils/getUserFromToken.ts
    └── exception_handler.py
```

## Implementation Steps

### Phase 1 — Utilities (foundation, no dependencies)
1. Create `api/utils/__init__.py` (empty)
2. Create `api/utils/enums.py` — `UserRole` class with USER/ADMIN/MODERATOR + CHOICES
3. Create `api/utils/response.py` — `response` class with `OK`, `CREATED`, `NOT_FOUND`, `UNAUTHORIZED`, `BAD_REQUEST`, `INTERNAL_SERVER_ERROR` static methods; each wraps data in `{ statusCode, httpStatus, timestamp, response }` envelope using DRF `Response`
4. Create `api/utils/exception_handler.py` — custom DRF exception handler wrapping errors in the envelope

### Phase 2 — Models
5. Update `api/models.py` — define `User`, `Post`, `Comment` models using enums from step 2

### Phase 3 — Auth / JWT Resolution
6. Create `api/utils/get_user_from_token.py` — `JWTApiUserAuthentication(BaseAuthentication)`: reads `Authorization: Bearer <token>`, decodes JWT with simplejwt `UntypedToken`, looks up `User.objects.get(email=email)`, sets `request.api_user = user`, returns `(None, raw_token)`. Returns `None` on failure (permissions handle that).

### Phase 4 — Permissions
7. Create `api/permissions/__init__.py`
8. Create `api/permissions/is_admin.py` — `IsAdmin(BasePermission)`: checks `request.api_user.role == UserRole.ADMIN`
9. Create `api/permissions/is_authenticated_user.py` — `IsAuthenticatedUser(BasePermission)`: checks `request.api_user is not None`

### Phase 5 — Services (one domain at a time)
10. Create all `__init__.py` files for service packages
11. Create `api/services/user/get_users/serializers.py` — `UserResponseSerializer(ModelSerializer)` with `fields = ['id', 'email', 'role']` (acts as mapper)
12. Create `api/services/user/get_users/service.py` — `get_users(request)`: `User.objects.all()` → serialize → `response.OK(data)`
13. Create `api/services/user/update_user_role/serializers.py` — `UpdateUserRoleInputSerializer(Serializer)` with `id`, `email`, `role` fields (acts as Zod schema)
14. Create `api/services/user/update_user_role/service.py` — validates input serializer, guards super user, finds user, updates role, saves
15. Create `api/services/auth/login/serializers.py` — `LoginInputSerializer` with `token` field
16. Create `api/services/auth/login/service.py` — decodes token, upserts User, returns `{ role, banned }`

### Phase 6 — Views (thin)
17. Create `api/views/__init__.py` (empty)
18. Create `api/views/users.py` — `GetUsersView(APIView)` with `authentication_classes = [JWTApiUserAuthentication]`, `permission_classes = [IsAdmin]`, `get()` calls `get_users(request)`. Same pattern for `UpdateUserRoleView`.
19. Create `api/views/auth.py` — `LoginView(APIView)` with empty auth/permission classes (public), `post()` calls `login(request)`

### Phase 7 — URLs
20. Create `api/urls/__init__.py` (empty)
21. Create `api/urls/users.py` — `path('getUsers', GetUsersView.as_view())`, `path('updateUserRole', UpdateUserRoleView.as_view())`
22. Create `api/urls/auth.py` — `path('login', LoginView.as_view())`

### Phase 8 — Modify Existing Files
23. Update `core/urls.py` — add `path('backend/users/', include('api.urls.users'))`, `path('backend/auth/', include('api.urls.auth'))`
24. Update `core/settings.py` — add `REST_FRAMEWORK` dict: `DEFAULT_AUTHENTICATION_CLASSES`, `DEFAULT_PERMISSION_CLASSES = [AllowAny]`, `EXCEPTION_HANDLER = custom_exception_handler`; add `SIMPLE_JWT` config

### Phase 9 — Migrations
25. Run `python manage.py makemigrations api`
26. Run `python manage.py migrate`

## Key Design Decisions

- **`request.api_user` not `request.user`**: Project uses its own `api.models.User`, not Django's `auth.User`. Attaching to `request.api_user` avoids conflating the two without requiring `AUTH_USER_MODEL` migration overhead.
- **Input validation in service, not view**: Mirrors Node.js `validateRequest` middleware — in Django this is `serializer.is_valid()` at the top of the service function, keeping views thin.
- **One serializer file = `types.ts` + `mapper.ts`**: DRF serializers handle both input validation and response shaping, so two Node.js files become one Django file.
- **`authentication_classes` resolves identity, `permission_classes` checks role**: Direct equivalent of `getUserFromToken` + role check in `authorizeAdminOnApiRequest`.

## Critical Files

- [server/api/utils/response.py](../server/api/utils/response.py) — everything depends on the envelope shape
- [server/api/utils/get_user_from_token.py](../server/api/utils/get_user_from_token.py) — JWT → `request.api_user`; all protected views depend on this
- [server/api/models.py](../server/api/models.py) — entity layer; services, serializers, migrations all depend on it
- [server/core/settings.py](../server/core/settings.py) — must register `REST_FRAMEWORK` config before any view works
- [server/core/urls.py](../server/core/urls.py) — must include api url modules; endpoints unreachable without this

## Verification

1. Start dev server: `cd server && python manage.py runserver`
2. `GET /backend/users/getUsers` without token → 401 with envelope
3. `GET /backend/users/getUsers` with admin JWT → 200 with `{ statusCode, httpStatus, timestamp, response: [{ id, email, role }] }`
4. `POST /backend/auth/login` with `{ "token": "<jwt>" }` → 200 with `{ role, banned }`
5. `POST /backend/users/updateUserRole` with admin JWT + `{ id, email, role }` → 200
