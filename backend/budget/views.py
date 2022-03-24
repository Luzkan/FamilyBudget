from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action


class BudgetViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)
    
    @action(
        detail=False,
        methods=['get'],
        permission_classes=[IsAuthenticated],
        url_path='budgets',
    )
    def get_budgets(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)