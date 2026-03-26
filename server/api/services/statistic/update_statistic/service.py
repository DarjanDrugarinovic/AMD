from api.models import Statistic, Product, Firmware
from api.utils.response import response
from .serializers import UpdateStatisticInputSerializer, StatisticResponseSerializer


def update_statistic(request, statistic_id: int):
    try:
        statistic = Statistic.objects.get(pk=statistic_id)
    except Statistic.DoesNotExist:
        return response.NOT_FOUND('Statistic not found')

    serializer = UpdateStatisticInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    data = serializer.validated_data

    if 'product_id' in data:
        product_id = data.pop('product_id')
        try:
            statistic.product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            return response.NOT_FOUND('Product not found')

    if 'firmware_id' in data:
        firmware_id = data.pop('firmware_id')
        try:
            statistic.firmware = Firmware.objects.get(pk=firmware_id)
        except Firmware.DoesNotExist:
            return response.NOT_FOUND('Firmware not found')

    for field, value in data.items():
        setattr(statistic, field, value)
    statistic.save()

    return response.OK(StatisticResponseSerializer(statistic).data)
