from __future__ import annotations
from dataclasses import dataclass, field
from rest_framework import status
from rest_framework.response import Response
from common.responses.abstract_response import AbstractResponse
from budget.models import Budget
from budget.serializer import BudgetSerializer


@dataclass
class BudgetResponse(AbstractResponse):
    budgets: list[Budget] | None
    success: bool = field(init=False)

    def __post_init__(self):
        self.success = self.budgets is not None

    def get_status_code(self) -> int:
        if self.success:
            return status.HTTP_200_OK
        return status.HTTP_400_BAD_REQUEST

    def get_budgets(self):
        return [BudgetSerializer(budget).data for budget in self.budgets] if self.budgets else None

    def response(self) -> Response:
        # TODO: check, what if no budgets
        return Response({
            "success": self.success,
            "budgets": self.get_budgets(),
        }, status=self.get_status_code())
