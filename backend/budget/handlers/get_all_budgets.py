from __future__ import annotations

from dataclasses import dataclass, field

from budget.models import Budget
from budget.responses.added_budget import AddedBudgetResponse
from common.handlers.request_manager import RequestManager
from common.requests.empty import EmptyRequest
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class GetAllBudgetsHandler(RequestManager):
    factory: type[EmptyRequest] = field(init=False, default=EmptyRequest)
    request: EmptyRequest = field(init=False)

    def safe_process(self) -> AddedBudgetResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> AddedBudgetResponse:
        user: User = self.user_via_token
        budgets: list[Budget] = user.budgets.all()  # type: ignore (QuerySet)
        if not budgets:
            raise NotImplementedError("No Budgets Found")
        return AddedBudgetResponse(budgets)
