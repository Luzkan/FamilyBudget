from django.urls import path

from .views.index import IndexView


app_name = "common"
urlpatterns = [
    path("", IndexView.as_view(), name="index"),
    path("budgets", IndexView.as_view(), name="budgets"),
]
