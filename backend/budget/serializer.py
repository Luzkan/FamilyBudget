from budget.models import Budget, Expense, Income
from rest_framework import serializers
from users.serializer import UserSerializer


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ["id", "id_user", "amount", "name", "category"]


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ["id", "id_user", "amount", "name", "category"]


class BudgetSerializer(serializers.ModelSerializer):
    users = UserSerializer(read_only=True, many=True)
    expenses = ExpenseSerializer(read_only=True, many=True, required=False)
    incomes = IncomeSerializer(read_only=True, many=True, required=False)

    class Meta:
        model = Budget
        fields = ["id", "name", "total_budget", "users", "expenses", "incomes"]
