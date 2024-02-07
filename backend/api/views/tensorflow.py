from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from rest_framework.response import Response
from rest_framework import status

from django.core.files.storage import FileSystemStorage
import os






class UploadImage(APIView):
    def post(self,request):
        
        name = request.data.get("name")
        
        img = request.FILES["img"]
        
        location = 'media/test/'
        fs = FileSystemStorage(location)
        fileName=fs.save(img.name,img)
        filePath = os.path.join("media","test",fileName)
        # fs.delete(fileName) #this should delete the file if not use  
        
        
        
        
        return Response("tensorflow")