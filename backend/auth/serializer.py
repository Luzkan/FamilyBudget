from rest_framework import serializers
from users.models import User


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