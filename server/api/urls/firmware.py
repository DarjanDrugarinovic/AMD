from django.urls import path
from api.views.firmware import FirmwareListView, FirmwareDetailView, FirmwareStatisticListView

urlpatterns = [
    path('', FirmwareListView.as_view(), name='firmware-list'),
    path('<int:firmware_id>/', FirmwareDetailView.as_view(), name='firmware-detail'),
    path('<int:firmware_id>/statistics/', FirmwareStatisticListView.as_view(), name='firmware-statistic-list'),
]
