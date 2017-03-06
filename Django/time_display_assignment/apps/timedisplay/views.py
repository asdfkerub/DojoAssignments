from django.shortcuts import render, HttpResponse
import datetime
# Create your views here.
def index(request):
    now = datetime.datetime.now()
    content = {
        'date' : now.strftime("%b  %d, %Y"),
        'time' : now.strftime("%I:%M %p")
    }
    return render(request,'timedisplay/index.html',content)
