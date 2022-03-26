from __future__ import annotations

from dataclasses import dataclass, field
from typing import Optional
from users.models import User
from users.serializer import UserSerializer

from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.response import Response


@dataclass
class FullUserListResponse(AbstractResponse):
    users: list[User]
    code: Optional[int] = field(init=False, default=status.HTTP_200_OK)

    def get_users(self):
        return [UserSerializer(user).data for user in self.users]

    def response(self) -> Response:
        return Response({
            "users": self.get_users(),
        }, status=self.code)
