from __future__ import annotations
from dataclasses import dataclass
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from auth.views.common.requests.base import BaseRequest


@dataclass(frozen=True)  # TODO: pydantic validation
class CredentialRequest(BaseRequest):
    email: str
    password: str

    @staticmethod
    def _init(request: Request) -> 'CredentialRequest':
        request_data = dict(request.data)
        return CredentialRequest(
            email=str(request_data.get('email')),
            password=str(request_data.get('password')),
            user=str(request.user),
            content_type=str(request.content_type),
            auth=request.auth,
        )

    @staticmethod
    def init(request_data: Request) -> 'CredentialRequest' | Response:
        try:
            return CredentialRequest._init(request_data)
        except TypeError:
            return Response(
                {"text": "Request data is not valid. Please provide 'email' and 'password' fields."},
                status=status.HTTP_400_BAD_REQUEST,
            )
