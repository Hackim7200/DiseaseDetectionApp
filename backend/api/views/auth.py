from django.http import HttpResponse
from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from ..serializers import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from ..models import User
from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime

from decouple import config
JWT_SECRET = config('JWT_SECRET')




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
            raise AuthenticationFailed({"User not found!"})
        
        if(not user.check_password(password)):
            raise AuthenticationFailed({"wrong pwd!"})
        
        payload = {
            "id":user.id,
            "exp": datetime.datetime.utcnow()+datetime.timedelta(minutes=60), #token lifespan
            "iat": datetime.datetime.utcnow() # when its created
        }
        
        token = jwt.encode(payload,JWT_SECRET,algorithm="HS256")
        
        response = Response()
        
        response.set_cookie(key='jwt',value=token,httponly=True)
        
        
        response.data = {"cookie recieved":token  }
        response.status_code=status.HTTP_200_OK
        
        
        return response

            
            
        

class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        
        if( not token):
            raise AuthenticationFailed({"msg":"No token found"})
        
        try:
            payload = jwt.decode(token,JWT_SECRET, algorithms="HS256")
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed({"msg":"NOT AUTHENTICATED"})
        
        
        user = User.objects.filter(id = payload['id']).first() # get the obj where id = payload
        
        serializer = UserSerializer(user)
        
        
        return Response(serializer.data, status=status.HTTP_200_OK)
        
class LogoutView(APIView):
    def get(self,request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {"msg":"Cookie deleted"}
        
        return response
        
        
class SEE_COOKIE(APIView):
    def get(self,request):
        
        # data = {"message": "Hello, world!"}
        # response = Response(data)
        # response.set_cookie('my_api_cookie', 'api_cookie_value', max_age=3600)  # Sets a cookie that expires in 1 hour
        
        # token = request.COOKIES.get('jwt')
        my_cookie = request.COOKIES.get('jwt')

        
        
        return Response(my_cookie)
        
        

        
        