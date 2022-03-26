from __future__ import annotations

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from users.handlers.get_all import GetAllUsersRequestManager


class UsersViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='users/all',
    )
    def get_all(self, request: Request):
        check_auth_request_manager = GetAllUsersRequestManager(rest_request=request)
        return check_auth_request_manager.safe_process().response()
