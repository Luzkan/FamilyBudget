from __future__ import annotations
from dataclasses import dataclass
from typing import Any, Callable, Optional
from rest_framework.request import Request
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
import logging
import hashlib
import hmac

from .models import User


# todo: pydantic validation
@dataclass(frozen=True)
class LoginRequest:
    email: str
    password: str
    user: str
    content_type: str
    auth: Optional[str]

    @staticmethod
    def init(request: Request) -> 'LoginRequest':
        request_data = dict(request.data)
        return LoginRequest(
            email=str(request_data.get('email')),
            password=str(request_data.get('password')),
            user=str(request.user),
            content_type=str(request.content_type),
            auth=request.auth,
        )


@dataclass
class PasswordVerifier:
    claimed: str
    database: str

    @property
    def hashed_password_db(self) -> str:
        algorithm, salt, iterations, hashed = self.database.split('$')
        return hashed

    @property
    def hashed_password_claimed(self) -> str:
        algorithm, salt, iterations, hashed = self.database.split('$')
        return self.generate_password(self.claimed, salt, int(iterations))

    def verify(self):
        return self.hashed_password_claimed == self.hashed_password_db

    def generate_password(self, password: str, salt: str, iterations: int) -> str:
        return hmac.new(
            str(salt).encode(),
            msg=password.encode(),
            digestmod=hashlib.sha256
        ).hexdigest()

    def _algorithm_factory(self, algorithm: str) -> Callable:
        return {
            'SHA256': lambda salt, password: hashlib.sha256(f"{salt}{password}".encode()).hexdigest()
        }[algorithm]


class LoginViewSet(viewsets.ViewSet):
    @action(
        detail=False,
        methods=['post'],
        permission_classes=[AllowAny],
        url_path='login',
    )
    def expense(self, request: Request):
        if isinstance(request_data := LoginRequest.init(request), Response):
            return request_data

        # if isinstance(user := self.retrieve_user(request_data), Response):
        #     return user
        # logging.info(user)

        password_verifier = PasswordVerifier(
            claimed=request_data.password,
            database='SHA256$68b07abb$1$af1ace988afd2f73e261375e6934623c488f0d87fa5b633fc5d151744cf3067e'
        )

        if not password_verifier.verify():
            return Response({"verified": False}, status=status.HTTP_401_UNAUTHORIZED)

        # user = authenticate(email=request_data.email, password=password_verifier.hashed_password_claimed)
        # if user is None:
        #     return Response({"verified": False}, status=status.HTTP_401_UNAUTHORIZED)
        # login(request, user)
        
        return Response({"verified": True}, status=status.HTTP_200_OK)

    def parse_login(self, request_data: Request) -> LoginRequest | Response:
        try:
            return LoginRequest.init(request_data)
        except TypeError:
            return Response(
                {"text": "Request data is not valid. Please provide 'email' and 'password' fields."},
                status=status.HTTP_400_BAD_REQUEST,
            )

    def retrieve_user(self, request_data: LoginRequest) -> User | Response:
        """
        Obviously, in real world application this kind of operations are unacceptable. This is NOT safe.
        """
        try:
            return User.objects.get(email=request_data.email)
        except User.DoesNotExist:
            logging.warn('User with email %s does not exist', request_data.email)
            return Response(
                {"text": f"Family member with email {request_data.email} not found."},
                status=status.HTTP_400_BAD_REQUEST,
            )
