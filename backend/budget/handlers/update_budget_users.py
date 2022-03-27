from __future__ import annotations

from dataclasses import dataclass, field

from budget.models import Budget
from budget.requests.update_budget_users import UpdateBudgetUsersRequest
from budget.responses.added_budget import AddedBudgetResponse
from budget.responses.added_users_to_budget import AddedUsersToBudgetResponse
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class UpdateBudgetUsersHandler(RequestManager):
    factory: type[UpdateBudgetUsersRequest] = field(
        init=False, default=UpdateBudgetUsersRequest
    )
    request: UpdateBudgetUsersRequest = field(init=False)

    def safe_process(self) -> AddedBudgetResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> AddedBudgetResponse:
        budget: Budget = Budget.objects.get(id=self.request.budget_id)
        users: list[User] = self.get_users()
        budget.users.set(users)
        return AddedUsersToBudgetResponse(users=users, budgets=[budget])

    def get_users(self) -> list[User]:
        return [User.objects.get(id=user["id"]) for user in self.request.users]
