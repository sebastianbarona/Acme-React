from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator 
from django.contrib.auth.password_validation import validate_password
from .models import Usuarios,Carros,Compra,Intermediario,Marcas,Personas,Venta

    
class UsuariosSerializer(serializers.ModelSerializer):
       class Meta:
        model = Usuarios
        fields = ('Username','Email','Nombres','Apellidos','Imagen_Perfil','Password','Password2','Usuario_activo','Rol_usuario','Fecha')
        extra_kwargs = {
            'Nombres': {'required': True},
            'Rol_usuario': {'required': True}
        }

        def validate(self, attrs):

            if attrs['Password'] != attrs['Password2']:
                raise serializers.ValidationError({"Password": "Passwords no coinciden."})
            return attrs

            user.set_password(validated_data['Password'])
            user.save()
            return user

class PersonasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personas
        fields = ('Nombres','Apellidos','Cedula','Telefono','Fecha')

class MarcasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marcas
        fields = ('Id_Marca','Nombre','Imagen','Fecha')

class CarrosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Carros
        fields = ('Marca','Placa','Modelo',
                'Dueño','Fechapublicacion','Precio',
                'Imagen','Estado_Carro','Estado')

class VentaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Venta
        fields = ('Id_venta','Placa','Vendedor','Comprador','Fecha','Precio')

class CompraSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Compra
        fields = ('Id_compra','Placa','Vendedor','Comprador','Fecha','Precio')

class IntermediarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Intermediario
        fields = ('Id_intermediario','Intermediario','Placa','Comprador','Dueno','Fecha','Precio')

