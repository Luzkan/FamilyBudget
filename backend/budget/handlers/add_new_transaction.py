from __future__ import annotations

from dataclasses import dataclass, field
from typing import TypeAlias

from budget.models import Budget, Transaction
from budget.requests.add_new_transaction import AddNewTransactionRequest
from budget.responses.added_transaction import AddedTransactionResponse
from budget.responses.not_permitted_to_change import NotPermittedToChangeResponse
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from rest_framework import serializers
from users.models import User


@dataclass
class AddNewTransactionHandler(RequestManager):
    serializer: type[serializers.ModelSerializer]
    transaction_type: str
    factory: type[AddNewTransactionRequest] = field(init=True)
    request: AddNewTransactionRequest = field(init=False)
    ADD_EXPENSE_REQUEST_TYPES: TypeAlias = (
        AddedTransactionResponse | NotPermittedToChangeResponse
    )

    def safe_process(self) -> ADD_EXPENSE_REQUEST_TYPES | BadRequestResponse:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> ADD_EXPENSE_REQUEST_TYPES:
        user: User = self.user_via_token
        budget: Budget = Budget.objects.get(id=self.request.budget_id)

        if not self.is_user_in_manipulated_budget(user, budget):
            return NotPermittedToChangeResponse(user, budget)

        transaction = self.serialize(user)
        self.add_transaction_to_budget(budget, transaction)

        return AddedTransactionResponse(
            user=user, budgets=[budget], transaction=transaction
        )

    def serialize(self, user) -> type[Transaction]:
        return self.serializer().create(
            validated_data={
                "id_user": user,
                "amount": self.request.amount,
                "name": self.request.name,
                "category": self.request.category,
            }
        )

    def add_transaction_to_budget(self, budget: Budget, transaction: type[Transaction]):
        getattr(budget, self.transaction_type).add(transaction)

    @classmethod
    def is_user_in_manipulated_budget(cls, user: User, budget: Budget) -> bool:
        return user in budget.users.all()
