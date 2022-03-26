
from __future__ import annotations

from dataclasses import dataclass, field

from auth.password_manager import PasswordManager
from auth.requests.credential import CredentialRequest
from auth.responses.user_does_not_exist import UserDoesNotExistResponse
from auth.responses.user_logged import UserLoggedResponse
from auth.responses.user_unverified.user_unverified_password import UserUnverifiedPasswordResponse
from common.handlers.request_manager import RequestManager
from common.responses.bad_request_response import BadRequestResponse
from users.models import User


LoginProcessReturnTypes = UserDoesNotExistResponse | UserUnverifiedPasswordResponse | UserLoggedResponse


@dataclass
class LoginRequestManager(RequestManager):
    factory: type[CredentialRequest] = field(init=False, default=CredentialRequest)
    request: CredentialRequest = field(init=False)

    def safe_process(self) -> BadRequestResponse | LoginProcessReturnTypes:
        return super().safe_process()  # type: ignore

    def process(self) -> LoginProcessReturnTypes:
        if isinstance(user := self.retrieve_user(self.request), UserDoesNotExistResponse):
            return user

        if not PasswordManager.init(
            claimed_password=self.request.password,
            database_password=user.password
        ).verify():
            return UserUnverifiedPasswordResponse(user)
        return UserLoggedResponse(user)

    def retrieve_user(self, request_data: CredentialRequest) -> User | UserDoesNotExistResponse:
        """ Obviously, in real world application this kind of operations are unacceptable. This is NOT safe. """
        try:
            return User.objects.get(email=request_data.email)
        except User.DoesNotExist:
            return UserDoesNotExistResponse(request_data.email)
