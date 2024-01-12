from .views import hello,RegisterView,LoginView
from django.urls import path



urlpatterns = [
    path('hello/',hello),
    path('register/',RegisterView.as_view()),
    path('login/',LoginView.as_view()),
]
