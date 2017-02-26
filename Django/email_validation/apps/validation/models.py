from __future__ import unicode_literals

from django.db import models

# Create your models here.
class UserManager(models.Manager):
    def register(self, email):
        User.UserManager.create(email=email)

class User(models.Model):
    email = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    UserManager = UserManager()
