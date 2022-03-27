from __future__ import annotations

from dataclasses import dataclass, field

from budget.models import Budget
from budget.responses.budget_list import BudgetListResponse
from common.handlers.request_manager import RequestManager
from common.requests.empty import EmptyRequest
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class GetBudgetsHandler(RequestManager):
    factory: type[EmptyRequest] = field(init=False, default=EmptyRequest)
    request: EmptyRequest = field(init=False)

    def safe_process(self) -> BudgetListResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> BudgetListResponse:
        user: User = self.user_via_token
        budgets: list[Budget] = self.get_budgets(user)
        return BudgetListResponse(budgets)

    def get_search_parameters(self) -> str | None:
        search_query: list[str] | None = self.request.query_parameters.get("searchQuery")
        return search_query[0] if isinstance(search_query, list) else None

    def get_budgets(self, user: User) -> list[Budget]:
        if search_query := self.get_search_parameters():
            return user.budgets.filter(name__icontains=search_query)  # type: ignore (QuerySet)
        return user.budgets.all()  # type: ignore (QuerySet)
