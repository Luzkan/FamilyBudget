from dataclasses import dataclass, field
import logging
from typing import Optional
from rest_framework.response import Response
from rest_framework import status
from users.models import User
from common.responses.abstract_response import AbstractResponse


@dataclass
class UserVerifiedResponse(AbstractResponse):
    user: User
    code: Optional[int] = field(init=False, default=status.HTTP_200_OK)

    def __post_init__(self):
        logging.info(f'[Response] Verified: {self.user.email}')

    def response(self) -> Response:
        return Response({'verified': True}, status=self.code)
