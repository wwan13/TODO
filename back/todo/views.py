from django.shortcuts import render
# from .models import Todo
from .models import Todo
from datetime import datetime

# Create your views here.

def test(request):
    newTodo = Todo()
    newTodo.date = datetime.now()
    newTodo.contents = "aaasssddd"
    newTodo.save()

    return render(request, "test.html")