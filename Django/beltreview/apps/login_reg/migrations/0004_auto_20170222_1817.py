# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 02:17
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login_reg', '0003_auto_20170222_1815'),
    ]

    operations = [
        migrations.AddField(
            model_name='rating',
            name='books',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='login_reg.Book'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='rating',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='users', to='login_reg.User'),
            preserve_default=False,
        ),
    ]
