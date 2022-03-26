from dataclasses import dataclass, field
from typing import Optional
from rest_framework.response import Response
from rest_framework import status

from common.responses.abstract_response import AbstractResponse


@dataclass
class BadRequestResponse(AbstractResponse):
    text: str = field(default="Request data is not valid. Check the required fields")
    success: bool = field(default=False)
    code: Optional[int] = field(default=status.HTTP_400_BAD_REQUEST)

    def response(self) -> Response:
        return Response({
            "text": self.text,
            "success": self.success,
        },
            status=self.code
        )
