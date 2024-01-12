from django.http import HttpResponse
from rest_framework.views import APIView #this is similar flexible way of using API_view["GET"]


def hello(reuests):
    return HttpResponse("hello")

class RegisterView(APIView):
    def post(self,request):
        
        pass
