import logging
from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework import status
from budget.handlers.request_manager import GetBudgetRequestManager
from common.requests.empty import EmptyRequest
from users.models import User
from budget.serializer import BudgetSerializer


class BudgetGetAllViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['get'],
        permission_classes=[IsAuthenticated],
        url_path='budget/all',
    )
    def get_all_budgets(self, request: Request) -> Response:
        budget_request_manager = GetBudgetRequestManager(
            _request=request,
            _factory=EmptyRequest
        )

        logging.info(request.headers)

        if isinstance(request_data := EmptyRequest.init(request), Response):
            return request_data

        logging.info(request_data)

        user: User = budget_request_manager.user_via_token
        budgets = user.budgets.all()  # type: ignore

        if not budgets:
            return Response({"budgets": None}, status=status.HTTP_200_OK)

        return Response({
            "budgets": [BudgetSerializer(budget).data for budget in budgets],
        }, status=status.HTTP_200_OK)
