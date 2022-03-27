from __future__ import annotations

from dataclasses import dataclass, field

from budget.responses.budget_list import BudgetListResponse
from rest_framework import status


@dataclass
class AddedBudgetResponse(BudgetListResponse):
    code: int = field(init=False, default=status.HTTP_201_CREATED)
