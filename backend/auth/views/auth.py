from __future__ import annotations

from auth.handlers.check_authorization import CheckAuthorizationHandler
from auth.handlers.login import LoginHandler
from auth.handlers.register import RegisterHandler
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.request import Request


class AuthViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=["post"],
        permission_classes=[AllowAny],
        url_path="auth/register",
    )
    def register(self, request: Request):
        register_request_manager = RegisterHandler(rest_request=request)
        return register_request_manager.safe_process().response()

    @action(
        detail=False,
        methods=["post"],
        permission_classes=[AllowAny],
        url_path="auth/check",
    )
    def check_auth(self, request: Request):
        check_auth_request_manager = CheckAuthorizationHandler(rest_request=request)
        return check_auth_request_manager.safe_process().response()

    @action(
        detail=False,
        methods=["post"],
        permission_classes=[AllowAny],
        url_path="auth/login",
    )
    def login(self, request: Request):
        login_request_manager = LoginHandler(rest_request=request)
        return login_request_manager.safe_process().response()
