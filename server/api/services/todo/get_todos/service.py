from api.models import Todo
from api.utils.response import response
from .serializers import TodoResponseSerializer


def get_todos(request):
    todos = Todo.objects.all()
    serializer = TodoResponseSerializer(todos, many=True)
    return response.OK(serializer.data)
