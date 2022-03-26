from budget.models import Budget
from rest_framework import serializers
from transaction.serializer import ExpenseSerializer, IncomeSerializer
from users.serializer import UserSerializer


class BudgetSerializer(serializers.ModelSerializer):
    users = UserSerializer(read_only=True, many=True)
    expenses = ExpenseSerializer(read_only=True, many=True, required=False)
    incomes = IncomeSerializer(read_only=True, many=True, required=False)

    class Meta:
        model = Budget
        fields = ['id', 'name', 'total_budget', 'users', 'expenses', 'incomes']
