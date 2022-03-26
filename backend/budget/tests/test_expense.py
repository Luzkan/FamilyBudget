from django.test import TestCase


class TestExpense(TestCase):
    def test_add_new_expense(self):
        response = self.client.post(
            "/api/budget/expense",
            {
                "name": "test_expense",
                "amount": 55,
                "budget_id": "1",
                "category": "Other",
            },
        )
        self.assertEqual(response.status_code, 201)
