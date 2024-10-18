from .views import HomeView, ApplyingView
from django.urls import path

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('application/<int:id>', ApplyingView.as_view(), name='application'),
]