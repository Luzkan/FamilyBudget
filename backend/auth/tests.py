from django.test import TestCase


class TestAuth(TestCase):
    def test_login(self):
        response = self.client.post(
            "/api/auth/login",
            {
                "username": "testuser",
                "password": "testpassword",
            },
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["token"], "testtoken")

    def test_register(self):
        response = self.client.post(
            "/api/auth/register",
            {
                "username": "testuser",
                "password": "testpassword",
            },
        )
        self.assertEqual(response.status_code, 201)

    def test_check_auth(self):
        response = self.client.post(
            "/api/auth/check",
            {
                "token": "testtoken",
            },
        )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["username"], "testuser")
