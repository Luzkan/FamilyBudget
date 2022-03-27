import logging
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Optional, Type

from django.core.paginator import EmptyPage, Paginator

from common.requests.base import BaseRequest
from common.responses.abstract_response import AbstractResponse
from common.responses.bad_request_response import BadRequestResponse
from rest_framework.authtoken.models import Token
from rest_framework.request import Request
from users.models import User


@dataclass
class RequestManager(ABC):
    rest_request: Request
    factory: Type[BaseRequest] = field(init=False)
    request: BaseRequest = field(init=False)
    init_bad_request_response: Optional[BadRequestResponse] = field(
        init=False, default=None
    )

    def __post_init__(self):
        self.__parse_request()

    def __parse_request(self):
        try:
            self.request = self.factory.init(self.rest_request)
            logging.info(self)
        except TypeError:
            self.init_bad_request_response = BadRequestResponse()
            logging.warn(f"Bad Request.\n{self.rest_request.data}")

    def __has_failed_during_initialization(self) -> bool:
        return self.init_bad_request_response is not None

    def safe_process(self) -> type[AbstractResponse]:
        if self.__has_failed_during_initialization():
            return self.init_bad_request_response  # type: ignore
        return self.process()

    def get_page(self, objects, page_size: int, page: int) -> list:
        try:
            return Paginator(objects, page_size).page(page).object_list  # type: ignore (QuerySet)
        except EmptyPage:
            return []

    @abstractmethod
    def process(self) -> type[AbstractResponse]:
        raise NotImplementedError

    @property
    def user_via_token(self) -> User:
        return Token.objects.get(key=self.request.headers.get_django_token).user
