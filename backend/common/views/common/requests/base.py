from __future__ import annotations
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Optional
from rest_framework.request import Request


@dataclass(frozen=True)
class BaseRequest(ABC):
    headers: Headers
    user: str
    content_type: str
    auth: Optional[str]

    @staticmethod
    @abstractmethod
    def init(request: Request) -> 'BaseRequest':
        """ """


@dataclass(frozen=True)
class Headers:
    content_length: int = field(repr=False)
    content_type: str = field(repr=False)
    authorization: str
    host: str
    connection: str = field(repr=False)
    accept: str = field(repr=False)
    user_agent: str = field(repr=False)
    x_csrftoken: str = field(repr=False)
    origin: str = field(repr=False)
    referer: str = field(repr=False)

    @property
    def get_django_token(self):
        return self.authorization.split(' ')[1]

    @staticmethod
    def init(headers: dict) -> 'Headers':
        return Headers(
            content_length=headers['content_length'],
            content_type=headers["content_type"],
            authorization=headers["authorization"],
            host=headers["host"],
            connection=headers["connection"],
            accept=headers["accept"],
            user_agent=headers["user_agent"],
            x_csrftoken=headers["x_csrftoken"],
            origin=headers["origin"],
            referer=headers["referer"],
        )
