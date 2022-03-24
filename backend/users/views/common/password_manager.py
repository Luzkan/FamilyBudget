from __future__ import annotations
from dataclasses import dataclass
import random
import string
from typing import Callable
import hashlib
import hmac


@dataclass
class PasswordManager:
    claimed: str
    database: str

    @property
    def hashed_password_db(self) -> str:
        algorithm, salt, iterations, hashed = self.database.split('$')
        return hashed

    @property
    def hashed_password_claimed(self) -> str:
        algorithm, salt, iterations, hashed = self.database.split('$')
        return PasswordManager.generate_password(self.claimed, salt, int(iterations))

    @staticmethod
    def generate_salt(length: int) -> str:
        return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(length))
    
    @staticmethod
    def generate_password(password: str, salt: str, iterations: int) -> str:
        return hmac.new(
            str(salt).encode(),
            msg=password.encode(),
            digestmod=hashlib.sha256
        ).hexdigest()

    def verify(self):
        return self.hashed_password_claimed == self.hashed_password_db

    def _algorithm_factory(self, algorithm: str) -> Callable:
        return {
            'SHA256': lambda salt, password: hashlib.sha256(f"{salt}{password}".encode()).hexdigest()
        }[algorithm]