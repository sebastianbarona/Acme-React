# Generated by Django 3.1.7 on 2021-03-01 05:59

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Carros',
            fields=[
                ('Modelo', models.CharField(max_length=50)),
                ('Placa', models.CharField(max_length=10, primary_key=True, serialize=False)),
                ('Fechapublicacion', models.DateField()),
                ('Precio', models.IntegerField()),
                ('Imagen', models.URLField(max_length=900)),
                ('Estado_Carro', models.CharField(choices=[('Nuevo', 'Nuevo'), ('Usado', 'Usado')], default='Nuevo', max_length=20)),
                ('Estado', models.CharField(choices=[('Disponible', 'Dis'), ('Vendido', 'Ven')], default='Disponible', max_length=20)),
            ],
            options={
                'ordering': ['Marca'],
            },
        ),
        migrations.CreateModel(
            name='Marcas',
            fields=[
                ('Id_Marca', models.AutoField(primary_key=True, serialize=False)),
                ('Nombre', models.CharField(max_length=50)),
                ('Imagen', models.URLField(max_length=600)),
                ('Fecha', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha (Año/Mes/Dia)')),
            ],
            options={
                'ordering': ['Nombre'],
            },
        ),
        migrations.CreateModel(
            name='Personas',
            fields=[
                ('Nombres', models.CharField(max_length=100)),
                ('Apellidos', models.CharField(max_length=100)),
                ('Cedula', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('Telefono', models.CharField(max_length=20, null=True)),
                ('Fecha', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha (Año/Mes/Dia)')),
            ],
            options={
                'ordering': ['Cedula'],
            },
        ),
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Username', models.CharField(max_length=50, unique=True)),
                ('Email', models.EmailField(max_length=254, unique=True)),
                ('Nombres', models.CharField(blank=True, max_length=200, null=True)),
                ('Apellidos', models.CharField(blank=True, max_length=200, null=True)),
                ('Imagen_Perfil', models.URLField(max_length=900)),
                ('Password', models.CharField(max_length=20)),
                ('Password2', models.CharField(max_length=20)),
                ('Usuario_activo', models.BooleanField(default=True)),
                ('Fecha', models.DateField(default=django.utils.timezone.now, verbose_name='Fecha (Año/Mes/Dia)')),
                ('Rol_usuario', models.CharField(choices=[('Administrador', 'Admin'), ('Empleado', 'Empleado')], default='Empleado', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('Id_venta', models.AutoField(primary_key=True, serialize=False)),
                ('Fecha', models.DateField(default=django.utils.timezone.now)),
                ('Precio', models.IntegerField()),
                ('Comprador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.personas')),
                ('Placa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.carros')),
                ('Vendedor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.usuarios')),
            ],
            options={
                'ordering': ['Fecha'],
            },
        ),
        migrations.CreateModel(
            name='Intermediario',
            fields=[
                ('Id_intermediario', models.AutoField(primary_key=True, serialize=False)),
                ('Fecha', models.DateField(default=django.utils.timezone.now)),
                ('Precio', models.IntegerField()),
                ('Comprador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.personas')),
                ('Intermediario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.usuarios')),
                ('Placa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.carros')),
            ],
            options={
                'ordering': ['Fecha'],
            },
        ),
        migrations.CreateModel(
            name='Compra',
            fields=[
                ('Id_compra', models.AutoField(primary_key=True, serialize=False)),
                ('Fecha', models.DateField(default=django.utils.timezone.now)),
                ('Precio', models.IntegerField()),
                ('Comprador', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.usuarios')),
                ('Placa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.carros')),
                ('Vendedor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.personas')),
            ],
            options={
                'ordering': ['Fecha'],
            },
        ),
        migrations.AddField(
            model_name='carros',
            name='Dueño',
            field=models.ForeignKey(default='Acme', on_delete=django.db.models.deletion.CASCADE, to='back.personas'),
        ),
        migrations.AddField(
            model_name='carros',
            name='Marca',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='back.marcas'),
        ),
    ]
