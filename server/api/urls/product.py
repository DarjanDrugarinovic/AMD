from django.urls import path
from api.views.product import ProductListView, ProductDetailView, ProductFirmwareListView

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('<int:product_id>/', ProductDetailView.as_view(), name='product-detail'),
    path('<int:product_id>/firmwares/', ProductFirmwareListView.as_view(), name='product-firmware-list'),
]
