from dataclasses import dataclass
from typing import Optional

from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response


@dataclass
class BaseResponse(AbstractResponse):
    text: str
    success: bool
    status: Optional[int] = None

    def get_status_code(self) -> int:
        if self.success:
            return status.HTTP_200_OK
        return status.HTTP_400_BAD_REQUEST

    def response(self) -> Response:
        return Response({
            "text": self.text if self.text else None,
        },
            status=self.get_status_code() if self.status is None else self.status
        )
