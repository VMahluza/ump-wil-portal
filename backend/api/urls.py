from django.urls import path
from .views import JobPostListCreateView, JobPostDetailView, ApplicationListCreateView, ApplicationDetailView, get_students

urlpatterns = [
    path('jobposts/', JobPostListCreateView.as_view(), name='jobpost-list-create'),
    path('jobposts/<int:pk>/', JobPostDetailView.as_view(), name='jobpost-detail'),
    
    path('applications/', ApplicationListCreateView.as_view(), name='application-list-create'),
    path('applications/<int:pk>/', ApplicationDetailView.as_view(), name='application-detail'),
    path('students/registered', get_students, name='get_students'),
]
