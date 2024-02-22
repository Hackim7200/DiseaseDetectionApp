# Yolo
from ultralytics import YOLO
from PIL import Image as PilImage

class ObjectDetector:
    def __init__(self, imagePath):  #CONSTRUCTOR
        self.imagePath = imagePath
        
        model = YOLO("./yolov8/best.pt",task='detect')
        results = model(imagePath)

        boxes = results[0].boxes.xyxy.tolist()
        classes = results[0].boxes.cls.tolist()
        names = results[0].names
        confidences = results[0].boxes.conf.tolist()
        self.origninalImageAsNp = results[0].orig_img 
        
        
        
        # Iterating through the results & extracting bboxes
        
        self.bboxes = []
        
        for box, cls, conf in zip(boxes, classes, confidences):
            x1, y1, x2, y2 = box
            confidence = conf
            detected_class = cls
            name = names[int(cls)]
            self.bboxes.append([x1, y1, x2, y2])
            
        # roundedConf = [round(value, 2) for value in confidences] 
        
        
        
        
        
        
        
    def getBBoxes(self):
        
        return self.bboxes
    
    def getOrignalImgNp(self):
        
        return self.origninalImageAsNp
    
        
        
        
        
     