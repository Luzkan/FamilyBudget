from django.contrib import admin

from budget.models import Budget


class CustomBudgetAdmin(admin.ModelAdmin):
    list_display = ("name", "total_budget")
    list_filter = ("name", "total_budget")
    search_fields = ("name",)
    ordering = ("name",)


admin.site.register(Budget, CustomBudgetAdmin)
