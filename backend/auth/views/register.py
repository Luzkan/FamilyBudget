from __future__ import annotations
from rest_framework.request import Request
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from auth.serializer import RegisterSerializer
from users.models import User
from users.serializer import UserSerializer
from auth.views.common.requests.credential import CredentialRequest
from rest_framework.authtoken.models import Token


class RegisterViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['post'],
        permission_classes=[AllowAny],
        url_path='register',
    )
    def register(self, request: Request):
        if not isinstance(request_data := CredentialRequest.init(request), CredentialRequest):
            return request_data
        
        user: User = RegisterSerializer().create(validated_data={
            'email': request_data.email,
            'password': request_data.password
        })
        
        return Response({
            "user": UserSerializer(user).data,
            "token": str(Token.objects.create(user=user))
        }, status=status.HTTP_200_OK)

