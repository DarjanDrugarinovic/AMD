from api.models import Todo
from api.utils.response import response


def delete_todo(request, todo_id: int):
    try:
        todo = Todo.objects.get(pk=todo_id)
    except Todo.DoesNotExist:
        return response.NOT_FOUND('Todo not found')

    todo.delete()
    return response.OK('Todo deleted successfully')
