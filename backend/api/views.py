

from django.http import HttpResponse


def hello(reuests):
    return HttpResponse("hello")