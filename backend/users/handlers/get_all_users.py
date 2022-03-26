from __future__ import annotations

from dataclasses import dataclass, field

from common.handlers.request_manager import RequestManager
from common.requests.empty import EmptyRequest
from common.responses.bad_request_response import BadRequestResponse
from users.models import User
from users.responses.full_user import FullUserListResponse


@dataclass
class GetAllUsersRequestManager(RequestManager):
    factory: type[EmptyRequest] = field(init=False, default=EmptyRequest)
    request: EmptyRequest = field(init=False)

    def safe_process(self) -> FullUserListResponse | BadRequestResponse:
        return super().safe_process()  # type: ignore (fixed in P3.11; https://peps.python.org/pep-0673/)

    def process(self) -> FullUserListResponse:
        user: list[User] = User.objects.all()  # type: ignore (QuerySet)
        if not user:
            raise NotImplementedError("No Users on the Server (this can never happen).")
        return FullUserListResponse(user)
