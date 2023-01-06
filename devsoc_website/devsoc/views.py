from django.shortcuts import render
from .models import *

# Create your views here.

def home(request):
    a = model.objects.all()
    return render(request, 'index.html', {'a':a})

def about(request):
    return render(request, 'about.html')

def login(request):
    return render(request, 'login.html')

def forum(request):
    return render(request, 'forum.html')

def noticeboard(request):
    return render(request, 'noticeboard.html')

def resources(request):
    return render(request, 'resources.html')