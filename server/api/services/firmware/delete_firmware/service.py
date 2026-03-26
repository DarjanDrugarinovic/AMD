from api.models import Firmware
from api.utils.response import response


def delete_firmware(request, firmware_id: int):
    try:
        firmware = Firmware.objects.get(pk=firmware_id)
    except Firmware.DoesNotExist:
        return response.NOT_FOUND('Firmware not found')

    firmware.delete()
    return response.OK('Firmware deleted successfully')
