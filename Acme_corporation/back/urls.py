from django.contrib import admin
from django.urls import path,include
from .views import CarrosDetail,CarrosView,CompraDetail,ComprasView,IntermediarioDetail,IntermediarioView,PersonasDetail,PersonasView,UsuariosDetail,UsuariosView,VentasDetail,VentasView

urlpatterns = [

    path('usuarios',UsuariosView.as_view()),
    path('usuariosEspecificos/<int:pk>',UsuariosDetail.as_view()),

    path('personas',PersonasView.as_view()),
    path('personasEspecificas/<int:pk>',PersonasDetail.as_view()),

    path('carros',CarrosView.as_view()),
    path('carrosEspecificos/<int:pk>',CarrosDetail.as_view()),

    path('ventas',VentasView.as_view()),
    path('ventasEspecificas/<int:pk>',VentasDetail.as_view()),

    path('compras',ComprasView.as_view()),
    path('comprasEspecificas/<int:pk>',CompraDetail.as_view()),

    path('intermediarios',IntermediarioView.as_view()),
    path('intermediariosEspecificos/<int:pk>',IntermediarioDetail.as_view()),


]