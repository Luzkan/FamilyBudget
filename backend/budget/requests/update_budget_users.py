from __future__ import annotations

from dataclasses import dataclass

from common.requests.base import BaseRequest, Headers, Misc
from rest_framework.request import Request


@dataclass(frozen=True)
class UpdateBudgetUsersRequest(BaseRequest):
    budget_id: int
    users: list[dict]

    @staticmethod
    def init(request: Request) -> "UpdateBudgetUsersRequest":
        request_data = dict(request.data)
        return UpdateBudgetUsersRequest(
            budget_id=int(request_data.get("budget_id")),
            users=request_data.get("users"),
            headers=Headers.init(request.headers),
            misc=Misc.init(request),
            query_parameters=dict(request.query_params),
        )
