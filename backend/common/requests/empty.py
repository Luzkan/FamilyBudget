from __future__ import annotations
from dataclasses import dataclass
from rest_framework.request import Request
from common.requests.base import Misc, BaseRequest, Headers


@dataclass(frozen=True)
class EmptyRequest(BaseRequest):
    @staticmethod
    def init(request: Request) -> 'EmptyRequest':
        return EmptyRequest(
            headers=Headers.init(request.headers),
            misc=Misc.init(request),
        )
