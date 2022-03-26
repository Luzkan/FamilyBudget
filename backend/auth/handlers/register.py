from __future__ import annotations

from dataclasses import dataclass, field

from auth.requests.credential import CredentialRequest
from auth.responses.user_registered import UserRegisteredResponse
from auth.serializer import RegisterSerializer
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


@dataclass
class RegisterHandler(RequestManager):
    factory: type[CredentialRequest] = field(init=False, default=CredentialRequest)
    request: CredentialRequest = field(init=False)

    def safe_process(self) -> BadRequestResponse | UserRegisteredResponse:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> UserRegisteredResponse:
        user: User = RegisterSerializer().create(
            validated_data={
                "email": self.request.email,
                "password": self.request.password,
            }
        )
        return UserRegisteredResponse(user)
