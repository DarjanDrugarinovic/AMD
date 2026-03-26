from api.models import Product
from api.utils.response import response
from .serializers import UpdateProductInputSerializer, ProductResponseSerializer


def update_product(request, product_id: int):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return response.NOT_FOUND('Product not found')

    serializer = UpdateProductInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    for field, value in serializer.validated_data.items():
        setattr(product, field, value)
    product.save()

    return response.OK(ProductResponseSerializer(product).data)
