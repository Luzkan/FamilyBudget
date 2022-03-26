from dataclasses import dataclass, field
import logging
from typing import Optional
from rest_framework.response import Response
from rest_framework import status

from common.responses.abstract_response import AbstractResponse


@dataclass
class UserTokenNotExistResponse(AbstractResponse):
    email: str
    text: str = field(init=False)
    success: bool = field(init=False, default=False)
    code: Optional[int] = field(init=False, default=status.HTTP_400_BAD_REQUEST)

    def __post_init__(self):
        logging.warn(f'[Response] Token for email {self.email} does not exist')

    def response(self) -> Response:
        return Response({
            "text": self.text
        },
            status=self.code,
        )
