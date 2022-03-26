from __future__ import annotations
from rest_framework.request import Request
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from auth.requests.email_token import EmailTokenRequest
from auth.handlers.check_auth import CheckAuthRequestManager


class CheckAuthViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['post'],
        permission_classes=[AllowAny],
        url_path='auth/check',
    )
    def check_auth(self, request: Request):
        check_auth_request_manager = CheckAuthRequestManager(
            _request=request,
            _factory=EmailTokenRequest
        )
        return check_auth_request_manager.safe_process().response()
