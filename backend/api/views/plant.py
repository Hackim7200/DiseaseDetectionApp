from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]
from rest_framework.response import Response
from rest_framework import status

from django.core.files.storage import FileSystemStorage
import os
from ..models import Image,User,Leaf
from ..serializers import ImageSerializer,LeafSerializer

from decouple import config
JWT_SECRET = config('JWT_SECRET')
from rest_framework.exceptions import AuthenticationFailed
import jwt

#CNN
import cv2
import tensorflow as tf
from keras.preprocessing import image
import numpy as np

# Yolo
from ultralytics import YOLO
from PIL import Image as PilImage


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
        
        
        
class Yolo(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        user_id = parseCookie(token)["id"]
        # print(os.listdir("./yolov8/"))
        
        
        model = YOLO("./yolov8/best.pt",task='detect')
        results = model('./yolov8/pplant 3.jpeg')

        boxes = results[0].boxes.xyxy.tolist()
        classes = results[0].boxes.cls.tolist()
        names = results[0].names
        confidences = results[0].boxes.conf.tolist()
        stack = []
        # Iterate through the results
        for box, cls, conf in zip(boxes, classes, confidences):
            x1, y1, x2, y2 = box
            confidence = conf
            detected_class = cls
            name = names[int(cls)]
            stack.append([x1, y1, x2, y2])
        roundedConf = [round(value, 2) for value in confidences]
        print(roundedConf)
        
        
        
        origninalImageAsNp = results[0].orig_img 

        stackOfcroppedImg = []
        # Bounding box coordinates in xyxy format
        # # bbox = [100, 50, 300, 200]
        # # coord needs to be integers
        for bbox in stack:
            # Convert xyxy to (x_min, y_min, x_max, y_max)
            x_min, y_min, x_max, y_max = map(int, bbox)
            # Crop the image using NumPy slicing
            cropped_image = origninalImageAsNp[y_min:y_max, x_min:x_max]
            stackOfcroppedImg.append(cropped_image)
        
        numberOfLeaves = len(stackOfcroppedImg)
        
        
        dirPath = "/media/leaves/"
        listOfFilePaths = []
        # all np to images
        for i,item in enumerate(stackOfcroppedImg):
         # Create a sample NumPy array
         np_array = item

         # Use the Image.fromarray() function to convert the NumPy array to an image
         img = PilImage.fromarray(np_array.astype(np.uint8))
         
         leafDir = f"{dirPath}Plant{1}Leave{i}.png"
         
         listOfFilePaths.append(leafDir) # keep track of file path for db
         # Save the image to disk
         img.save("."+leafDir)

        print(listOfFilePaths)
        
        
        
        plant_id = 1
        
        # Ensure the user exists
        try:
            imageInstance = Image.objects.get(pk=plant_id)
        except Leaf.DoesNotExist:
            return Response({"message": "Plant not found"}, status=status.HTTP_404_NOT_FOUND)
        
        for path in listOfFilePaths:
            leaf = Leaf(
                disease="testing",
                img=path,  
                percentage=0.99,  
                image = imageInstance
                )
            leaf.save()
        
        
        
        
        return Response("ok",status=status.HTTP_200_OK)
    
    
class YoloUpload(APIView):
    def post(self, request):
        
        
        # token = request.COOKIES.get('jwt')
        # user_id = parseCookie(token)["id"]
        
        plant_id = 1
        
        # Ensure the user exists
        try:
            image = Image.objects.get(pk=plant_id)
        except Leaf.DoesNotExist:
            return Response({"message": "Plant not found"}, status=status.HTTP_404_NOT_FOUND)

        # # Handle image data
        leafData = request.data.copy() # i get imutable error ?
        leafData['image'] = image.id  # Assign user ID to imageData
        print(leafData)
        



        # # Serialize and save image data
        serializer = LeafSerializer(data=leafData)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

        
        return Response("ok",status=status.HTTP_200_OK)
    
    
class YoloImages(APIView):
    def get(self, request):
        
        
        
        plant_id = 1
        
        try:
            image = Image.objects.get(pk=plant_id)
        except Leaf.DoesNotExist:
            return Response({"message": "Plant not found"}, status=status.HTTP_404_NOT_FOUND)
        
        
          
        # filtering image with specific uid
        leaf = Leaf.objects.filter(image=plant_id)
        
        if leaf is None:
            Response({"message":"no images available"},status=status.HTTP_204_NO_CONTENT)
            
        # to return many Image objects
        serializer = LeafSerializer(leaf,many =True)
        
        return Response(serializer.data,status=status.HTTP_200_OK)