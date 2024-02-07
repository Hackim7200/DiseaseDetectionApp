from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from rest_framework.response import Response
from rest_framework import status

from django.core.files.storage import FileSystemStorage
import os
from ..models import Image






class UploadImage(APIView):
    def post(self,request):
        
        name = request.data.get("name")
        
        img = request.FILES["img"]
        
        location = 'media/images/'
        fs = FileSystemStorage(location)
        fileName=fs.save(img.name,img)
        filePath = os.path.join("media","test",fileName)
        
        
        # fs.delete(fileName) #this should delete the file if not use  
        
        
        
        
        return Response({filePath})
    
class PlantImages(APIView):
    def get(self, request):
        img_id = request.data.get('id')
        
        img = Image.objects.get(pk=img_id)
        if img is not None:
            
            return Response({img})
            
            
        
        return Response({"doesnt exist"})
        
