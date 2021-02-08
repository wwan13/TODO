from django import urls
from django.urls import path, include

urlpatterns = [
    path('auth/',include('rest_auth.urls')), 
    path('auth/registration/', include('rest_auth.registration.urls')),
]