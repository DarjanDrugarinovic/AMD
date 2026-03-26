from api.models import Product
from api.utils.response import response
from .serializers import ProductResponseSerializer


def get_product_by_id(request, product_id: int):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return response.NOT_FOUND('Product not found')

    return response.OK(ProductResponseSerializer(product).data)
