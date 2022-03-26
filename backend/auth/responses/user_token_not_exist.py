import logging
from dataclasses import dataclass, field
from typing import Optional

from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response


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
