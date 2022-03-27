from __future__ import annotations

from dataclasses import dataclass
from typing import Optional

from common.requests.base import Headers, Misc
from common.requests.empty import EmptyRequest
from common.requests.query_parameters import QueryParameters
from rest_framework.request import Request


@dataclass
class GetBudgetQueryParams(QueryParameters):
    search_query: Optional[str]
    page: Optional[int]

    @staticmethod
    def init(query_parameters: dict[str, list]):
        return GetBudgetQueryParams(
            search_query=QueryParameters.get_parameter(query_parameters, 'searchQuery', str, 1),
            page=QueryParameters.get_parameter(query_parameters, 'page', int),
        )


@dataclass(frozen=True)  # TODO: pydantic validation
class GetBudgetsRequest(EmptyRequest):
    query_parameters: GetBudgetQueryParams

    @staticmethod
    def init(request: Request) -> "GetBudgetsRequest":
        return GetBudgetsRequest(
            headers=Headers.init(request.headers),
            misc=Misc.init(request),
            query_parameters=GetBudgetQueryParams.init(request.query_params),  # type: ignore (QueryDict)
        )
