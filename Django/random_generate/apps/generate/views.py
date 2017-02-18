from django.shortcuts import render, HttpResponse , redirect
import string
import random

def generator(size=2000000000, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))
# Create your views here.
def index(request):
    generate = generator()
    generated = {
        'gen' : generate
    }
    return render(request,'generate/index.html' , generated)
def generate(request):
    if request.method == 'POST':
        request.session['count'] += 1
        return redirect('/')
    else:
        return redirect('/')
