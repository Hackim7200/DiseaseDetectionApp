from .views import hello,RegisterView
from django.urls import path



urlpatterns = [
    path('hello/',hello),
    path('register/',RegisterView.as_view()),
]
