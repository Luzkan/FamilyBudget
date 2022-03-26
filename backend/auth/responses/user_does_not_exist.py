from dataclasses import dataclass, field
import logging
from typing import Optional
from rest_framework.response import Response
from rest_framework import status

from common.responses.abstract_response import AbstractResponse


@dataclass
class UserDoesNotExistResponse(AbstractResponse):
    email: str
    text: str = field(init=False)
    success: bool = field(init=False, default=False)
    code: Optional[int] = field(init=False, default=status.HTTP_400_BAD_REQUEST)

    def __post_init__(self):
        self.text = f"Family member with email {self.email} not found."
        logging.warn('[Response] User with email %s does not exist', self.email)

    def response(self) -> Response:
        return Response({
            "text": self.text,
            "success": self.success,
        },
            status=self.code
        )
