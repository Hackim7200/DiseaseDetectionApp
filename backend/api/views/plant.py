from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from rest_framework.response import Response
from rest_framework import status

from django.core.files.storage import FileSystemStorage
import os
from ..models import Image
from ..serializers import ImageSerializer


from rest_framework.exceptions import AuthenticationFailed
import jwt


from decouple import config
JWT_SECRET = config('JWT_SECRET')


class UploadImage(APIView):
    def post(self,request):
        
        
        
        
        
        serializer = ImageSerializer(data = request.data)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
    
class PlantImages(APIView):
    def get(self, request):
        
        token = request.COOKIES.get('jwt')
        
        if( not token):
            raise AuthenticationFailed({"message":"No token found"})
        
        try:
            payload = jwt.decode(token,JWT_SECRET, algorithms="HS256")
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed({"message":"NOT AUTHENTICATED"})
        
        user_id = payload
        
        
        
        
        
        # next step get images for a specific person
        image = Image.objects.all()
        

            
        serializer = ImageSerializer(image,many =True)
            
        return Response(serializer.data,status=status.HTTP_200_OK)
        
        
        # return Response({"doesnt exist"},status=status.HTTP_204_NO_CONTENT)
        