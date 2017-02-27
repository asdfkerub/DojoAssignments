from django.conf.urls import url
from . import views

urlpatterns=[
    url(r'^$',views.index),
    url(r'^fuckitall$',views.fuckitall),
    url(r'^signin$',views.signin),
    url(r'^signin/process$',views.signin_process),
    url(r'^logout$',views.logout),
    url(r'^register$',views.register),
    url(r'^register/process$',views.register_process),
    url(r'^dashboard/admin$',views.dash_admin),
    url(r'^dashboard$',views.dash),
    url(r'^users/new$',views.add_user),
    url(r'^users/new/process$',views.add_user_process),
    url(r'^users/edit/(?P<user_id>\d+)$',views.edit_user),
    url(r'^users/edit/process$',views.edit_process),
    url(r'^users/edit/password$',views.change_password),
    url(r'^user/remove/(?P<user_id>\d+)$',views.user_remove),
    url(r'^user/remove/(?P<user_id>\d+)/confirm$',views.user_remove_confirm),
    url(r'^users/show/(?P<user_id>\d+)$',views.user_show),
    url(r'^user/edit$',views.user_edit),
    url(r'^user/edit/process$',views.user_edit_process),
    url(r'^user/edit/password',views.user_edit_password),
    url(r'^user/edit/description$',views.user_description),
    url(r'^post/message/(?P<user_id>\d+)$',views.add_message),
    url(r'^post/comment/(?P<message_id>\d+)$',views.add_comment),
]
