from django.db import models

# Create your models here.
class Todo(models.Model):
    # user = models.ForeignKey
    date = models.DateTimeField()
    contents = models.TextField(max_length = 200)