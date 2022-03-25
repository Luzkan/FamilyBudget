from django.db import models
from common.models import IndexedTimeStampedModel
from transaction.models import Expense, Income
from users.models import User


class Budget(IndexedTimeStampedModel):
    name = models.CharField(max_length=128)
    total_budget = models.IntegerField()
    users = models.ManyToManyField(User, blank=True, related_name='budgets')
    expenses = models.ManyToManyField(Expense, blank=True)
    incomes = models.ManyToManyField(Income, blank=True)

    def __str__(self):
        return self.name
    