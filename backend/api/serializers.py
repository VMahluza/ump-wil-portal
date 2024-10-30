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

