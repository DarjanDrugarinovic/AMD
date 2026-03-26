from rest_framework import serializers
from api.models import Statistic

METRIC_CHOICES = ['power_consumption', 'temperature', 'clock_speed', 'utilization']


class UpdateStatisticInputSerializer(serializers.Serializer):
    product_id = serializers.IntegerField(required=False)
    firmware_id = serializers.IntegerField(required=False)
    recorded_at = serializers.DateTimeField(required=False)
    metric = serializers.ChoiceField(choices=METRIC_CHOICES, required=False)
    value = serializers.FloatField(required=False)
    unit = serializers.CharField(max_length=50, required=False)


class StatisticResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = ['id', 'product_id', 'firmware_id', 'recorded_at', 'metric', 'value', 'unit']
