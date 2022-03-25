from django.db import models
from common.models import IndexedTimeStampedModel
from transaction.models import Expense, Income
from users.models import User


class Budget(IndexedTimeStampedModel):
    name = models.CharField(max_length=128)
    total_budget = models.IntegerField()
    users = models.ManyToManyField(User, null=True, blank=True)
    expenses = models.ManyToManyField(Expense, null=True, blank=True)
    incomes = models.ManyToManyField(Income, null=True, blank=True)
