from rest_framework import serializers
from api.models import Statistic

METRIC_CHOICES = ['power_consumption', 'temperature', 'clock_speed', 'utilization']


class CreateStatisticInputSerializer(serializers.Serializer):
    product_id = serializers.IntegerField()
    firmware_id = serializers.IntegerField()
    recorded_at = serializers.DateTimeField()
    metric = serializers.ChoiceField(choices=METRIC_CHOICES)
    value = serializers.FloatField()
    unit = serializers.CharField(max_length=50)


class StatisticResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statistic
        fields = ['id', 'product_id', 'firmware_id', 'recorded_at', 'metric', 'value', 'unit']
