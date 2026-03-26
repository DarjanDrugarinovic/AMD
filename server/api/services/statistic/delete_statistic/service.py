from api.models import Statistic
from api.utils.response import response


def delete_statistic(request, statistic_id: int):
    try:
        statistic = Statistic.objects.get(pk=statistic_id)
    except Statistic.DoesNotExist:
        return response.NOT_FOUND('Statistic not found')

    statistic.delete()
    return response.OK('Statistic deleted successfully')
