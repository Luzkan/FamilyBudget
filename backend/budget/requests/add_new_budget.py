from __future__ import annotations

from dataclasses import dataclass

from common.requests.base import BaseRequest, Headers, Misc
from rest_framework.request import Request


@dataclass(frozen=True)  # TODO: pydantic validation
class BudgetRequest(BaseRequest):
    name: str
    total_budget: int

    @staticmethod
    def init(request: Request) -> "BudgetRequest":
        request_data = dict(request.data)
        return BudgetRequest(
            name=str(request_data.get("name")),
            total_budget=int(request_data.get("total_budget")),
            headers=Headers.init(request.headers),
            misc=Misc.init(request),
            query_parameters=dict(request.query_params),
        )
