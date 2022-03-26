from __future__ import annotations

import logging
from dataclasses import dataclass, field

from budget.models import Budget
from budget.requests.add_new_budget import BudgetRequest
from budget.responses.added_budget import AddedBudgetResponse
from budget.serializer import BudgetSerializer
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class AddNewBudgetHandler(RequestManager):
    factory: type[BudgetRequest] = field(init=False, default=BudgetRequest)
    request: BudgetRequest = field(init=False)

    def safe_process(self) -> AddedBudgetResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore (fix in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> AddedBudgetResponse:
        user: User = self.user_via_token
        budget: Budget = BudgetSerializer().create(
            validated_data={
                "name": self.request.name,
                "total_budget": self.request.total_budget,
                "users": [user],
            }
        )
        logging.info(
            f"New Budget {budget.name}, with {budget.total_budget}. Created by: {user}"
        )
        return AddedBudgetResponse(budgets=[budget])
