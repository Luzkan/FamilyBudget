from __future__ import annotations
from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import Optional
from rest_framework.request import Request


@dataclass(frozen=True)
class BaseRequest(ABC):
    user: str
    content_type: str
    auth: Optional[str]

    @staticmethod
    @abstractmethod
    def init(request: Request) -> 'BaseRequest':
        """ """
