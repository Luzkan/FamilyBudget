import logging
from dataclasses import dataclass, field
from typing import Optional

from budget.models import Budget
from budget.serializer import BudgetSerializer
from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response
from budget.models import Transaction
from users.models import User


@dataclass
class AddedTransactionResponse(AbstractResponse):
    user: User
    budget: Budget
    transaction: type[Transaction]
    code: Optional[int] = field(init=False, default=status.HTTP_200_OK)

    def __post_init__(self):
        logging.info(f'[Response] Successfully added {self.transaction.name} to {self.budget.name} by {self.user.email}')

    def response(self) -> Response:
        logging.info(self.budget)
        return Response({
            "budget": BudgetSerializer(self.budget).data,
        }, status=self.code)
