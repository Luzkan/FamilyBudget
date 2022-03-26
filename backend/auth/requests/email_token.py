from __future__ import annotations

from dataclasses import dataclass

from common.requests.base import BaseRequest, Headers, Misc
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response


@dataclass(frozen=True)  # TODO: pydantic validation
class EmailTokenRequest(BaseRequest):
    email: str
    token: str

    @staticmethod
    def _init(request: Request) -> 'EmailTokenRequest':
        request_data = dict(request.data)
        return EmailTokenRequest(
            email=str(request_data.get('email')),
            token=str(request_data.get('token')),
            headers=Headers.init(request.headers),
            misc=Misc.init(request)
        )

    @staticmethod
    def init(request_data: Request) -> 'EmailTokenRequest' | Response:
        try:
            return EmailTokenRequest._init(request_data)
        except TypeError:
            return Response(
                {"text": "Request data is not valid. Please provide 'email' and 'token' fields."},
                status=status.HTTP_400_BAD_REQUEST,
            )
