from django.shortcuts import render, HttpResponse
from .models import User
# Create your views here.
def index(request):
    User.UserManager.login('asdf@asdf.com','asdf')
    return HttpResponse(User.UserManager.login('asdf@asdf.com','asdf'))
