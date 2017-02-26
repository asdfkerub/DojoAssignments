from __future__ import unicode_literals
from django.shortcuts import redirect, HttpResponse
from django.db import models
#from django.contrib import messages
import re
import bcrypt
# Create your models here.
NO_NUM_REGEX = re.compile(r'^[^0-9]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
class UserManager(models.Manager):
    def register(self,postData):
        print postData
        error_list =[]
        if len(postData['first_name']) < 2:
            error_list.append('Name is too short')
        if not NO_NUM_REGEX.match(postData['first_name']):
            error_list.append('First name has numbers')
        if len(postData['last_name']) < 2:
            error_list.append('Last name too short')
        if not NO_NUM_REGEX.match(postData['last_name']):
            error_list.append('Last name has numbers')
        if not EMAIL_REGEX.match(postData['email']):
            error_list.append('Email not valid')
        if len(postData['password']) < 8:
            error_list.append('Password too short')
        if postData['password'] != postData['cpassword']:
            error_list.append('Pass does not match')

        if error_list:
            return {'error' : error_list}
        else:
            password = postData['password']
            pwhash = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
            user = User.objects.create(first_name=postData['first_name'],last_name=postData['last_name'],email=postData['email'],password=pwhash)
            return {'the_user' : user}
    def login(self,postData):
        error_list = []
        user = User.objects.get(email=postData['email'])
        print user.email
        print user.password
        password = user.password
        hashed = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
        if bcrypt.hashpw(password.encode('utf-8'),hashed) == hashed:
            # return redirect('/account/'+str(user.id))
            return {'the_user' : user}
        else:
            error_list.append('Incorrect password')
            return {'error' : error_list}

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    def __str__(self):
        return str(self.id) + " " + self.first_name + " " + self.last_name + " " + self.email + " " + self.password
