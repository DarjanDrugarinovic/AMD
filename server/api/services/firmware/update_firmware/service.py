from api.models import Firmware, Product
from api.utils.response import response
from .serializers import UpdateFirmwareInputSerializer, FirmwareResponseSerializer


def update_firmware(request, firmware_id: int):
    try:
        firmware = Firmware.objects.get(pk=firmware_id)
    except Firmware.DoesNotExist:
        return response.NOT_FOUND('Firmware not found')

    serializer = UpdateFirmwareInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    data = serializer.validated_data

    if 'product_id' in data:
        product_id = data.pop('product_id')
        try:
            firmware.product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return response.NOT_FOUND('Product not found')

    for field, value in data.items():
        setattr(firmware, field, value)
    firmware.save()

    return response.OK(FirmwareResponseSerializer(firmware).data)
