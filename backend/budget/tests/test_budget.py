from django.test import TestCase


class TestBudget(TestCase):
    def test_add_new_budget(self):
        response = self.client.post(
            "/api/budget",
            {
                "name": "testbudget",
                "description": "testdescription",
                "users": ["testuser"],
            },
        )
        self.assertEqual(response.status_code, 201)

    def test_get_all_budgets(self):
        response = self.client.get("/api/budget/all")
        self.assertEqual(response.status_code, 200)

    def test_add_budget_users(self):
        response = self.client.post(
            "/api/budget/users",
            {
                "budget_id": "testbudget",
                "users": ["testuser"],
            },
        )
        self.assertEqual(response.status_code, 201)
