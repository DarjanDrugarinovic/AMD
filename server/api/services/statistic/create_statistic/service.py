from api.models import Statistic, Product, Firmware
from api.utils.response import response
from .serializers import CreateStatisticInputSerializer, StatisticResponseSerializer


def create_statistic(request):
    serializer = CreateStatisticInputSerializer(data=request.data)

    if not serializer.is_valid():
        return response.BAD_REQUEST(serializer.errors)

    data = serializer.validated_data
    product_id = data.pop('product_id')
    firmware_id = data.pop('firmware_id')

    try:
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist:
        return response.NOT_FOUND('Product not found')

    try:
        firmware = Firmware.objects.get(pk=firmware_id)
    except Firmware.DoesNotExist:
        return response.NOT_FOUND('Firmware not found')

    statistic = Statistic.objects.create(product=product, firmware=firmware, **data)
    return response.CREATED(StatisticResponseSerializer(statistic).data)
