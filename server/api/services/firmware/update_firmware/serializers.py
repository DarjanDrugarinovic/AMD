from rest_framework import serializers
from api.models import Firmware


class UpdateFirmwareInputSerializer(serializers.Serializer):
    product_id = serializers.IntegerField(required=False)
    version = serializers.CharField(max_length=100, required=False)
    release_date = serializers.DateField(required=False)
    type = serializers.ChoiceField(choices=['BIOS', 'driver', 'microcode'], required=False)
    status = serializers.ChoiceField(choices=['stable', 'beta', 'deprecated'], required=False)
    changelog = serializers.CharField(required=False, allow_blank=True)


class FirmwareResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firmware
        fields = ['id', 'product_id', 'version', 'release_date', 'type', 'status', 'changelog']
