from __future__ import annotations

from budget.handlers.add_new_transaction import AddNewTransactionHandler
from budget.requests.add_new_transaction import AddNewTransactionRequest
from budget.serializer import ExpenseSerializer
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response


class ExpenseAddViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='budget/expense',  # TODO: Maybe change the path to budget/<int:budget_id>/expense
    )
    def add(self, request: Request) -> Response:
        expense_request_manager = AddNewTransactionHandler(
            rest_request=request,
            factory=AddNewTransactionRequest,
            serializer=ExpenseSerializer,
            transaction_type='expenses',
        )
        return expense_request_manager.safe_process().response()
