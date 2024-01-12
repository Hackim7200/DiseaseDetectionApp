from django.http import HttpResponse
from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from .serializers import UserSerializer
from rest_framework.response import Response
from .models import User
from rest_framework.exceptions import AuthenticationFailed




def hello(reuests):
    return HttpResponse("hello")


class RegisterView(APIView):
    def post(self,request):
        
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True) #validate the form input if incorrect return error
        serializer.save() #saves in db
        
        return Response(serializer.data)

class LoginView(APIView):
    def post(self,request):
        email = request.data['email']
        password = request.data['password']
        
        user = User.objects.filter(email=email).first() #select the user with this email
        
        if(user is None):
            raise AuthenticationFailed("User not found!")
        
        if(not user.check_password(password)):
            raise AuthenticationFailed("wrong pwd!")
        
        return Response({"success"})

            
            
        

