from django.test import TestCase


class TestUser(TestCase):
    def test_get_all_users(self):
        response = self.client.get("/api/users/all")
        self.assertEqual(response.status_code, 200)
