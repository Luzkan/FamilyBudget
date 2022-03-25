# Generated by Django 4.0.3 on 2022-03-25 14:26

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('budget', '0002_alter_budget_expenses_alter_budget_incomes_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='budget',
            name='expenses',
            field=models.ManyToManyField(blank=True, to='transaction.expense'),
        ),
        migrations.AlterField(
            model_name='budget',
            name='incomes',
            field=models.ManyToManyField(blank=True, to='transaction.income'),
        ),
        migrations.AlterField(
            model_name='budget',
            name='users',
            field=models.ManyToManyField(blank=True, related_name='budgets', to=settings.AUTH_USER_MODEL),
        ),
    ]
