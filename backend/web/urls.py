from .views import HomeView, ApplyingView, UpdateApplicationStatus
from django.urls import path

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('application/<int:id>', ApplyingView.as_view(), name='application'),
    path('application/status-update', UpdateApplicationStatus.as_view(), name='update-application-status'),
]