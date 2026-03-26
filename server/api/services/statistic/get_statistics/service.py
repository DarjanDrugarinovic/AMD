from api.models import Statistic
from api.utils.response import response
from .serializers import StatisticResponseSerializer


def get_statistics(request):
    statistics = Statistic.objects.all()
    serializer = StatisticResponseSerializer(statistics, many=True)
    return response.OK(serializer.data)


def get_statistics_by_firmware(request, firmware_id):
    statistics = Statistic.objects.filter(firmware_id=firmware_id)
    serializer = StatisticResponseSerializer(statistics, many=True)
    return response.OK(serializer.data)
