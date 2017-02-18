from django.shortcuts import render, redirect
from .models import Blog , Comment
# Create your views here.
def index(request):
    context = {
    'blogs' : Blog.objects.all()
    }
    return render(request,'orm/index.html' , context)

def blogs(request):
    Blog.objects.create(title=request.POST['title'], message=request.POST['message'])
    return redirect('/')
