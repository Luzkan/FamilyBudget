from __future__ import annotations
import logging
from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from budget.handlers.add import AddBudgetRequestManager
from budget.requests.budget import BudgetRequest


class BudgetAddViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='budget',
    )
    def add_budget(self, request: Request) -> Response:
        budget_request_manager = AddBudgetRequestManager(
            _request=request,
            _factory=BudgetRequest
        )
        return budget_request_manager.safe_process().response()
