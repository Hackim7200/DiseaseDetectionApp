from django.urls import path

from .views.auth import LogoutView,UserView,RegisterView,LoginView,Authenticate
from .views.plant import UploadImage, PlantHistory,ValidatePlantImg



urlpatterns = [

    path('register/',RegisterView.as_view()),
    path('login/',LoginView.as_view()),
    path('logout/',LogoutView.as_view()),
    path('user/',UserView.as_view()),
    path('authenticate/',Authenticate.as_view()),
    
    
    
    # The actual api
    path('upload/',UploadImage.as_view()),
    path('plant_history/',PlantHistory.as_view()),
    path('validate_plant_img/',ValidatePlantImg.as_view()),
    
]
