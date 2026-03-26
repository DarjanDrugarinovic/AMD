from api.models import Todo
from api.utils.response import response
from .serializers import CreateTodoInputSerializer, TodoResponseSerializer


def create_todo(request):
    serializer = CreateTodoInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    todo = Todo.objects.create(**serializer.validated_data)
    return response.CREATED(TodoResponseSerializer(todo).data)
