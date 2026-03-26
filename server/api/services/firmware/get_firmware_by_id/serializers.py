from rest_framework import serializers
from api.models import Firmware


class FirmwareResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firmware
        fields = ['id', 'product_id', 'version', 'release_date', 'type', 'status', 'changelog']
