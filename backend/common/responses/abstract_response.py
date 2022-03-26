from abc import ABC, abstractmethod
from dataclasses import dataclass

from rest_framework.response import Response


@dataclass
class AbstractResponse(ABC):
    @abstractmethod
    def response(self) -> Response:
        """ """
