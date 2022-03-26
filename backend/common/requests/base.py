from __future__ import annotations

from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Optional

from rest_framework.request import Request


@dataclass(frozen=True)
class BaseRequest(ABC):
    headers: Headers
    misc: Misc

    @staticmethod
    @abstractmethod
    def init(request: Request) -> 'BaseRequest':
        """ """


@dataclass
class Misc:
    user: Optional[str]
    content_type: Optional[str]
    auth: Optional[str]

    @staticmethod
    def init(request: Request) -> 'Misc':
        request_data = dict(request.data)
        return Misc(
            user=str(request_data.get('user')),
            content_type=str(request_data.get('user')),
            auth=str(request_data.get('auth')),
        )


@dataclass(frozen=True)
class Headers:
    content_length: Optional[int] = field(repr=False)
    content_type: Optional[str] = field(repr=False)
    authorization: Optional[str]
    host: Optional[str]
    connection: Optional[str] = field(repr=False)
    accept: Optional[str] = field(repr=False)
    user_agent: Optional[str] = field(repr=False)
    x_csrftoken: Optional[str] = field(repr=False)
    origin: Optional[str] = field(repr=False)
    referer: Optional[str] = field(repr=False)

    @property
    def get_django_token(self) -> str | None:
        if not self.authorization:
            return None
        return self.authorization.split(' ')[1]

    @staticmethod
    def init(headers: dict) -> 'Headers':
        return Headers(
            content_length=headers.get('content_length', None),
            content_type=headers.get("content_type", None),
            authorization=headers.get("authorization", None),
            host=headers.get("host", None),
            connection=headers.get("connection", None),
            accept=headers.get("accept", None),
            user_agent=headers.get("user_agent", None),
            x_csrftoken=headers.get("x_csrftoken", None),
            origin=headers.get("origin", None),
            referer=headers.get("referer", None),
        )
