from rest_framework import serializers
from transaction.serializer import ExpenseSerializer, IncomeSerializer
from users.serializer import UserSerializer
from budget.models import Budget


class BudgetSerializer(serializers.ModelSerializer):
    users = UserSerializer(read_only=True, many=True)
    expenses = ExpenseSerializer(read_only=True, many=True)
    incomes = IncomeSerializer(read_only=True, many=True)

    class Meta:
        model = Budget
        fields = ['name', 'total_budget']