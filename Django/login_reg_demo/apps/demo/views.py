from django.shortcuts import render, redirect
from .models import Person
from django.contrib import messages
# Create your views here.
def index(request):
    all_people = Person.objects.all()
    print all_people.query
    context = {
        'people' : all_people
    }
    return render(request,'demo/index.html' , context)

def create(request):
    if request.method == 'POST':
        print request.POST

        validated_stuff = Person.objects.validate_person(request.POST)
        if 'errors' in validated_stuff:
            for validation_error in validated_stuff['errors']:
                messages.error(request,validation_error)

        if 'the_user' in validated_stuff:
            messages.success(request,'Added new person' + validated_stuff['the_user'].first_name + " " + validated_stuff['the_user'].last_name)
        return redirect('/')
