from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index),
    url(r'^add/course/$',views.add),
    url(r'^remove/course/(?P<id>\d+)$',views.confirmation),
    url(r'^remove/confirmed/(?P<id>\d+)$',views.remove)
]
