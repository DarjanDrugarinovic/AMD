# 02 — Todo CRUD: Clean Architecture Implementation

## Structure

```
server/api/
├── models.py                          # Todo model
├── utils/
│   └── response.py                    # response.OK / CREATED / NOT_FOUND / BAD_REQUEST
├── services/
│   └── todo/
│       ├── get_todos/
│       │   ├── serializers.py         # TodoResponseSerializer (mapper)
│       │   └── service.py
│       ├── create_todo/
│       │   ├── serializers.py         # CreateTodoInputSerializer + TodoResponseSerializer
│       │   └── service.py
│       ├── get_todo_by_id/
│       │   ├── serializers.py
│       │   └── service.py
│       ├── update_todo/
│       │   ├── serializers.py         # UpdateTodoInputSerializer (all fields optional)
│       │   └── service.py
│       └── delete_todo/
│           └── service.py
├── views/
│   └── todo.py                        # TodoListView, TodoDetailView (thin)
└── urls/
    └── todo.py                        # wired to core/urls.py
```

## Endpoints

| Method | URL                | Operation     |
| ------ | ------------------ | ------------- |
| GET    | `/api/todos/`      | get all todos |
| POST   | `/api/todos/`      | create todo   |
| GET    | `/api/todos/<id>/` | get by id     |
| PUT    | `/api/todos/<id>/` | update todo   |
| DELETE | `/api/todos/<id>/` | delete todo   |
