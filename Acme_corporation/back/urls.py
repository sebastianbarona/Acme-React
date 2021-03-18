from django.contrib import admin
from django.urls import path,include
from .views import CarrosDetail,CarrosView,CompraDetail,ComprasView,IntermediarioDetail,IntermediarioView,PersonasDetail,PersonasView,UsuariosDetail,UsuariosView,VentasDetail,VentasView

urlpatterns = [

    path('usuarios/',UsuariosView.as_view()),
    path('usuarios/<int:pk>',UsuariosDetail.as_view()),

    path('personas/',PersonasView.as_view()),
    path('personas/<int:Cedula>',PersonasDetail.as_view()),

    path('carros/',CarrosView.as_view()),
    path('carros/<int:pk>',CarrosDetail.as_view()),

    path('ventas/',VentasView.as_view()),
    path('ventas/<int:pk>',VentasDetail.as_view()),

    path('compras/',ComprasView.as_view()),
    path('compras/<int:pk>',CompraDetail.as_view()),

    path('intermediarios/',IntermediarioView.as_view()),
    path('intermediarios/<int:pk>',IntermediarioDetail.as_view()),


]