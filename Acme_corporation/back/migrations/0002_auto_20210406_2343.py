# Generated by Django 3.1.7 on 2021-04-07 04:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='intermediario',
            name='Dueno',
            field=models.CharField(db_column='Dueño', max_length=200, verbose_name='<django.db.models.fields.related_descriptors.ForwardManyToOneDescriptor object at 0x000001FD4472E670>'),
        ),
    ]
