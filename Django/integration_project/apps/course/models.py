from __future__ import unicode_literals

from django.db import models
from ..login.models import User
# Create your models here.

class Course(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Student(models.Model):
    num_user = models.ForeignKey(User)
    num_course = models.ForeignKey(Course)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
