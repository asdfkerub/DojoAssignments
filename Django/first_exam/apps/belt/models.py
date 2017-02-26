from __future__ import unicode_literals

from django.db import models
import re , bcrypt , datetime

NO_NUM_REGEX = re.compile(r'^[^0-9]+$')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your models here.
class UserManager(models.Manager):
    def register(self,post_data):
        error_msgs=[]
        if len(post_data['name']) < 3:
            error_msgs.append('Name is too short')
        if len(post_data['username']) < 3:
            error_msgs.append('Username is too short')
        if User.objects.filter(username=post_data['username']).exists():
            error_msgs.append('Username already exist')
        if len(post_data['password']) < 8:
            error_msgs.append('Password is too short')
        if post_data['password'] != post_data['cpassword']:
            error_msgs.append('Password does not match')
        if error_msgs:
            return {'error':error_msgs}
        else:
            password = post_data['password']
            pwhash = bcrypt.hashpw(password.encode('utf-8'),bcrypt.gensalt())
            user = User.objects.create(name=post_data['name'],username=post_data['username'],password=pwhash)
            return {'the_user' : user}

    def login(self,post_data):
        error_msgs = []
        user = User.objects.get(username=post_data['username'])
        password = user.password
        if bcrypt.hashpw(post_data['password'].encode('utf-8'), password.encode('utf-8')) == password:
            return {'the_user' : user}
        else:
            error_msgs.append('Incorrect password')
            return {'error' : error_msgs}


class User(models.Model):
    name = models.CharField(max_length=45)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()

class PlanManager(models.Manager):
    def planval(self, post_data):
        print post_data['start_date']
        print datetime.date.today()
        error_msgs = []
        if len(post_data['destination']) <= 0:
            error_msgs.append('Add a destination name')
        if len(post_data['description']) <= 0:
            error_msgs.append('Add a description to your travels')
        if len(post_data['start_date']) <= 0:
            error_msgs.append('Add date from')
        # if post_data['start_date'] < datetime.date.today():
        #     error_msgs.append('Please add a valid date')
        if len(post_data['end_date']) <= 0:
            error_msgs.append('Add date to')

        if error_msgs:
            return {'error':error_msgs}
        else:
            user = User.objects.get(id=post_data['logged_in'])
            trip = Plan.objects.create(destination=post_data['destination'],description=post_data['description'],start_date=post_data['start_date'],end_date=post_data['end_date'],owner = user)
            return {'the_trip' : trip}


class Plan(models.Model):
    destination = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    description = models.CharField(max_length=255)
    owner = models.ForeignKey(User, related_name='tripp')
    userz = models.ManyToManyField(User, related_name='userzz')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = PlanManager()

# class Schedules(models.Model):
#     user = models.ForeignKey(User, related_name='people')
#     plan = models.ForeignKey(Plan, related_name='trip')
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
