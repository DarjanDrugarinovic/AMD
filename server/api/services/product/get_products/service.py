from api.models import Product
from api.utils.response import response
from .serializers import ProductResponseSerializer


def get_products(request):
    products = Product.objects.all()
    serializer = ProductResponseSerializer(products, many=True)
    return response.OK(serializer.data)
