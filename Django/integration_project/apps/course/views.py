from django.shortcuts import render, redirect,reverse
from .models import Course, Student
from django.core.urlresolvers import reverse
from django.db.models import Count
from ..login.models import User
# Create your views here.
def index(request):
    context = {
        'courses' : Course.objects.all()
    }
    return render(request,'course/index.html',context)
def add(request):
    Course.objects.create(name=request.POST['name'],description=request.POST['desc'])
    return redirect(reverse('course:course_index'))

def confirmation(request,id):
    context = {
        'courses' : Course.objects.filter(id=id),
    }
    return render(request,'course/confirmation.html',context)

def remove(request,id):
    Course.objects.filter(id=id).delete()
    return redirect(reverse('course:course_index'))

def admin(request):
    context = {
        'courses' : Course.objects.all(),
        'users' : User.objects.all(),
        'students' : Student.objects.all().annotate(sum_users = Count('num_course'))
    }
    return render(request,'course/admin.html' , context)

def to_course(request):
    user = User.objects.get(id=request.POST['user'])
    print user
    course = Course.objects.get(id=request.POST['course'])
    print course
    Student.objects.create(num_user=user.id,num_course=course.id)
    return redirect(reverse('course:admin'))
