from django.shortcuts import render
from .models import *

# Create your views here.

def home(request):
    a = model.objects.all()
    return render(request, 'index.html', {'a':a})