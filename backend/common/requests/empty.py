from __future__ import annotations
from dataclasses import dataclass
from rest_framework.request import Request
from common.requests.base import BaseRequest
from common.requests.base import Headers


@dataclass(frozen=True)
class EmptyRequest(BaseRequest):
    @staticmethod
    def init(request: Request) -> 'EmptyRequest':
        return EmptyRequest(
            user=str(request.user),
            content_type=str(request.content_type),
            auth=request.auth,
            headers=Headers.init(request.headers),
        )
