from django.urls import path

from .views.auth import LogoutView,UserView,RegisterView,LoginView,SEE_COOKIE
from .views.plant import UploadImage, PlantImages,ValidatePlantImg



urlpatterns = [

    path('register/',RegisterView.as_view()),
    path('login/',LoginView.as_view()),
    path('logout/',LogoutView.as_view()),
    path('user/',UserView.as_view()),
    path('see/',SEE_COOKIE.as_view()),
    
    
    
    
    
    # The actual api
    path('upload/',UploadImage.as_view()),
    path('plant_image/',PlantImages.as_view()),
    path('validate_plant_img/',ValidatePlantImg.as_view()),
    
]
