from django.shortcuts import render
from .models import Product
# Create your views here.
def index(request):
    context = {
        'products' : Product.objects.all()
    }
    return render(request,'prods/index.html',context)
