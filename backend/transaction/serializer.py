from rest_framework import serializers
from transaction.models import Expense, Income


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id_user', 'amount', 'name', 'category']


class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = ['id_user', 'amount', 'name', 'category']
