
from __future__ import annotations
import logging
from dataclasses import dataclass, field
from transaction.responses.not_permitted_to_change import NotPermittedToChangeResponse
from transaction.models import Expense
from transaction.responses.added_transaction import AddedTransactionResponse
from transaction.serializer import ExpenseSerializer
from transaction.requests.expense.add import AddExpenseRequest
from common.responses.bad_request_response import BadRequestResponse
from budget.models import Budget
from common.handlers.request_manager import RequestManager
from users.models import User


ADD_EXPENSE_REQUEST_TYPES = AddedTransactionResponse | NotPermittedToChangeResponse


@dataclass
class AddExpenseRequestManager(RequestManager):
    _factory = AddExpenseRequest
    request: AddExpenseRequest = field(init=False)

    def safe_process(self) -> ADD_EXPENSE_REQUEST_TYPES | BadRequestResponse:
        return super().safe_process()  # type: ignore

    def process(self) -> ADD_EXPENSE_REQUEST_TYPES:
        user: User = self.user_via_token
        budget: Budget = Budget.objects.get(id=self.request.budget_id)

        if not self.is_user_in_manipulated_budget(user, budget):
            return NotPermittedToChangeResponse(user, budget)

        expense: Expense = ExpenseSerializer().create(validated_data={
            'id_user': user,
            'amount': self.request.amount,
            'name': self.request.name,
            'category': self.request.category,
        })
        budget.expenses.add(expense)

        logging.info(f"New Expense {expense.name} for {budget.name}. Created by: {user}")
        return AddedTransactionResponse(user=user, budget=budget, transaction=expense)

    @classmethod
    def is_user_in_manipulated_budget(cls, user: User, budget: Budget) -> bool:
        return user in budget.users.all()
