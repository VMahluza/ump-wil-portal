from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from .models import JobPost, Application
from .serializers import ApplicationSerializer, JobPostSerializer

# List all job posts or create a new job post
class JobPostListCreateView(generics.ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer

# Retrieve, update, or delete a specific job post
class JobPostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    lookup_field = 'pk'

    # List all applications or create a new application
class ApplicationListCreateView(generics.ListCreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

# Retrieve, update, or delete a specific application
class ApplicationDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    lookup_field = 'pk'
