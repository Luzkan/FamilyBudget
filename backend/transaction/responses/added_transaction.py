from dataclasses import dataclass, field
import logging
from typing import Optional
from rest_framework.response import Response
from rest_framework import status
from budget.serializer import BudgetSerializer
from transaction.models import Transaction
from budget.models import Budget
from users.models import User
from common.responses.abstract_response import AbstractResponse


@dataclass
class AddedTransactionResponse(AbstractResponse):
    user: User
    budget: Budget
    transaction: Transaction
    code: Optional[int] = field(init=False, default=status.HTTP_200_OK)

    def __post_init__(self):
        logging.info(f'[Response] Successfully added {self.transaction.name} to {self.budget.name} by {self.user.email}')

    def response(self) -> Response:
        logging.info(self.budget)
        return Response({
            "budget": BudgetSerializer(self.budget).data,
        }, status=self.code)
