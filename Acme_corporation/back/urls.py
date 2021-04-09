from django.contrib import admin
from django.urls import path,include
from .views import CarrosDetail,CarrosView,CompraDetail,ComprasView,IntermediarioDetail,IntermediarioView,PersonasDetail,PersonasView
from .views import UsuariosDetail,UsuariosView,VentasDetail,VentasView,MarcasDetail,MarcasView

urlpatterns = [

    path('usuarios/',UsuariosView.as_view()),
    path('usuarios/<str:Username>',UsuariosDetail.as_view()),

    path('personas/',PersonasView.as_view()),
    path('personas/<int:Cedula>',PersonasDetail.as_view()),

    path('marcas/',MarcasView.as_view()),
    path('marcas/<int:Id_Marca>',MarcasDetail.as_view()),

    path('carros/',CarrosView.as_view()),
    path('carros/<str:Placa>',CarrosDetail.as_view()),

    path('ventas/',VentasView.as_view()),
    path('ventas/<int:Id_venta>',VentasDetail.as_view()),

    path('compras/',ComprasView.as_view()),
    path('compras/<int:Id_compra>',CompraDetail.as_view()),

    path('intermediarios/',IntermediarioView.as_view()),
    path('intermediarios/<int:Id_intermediario>',IntermediarioDetail.as_view()),


]