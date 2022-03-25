from __future__ import annotations
from dataclasses import dataclass
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from common.views.common.requests.base import BaseRequest, Headers


@dataclass(frozen=True)  # TODO: pydantic validation
class BudgetRequest(BaseRequest):
    name: str
    total_budget: int

    @staticmethod
    def _init(request: Request) -> 'BudgetRequest':
        request_data = dict(request.data)
        return BudgetRequest(
            name=str(request_data.get('name')),
            total_budget=int(request_data.get('total_budget')),
            user=str(request.user),
            content_type=str(request.content_type),
            auth=request.auth,
            headers=Headers.init(request.headers),
        )

    @staticmethod
    def init(request_data: Request) -> 'BudgetRequest' | Response:
        try:
            return BudgetRequest._init(request_data)
        except TypeError:
            return Response(
                {"text": "Request data is not valid. Please provide 'name' and 'total_budget' fields."},
                status=status.HTTP_400_BAD_REQUEST,
            )
