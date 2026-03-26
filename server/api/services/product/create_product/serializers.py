from rest_framework import serializers
from api.models import Product


class CreateProductInputSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    family = serializers.CharField(max_length=255)
    category = serializers.ChoiceField(choices=['CPU', 'GPU', 'APU'])
    socket = serializers.CharField(max_length=100)
    release_date = serializers.DateField()
    status = serializers.ChoiceField(choices=['active', 'discontinued', 'upcoming'])


class ProductResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'family', 'category', 'socket', 'release_date', 'status']
