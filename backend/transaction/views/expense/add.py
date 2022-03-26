from __future__ import annotations
import logging
from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from transaction.handlers.expense.add import AddExpenseRequestManager
from transaction.requests.expense.add import AddExpenseRequest


class ExpenseAddViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='expense',  # TODO: Maybe change the path to budget/<int:budget_id>/expense
    )
    def add(self, request: Request) -> Response:
        expense_request_manager = AddExpenseRequestManager(
            _request=request,
            _factory=AddExpenseRequest
        )
        return expense_request_manager.safe_process().response()
