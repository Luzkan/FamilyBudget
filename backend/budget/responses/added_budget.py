from __future__ import annotations

from dataclasses import dataclass, field

from budget.models import Budget
from budget.serializer import BudgetSerializer
from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response


@dataclass
class AddedBudgetResponse(AbstractResponse):
    budgets: list[Budget]
    code: int = field(init=False, default=status.HTTP_201_CREATED)

    def get_budgets(self):
        return (
            [BudgetSerializer(budget).data for budget in self.budgets]
            if self.budgets
            else None
        )

    def response(self) -> Response:
        return Response(
            {
                "budgets": self.get_budgets(),
            },
            status=self.code,
        )
