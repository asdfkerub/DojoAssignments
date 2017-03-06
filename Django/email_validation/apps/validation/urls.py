from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index),
    url(r'^add/email/$',views.validate),
    url(r'^success$',views.success),
    url(r'^delete/confirmation/(?P<id>\d+)$',views.delconfirmation),
    url(r'^delete/(?P<id>\d+)$',views.delete)
]
