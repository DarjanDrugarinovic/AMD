from rest_framework import serializers
from api.models import Firmware


class CreateFirmwareInputSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    version = serializers.CharField(max_length=100)
    release_date = serializers.DateField()
    type = serializers.ChoiceField(choices=['BIOS', 'driver', 'microcode'])
    status = serializers.ChoiceField(choices=['stable', 'beta', 'deprecated'])
    changelog = serializers.CharField(required=False, default='', allow_blank=True)


class FirmwareResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firmware
        fields = ['id', 'product_id', 'version', 'release_date', 'type', 'status', 'changelog']
