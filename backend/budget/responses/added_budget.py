from __future__ import annotations

from dataclasses import dataclass, field

from budget.responses.budget_list import BudgetListResponse
from rest_framework import status
from rest_framework.response import Response


@dataclass
class AddedBudgetResponse(BudgetListResponse):
    code: int = field(init=False, default=status.HTTP_201_CREATED)

    def response(self) -> Response:
        return Response(
            {
                "budgets": self.get_budgets(),
                "created": True,
            },
            status=self.code,
        )
