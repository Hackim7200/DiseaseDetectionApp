from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from rest_framework.response import Response
from rest_framework import status

from django.core.files.storage import FileSystemStorage
import os
from ..models import Image,User
from ..serializers import ImageSerializer

from decouple import config
JWT_SECRET = config('JWT_SECRET')
from rest_framework.exceptions import AuthenticationFailed
import jwt

#CNN
import cv2
import tensorflow as tf
from keras.preprocessing import image
import numpy as np











def parseCookie(token):
        
    if( not token):
        raise AuthenticationFailed({"message":"No token found"})
        
    try:
        payload = jwt.decode(token,JWT_SECRET, algorithms="HS256")
    except jwt.ExpiredSignatureError:
        raise AuthenticationFailed({"message":"NOT AUTHENTICATED"})
        
    return payload
    

class UploadImage(APIView):
    def post(self, request):
        token = request.COOKIES.get('jwt')
        user_id = parseCookie(token)["id"]
        
        # Ensure the user exists
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # Handle image data
        imageData = request.data
        imageData['user'] = user.id  # Assign user ID to imageData

        # Serialize and save image data
        serializer = ImageSerializer(data=imageData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class PlantHistory(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        user_id = parseCookie(token)["id"]
        
        # filtering image with specific uid
        image = Image.objects.filter(user=user_id)
        
        if image is None:
            Response({"message":"no images available"},status=status.HTTP_204_NO_CONTENT)
            
        # to return many Image objects
        serializer = ImageSerializer(image,many =True)
            
        return Response(serializer.data,status=status.HTTP_200_OK)
    
    
class ValidatePlantImg(APIView):
    
    def post(self, request):
        imgPath = "./media/-light-macro-photography-fund-flowering-plant-woody-plant-land-plant-1061092_CYcfJHT.jpg"
        
        imgMatrix = cv2.imread(imgPath)
        print(imgMatrix)
        
        modelPath = os.path.join(".","tensorflow","myModel.h5")
        
        # print(os.listdir(modelPath))
        
        model = tf.keras.models.load_model(modelPath)
        imgDimension = 250
        

        chess_king = image.load_img(imgPath, target_size = (imgDimension,imgDimension )) #rescaling
        
        chess_king_ = image.img_to_array(chess_king)
        chess_king_ = np.expand_dims(chess_king, axis = 0)
        
        prediction = model.predict(chess_king_)
        print(prediction[0][0])
        
        
        
        
        


        


        
        
        
        
    

        
        
        return Response(prediction,status=status.HTTP_200_OK)
        
        