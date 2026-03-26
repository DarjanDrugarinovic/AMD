from api.models import Statistic
from api.utils.response import response
from .serializers import StatisticResponseSerializer


def get_statistic_by_id(request, statistic_id: int):
    try:
        statistic = Statistic.objects.get(pk=statistic_id)
    except Statistic.DoesNotExist:
        return response.NOT_FOUND('Statistic not found')

    return response.OK(StatisticResponseSerializer(statistic).data)
