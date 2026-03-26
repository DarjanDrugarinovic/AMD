from api.models import Todo
from api.utils.response import response
from .serializers import UpdateTodoInputSerializer, TodoResponseSerializer


def update_todo(request, todo_id: int):
    try:
        todo = Todo.objects.get(pk=todo_id)
    except Todo.DoesNotExist:
        return response.NOT_FOUND('Todo not found')

    serializer = UpdateTodoInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    for field, value in serializer.validated_data.items():
        setattr(todo, field, value)
    todo.save()

    return response.OK(TodoResponseSerializer(todo).data)
