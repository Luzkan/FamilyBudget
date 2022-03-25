from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from budget.handlers.request_manager import GetBudgetRequestManager
from budget.responses.budget import BudgetResponse
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
        budget_request_manager = GetBudgetRequestManager(
            _request=request,
            _factory=BudgetRequest
        )
        response: BudgetResponse = budget_request_manager.safe_process()
        return response.response()

