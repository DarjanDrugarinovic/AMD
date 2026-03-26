from api.models import Firmware, Product
from api.utils.response import response
from .serializers import CreateFirmwareInputSerializer, FirmwareResponseSerializer


def create_firmware(request):
    serializer = CreateFirmwareInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    data = serializer.validated_data
    product_id = data.pop('product_id')

    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return response.NOT_FOUND('Product not found')

    firmware = Firmware.objects.create(product=product, **data)
    return response.CREATED(FirmwareResponseSerializer(firmware).data)
