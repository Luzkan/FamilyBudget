from __future__ import annotations
import logging
from rest_framework.request import Request
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from auth.views.common.requests.email_token import EmailTokenRequest
from rest_framework.authtoken.models import Token


class CheckAuthViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['post'],
        permission_classes=[AllowAny],
        url_path='check-auth',
    )
    def check_auth(self, request: Request):
        if isinstance(request_data := EmailTokenRequest.init(request), Response):
            return request_data

        if isinstance(token := self.retrieve_token(request_data), Response):
            return token

        if self.verify_user(token.user, request_data.email):
            return Response({"verified": False}, status=status.HTTP_401_UNAUTHORIZED)
        return Response({"verified": True}, status=status.HTTP_200_OK)

    def verify_user(self, user_email: str, request_email: str) -> bool:
        return user_email == request_email

    def retrieve_token(self, request_data: EmailTokenRequest) -> Token | Response:
        """
        Obviously, in real world application this kind of operations are unacceptable. This is NOT safe.
        """
        try:
            return Token.objects.get(key=request_data.token)
        except Token.DoesNotExist:
            logging.warn('Token for email %s does not exist', request_data.email)
            return Response(
                {"text": "Token does not exist!"},
                status=status.HTTP_400_BAD_REQUEST,
            )
