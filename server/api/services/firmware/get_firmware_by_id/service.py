from api.models import Firmware
from api.utils.response import response
from .serializers import FirmwareResponseSerializer


def get_firmware_by_id(request, firmware_id: int):
    try:
        firmware = Firmware.objects.get(pk=firmware_id)
    except Firmware.DoesNotExist:
        return response.NOT_FOUND('Firmware not found')

    return response.OK(FirmwareResponseSerializer(firmware).data)
