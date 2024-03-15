
from PIL import Image
import numpy as np

class ImageProcessing:
    def __init__(self, numpyImage,bboxes):
        
        numpyImage= numpyImage
        bboxes = bboxes
        
        self.stackOfcroppedImg = []
        # Bounding box coordinates in xyxy format
        # # bbox = [100, 50, 300, 200]
        # # coord needs to be integers
        
        
        for bbox in bboxes:
            # Convert xyxy to (x_min, y_min, x_max, y_max)
            x_min, y_min, x_max, y_max = map(int, bbox)
            # Crop the image using NumPy slicing
            cropped_image = numpyImage[y_min:y_max, x_min:x_max]
            self.stackOfcroppedImg.append(cropped_image)
            
        
        return None
    
    
    def getListOfCroppedImgs(self):
        
        return self.stackOfcroppedImg
    
    def saveAllImages(self,plantId):
        
        dirPath = "/media/leaves/"
        listOfFilePaths = []
        # all np to images
        for i,item in enumerate(self.stackOfcroppedImg):
         # Create a sample NumPy array
         np_array = item

         # Use the Image.fromarray() function to convert the NumPy array to an image
         img = Image.fromarray(np_array.astype(np.uint8))
         
         leafDir = f"{dirPath}Plant{plantId}Leave{i}.png" #plantId to make each filePath unique since every detection is new plant
         
         listOfFilePaths.append(leafDir) # keep track of file path for db
         # Save the image to disk
         img.save("."+leafDir)

        
        return listOfFilePaths