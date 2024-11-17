from rest_framework import serializers

from authentication.models import Intern
from .models import JobPost, Application, Company
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
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class SignUpSerializer(serializers.Serializer):
    secreteKey = serializers.CharField(max_length=36)
    password = serializers.CharField(write_only=True, min_length=8)

class InternSerializer(serializers.ModelSerializer):
    class Meta:
        model = Intern
        fields = ['id','username','first_name', 'last_name' , 'email', 'password', 'role']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance



