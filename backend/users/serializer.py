from rest_framework import serializers
from users.managers import UserManager
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')

    def save(self) -> User:
        user = User(
            email=self.validated_data['email'],  # type: ignore
            password=self.validated_data['password'],  # type: ignore
        )
        user.save()
        return user