from django.contrib import admin
from transaction.models import Expense, Income

admin.site.register(Expense)
admin.site.register(Income)
