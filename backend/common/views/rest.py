from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.request import Request


class RestViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['get'],
        permission_classes=[AllowAny],
        url_path='rest-check',
    )
    def rest_check(self, request: Request):
        return Response(
            {"result": "Hello from Backend!"},
            status=status.HTTP_200_OK,
        )
