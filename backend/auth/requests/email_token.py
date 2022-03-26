from __future__ import annotations

from dataclasses import dataclass

from common.requests.base import BaseRequest, Headers, Misc
from rest_framework.request import Request


@dataclass(frozen=True)  # TODO: pydantic validation
class EmailTokenRequest(BaseRequest):
    email: str
    token: str

    @staticmethod
    def init(request: Request) -> 'EmailTokenRequest':
        request_data = dict(request.data)
        return EmailTokenRequest(
            email=str(request_data.get('email')),
            token=str(request_data.get('token')),
            headers=Headers.init(request.headers),
            misc=Misc.init(request)
        )
