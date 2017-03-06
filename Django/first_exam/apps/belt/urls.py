from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index),
    url(r'^register$',views.register),
    url(r'^login$',views.login),
    url(r'^logout$',views.logout),
    url(r'^travels$',views.travels),
    url(r'^travels/add$',views.add_travel),
    url(r'^travels/add/process$',views.add_process),
    url(r'^travels/destination/(?P<plan_id>\d+)$',views.destination),
    url(r'^join/(?P<plan_id>\d+)$',views.join)
]
