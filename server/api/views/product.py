from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView

from api.services.product.get_products.service import get_products
from api.services.product.get_product_by_id.service import get_product_by_id
from api.services.product.create_product.service import create_product
from api.services.product.create_product.serializers import CreateProductInputSerializer
from api.services.product.update_product.service import update_product
from api.services.product.update_product.serializers import UpdateProductInputSerializer
from api.services.product.delete_product.service import delete_product
from api.services.firmware.get_firmwares.service import get_firmwares_by_product


class ProductFirmwareListView(APIView):
    @extend_schema(responses=None)
    def get(self, request, product_id):
        return get_firmwares_by_product(request, product_id)


class ProductListView(APIView):
    @extend_schema(responses=None)
    def get(self, request):
        return get_products(request)

    @extend_schema(request=CreateProductInputSerializer)
    def post(self, request):
        return create_product(request)


class ProductDetailView(APIView):
    @extend_schema(responses=None)
    def get(self, request, product_id):
        return get_product_by_id(request, product_id)

    @extend_schema(request=UpdateProductInputSerializer)
    def put(self, request, product_id):
        return update_product(request, product_id)

    @extend_schema(responses=None)
    def delete(self, request, product_id):
        return delete_product(request, product_id)
