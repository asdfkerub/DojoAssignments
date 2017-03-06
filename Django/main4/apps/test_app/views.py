from django.shortcuts import render,redirect
from .models import Blog,Comment
# Create your views here.
def index(request):
    context = {
        'blogs' : Blog.objects.all()
    }
    return render(request,'test_app/index.html', context)

def blog(request):
    Blog.objects.create(title=request.POST['title'],blog=request.POST['content'])
    return redirect('/')

def comments(request , id):
    the_blog = Blog.objects.get(id=id)
    Comment.objects.create(comment=request.POST['comment'],blog=the_blog)
    return redirect('/')
