from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import User
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your views here.
def index(request):
    return render(request,'validation/index.html')

def validate(request):
    # if not EMAIL_REGEX.match(requeset.POST['email']):
    #     return HttpResponse('Invalid Email')
    # else:
    # if 'error' in user:
    #     print('ERRRRROR')
    #     return redirect('/error')
    # if 'theuser' in user:
    #     print('SUCESS')
    #     return redirect('/success')
    if not EMAIL_REGEX.match(request.POST['email']):
        messages.error(request,'Invalid Email')
        return redirect('/')
    else:
        user= User.UserManager.register(request.POST['email'])
        messages.success(request,'This email, ' + request.POST['email'] + ' is valid.')
        return redirect('/success')

def success(request):
    context = {
        'emails' : User.UserManager.all()
    }
    return render(request,'validation/success.html',context)

def delconfirmation(request,id):
    context = {
        'emails' : User.UserManager.filter(id=id)
    }
    return render(request,'validation/delete.html',context)
def delete(request,id):
    User.UserManager.filter(id=id).delete()
    messages.success(request,'Successfully deleted')
    return redirect('/success')
