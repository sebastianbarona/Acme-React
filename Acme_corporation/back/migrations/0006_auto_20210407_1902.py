# Generated by Django 3.1.7 on 2021-04-08 00:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0005_auto_20210407_1900'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compra',
            name='Placa',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.carros', unique=True),
        ),
        migrations.AlterField(
            model_name='venta',
            name='Placa',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.carros', unique=True),
        ),
    ]