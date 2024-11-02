from rest_framework import serializers
from .models import JobPost, Application
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

# Serializer for JobPost
class JobPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobPost
        fields = '__all__'

# Serializer for Application
class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

        from rest_framework import serializers

        class SignUpSerializer(serializers.Serializer):
            secreteKey = serializers.CharField(max_length=36)
            password = serializers.CharField(write_only=True, min_length=8)

            def validate_secreteKey(self, value):
                # Ensure the secret key format or any additional validation you need
                return value

class SignUpSerializer(serializers.Serializer):
    secreteKey = serializers.CharField(max_length=36)
    password = serializers.CharField(write_only=True, min_length=8)



