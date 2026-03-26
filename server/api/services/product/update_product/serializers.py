from rest_framework import serializers
from api.models import Product


class UpdateProductInputSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255, required=False)
    family = serializers.CharField(max_length=255, required=False)
    category = serializers.ChoiceField(choices=['CPU', 'GPU', 'APU'], required=False)
    socket = serializers.CharField(max_length=100, required=False)
    release_date = serializers.DateField(required=False)
    status = serializers.ChoiceField(choices=['active', 'discontinued', 'upcoming'], required=False)


class ProductResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'family', 'category', 'socket', 'release_date', 'status']
