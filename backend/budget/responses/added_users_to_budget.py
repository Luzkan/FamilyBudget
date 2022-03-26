import logging
from dataclasses import dataclass

from budget.responses.added_budget import AddedBudgetResponse
from users.models import User


@dataclass
class AddedUsersToBudgetResponse(AddedBudgetResponse):
    users: list[User]

    def __post_init__(self):
        logging.info(f'[Response] Successfully {len(self.users)} added users to {self.budgets[0].name}')
