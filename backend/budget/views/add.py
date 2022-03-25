import logging
from rest_framework import viewsets
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action


class BudgetViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=['post'],
        permission_classes=[IsAuthenticated],
        url_path='budget/add',
    )
    def get_budgets(self, request: Request):
        content = {'message': 'Hello, World!'}
        logging.info(request)
        return Response(content)
