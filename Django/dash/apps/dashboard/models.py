from __future__ import unicode_literals

from django.db import models

import re, bcrypt
NO_NUM_REGEX = re.compile(r'^[^0-9]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class UserManager(models.Manager):
    def register(self,post_data):
        error_msgs=[]
        if User.objects.filter(email=post_data['email']).exists():
            error_msgs.append('Email already registered')
        if len(post_data['email']) < 2:
            error_msgs.append('Email is too short')
        elif not EMAIL_REGEX.match(post_data['email']):
            error_msgs.append('Email is not valid')
        if len(post_data['first_name']) < 2:
            error_msgs.append('First name too short')
        if len(post_data['last_name']) < 2:
            error_msgs.append('Last name too short')
        if len(post_data['password']) < 8:
            error_msgs.append('Password must be 8 characters long')
        if post_data['password'] != post_data['cpassword']:
            error_msgs.append('Password does not match')

        if error_msgs:
            return {'error' : error_msgs}
        else:
            password = post_data['password']
            pwhash = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
            user = User.objects.create(first_name = post_data['first_name'],last_name = post_data['last_name'],email=post_data['email'],password=pwhash)
            a_user = User.objects.get(email=post_data['email'])
            Admin.objects.create(user_level=2,user=a_user)
            return {'the_user' : user}

    def login(self,post_data):
        error_msgs = []
        isuser = User.objects.filter(email=post_data['email'])
        # print user
        # return {'the_user' : user}
        if isuser.count() < 1:
            error_msgs.append('Email does not exists. Please Register')
            return {'error' : error_msgs}
        user = User.objects.get(email=post_data['email'])
        password = user.password
        user_admin = Admin.objects.get(user=user)
        admin_value = user_admin.user_level
        # print admin_value
        if bcrypt.hashpw(post_data['password'].encode('utf-8'),password.encode('utf-8')) == password:
            return {'the_user' : user , 'admin_level' : admin_value, 'user_id' : user.id}
        else:
            error_msgs('incorrect password')
            return {'error' : error_msgs}

    def password(request,post_data):
        error_msgs=[]
        if post_data['password'] != post_data['cpassword']:
            error_msgs.append('Password does not match')
        if error_msgs:
            return {'error' : error_msgs}
        else:
            password = post_data['password']
            pwhash = bcrypt.hashpw(password.encode('utf=8'),bcrypt.gensalt())
            User.objects.filter(id=post_data['the_id']).update(password=pwhash)
            user = User.objects.get(id=post_data['the_id'])
            return {'the_user' : user}

class User(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    description = models.TextField(max_length=1000, default='No Description')
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
    # def __str__(self):
    #     return (self.first_name, self.last_name, self.password)

class Admin(models.Model):
    #admin 3 ,normal users 2
    user_level = models.IntegerField(default=2)
    user = models.ForeignKey(User, related_name='admins')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Message(models.Model):
    message = models.TextField()
    posted_by = models.ForeignKey(User, related_name='posted_users')
    user = models.ForeignKey(User, related_name='message_users')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    comment = models.TextField(max_length=500)
    user = models.ForeignKey(User, related_name='user_comments')
    message = models.ForeignKey(Message, related_name='message_comments')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
