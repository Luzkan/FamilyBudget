import logging
from dataclasses import dataclass, field
from typing import Optional

from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response
from users.models import User


@dataclass
class UserUnverifiedResponse(AbstractResponse):
    user: User
    code: Optional[int] = field(init=False, default=status.HTTP_401_UNAUTHORIZED)

    def __post_init__(self):
        logging.warn(f'[Response] Unverified: {self.user.email}')

    def response(self) -> Response:
        return Response({'verified': False}, status=self.code)
