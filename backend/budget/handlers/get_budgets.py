from __future__ import annotations

from dataclasses import dataclass, field

from budget.models import Budget
from budget.requests.get_budgets import GetBudgetsRequest
from budget.responses.budget_list import BudgetListResponse
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class GetBudgetsHandler(RequestManager):
    factory: type[GetBudgetsRequest] = field(init=False, default=GetBudgetsRequest)
    request: GetBudgetsRequest = field(init=False)

    def safe_process(self) -> BudgetListResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> BudgetListResponse:
        user: User = self.user_via_token
        budgets: list[Budget] = self.get_paginated_budgets(self.get_budgets(user))
        return BudgetListResponse(budgets)

    def get_paginated_budgets(self, budgets: list[Budget]) -> list[Budget]:
        if active_page := self.request.query_parameters.page:
            return self.get_page(budgets, 6, active_page)
        return budgets

    def get_budgets(self, user: User) -> list[Budget]:
        if search_query := self.request.query_parameters.search_query:
            return user.budgets.filter(name__icontains=search_query)  # type: ignore (QuerySet)
        return user.budgets.all()  # type: ignore (QuerySet)
