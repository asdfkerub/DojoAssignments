from django.shortcuts import render, redirect
from django.contrib import messages
from .models import User, Plan
# Create your views here.
def index(request):
    return render(request,'belt/index.html')

def register(request):
    if request.method == 'POST':
        validated_user = User.objects.register(request.POST)
        if 'error' in validated_user:
            for validation_error in validated_user['error']:
                messages.error(request,validation_error)
        if 'the_user' in validated_user:
            messages.success(request,'Added the user ' + validated_user['the_user'].username)
        return redirect('/')

def login(request):
    if request.method == 'POST':
        validated_user = User.objects.login(request.POST)
        if 'error' in validated_user:
            for validation_error in validated_user['error']:
                messages.error(request,validation_error)
            return redirect('/')
        if 'the_user' in validated_user:
            if 'logged_in' not in request.session:
                request.session['logged_in'] = validated_user['the_user'].id
            request.session['logged_in'] = validated_user['the_user'].id
            print request.session['logged_in']
            return redirect('/travels')

def logout(request):
    request.session['logged_in'] = "null"
    messages.success(request,'Loged Out')
    return redirect('/')

def travels(request):
    context = {
        'users' : User.objects.get(id=request.session['logged_in']),
        'plans' : Plan.objects.filter(owner=request.session['logged_in']),
        'other_plans' : Plan.objects.exclude(owner=request.session['logged_in'])
    }
    return render(request,'belt/travel.html', context)

def add_travel(request):
    return render(request,'belt/add.html')

def add_process(request):
    if request.method == 'POST':
        validated_plan = Plan.objects.planval(request.POST)
        if 'error' in validated_plan:
            for validation_error in validated_plan['error']:
                messages.error(request,validation_error)
            return redirect('/travels/add')
        if 'the_trip' in validated_plan:
            return redirect('/travels')

def destination(request,plan_id):
    context = {
        'desti' : Plan.objects.get(id=plan_id),

    }
    return render(request,'belt/destination.html', context)

def join(request,plan_id):
    user = User.objects.get(id = request.session['logged_in'])
    plan = Plan.objects.get(id = plan_id)
    Plan.userz.add(user)
    return redirect('/travels')
