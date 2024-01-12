from .views import hello,register
from django.urls import path

urlpatterns = [
    path('hello/',hello),
    path('register/',register),
]
