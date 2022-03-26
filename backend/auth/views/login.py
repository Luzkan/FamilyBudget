from __future__ import annotations

from auth.handlers.login import LoginRequestManager
from auth.requests.credential import CredentialRequest
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.request import Request


class LoginViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['post'],
        permission_classes=[AllowAny],
        url_path='auth/login',
    )
    def login(self, request: Request):
        login_request_manager = LoginRequestManager(rest_request=request)
        return login_request_manager.safe_process().response()
