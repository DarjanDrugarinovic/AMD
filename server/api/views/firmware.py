from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView

from api.services.firmware.get_firmwares.service import get_firmwares
from api.services.firmware.get_firmware_by_id.service import get_firmware_by_id
from api.services.firmware.create_firmware.service import create_firmware
from api.services.firmware.create_firmware.serializers import CreateFirmwareInputSerializer
from api.services.firmware.update_firmware.service import update_firmware
from api.services.firmware.update_firmware.serializers import UpdateFirmwareInputSerializer
from api.services.firmware.delete_firmware.service import delete_firmware
from api.services.statistic.get_statistics.service import get_statistics_by_firmware


class FirmwareStatisticListView(APIView):
    @extend_schema(responses=None)
    def get(self, request, firmware_id):
        return get_statistics_by_firmware(request, firmware_id)


class FirmwareListView(APIView):
    @extend_schema(responses=None)
    def get(self, request):
        return get_firmwares(request)

    @extend_schema(request=CreateFirmwareInputSerializer)
    def post(self, request):
        return create_firmware(request)


class FirmwareDetailView(APIView):
    @extend_schema(responses=None)
    def get(self, request, firmware_id):
        return get_firmware_by_id(request, firmware_id)

    @extend_schema(request=UpdateFirmwareInputSerializer)
    def put(self, request, firmware_id):
        return update_firmware(request, firmware_id)

    @extend_schema(responses=None)
    def delete(self, request, firmware_id):
        return delete_firmware(request, firmware_id)
