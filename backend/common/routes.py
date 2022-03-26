from auth.views.auth import AuthViewSet
from budget.views.budget import BudgetViewSet
from budget.views.expense import ExpenseAddViewSet
from budget.views.income import IncomeAddViewSet
from users.views.users import UsersViewSet


routes = [
    {"regex": r"rest", "viewset": AuthViewSet, "basename": "auth"},
    {"regex": r"rest", "viewset": BudgetViewSet, "basename": "budget"},
    {"regex": r"rest", "viewset": ExpenseAddViewSet, "basename": "expense"},
    {"regex": r"rest", "viewset": IncomeAddViewSet, "basename": "income"},
    {"regex": r"rest", "viewset": UsersViewSet, "basename": "users"},
]
