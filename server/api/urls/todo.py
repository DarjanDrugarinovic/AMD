from django.urls import path
from api.views.todo import TodoListView, TodoDetailView

urlpatterns = [
    path('', TodoListView.as_view(), name='todo-list'),
    path('<int:todo_id>/', TodoDetailView.as_view(), name='todo-detail'),
]
