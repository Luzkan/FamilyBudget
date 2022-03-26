from django.core import management

from familybudget import celery_app


@celery_app.task
def clearsessions():
    management.call_command("clearsessions")
