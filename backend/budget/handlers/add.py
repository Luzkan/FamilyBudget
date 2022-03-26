
from __future__ import annotations

import logging
from dataclasses import dataclass, field

from budget.models import Budget
from budget.requests.budget import BudgetRequest
from budget.responses.budget import BudgetResponse
from budget.serializer import BudgetSerializer
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class AddBudgetRequestManager(RequestManager):
    request: BudgetRequest = field(init=False)

    def safe_process(self) -> BudgetResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore

    def process(self) -> BudgetResponse:
        user: User = self.user_via_token
        budget: Budget = BudgetSerializer().create(validated_data={
            'name': self.request.name,
            'total_budget': self.request.total_budget,
            'users': [user],
        })
        logging.info(f"New Budget {budget.name}, with {budget.total_budget}. Created by: {user}")
        return BudgetResponse(budgets=[budget])
