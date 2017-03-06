from django.shortcuts import render, redirect
from .models import User
from django.contrib.messages import get_messages
from django.contrib import messages
#storage = get_messages(request)
# Create your views here.
def index(request):
    context = {
        'users' : User.objects.all()
    }
    return render(request,'login/index.html', context)
def register(request):
    if request.method == 'POST':
        user = User.objects.register(request.POST)
        if 'error' in user:
            for error in user['error']:
                messages.add_message(request, messages.INFO, error)
            return redirect('/')
        if 'the_user' in user:
            print user
            return redirect('/')

def login(request):
    if request.method == 'POST':
        user = User.objects.login(request.POST)
        if 'error' in user:
            for error in user['error']:
                message.add_message(request,messages.error,error)
            return redirect('/')
        if 'the_user' in user:
            return redirect('/loggedin/' + str(user['the_user'].id))

def account(request,id):
    context = {
        'user' : User.objects.get(id=id)
    }
    print context
    return render(request,'login/account.html',context)
