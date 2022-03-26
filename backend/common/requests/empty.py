from __future__ import annotations

from dataclasses import dataclass

from common.requests.base import BaseRequest, Headers, Misc
from rest_framework.request import Request


@dataclass(frozen=True)
class EmptyRequest(BaseRequest):
    @staticmethod
    def init(request: Request) -> 'EmptyRequest':
        return EmptyRequest(
            headers=Headers.init(request.headers),
            misc=Misc.init(request),
        )
