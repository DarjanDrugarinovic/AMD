from rest_framework import serializers
from api.models import Todo


# Response serializer — mirrors mapper.ts
class TodoResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'completed', 'created_at', 'updated_at']
