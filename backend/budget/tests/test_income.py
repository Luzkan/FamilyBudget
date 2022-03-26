from django.test import TestCase


class TestIncome(TestCase):
    def test_add_new_income(self):
        response = self.client.post(
            "/api/budget/income",
            {
                "name": "test_income",
                "amount": 55,
                "budget_id": "1",
                "category": "Other",
            },
        )
        self.assertEqual(response.status_code, 201)
