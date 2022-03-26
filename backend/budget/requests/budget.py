from __future__ import annotations
from dataclasses import dataclass
from rest_framework.request import Request
from common.requests.base import BaseRequest, Headers, Misc


@dataclass(frozen=True)  # TODO: pydantic validation
class BudgetRequest(BaseRequest):
    name: str
    total_budget: int

    @staticmethod
    def init(request: Request) -> 'BudgetRequest':
        request_data = dict(request.data)
        return BudgetRequest(
            name=str(request_data.get('name')),
            total_budget=int(request_data.get('total_budget')),
            headers=Headers.init(request.headers),
            misc=Misc.init(request),
        )
