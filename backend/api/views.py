from django.http import HttpResponse
from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from .serializers import UserSerializer
from rest_framework.response import Response




def hello(reuests):
    return HttpResponse("hello")


class RegisterView(APIView):
    def post(self,request):
        
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True) #validate the form input if incorrect return error
        serializer.save() #saves in db
        
        return Response(serializer.data)
        

