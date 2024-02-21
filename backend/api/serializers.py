from rest_framework import serializers
from .models import User,Image,Leaf

    
    
    
class LeafSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Leaf #<- this is the image model, serializer so serializer can be used to create instance in db aswell
        fields = ["id","img","percentage","disease","image"]
        
    def create(self, validated_data):
        # Create a new Image instance with validated data, including the user
        return Leaf.objects.create(**validated_data)

        
        
        
class ImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Image #<- this is the image model, serializer so serializer can be used to create instance in db aswell
        fields = ["id","img","name","user","message"]
        
    def create(self, validated_data):
        # Create a new Image instance with validated data, including the user
        return Image.objects.create(**validated_data)

        
        
        

class UserSerializer(serializers.ModelSerializer):


    
    class Meta:
        model = User
        fields = ["id","name","email","password"]     # what feilds do you want to use from the db model
        
        
        extra_kwargs = {'password':{'write_only':True}} # doesn't return the pwd after registering
        
    
        ## this is the middleware i use to hash the passwords
    def create(self, validated_data):
        
        password = validated_data.pop('password',None) #extracts pwd from validated_data
        
        instance = self.Meta.model(**validated_data) #returns the user **validated_data means without password
        
        if(password is not None):
            instance.set_password(password) #if pwd exits set is as hashed pwd
        
        instance.save()
        
        return instance # return the user
    
    
    
    
    
    
    
    