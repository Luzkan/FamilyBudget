import logging
from dataclasses import dataclass, field
from typing import Optional

from budget.models import Budget
from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response
from users.models import User


@dataclass
class NotPermittedToChangeResponse(AbstractResponse):
    user: User
    budget: Budget
    text: str = field(init=False, default="Not Permitted To Change")
    hint: str = field(
        init=False,
        default="User must be in the budget user group in order to add transaction.",
    )
    code: int = field(init=False, default=status.HTTP_401_UNAUTHORIZED)

    def __post_init__(self):
        logging.warn(f"[Response] Not Permitted To Change: {self.user.email}")

    def response(self) -> Response:
        return Response(
            {
                "text": self.text,
                "hint": self.hint,
            },
            status=self.code,
        )
