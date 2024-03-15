import tensorflow as tf
from tensorflow import keras
from keras.applications.nasnet import preprocess_input, decode_predictions
from keras.preprocessing import image
import numpy as np
import os

modelPath = os.path.join(".","tensorflow","NASNetMobile.h5")
model = tf.keras.models.load_model(modelPath)


class ImageClassification:
    def __init__(self):
        
        
        
        return None
    
    def detectDisease():
        return None
    
    def getPercentage():
        return None
    
    def identifyDisease(self,imagePath):
        
        # copied this from the file structure by highlighting and restructuring via gpt
        plant_diseases = ["Pepper__bell___Bacterial_spot","Pepper__bell___healthy","Potato___Early_blight","Potato___Late_blight","Potato___healthy","Tomato_Bacterial_spot","Tomato_Early_blight","Tomato_Late_blight","Tomato_Leaf_Mold","Tomato_Septoria_leaf_spot","Tomato_Spider_mites_Two_spotted_spider_mite","Tomato__Target_Spot","Tomato__Tomato_YellowLeaf__Curl_Virus","Tomato__Tomato_mosaic_virus","Tomato_healthy"]
        imgDimension = 250
        # preprocessing
        new_image = image.load_img(imagePath, target_size = (imgDimension,imgDimension )) #rescaling
        
        new_image = image.img_to_array(new_image)
        new_image = np.expand_dims(new_image, axis = 0)
        new_image = preprocess_input(new_image)
        # predictions
        pred = model.predict(new_image)
        # prediction in percentages
        # print(np.round(pred*100, 3))
        # catagorising
        
        results = plant_diseases[pred.argmax()]

        return   results
    
    # def identifyDisease2(self,arr):
        
    #     # copied this from the file structure by highlighting and restructuring via gpt
    #     plant_diseases = ["Pepper__bell___Bacterial_spot","Pepper__bell___healthy","Potato___Early_blight","Potato___Late_blight","Potato___healthy","Tomato_Bacterial_spot","Tomato_Early_blight","Tomato_Late_blight","Tomato_Leaf_Mold","Tomato_Septoria_leaf_spot","Tomato_Spider_mites_Two_spotted_spider_mite","Tomato__Target_Spot","Tomato__Tomato_YellowLeaf__Curl_Virus","Tomato__Tomato_mosaic_virus","Tomato_healthy"]
    #     imgDimension = 250
    #     # preprocessing
    #     # new_image = image.load_img(self.imagePath, target_size = (imgDimension,imgDimension )) #rescaling
        
    #     # new_image = image.img_to_array(new_image)
    #     new_image = arr
        
    #     new_image = np.expand_dims(new_image, axis = 0)
    #     new_image = preprocess_input(new_image)
    #     # predictions
    #     pred = model.predict(new_image)
    #     # prediction in percentages
    #     # print(np.round(pred*100, 3))
    #     # catagorising
        
    #     results = plant_diseases[pred.argmax()]

    #     return   results



