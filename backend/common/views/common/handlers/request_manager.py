

from dataclasses import dataclass
from common.views.common.requests.base import BaseRequest
from rest_framework.authtoken.models import Token
from users.models import User


@dataclass
class RequestManager:
    request: BaseRequest

    @property
    def user_via_token(self) -> User:
        return Token.objects.get(key=self.request.headers.get_django_token).user
