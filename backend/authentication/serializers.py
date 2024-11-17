from rest_framework.serializers import ModelSerializer
from .models import User, Intern, HostEmployer


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
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

class HostEmployerSerializer(ModelSerializer):
    class Meta:
        model = HostEmployer
        fields = ['id','username','first_name', 'last_name' , 'email']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.set_password("123456VM")
        instance.role = User.Role.HOST_EMPLOYER
        instance.save()
        return instance
