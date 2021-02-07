from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Todo(models.Model):
    author = models.ForeignKey(User , related_name = "todo_set", on_delete = models.CASCADE)  # 작성자
    timeline =  models.DateTimeField(auto_now_add = True)   # 작성 시간
    date = models.DateField(null = False, blank = False)    # 투두 언제까지 해야 하는지
    contents = models.CharField(max_length = 300, null = False, blank = False)  # 투두 컨텐츠
