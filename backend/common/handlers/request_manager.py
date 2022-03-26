import logging
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Optional, Type
from common.responses.bad_request_response import BadRequestResponse
from common.responses.abstract_response import AbstractResponse
from common.requests.base import BaseRequest
from rest_framework.authtoken.models import Token
from users.models import User
from rest_framework.request import Request


@dataclass
class RequestManager(ABC):
    _request: Request
    _factory: Type[BaseRequest]
    request: BaseRequest = field(init=False)
    init_bad_request_response: Optional[BadRequestResponse] = field(init=False, default=None)

    def __post_init__(self):
        self.__parse_request()
        logging.info(self)

    def __parse_request(self):
        try:
            self.request = self._factory.init(self._request)
        except TypeError:
            self.init_bad_request_response = BadRequestResponse()

    def __has_failed_during_initialization(self) -> bool:
        return self.init_bad_request_response is not None

    def safe_process(self) -> type[AbstractResponse]:
        if self.__has_failed_during_initialization():
            return self.init_bad_request_response  # type: ignore
        return self.process()

    @abstractmethod
    def process(self) -> type[AbstractResponse]:
        raise NotImplementedError

    @property
    def user_via_token(self) -> User:
        return Token.objects.get(key=self.request.headers.get_django_token).user