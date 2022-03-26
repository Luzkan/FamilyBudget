from __future__ import annotations

from dataclasses import dataclass, field
from typing import TypeAlias

from auth.requests.email_token import EmailTokenRequest
from auth.responses.user_token_not_exist import UserTokenNotExistResponse
from auth.responses.user_unverified.user_unverified_token import UserUnverifiedTokenResponse
from auth.responses.user_verified import UserVerifiedResponse
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from rest_framework.authtoken.models import Token
from users.models import User


CheckAuthReturnTypes: TypeAlias = UserTokenNotExistResponse | UserUnverifiedTokenResponse | UserVerifiedResponse


@dataclass
class CheckAuthorizationHandler(RequestManager):
    factory: type[EmailTokenRequest] = field(init=False, default=EmailTokenRequest)
    request: EmailTokenRequest = field(init=False)

    def safe_process(self) -> BadRequestResponse | CheckAuthReturnTypes:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> CheckAuthReturnTypes:
        if isinstance(token := self.retrieve_token(), UserTokenNotExistResponse):
            return token

        if not self.verify_user(token.user):
            return UserUnverifiedTokenResponse(token.user, token)
        return UserVerifiedResponse(token.user)

    def verify_user(self, user: User) -> bool:
        return str(user.email) == str(self.request.email)

    def retrieve_token(self) -> Token | UserTokenNotExistResponse:
        """ Obviously, in real world application this kind of operations are unacceptable. This is NOT safe. """
        try:
            return Token.objects.get(key=self.request.token)
        except Token.DoesNotExist:
            return UserTokenNotExistResponse(email=self.request.email)
