from __future__ import annotations

import logging

from budget.handlers.add_new_budget import AddNewBudgetHandler
from budget.handlers.get_budgets import GetBudgetsHandler
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
        methods=["get", "post"],
        permission_classes=[IsAuthenticated],
        url_path="budget",
    )
    def get_all_budgets(self, request: Request) -> Response:
        logging.info(request.query_params)
        if request.method == "GET":
            return GetBudgetsHandler(rest_request=request).safe_process().response()

        # POST
        return AddNewBudgetHandler(rest_request=request).safe_process().response()

    @action(
        detail=False,
        methods=["post"],
        permission_classes=[IsAuthenticated],
        url_path="budget/users",
    )
    def add_budget(self, request: Request) -> Response:
        return UpdateBudgetUsersHandler(rest_request=request).safe_process().response()
