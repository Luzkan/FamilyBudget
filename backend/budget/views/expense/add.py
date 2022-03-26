from __future__ import annotations

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from budget.handlers.add_transaction import AddTransactionRequestManager
from budget.requests.add_transaction import AddTransactionRequest
from budget.serializer import ExpenseSerializer


class ExpenseAddViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='expense',  # TODO: Maybe change the path to budget/<int:budget_id>/expense
    )
    def add(self, request: Request) -> Response:
        expense_request_manager = AddTransactionRequestManager(
            _request=request,
            _factory=AddTransactionRequest,
            serializer=ExpenseSerializer,
            transaction_type='expenses',
        )
        return expense_request_manager.safe_process().response()
