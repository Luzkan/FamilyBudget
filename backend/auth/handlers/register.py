
from __future__ import annotations

from dataclasses import dataclass, field

from auth.requests.credential import CredentialRequest
from auth.responses.user_register import UserRegisterResponse
from auth.serializer import RegisterSerializer
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class RegisterRequestManager(RequestManager):
    request: CredentialRequest = field(init=False)

    def safe_process(self) -> BadRequestResponse | UserRegisterResponse:
        return super().safe_process()  # type: ignore

    def process(self) -> UserRegisterResponse:
        user: User = RegisterSerializer().create(validated_data={
            'email': self.request.email,
            'password': self.request.password
        })
        return UserRegisterResponse(user)
