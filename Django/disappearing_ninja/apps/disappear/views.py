from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'disappear/index.html')

def ninjas(request):
    return render(request,'disappear/ninja.html')

# def color(request,id):
#     image = {
#         'blue' : 'leonardo.jpg'
#     }
#     image_id = id
#     return render(request,'disappear/color.html', image_id , image)

def color(request,id):
    if id == "blue":
        image = {
            'image_id' : 'leonardo.jpg'
        }
    elif id == "orange":
        image = {
            'image_id' : 'michelangelo.jpg'
        }
    elif id == "red":
        image = {
            'image_id' : 'raphael.jpg'
        }
    elif id == "purple":
        image = {
            'image_id' : 'donatello.jpg'
        }
    else:
        image = {
            'image_id' : 'notapril.jpg'
        }
    return render(request,'disappear/color.html' , image)
