from django.db import models

from common.models import IndexedTimeStampedModel
from users.models import User

from django.utils.translation import gettext_lazy as _


class Transaction(IndexedTimeStampedModel):
    id_user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    name = models.CharField(max_length=100)


class Expense(Transaction):
    class ExpenseCategoryType(models.TextChoices):
        FOOD = 'FOOD', _('Food')
        GOODS = 'GOODS', _('Goods')
        BILLS = 'BILLS', _('Bills')
        OTHER = 'OTHER', _('Other')
    category = models.CharField(
        max_length=5,
        choices=ExpenseCategoryType.choices,
        default=ExpenseCategoryType.OTHER,
    )


class Income(Transaction):
    class IncomeCategoryType(models.TextChoices):
        JOB = 'JOB', _('Job')
        GIFT = 'GIFT', _('Gift')
        THEFT = 'THEFT', _('Theft')
        OTHER = 'OTHER', _('Other')
    category = models.CharField(
        max_length=5,
        choices=IncomeCategoryType.choices,
        default=IncomeCategoryType.OTHER,
    )


class Budget(IndexedTimeStampedModel):
    name = models.CharField(max_length=128)
    total_budget = models.IntegerField()
    users = models.ManyToManyField(User, blank=True, related_name='budgets')
    expenses = models.ManyToManyField(Expense, blank=True)
    incomes = models.ManyToManyField(Income, blank=True)

    def __str__(self):
        return self.name
