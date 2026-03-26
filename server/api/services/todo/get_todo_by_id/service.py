from api.models import Todo
from api.utils.response import response
from .serializers import TodoResponseSerializer


def get_todo_by_id(request, todo_id: int):
    try:
        todo = Todo.objects.get(pk=todo_id)
    except Todo.DoesNotExist:
        return response.NOT_FOUND('Todo not found')

    return response.OK(TodoResponseSerializer(todo).data)
