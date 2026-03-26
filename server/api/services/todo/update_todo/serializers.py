from rest_framework import serializers
from api.models import Todo


# Input serializer — mirrors types.ts (Zod schema)
# All fields optional — supports partial update
class UpdateTodoInputSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255, required=False)
    description = serializers.CharField(required=False, allow_blank=True)
    completed = serializers.BooleanField(required=False)


# Response serializer — mirrors mapper.ts
class TodoResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'completed', 'created_at', 'updated_at']
