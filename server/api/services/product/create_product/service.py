from api.models import Product
from api.utils.response import response
from .serializers import CreateProductInputSerializer, ProductResponseSerializer


def create_product(request):
    serializer = CreateProductInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    product = Product.objects.create(**serializer.validated_data)
    return response.CREATED(ProductResponseSerializer(product).data)
