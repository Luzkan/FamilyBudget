from __future__ import annotations

from dataclasses import dataclass

from common.requests.base import BaseRequest, Headers, Misc
from rest_framework.request import Request


@dataclass(frozen=True)  # TODO: pydantic validation
class CredentialRequest(BaseRequest):
    email: str
    password: str

    @staticmethod
    def init(request: Request) -> "CredentialRequest":
        request_data = dict(request.data)
        return CredentialRequest(
            email=str(request_data.get("email")),
            password=str(request_data.get("password")),
            headers=Headers.init(request.headers),
            misc=Misc.init(request),
            query_parameters=dict(request.query_params),
        )
