from rest_framework import serializers
from api.models import Statistic


class StatisticResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = ['id', 'product_id', 'firmware_id', 'recorded_at', 'metric', 'value', 'unit']
