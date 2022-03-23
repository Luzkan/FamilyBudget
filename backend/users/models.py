from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _

from common.models import IndexedTimeStampedModel

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin, IndexedTimeStampedModel):
    email = models.EmailField(max_length=255, unique=True)
    USERNAME_FIELD = "email"
    is_staff = models.BooleanField(
        default=False,
        help_text=_("Designates whether the user can log into this admin site.")
    )
    is_active = models.BooleanField(
        default=True,
        help_text=_(
            "Designates whether this user should be treated as "
            "active. Unselect this instead of deleting accounts."
        ),
    )
    objects = UserManager()


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
        THEFT = 'Theft', _('Theft')
        OTHER = 'OTHER', _('Other')
    category = models.CharField(
        max_length=5,
        choices=IncomeCategoryType.choices,
        default=IncomeCategoryType.OTHER,
    )


class Budget(IndexedTimeStampedModel):
    name = models.CharField(max_length=128)
    total_budget = models.IntegerField()
    users = models.ManyToManyField(User)
    expenses = models.ManyToManyField(Expense)
    incomes = models.ManyToManyField(Income)
