from django.urls import path
from api.views.statistic import StatisticListView, StatisticDetailView

urlpatterns = [
    path('', StatisticListView.as_view(), name='statistic-list'),
    path('<int:statistic_id>/', StatisticDetailView.as_view(), name='statistic-detail'),
]
