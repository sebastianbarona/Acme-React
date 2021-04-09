from django.shortcuts import render
from django.http import HttpResponse,HttpRequest
from back.models import Carros,Compra,Personas,Usuarios,Venta,Intermediario,Marcas
from .serializers import CarrosSerializer,CompraSerializer,IntermediarioSerializer,MarcasSerializer,PersonasSerializer,UsuariosSerializer,VentaSerializer
from django.views.generic import CreateView,ListView,DeleteView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from rest_framework import generics
from rest_framework.views import APIView, status
from rest_framework.response import Response
from reportlab.pdfgen import canvas
from io import BytesIO
from reportlab.lib.pagesizes import letter, landscape,A4
from reportlab.platypus import TableStyle,Table,SimpleDocTemplate,Spacer,Paragraph
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle, TA_CENTER
from reportlab.lib.units import inch, mm
from django.views.generic import View,TemplateView,ListView,DeleteView,UpdateView,CreateView
from django.contrib import messages

#////////////////////////////////////////////////////////USUARIO/////////////////////////////////////////////////////////////////////////
 #Usuarios

class UsuariosView(APIView):
    def get(self, request, format=None):
        if request.method == 'GET':
            data = []
            nextPage = 1
            previousPage = 1
            usuarios_list = Usuarios.objects.all()
            page = request.GET.get('page',1)
            paginator = Paginator(usuarios_list,5)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
                
            serializer = UsuariosSerializer(data,context={'request': request} ,many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()
                
            return Response( {'data':serializer.data ,'count': paginator.count})

        # POST - Crea un nuevo Usuario 
    def post(self, request):
        if request.method == 'POST':
            serializer = UsuariosSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UsuariosDetail(APIView):
#GET - Saber de un usuario
    def get(self,request, Username):
        try:
            usuario = Usuarios.objects.get(Username=Username)
        except Usuarios.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = UsuariosSerializer(usuario, context={'request': request})
            return Response(serializer.data)

#PUT - Edita un usuario
    def put(self,request,Username):
        try:
            usuario = Usuarios.objects.get(Username=Username)
        except Usuarios.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'PUT':
            serializer = UsuariosSerializer(usuario, data=request.data,context={'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE - Elimina un usuario
    def delete(self,request,Username): 
        try:
            usuario = Usuarios.objects.get(Username = Username)
        except Usuarios.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            usuario.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
 

#////////////////////////////////////////////////////////PERSONAS/////////////////////////////////////////////////////////////////////////

class PersonasView(APIView):

# GET - Devuelve todos los clientes
    def get(self, request, format=None):
        if request.method == 'GET':
            data = []
            nextPage = 1
            previousPage = 1
            personas_list = Personas.objects.all()
            page = request.GET.get('page',1)
            paginator = Paginator(personas_list,5)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
                
            serializer = PersonasSerializer(data,context={'request': request} ,many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()
                
            return Response( {'data':serializer.data,'count': paginator.count})

# POST - Crea un nuevo cliente 
    def post(self, request):
        if request.method == 'POST':
            serializer = PersonasSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PersonasDetail(APIView):
#GET - Saber de un cliente en especifico
    def get(self,request, Cedula):
        try:
            persona = Personas.objects.get(Cedula=Cedula)
        except Personas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = PersonasSerializer(persona, context={'request': request})
            return Response(serializer.data)

#PUT - Edita un cliente
    def put(self,request,Cedula):
        try:
            persona = Personas.objects.get(Cedula=Cedula)
        except Personas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'PUT':
            serializer = PersonasSerializer(persona, data=request.data,context={'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE - Elimina un cliente
    def delete(self,request,Cedula): 
        try:
            persona = Personas.objects.get(Cedula=Cedula)
        except Personas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            persona.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

#///////////////////////////////////////////////MARCAS///////////////////////////////////////

class MarcasView(APIView):

# GET - Devuelve todas las Marcas
    def get(self, request, format=None):
        if request.method == 'GET':
            data = []
            nextPage = 1
            previousPage = 1
            marcas_list = Marcas.objects.all()
            page = request.GET.get('page',1)
            paginator = Paginator(marcas_list,50)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
                
            serializer = MarcasSerializer(data,context={'request': request} ,many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()
                
            return Response( { 'data':serializer.data , 'count': paginator.count } )

# POST - Crea una nueva Marca 
    def post(self, request):
        if request.method == 'POST':
            serializer = MarcasSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MarcasDetail(APIView):
#GET - Saber de una Marca en especifico
    def get(self,request, Id_Marca):
        try:
            marcas = Marcas.objects.get(Id_Marca=Id_Marca)
        except Marcas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = MarcasSerializer(marcas, context={'request': request})
            return Response(serializer.data)

#PUT - Edita una Marca
    def put(self,request,Id_Marca):
        try:
            marcas = Marcas.objects.get(Id_Marca=Id_Marca)
        except Marcas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'PUT':
            serializer = MarcasSerializer(marcas, data=request.data,context={'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE - Elimina una Marca
    def delete(self,request,Id_Marca): 
        try:
            marcas = Marcas.objects.get(Id_Marca=Id_Marca)
        except Marcas.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            marcas.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)


#////////////////////////////////////////////////////////CARROS/////////////////////////////////////////////////////////////////////////
class CarrosView(APIView):
    def get(self, request, format=None):
        if request.method == 'GET':
            data = []
            nextPage = 1
            previousPage = 1
            carros_list = Carros.objects.all()
            page = request.GET.get('page',1)
            paginator = Paginator(carros_list,5)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
                
            serializer = CarrosSerializer(data,context={'request': request} ,many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()
                
            return Response({'data':serializer.data , 'count': paginator.count})

# POST - Crea un nuevo Carro    
    def post(self, request):
        if request.method == 'POST':
            serializer = CarrosSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CarrosDetail(APIView):
#GET - Saber de un Carro en especifico
    def get(self,request,Placa):
        try:
            carro = Carros.objects.get(Placa=Placa)
        except Carros.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = CarrosSerializer(carro, context={'request': request})
            return Response(serializer.data)

#PUT - Editar un Carro
    def put(self,request,Placa):
        try:
            carro = Carros.objects.get(Placa=Placa)
        except Carros.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'PUT':
            serializer = CarrosSerializer(carro, data=request.data,context={'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE - Elimina un Carro
    def delete(self,request,Placa): 
        try:
            carro = Carros.objects.get(Placa=Placa)
        except Carros.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            carro.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

#////////////////////////////////////////////////////////VENTAS/////////////////////////////////////////////////////////////////////////

class VentasView(APIView):

# GET - Devuelve todos las ventas
    def get(self, request, format=None):
        if request.method == 'GET':
            data = []
            nextPage = 1
            previousPage = 1
            ventas_list = Venta.objects.all()
            page = request.GET.get('page',1)
            paginator = Paginator(ventas_list,5)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
                
            serializer = VentaSerializer(data,context={'request': request} ,many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()                
            return Response({ 'data':serializer.data, 'count': paginator.count} )

# POST - Crea un nueva venta    
    def post(self, request):
        if request.method == 'POST':
            serializer = VentaSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            

class VentasDetail(APIView):
#GET - Saber de una venta en especifico
    def get(self,request, Id_venta):
        try:
            venta = Venta.objects.get(Id_venta=Id_venta)
        except Venta.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = VentaSerializer(venta, context={'request': request})
            return Response(serializer.data)

#PUT - Edita una venta
    def put(self,request,Id_venta):
        try:
            venta = Venta.objects.get(Id_venta=Id_venta)
        except Venta.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'PUT':
            serializer = VentaSerializer(venta, data=request.data,context={'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE - Elimina una venta

    def delete(self,request,Id_venta): 
        try:
            venta = Venta.objects.get(Id_venta = Id_venta)
        except Venta.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            venta.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

#////////////////////////////////////////////////////////COMPRAS/////////////////////////////////////////////////////////////////////////

class ComprasView(APIView):

# GET - Devuelve todos las compras

    def get(self, request, format=None):
        if request.method == 'GET':
            data = []
            nextPage = 1
            previousPage = 1
            compras_list = Compra.objects.all()
            page = request.GET.get('page',1)
            paginator = Paginator(compras_list,5)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
                
            serializer = CompraSerializer(data,context={'request': request} ,many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()
                
            return Response({ 'data':serializer.data,'count': paginator.count } )

# POST - Crea una nueva Compra    
    def post(self, request):
        if request.method == 'POST':
            serializer = CompraSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompraDetail(APIView):
#GET - Saber de una Compra en especifico
    def get(self,request, Id_compra):
        try:
            compra = Compra.objects.get(Id_compra=Id_compra)
        except Compra.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = CompraSerializer(compra, context={'request': request})
            return Response(serializer.data)

#PUT - Edita una Compra
    def put(self,request,Id_compra):
        try:
            compra = Compra.objects.get(Id_compra=Id_compra)
        except Compra.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'PUT':
            serializer = CompraSerializer(compra, data=request.data,context={'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE - Elimina una Compra
    def delete(self,request,Id_compra): 
        try:
            compra = Compra.objects.get(Id_compra=Id_compra)
        except Compra.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            compra.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

#////////////////////////////////////////////////////////Intermediario/////////////////////////////////////////////////////////////////////////

class IntermediarioView(APIView):

# GET - Devuelve todos los Intermediarios
    def get(self, request, format=None):
        if request.method == 'GET':
            data = []
            nextPage = 1
            previousPage = 1
            intermediarios_list = Intermediario.objects.all()
            page = request.GET.get('page',1)
            paginator = Paginator(intermediarios_list,5)
            try:
                data = paginator.page(page)
            except PageNotAnInteger:
                data = paginator.page(1)
            except EmptyPage:
                data = paginator.page(paginator.num_pages)
                
            serializer = IntermediarioSerializer(data,context={'request': request} ,many=True)
            if data.has_next():
                nextPage = data.next_page_number()
            if data.has_previous():
                previousPage = data.previous_page_number()
                
            return Response({'data':serializer.data,'count': paginator.count})

# POST - Crea un nuevo Intermediario
    def post(self, request):
        if request.method == 'POST':
            serializer = IntermediarioSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class IntermediarioDetail(APIView):
#GET - Saber de una Compra en especifico
    def get(self,request, Id_intermediario):
        try:
            intermediario = Intermediario.objects.get(Id_intermediario=Id_intermediario)
        except Intermediario.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'GET':
            serializer = IntermediarioSerializer(intermediario, context={'request': request})
            return Response(serializer.data)

#PUT - Edita una Compra
    def put(self,request,Id_intermediario):
        try:
            intermediario = Intermediario.objects.get(Id_intermediario=Id_intermediario)
        except Intermediario.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'PUT':
            serializer = IntermediarioSerializer(intermediario, data=request.data,context={'request':request})
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#DELETE - Elimina una venta
    def delete(self,request,Id_intermediario): 
        try:
            intermediario = Intermediario.objects.get(Id_intermediario=Id_intermediario)
        except Intermediario.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        if request.method == 'DELETE':
            intermediario.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

#////////////////////////////////////////////////////////LOGIN/////////////////////////////////////////////////////////////////////////

class Login(TemplateView):
    def get(self,request):
        usuarios = Usuarios.objects.all()
        return render(request,self.template_name,{'shelf':usuarios}) 

def verificacion(request,Username):
        Username = str (Username)
        try:
            usuario_sel = Usuarios.objects.get(Username = Username)

        except  Usuarios.DoesNotExist:
            return render(request)
            
#////////////////////////////////////////////////////////Report/////////////////////////////////////////////////////////////////////////

class ReporteVenta(object):

    def __init__(self):
        self.buf = BytesIO()

    def run(self):
        self.doc = SimpleDocTemplate(self.buf)
        self.story = []
        self.encabezado()
        self.crearTabla()
        self.doc.build(self.story, onFirstPage=self.numeroPagina, 
            onLaterPages=self.numeroPagina)
        pdf = self.buf.getvalue()
        self.buf.close()
        return pdf

    def encabezado(self):
        self.story.append(Spacer(1,0.5*inch))
        p = Paragraph("Reporte Ventas", self.estiloPC())
        self.story.append(p)
        self.story.append(Spacer(1,0.5*inch))

    def crearTabla(self):
        data = [["Placa","Empleado","Cliente","Fecha","Precio"]] \
            +[[x.Placa, x.Vendedor, x.Comprador, x.Fecha, x.Precio] 
                for x in Venta.objects.all() ]
                            
        style = TableStyle([
            ('GRID', (0,0), (-1,-1), 0.25, colors.black),
            ('ALIGN',(0,0),(-1,-1),'CENTER'),
            ('VALIGN',(0,0),(-1,-1),'MIDDLE')])

        t = Table(data)
        t.setStyle(style)
        self.story.append(t)
    

    def estiloPC(self):
        return ParagraphStyle(name="centrado", alignment=TA_CENTER)

    def numeroPagina(self,canvas,doc):
        num = canvas.getPageNumber()
        text = "Pagina %s" % num
        canvas.drawRightString(200*mm, 20*mm, text)

    def reporte_ventas(request):
        response = HttpResponse(content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="ventas.pdf"'
        r = ReporteVenta()
        response.write(r.run())
        return response
