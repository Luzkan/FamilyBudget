from budget.handlers.get_all import GetAllBudgetRequestManager
from common.requests.empty import EmptyRequest
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response


class BudgetGetAllViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[IsAuthenticated],
        url_path='budget/all',
    )
    def get_all_budgets(self, request: Request) -> Response:
        budget_request_manager = GetAllBudgetRequestManager(
            _request=request,
            _factory=EmptyRequest
        )
        return budget_request_manager.safe_process().response()
