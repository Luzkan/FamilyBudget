from auth.views.login import LoginViewSet
from auth.views.register import RegisterViewSet
from auth.views.check_auth import CheckAuthViewSet
from .views import RestViewSet

routes = [
    {'regex': r'rest', 'viewset': RestViewSet, 'basename': 'Rest'},
    {'regex': r'rest', 'viewset': LoginViewSet, 'basename': 'Rest'},
    {'regex': r'rest', 'viewset': RegisterViewSet, 'basename': 'Rest'},
    {'regex': r'rest', 'viewset': CheckAuthViewSet, 'basename': 'Rest'},
]