from django.shortcuts import render, redirect
from .models import Course
# Create your views here.
def index(request):
    context = {
        'courses' : Course.objects.all()
    }
    return render(request,'course/index.html',context)
def add(request):
    Course.objects.create(name=request.POST['name'],description=request.POST['desc'])
    return redirect('/')

def confirmation(request,id):
    context = {
        'courses' : Course.objects.filter(id=id)
    }
    return render(request,'course/confirmation.html',context)

def remove(request,id):
    Course.objects.filter(id=id).delete()
    return redirect('/')
