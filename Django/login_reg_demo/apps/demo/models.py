from __future__ import unicode_literals

from django.db import models

# Create your models here.
class PersonManager(models.Manager):
    def validate_person(self,post_data):
        # this is where validation happens
        # need a variable to hold errors messages
        error_msgs = []
        houses = ['Stark','Lannister','Targaryen','greyjot','Bolton']

        if post_data['kill_count'] < 0:
            error_msgs.append('Cant kill negative people')
        if post_data['house'] not in houses:
            error_msgs.append('not a house')
        if len(post_data['first_name']) < 3:
            error_msgs.append('Name is too short')
        elif len(post_data['first_name']) > 45:
            error_msgs.append('too long')

        if error_msgs:
            # fail validations
            return {
            'errors' : error_msgs
            }
        else:
            # pass validations
            created_person = Person.objects.create(first_name = post_data['first_name'],last_name=post_data['last_name'],house=post_data['house'],favorite_weapon=post_data['fav_weapon'],dead=post_data['dead'],kill_count=post_data['kill_count'])
            return {
            'the_user' : created_person
            }




class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    house = models.CharField(max_length=100)
    dead = models.BooleanField()
    favorite_weapon = models.CharField(max_length=100)
    kill_count = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = PersonManager()
