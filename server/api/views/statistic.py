from drf_spectacular.utils import extend_schema
from rest_framework.views import APIView

from api.services.statistic.get_statistics.service import get_statistics
from api.services.statistic.get_statistic_by_id.service import get_statistic_by_id
from api.services.statistic.create_statistic.service import create_statistic
from api.services.statistic.create_statistic.serializers import CreateStatisticInputSerializer
from api.services.statistic.update_statistic.service import update_statistic
from api.services.statistic.update_statistic.serializers import UpdateStatisticInputSerializer
from api.services.statistic.delete_statistic.service import delete_statistic


class StatisticListView(APIView):
    @extend_schema(responses=None)
    def get(self, request):
        return get_statistics(request)

    @extend_schema(request=CreateStatisticInputSerializer)
    def post(self, request):
        return create_statistic(request)


class StatisticDetailView(APIView):
    @extend_schema(responses=None)
    def get(self, request, statistic_id):
        return get_statistic_by_id(request, statistic_id)

    @extend_schema(request=UpdateStatisticInputSerializer)
    def put(self, request, statistic_id):
        return update_statistic(request, statistic_id)

    @extend_schema(responses=None)
    def delete(self, request, statistic_id):
        return delete_statistic(request, statistic_id)
