from dataclasses import dataclass
import logging
from auth.responses.user_unverified.user_unverified import UserUnverifiedResponse
from rest_framework.authtoken.models import Token


@dataclass
class UserUnverifiedTokenResponse(UserUnverifiedResponse):
    token: Token

    def __post_init__(self):
        logging.warn(f'[Response] Unverified: {self.user.email} (via token: {self.token.key})')
