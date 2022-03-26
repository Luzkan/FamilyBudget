from __future__ import annotations

from dataclasses import dataclass

from common.requests.base import BaseRequest, Headers, Misc
from rest_framework.request import Request


@dataclass(frozen=True)  # TODO: pydantic validation
class AddNewTransactionRequest(BaseRequest):
    budget_id: int
    name: str
    amount: int
    category: str

    @staticmethod
    def init(request: Request) -> 'AddNewTransactionRequest':
        request_data = dict(request.data)
        return AddNewTransactionRequest(
            budget_id=int(request_data.get('budget_id')),
            name=str(request_data.get('name')),
            amount=int(request_data.get('amount')),
            category=str(request_data.get('category')),
            headers=Headers.init(request.headers),
            misc=Misc.init(request)
        )
