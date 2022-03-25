import logging
from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from rest_framework import status
from common.views.common.handlers.request_manager import RequestManager
from users.models import User
from budget.models import Budget
from budget.serializer import BudgetSerializer
from budget.views.common.requests.budget import BudgetRequest


class BudgetAddViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='budget',
    )
    def add_budget(self, request: Request):
        if isinstance(request_data := BudgetRequest.init(request), Response):
            return request_data

        user: User = RequestManager(request_data).user_via_token
        budget: Budget = BudgetSerializer().create(validated_data={
            'name': request_data.name,
            'total_budget': request_data.total_budget,
            'users': [user],
        })
        logging.info(f"New Budget {budget.name}, with {budget.total_budget}. Created by: {user}")

        if not budget:
            return Response({"success": False}, status=status.HTTP_400_BAD_REQUEST)
        return Response({
            "success": True,
            "budget": BudgetSerializer(budget).data,
        }, status=status.HTTP_200_OK)
