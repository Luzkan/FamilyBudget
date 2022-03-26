from __future__ import annotations

from budget.handlers.add_new_budget import AddNewBudgetHandler
from budget.handlers.get_all_budgets import GetAllBudgetsHandler
from budget.handlers.update_budget_users import UpdateBudgetUsersHandler
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response


class BudgetViewSet(viewsets.ViewSet):
    permission_classes = (IsAuthenticated,)

    @action(
        detail=False,
        methods=["post"],
        permission_classes=[IsAuthenticated],
        url_path="budget",
    )
    def add_new_budget(self, request: Request) -> Response:
        budget_request_manager = AddNewBudgetHandler(rest_request=request)
        return budget_request_manager.safe_process().response()

    @action(
        detail=False,
        methods=["get"],
        permission_classes=[IsAuthenticated],
        url_path="budget/all",
    )
    def get_all_budgets(self, request: Request) -> Response:
        budget_request_manager = GetAllBudgetsHandler(rest_request=request)
        return budget_request_manager.safe_process().response()

    @action(
        detail=False,
        methods=["post"],
        permission_classes=[IsAuthenticated],
        url_path="budget/users",
    )
    def add_budget(self, request: Request) -> Response:
        budget_request_manager = UpdateBudgetUsersHandler(rest_request=request)
        return budget_request_manager.safe_process().response()
