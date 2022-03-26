import logging
from dataclasses import dataclass, field

from budget.models import Transaction
from budget.responses.added_budget import AddedBudgetResponse
from rest_framework import status
from users.models import User


@dataclass
class AddedTransactionResponse(AddedBudgetResponse):
    user: User
    transaction: type[Transaction]
    code: int = field(init=False, default=status.HTTP_201_CREATED)

    def __post_init__(self):
        logging.info(
            f"[Response] Successfully added {self.transaction.name} to {self.budgets[0].name} by {self.user.email}"
        )
