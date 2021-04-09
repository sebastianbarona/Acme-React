from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone
# Create your models here.

#Usuarios

class Usuarios(models.Model):

    Status=((('Administrador','Admin')),(('Empleado','Empleado')))

    Username = models.CharField(max_length = 50,primary_key=True)
    Email = models.EmailField(max_length = 254,unique = True)
    Nombres = models.CharField(max_length = 200,blank = True,null = True)
    Apellidos = models.CharField(max_length = 200,blank = True,null = True)
    Imagen_Perfil = models.URLField(max_length = 900)
    Password = models.CharField(max_length=20)
    Password2 = models.CharField(max_length=20)
    Usuario_activo = models.BooleanField(default = True)
    Fecha = models.DateField("Fecha (Año/Mes/Dia)", default = timezone.now)
    Rol_usuario = models.CharField(
        max_length = 20,choices = Status,default = 'Empleado'
    )

    def __str__(self):
       return self.Username    

#_____________________________________________________________________________________________
#Personas

class Personas(models.Model):

    Nombres = models.CharField(max_length = 100,null = False)
    Apellidos = models.CharField(max_length=100,null= False)
    Cedula = models.CharField(primary_key = True,max_length = 40,null = False)
    Telefono = models.CharField(max_length = 20,null = True)
    Fecha = models.DateField("Fecha (Año/Mes/Dia)", default = timezone.now)

 #Metada
    class Meta:
        ordering = ["Cedula"]
    
    def __str__(self):
        return self.Nombres

#_____________________________________________________________________________________________

class Marcas(models.Model):

    Id_Marca = models.AutoField(primary_key = True)
    Nombre = models.CharField(max_length = 50 , null=False)
    Imagen = models.URLField(max_length = 600)
    Fecha = models.DateField("Fecha (Año/Mes/Dia)", default = timezone.now)

 #Metada
    class Meta:
        ordering = ["Nombre"]
    
    def __str__(self):
        return self.Nombre


#Carros
class Carros(models.Model):
    
    StatusCarro=((('Nuevo','Nuevo')),(('Usado','Usado')))

    Status=((('Disponible','Disponible')),(('Vendido','Vendido')))

    Marca = models.ForeignKey(Marcas,on_delete = models.CASCADE)
    Modelo = models.CharField(max_length= 50,null=False)
    Placa = models.CharField(primary_key = True,max_length = 10,null = False)
    Dueño = models.ForeignKey(Personas,on_delete = models.CASCADE,default = "Acme")
    Fechapublicacion = models.DateField()
    Precio = models.IntegerField(null = False)
    Imagen = models.URLField(max_length = 900)
    Estado_Carro = models.CharField(
        max_length = 20,choices = StatusCarro,default = 'Nuevo'
    )

    Estado = models.CharField(
        max_length = 20,choices = Status,default = 'Disponible'
    )

     #Metada
    class Meta:
        ordering = ["Marca"]

    def __str__(self):
        return   self.Placa

#_____________________________________________________________________________________________
#Venta
class Venta(models.Model):

    Id_venta = models.AutoField(primary_key = True)
    Placa = models.ForeignKey(Carros,unique = True , on_delete = models.CASCADE)
    Vendedor = models.ForeignKey(Usuarios,on_delete = models.CASCADE)
    Comprador = models.ForeignKey(Personas,on_delete = models.CASCADE)
    Fecha = models.DateField(default = timezone.now)
    Precio = models.IntegerField()
    
    #Metada
    class Meta:
        ordering = ["Fecha"]

    def __str__(self):
        return str(self.Id_venta)

#_____________________________________________________________________________________________
#Compras
class Compra(models.Model):

    Id_compra = models.AutoField(primary_key = True)
    Placa = models.ForeignKey(Carros, unique = True ,on_delete = models.CASCADE)
    Vendedor = models.ForeignKey(Personas,on_delete = models.CASCADE)
    Comprador = models.ForeignKey(Usuarios,on_delete = models.CASCADE)
    Fecha = models.DateField(default = timezone.now)
    Precio = models.IntegerField()
    
    #Metada
    class Meta:
        ordering = ["Fecha"]

    def __str__(self):
        return  str(self.Id_compra)

class Intermediario(models.Model):
    
    Id_intermediario = models.AutoField(primary_key= True)
    Intermediario = models.ForeignKey(Usuarios,on_delete = models.CASCADE)
    Placa = models.ForeignKey(Carros,unique = True,on_delete = models.CASCADE)
    Comprador = models.ForeignKey(Personas,on_delete = models.CASCADE)
    Dueno = models.CharField(default=Personas,max_length=200,db_column="Dueño")
    Fecha = models.DateField(default = timezone.now)
    Precio = models.IntegerField()
    
    class Meta:
        ordering = ["Fecha"]

    def __str__(self):
        return str(self.Id_intermediario)
