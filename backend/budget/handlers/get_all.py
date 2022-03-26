
from __future__ import annotations

from dataclasses import dataclass, field

from budget.responses.budget import BudgetResponse
from common.handlers.request_manager import RequestManager
from common.requests.empty import EmptyRequest
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class GetAllBudgetRequestManager(RequestManager):
    request: EmptyRequest = field(init=False)

    def safe_process(self) -> BudgetResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore

    def process(self) -> BudgetResponse:
        user: User = self.user_via_token
        budgets = user.budgets.all()  # type: ignore
        return BudgetResponse(budgets)
