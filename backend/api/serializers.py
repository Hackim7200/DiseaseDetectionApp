from rest_framework import serializers
from models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","name","email","password"]     # what feilds do you want to use from the db model
    