from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here. model create db tables and feilds programmatically




class User(AbstractUser): #extends abstract user that django already has setup for
     
    
    name = models.CharField(max_length = 255)
    email = models.EmailField(max_length = 255, unique=True)
    password = models.CharField(max_length=255)
    
    username = None
    USERNAME_FIELD ='email' # allows us to login with email instead of username
    REQUIRED_FIELDS=[]
    




class Image(models.Model):
    
    name = models.CharField(max_length=200)
    img = models.ImageField(upload_to='')
    message = models.TextField()
    
    user = models.ForeignKey(User, on_delete=models.CASCADE) #creates forign key
