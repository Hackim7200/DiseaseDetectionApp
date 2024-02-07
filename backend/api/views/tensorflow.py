

from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]

from rest_framework.response import Response
from rest_framework import status


from decouple import config
JWT_SECRET = config('JWT_SECRET')





class UploadImage(APIView):
    def post(self,request):
        
        return Response("tensorflow")