from django.shortcuts import render , redirect
from .models import User, Admin, Message, Comment
from django.contrib import messages
# Create your views here.
def fuckitall(request):
    User.objects.all().delete()
    Admin.objects.all().delete()
    return redirect('/')
def index(request):
    return render(request,'dashboard/index.html')

def signin(request):
    return render(request,'dashboard/signin.html')

def register(request):
    return render(request,'dashboard/register.html')

def register_process(request):
    if request.method == 'POST':
        user = User.objects.register(request.POST)
        if 'error' in user:
            for validation_error in user['error']:
                messages.error(request,validation_error)
                return redirect('/register')
        if 'the_user' in user:
            messages.success(request,'Successfully registered, You may now login in.')
            return redirect('/signin')
def signin_process(request):
    if request.method == 'POST':
        user = User.objects.login(request.POST)
        if 'error' in user:
            for login_error in user['error']:
                messages.error(request,login_error)
                return redirect('/signin')
        if 'the_user' in user:
            if 'logged_in' not in request.session:
                request.session['logged_in'] = 'null'
            request.session['logged_in'] = user['user_id']
            if user["admin_level"] == 3:
                # print request.session['logged_in']
                return redirect('/dashboard/admin')
            else:
                # print request.session['logged_in']
                return redirect('/dashboard')

def logout(request):
    request.session['logged_in'] = 'null'
    messages.success(request,'Successfully logged out')
    return redirect('/signin')

def dash_admin(request):
    context = {
        'users' : User.objects.exclude(id = request.session['logged_in'])
    }
    return render(request,'dashboard/dashboard.html', context)

def dash(request):
    context = {
        'users' : User.objects.exclude(id = request.session['logged_in'])
    }
    return render(request,'dashboard/dashboard_user.html', context)

def add_user(request):
    return render(request,'dashboard/add_user.html')

def add_user_process(request):
    if request.method == 'POST':
        user = User.objects.register(request.POST)
        if 'error' in user:
            for validation_error in user['error']:
                messages.error(request,validation_error)
                return redirect('/users/new')
        if 'the_user' in user:
            messages.success(request,'Successfully added a new user')
            return redirect('/dashboard/admin')

def edit_user(request,user_id):
    context = {
        'user' : User.objects.get(id=user_id)
    }
    return render(request,'dashboard/edit_user.html',context)

def edit_process(request):
    User.objects.filter(id=request.POST['the_id']).update(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email=request.POST['email'])
    Admin.objects.filter(user=request.POST['the_id']).update(user_level=request.POST['level'])
    messages.success(request,'Successfully eddited the user')
    return redirect('/dashboard/admin')

def change_password(request):
    user = User.objects.password(request.POST)
    if 'error' in user:
        for validation_error in user['error']:
            messages.error(request,validation_error)
            return redirect('/users/edit/' + str(request.POST['the_id']))
    if 'the_user' in user:
        messages.success(request,'Successfully changed the password')
        return redirect('/dashboard/admin')

def user_remove(request,user_id):
    context = {
        'user' : User.objects.get(id=user_id)
    }
    return render(request,'dashboard/remove_user.html', context)

def user_remove_confirm(request,user_id):
    User.objects.get(id=user_id).delete()
    messages.success(request,'Successfully removed a user')
    return redirect('/dashboard/admin')

def user_show(request,user_id):
    context = {
        'user' : User.objects.get(id=user_id)
    }
    return render(request,'dashboard/user.html',context)

def user_edit(request):
    context = {
        'user' : User.objects.get(id=request.session['logged_in'])
    }
    return render(request,'dashboard/profile.html', context)

def user_edit_process(request):
    User.objects.filter(id=request.POST['the_id']).update(first_name=request.POST['first_name'],last_name=request.POST['last_name'],email=request.POST['email'])
    messages.success(request,'Successfully your profile')
    return redirect('/dashboard')

def user_edit_password(request):
    user = User.objects.password(request.POST)
    if 'error' in user:
        for validation_error in user['error']:
            messages.error(request,validation_error)
            return redirect('/user/edit')
    if 'the_user' in user:
        messages.success(request,'Successfully changed the users password')
        return redirect('/dashboard')

def user_description(request):
    User.objects.filter(id=request.POST['the_id']).update(description=request.POST['description'])
    messages.success(request,'You changed your profile description')
    return redirect('/user/edit')

def add_message(request,user_id):
    user = User.objects.get(id=user_id)
    posted_by = User.objects.get(id=request.session['logged_in'])
    message = request.POST['message']
    Message.objects.create(message=message,posted_by=posted_by,user=user)
    return redirect('/users/show/' + str(user_id))

def add_comment(request,message_id):
    user = User.objects.get(id=request.session['logged_in'])
    message = Message.objects.get(id=message_id)
    comment = request.POST['comment']
    Comment.objects.create(comment=comment,user=user,message=message)
    return redirect('/users/show/' + str(request.POST['the_id']))
