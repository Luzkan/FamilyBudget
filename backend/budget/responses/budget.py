from __future__ import annotations
from dataclasses import dataclass, field
from rest_framework import status
from rest_framework.response import Response
from common.responses.abstract_response import AbstractResponse
from budget.models import Budget
from budget.serializer import BudgetSerializer


@dataclass
class BudgetResponse(AbstractResponse):
    budgets: list[Budget]
    success: bool = field(init=False)

    def __post_init__(self):
        self.success = self.budgets is not None

    def get_status_code(self) -> int:
        if self.success:
            return status.HTTP_200_OK
        return status.HTTP_400_BAD_REQUEST

    def response(self) -> Response:
        return Response({
            "success": self.success,
            "budgets": [BudgetSerializer(budget).data for budget in self.budgets],
        }, status=self.get_status_code())
