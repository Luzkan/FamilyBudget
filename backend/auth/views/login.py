from __future__ import annotations
import logging
from rest_framework.request import Request
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from users.models import User
from users.serializer import UserSerializer
from auth.views.common.password_manager import PasswordManager
from auth.views.common.requests.credential import CredentialRequest
from rest_framework.authtoken.models import Token


class LoginViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['post'],
        permission_classes=[AllowAny],
        url_path='login',
    )
    def login(self, request: Request):
        if isinstance(request_data := CredentialRequest.init(request), Response):
            return request_data

        if isinstance(user := self.retrieve_user(request_data), Response):
            return user

        if not PasswordManager(
            claimed=request_data.password,
            database=user.password
        ).verify():
            return Response({"verified": False}, status=status.HTTP_401_UNAUTHORIZED)

        return Response({
            "user": UserSerializer(user).data,
            "token": str(Token.objects.get(user=user))
        }, status=status.HTTP_200_OK)

    def retrieve_user(self, request_data: CredentialRequest) -> User | Response:
        """
        Obviously, in real world application this kind of operations are unacceptable. This is NOT safe.
        """
        try:
            return User.objects.get(email=request_data.email)
        except User.DoesNotExist:
            logging.warn('User with email %s does not exist', request_data.email)
            return Response(
                {"text": f"Family member with email {request_data.email} not found."},
                status=status.HTTP_400_BAD_REQUEST,
            )
