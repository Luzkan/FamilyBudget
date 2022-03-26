from __future__ import annotations
import logging
from budget.handlers.update_budget_with_users import UpdateBudgetWithUsersRequestManager

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response


class UpdateBudgetWithUsersViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='budget/users',
    )
    def add_budget(self, request: Request) -> Response:
        logging.info(request)
        budget_request_manager = UpdateBudgetWithUsersRequestManager(rest_request=request)
        return budget_request_manager.safe_process().response()
