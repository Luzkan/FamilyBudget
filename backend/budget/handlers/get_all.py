
from __future__ import annotations

from dataclasses import dataclass, field

from budget.responses.added_budget import AddedBudgetResponse
from common.handlers.request_manager import RequestManager
from common.requests.empty import EmptyRequest
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class GetAllBudgetRequestManager(RequestManager):
    request: EmptyRequest = field(init=False)

    def safe_process(self) -> AddedBudgetResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore

    def process(self) -> AddedBudgetResponse:
        user: User = self.user_via_token
        budgets = user.budgets.all()  # type: ignore
        if not budgets:
            raise NotImplementedError("No budgets found")
        return AddedBudgetResponse(budgets)
