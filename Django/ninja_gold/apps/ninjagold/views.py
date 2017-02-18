from django.shortcuts import render,redirect
import random
# Create your views here.

def index(request):
    if 'total' not in request.session:
        request.session['total'] = 0
    if 'log' not in request.session:
        request.session['log'] = []
    print request.session['log']
    return render(request,'ninjagold/index.html')

def farm(request):
    gained = random.randrange(0,11)
    request.session['total'] += gained
    request.session['log'].insert(0,{'type' : 'gain','message' : 'Entered the farm and gained ' + str(gained)})
    return redirect('/')
def cave(request):
    gained = random.randrange(5,11)
    request.session['total'] += gained
    request.session['log'].insert(0,{'type' : 'gain','message' : 'Entered the cave and gained ' + str(gained)})
    return redirect('/')
def house(request):
    gained = random.randrange(2,6)
    request.session['total'] += gained
    request.session['log'].insert(0,{'type' : 'gain' , 'message' : 'Entered the house and gained ' + str(gained)})
    return redirect('/')
def casino(request):
    gained = random.randrange(-50,51)
    request.session['total'] += gained
    if gained < 0:
        request.session['log'].insert(0,{'type' : 'loss' , 'message' : 'Entered the casino and lost ' + str(gained)})
    else:
        request.session['log'].insert(0,{'type' : 'gain', 'message' : 'Entered the casino and gained ' + str(gained)})
    return redirect('/')
