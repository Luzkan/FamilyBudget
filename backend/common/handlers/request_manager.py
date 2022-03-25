import logging
from abc import ABC
from dataclasses import dataclass, field
from typing import Optional, Type
from common.responses.base_response import BaseResponse
from common.requests.base import BaseRequest
from rest_framework.authtoken.models import Token
from users.models import User
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status


@dataclass
class RequestManager(ABC):
    _request: Request
    _factory: Type[BaseRequest]
    request: BaseRequest = field(init=False)
    response: Optional[BaseResponse] = field(init=False, default=None)

    def __post_init__(self):
        try:
            self.request = self._factory.init(self._request)
        except TypeError:
            self.response = BaseResponse(
                text="Request data is not valid. Check the required fields",
                success=False,
                status=status.HTTP_400_BAD_REQUEST,
            )
        logging.info(self)

    @property
    def user_via_token(self) -> User:
        return Token.objects.get(key=self.request.headers.get_django_token).user
