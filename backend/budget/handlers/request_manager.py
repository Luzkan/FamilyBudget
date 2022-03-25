
from __future__ import annotations
from dataclasses import dataclass, field
import logging
from typing import Optional
from budget.models import Budget
from budget.serializer import BudgetSerializer
from budget.responses.budget import BudgetResponse
from budget.requests.budget import BudgetRequest
from common.handlers.request_manager import RequestManager
from users.models import User


@dataclass
class GetBudgetRequestManager(RequestManager):
    request: BudgetRequest = field(init=False)
    response: Optional[BudgetResponse] = field(init=False, default=None)

    def safe_process(self) -> BudgetResponse:
        if self.response:
            return self.response
        
        user: User = self.user_via_token
        budget: Budget = BudgetSerializer().create(validated_data={
            'name': self.request.name,
            'total_budget': self.request.total_budget,
            'users': [user],
        })
        logging.info(f"New Budget {budget.name}, with {budget.total_budget}. Created by: {user}")
        return BudgetResponse(budgets=[budget])
