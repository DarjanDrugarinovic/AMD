from rest_framework import serializers
from api.models import Product


class ProductResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'family', 'category', 'socket', 'release_date', 'status']
