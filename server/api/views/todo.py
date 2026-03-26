from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView

from api.services.todo.get_todos.service import get_todos
from api.services.todo.create_todo.service import create_todo
from api.services.todo.create_todo.serializers import CreateTodoInputSerializer
from api.services.todo.get_todo_by_id.service import get_todo_by_id
from api.services.todo.update_todo.service import update_todo
from api.services.todo.update_todo.serializers import UpdateTodoInputSerializer
from api.services.todo.delete_todo.service import delete_todo


class TodoListView(APIView):
    @extend_schema(responses=None)
    def get(self, request):
        return get_todos(request)

    @extend_schema(request=CreateTodoInputSerializer)
    def post(self, request):
        return create_todo(request)


class TodoDetailView(APIView):
    @extend_schema(responses=None)
    def get(self, request, todo_id):
        return get_todo_by_id(request, todo_id)

    @extend_schema(request=UpdateTodoInputSerializer)
    def put(self, request, todo_id):
        return update_todo(request, todo_id)

    @extend_schema(responses=None)
    def delete(self, request, todo_id):
        return delete_todo(request, todo_id)
