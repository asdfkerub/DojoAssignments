from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$',views.index, name = 'course_index'),
    url(r'^add/$',views.add, name = 'add_course'),
    url(r'^course/(?P<id>\d+)$/remove/',views.confirmation, name = 'confirm_course'),
    url(r'^course/remove/confirmed/(?P<id>\d+)$',views.remove, name = 'remove_course'),
    url(r'^admin/$',views.admin, name = 'admin'),
    url(r'^add/usertocourse/$',views.to_course, name='to_course')
]
