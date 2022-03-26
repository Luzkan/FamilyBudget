from __future__ import annotations

from budget.handlers.add_budget import AddBudgetRequestManager
from budget.requests.budget import BudgetRequest
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response


class BudgetAddViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='budget',
    )
    def add_budget(self, request: Request) -> Response:
        budget_request_manager = AddBudgetRequestManager(rest_request=request)
        return budget_request_manager.safe_process().response()
