from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index),
    url(r'^register/process$',views.register),
    url(r'^login$',views.login),
    url(r'^loggedin/(?P<id>\d+)$',views.account)
]
