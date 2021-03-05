from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator 
from django.contrib.auth.password_validation import validate_password
from .models import Usuarios,Carros,Compra,Intermediario,Marcas,Personas,Venta

    
class UsuariosSerializer(serializers.ModelSerializer):
    Email = serializers.EmailField(
        required = True,
        validators=[UniqueValidator(queryset=Usuarios.objects.all())]
    )

    Password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    Password2 = serializers.CharField(write_only=True, required=True, validators=[validate_password])

   
    class Meta:
        model = Usuarios
        fields = ('pk','Username','Email','Nombres','Apellidos','Imagen_Perfil','Password','Password2','Usuario_activo','Rol_usuario','Fecha')
        extra_kwargs = {
            'Nombres': {'required': True},
            'Rol_usuario': {'required': True}
        }

    def validate(self, attes):
        if attrs['Password'] != attrs['Password2']:
            raise serializers.ValidationError({"Password": "Passwords no coinciden."})
        return attrs


    def create(self, validated_data):
        user = Usuarios.objects.create(
            Username= validated_data['Username'],
            Email = validated_data['Email'],
            Nombres = validated_data['Nombres'],
            Apellidos = validated_data['Apellidos'],
            Imagen_Perfil = validated_data['Imagen_Perfil'],
            Usuario_activo = validated_data['Usuario_activo'],
            Rol_usuario = validated_data['Rol_usuario'],
            Fecha = validated_data['Fecha']
        )

        user.set_password(validated_data['Password'])
        user.save()
        return user

class PersonasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personas
        fields = ('pk','Nombres','Apellidos','Cedula','Telefono','Fecha')

class MarcasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Marcas
        fields = ('pk','Id_Marca','Nombre','Imagen','Fecha')

class CarrosSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Carros
        fields = ('pk','Marca','Placa',
                'Dueño','Fechapublicacion','Precio',
                'Imagen','Estado_Carro','Estado')

class VentaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Venta
        fields = ('pk','Id_venta','Placa','Marca','Vendedor','Comprador','Fecha','Precio')

class CompraSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Compra
        fields = ('pk','Id_compra','Placa','Marca','Vendedor','Comprador','Fecha','Precio')

class IntermediarioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Intermediario
        fields = ('pk','Id_intermediario','Intermediario','Placa','Marca','Comprador','Dueño','Fecha','Precio')

