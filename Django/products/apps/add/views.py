from django.shortcuts import render,redirect,reverse

# Create your views here.
def add(request):
    return redirect(reverse('home:index'))
