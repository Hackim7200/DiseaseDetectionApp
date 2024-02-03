from .views import LogoutView, UserView, hello,RegisterView,LoginView,SEE_COOKIE
from django.urls import path



urlpatterns = [
    path('hello/',hello),
    path('register/',RegisterView.as_view()),
    path('login/',LoginView.as_view()),
    path('logout/',LogoutView.as_view()),
    path('user/',UserView.as_view()),
    path('see/',SEE_COOKIE.as_view()),
]
