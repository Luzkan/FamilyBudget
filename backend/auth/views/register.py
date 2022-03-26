from __future__ import annotations

from auth.handlers.register import RegisterRequestManager
from auth.requests.credential import CredentialRequest
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.request import Request


class RegisterViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['post'],
        permission_classes=[AllowAny],
        url_path='auth/register',
    )
    def register(self, request: Request):
        register_request_manager = RegisterRequestManager(
            _request=request,
            _factory=CredentialRequest,
        )
        return register_request_manager.safe_process().response()
