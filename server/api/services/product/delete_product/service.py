from api.models import Product
from api.utils.response import response


def delete_product(request, product_id: int):
    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return response.NOT_FOUND('Product not found')

    product.delete()
    return response.OK('Product deleted successfully')
