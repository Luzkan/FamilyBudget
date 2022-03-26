import logging
from dataclasses import dataclass, field
from typing import Optional

from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response


@dataclass
class UserDoesNotExistResponse(AbstractResponse):
    email: str
    text: str = field(init=False)
    success: bool = field(init=False, default=False)
    code: Optional[int] = field(init=False, default=status.HTTP_404_NOT_FOUND)

    def __post_init__(self):
        self.text = f"Family member with email {self.email} not found."
        logging.warn("[Response] User with email %s does not exist", self.email)

    def response(self) -> Response:
        return Response(
            {
                "text": self.text,
                "success": self.success,
            },
            status=self.code,
        )
