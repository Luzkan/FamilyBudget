import logging
from dataclasses import dataclass, field
from typing import Optional

from common.responses.abstract_response import AbstractResponse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from users.models import User
from users.serializer import UserSerializer


@dataclass
class UserRegisterResponse(AbstractResponse):
    user: User
    code: Optional[int] = field(init=False, default=status.HTTP_200_OK)

    def __post_init__(self):
        logging.info(f'[Response] User has just registered with email {self.user.email}!', )

    def response(self) -> Response:
        return Response({
            "user": UserSerializer(self.user).data,
            "token": str(Token.objects.create(user=self.user))
        }, status=status.HTTP_200_OK)
