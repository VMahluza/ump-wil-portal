"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from authentication.views import CreateUserView, CurrentUserView, LogoutView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf import settings
from django.middleware.csrf import get_token
from django.http import JsonResponse
from django.conf.urls.static import static

def csrf_token_view(request):
    token = get_token(request)
    return JsonResponse({'csrfToken': token})

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # User registration endpoint
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path('api/user/me', CurrentUserView.as_view(), name="me"),
    path('api/user/logout', LogoutView.as_view(), name="sign_out"),


    # JWT token endpoints
    path("api-auth/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    
    # Rest framework endpoints for authentication
    path("api-auth/", include("rest_framework.urls")),
    # 
    path('csrf-token/', csrf_token_view, name='csrf_token'),

    # APP API
    path('api/app/', include('api.urls')),

    path('', include('web.urls'), name='web-urls'),

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:  # Dev only
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
