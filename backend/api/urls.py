from django.urls import path
from .views import JobPostListCreateView, JobPostDetailView, ApplicationListCreateView, ApplicationDetailView, \
    get_students, UpdateApplicationStatusView, InternAccountsSetUpView

urlpatterns = [
    path('jobposts/', JobPostListCreateView.as_view(), name='jobpost-list-create'),
    path('jobposts/<int:pk>/', JobPostDetailView.as_view(), name='jobpost-detail'),
    
    path('applications/', ApplicationListCreateView.as_view(), name='application-list-create'),
    path('applications/<int:pk>/', ApplicationDetailView.as_view(), name='application-detail'),
    path('students/registered', get_students, name='get_students'),
    path('applications/<int:pk>/status/', UpdateApplicationStatusView.as_view(), name='update-application-status'),

    path("new/intern", InternAccountsSetUpView.as_view(), name="intern-account-setup"),
]
