from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'email' : 'asdf@adf.com',
        'name' : 'kkkk',
    }
    return render(request,'passing/index.html', context)
def show(request,id):
    context = {
        'id' : id
    }
    return render(request,'passing/show.html', context)
