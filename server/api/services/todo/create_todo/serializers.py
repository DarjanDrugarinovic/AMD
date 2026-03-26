from rest_framework import serializers
from api.models import Todo


# Input serializer — mirrors types.ts (Zod schema)
class CreateTodoInputSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=255)
    description = serializers.CharField(required=False, default='', allow_blank=True)


# Response serializer — mirrors mapper.ts
class TodoResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'completed', 'created_at', 'updated_at']


# Example: renaming a field with `source`
# model has `created_at` but response should say `createdAt`
class TodoResponseSerializerCamelCase(serializers.ModelSerializer):
    createdAt = serializers.DateTimeField(source='created_at')
    updatedAt = serializers.DateTimeField(source='updated_at')

    class Meta:
        model = Todo
        fields = ['id', 'title', 'description', 'completed', 'createdAt', 'updatedAt']


# Example: computed field with `SerializerMethodField`
# field does not exist on the model — value is calculated at serialization time
class TodoResponseSerializerWithSummary(serializers.ModelSerializer):
    summary = serializers.SerializerMethodField()

    class Meta:
        model = Todo
        fields = ['id', 'title', 'completed', 'summary']

    def get_summary(self, obj):
        status = 'Done' if obj.completed else 'Pending'
        return f'[{status}] {obj.title}'
