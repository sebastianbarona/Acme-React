# Generated by Django 3.1.7 on 2021-04-07 05:05

import back.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0003_auto_20210407_0001'),
    ]

    operations = [
        migrations.AlterField(
            model_name='intermediario',
            name='Dueno',
            field=models.CharField(db_column='Dueño', default=back.models.Personas, max_length=200),
        ),
    ]