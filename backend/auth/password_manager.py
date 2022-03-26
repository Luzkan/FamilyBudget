from __future__ import annotations

import hashlib
import hmac
import random
import string
from dataclasses import dataclass
from typing import Callable


@dataclass
class DatabasePassword:
    algorithm: str
    salt: str
    iterations: int
    hashed: str

    @staticmethod
    def init(database_password: str):
        algorithm, salt, iterations, hashed = database_password.split("$")
        return DatabasePassword(
            algorithm=algorithm,
            salt=salt,
            iterations=int(iterations),
            hashed=hashed,
        )


@dataclass
class PasswordManager:
    claimed: str
    database: DatabasePassword

    @staticmethod
    def init(claimed_password: str, database_password: str) -> "PasswordManager":
        return PasswordManager(
            claimed=claimed_password, database=DatabasePassword.init(database_password)
        )

    @property
    def hashed_password_db(self) -> str:
        return self.database.hashed

    @property
    def hashed_password_claimed(self) -> str:
        return PasswordManager.generate_password(
            self.claimed, self.database.salt, int(self.database.iterations)
        )

    @staticmethod
    def generate_salt(length: int) -> str:
        return "".join(
            random.choice(string.ascii_letters + string.digits) for _ in range(length)
        )

    @staticmethod
    def generate_password(password: str, salt: str, iterations: int) -> str:
        return hmac.new(
            str(salt).encode(), msg=password.encode(), digestmod=hashlib.sha256
        ).hexdigest()

    def verify(self):
        return self.hashed_password_claimed == self.hashed_password_db

    def _algorithm_factory(self, algorithm: str) -> Callable:
        return {
            "SHA256": lambda salt, password: hashlib.sha256(
                f"{salt}{password}".encode()
            ).hexdigest()
        }[algorithm]
