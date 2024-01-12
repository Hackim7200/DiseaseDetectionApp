from django.http import HttpResponse
from rest_framework.views import APIView


def hello(reuests):
    return HttpResponse("hello")

def register(reuests):
    return HttpResponse("register")