import logging
from dataclasses import dataclass

from auth.responses.user_unverified.user_unverified import UserUnverifiedResponse


@dataclass
class UserUnverifiedPasswordResponse(UserUnverifiedResponse):
    def __post_init__(self):
        logging.warn(f"[Response] Unverified: {self.user.email} (wrong password)")
