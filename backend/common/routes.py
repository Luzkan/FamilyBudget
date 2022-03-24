from users.views.login import LoginViewSet
from users.views.register import RegisterViewSet
from .views import RestViewSet

routes = [
    {'regex': r'rest', 'viewset': RestViewSet, 'basename': 'Rest'},
    {'regex': r'rest', 'viewset': LoginViewSet, 'basename': 'Rest'},
    {'regex': r'rest', 'viewset': RegisterViewSet, 'basename': 'Rest'},
]