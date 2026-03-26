from api.models import Firmware
from api.utils.response import response
from .serializers import FirmwareResponseSerializer


def get_firmwares(request):
    firmwares = Firmware.objects.all()
    serializer = FirmwareResponseSerializer(firmwares, many=True)
    return response.OK(serializer.data)


def get_firmwares_by_product(request, product_id):
    firmwares = Firmware.objects.filter(product_id=product_id)
    serializer = FirmwareResponseSerializer(firmwares, many=True)
    return response.OK(serializer.data)
