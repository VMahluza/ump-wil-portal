from django.shortcuts import render
# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView

from authentication.models import HostEmployer
from authentication.serializers import HostEmployerSerializer
from .models import JobPost, Company
from .serializers import ApplicationSerializer, JobPostSerializer, SignUpSerializer, InternSerializer, CompanySerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Application, Intern

# List all job posts or create a new job post
class JobPostListCreateView(ListCreateAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
# Retrieve, update, or delete a specific job post
class JobPostDetailView(RetrieveUpdateDestroyAPIView):
    queryset = JobPost.objects.all()
    serializer_class = JobPostSerializer
    lookup_field = 'pk'

    # List all applications or create a new application
class ApplicationListCreateView(ListCreateAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
# Retrieve, update, or delete a specific application
class ApplicationDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    lookup_field = 'pk'

class CompanyListCreateView(ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = Company

class CompanyDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    lookup_field = 'pk'

    # List all applications or create a new application
class InternAccountListCreateView(ListCreateAPIView):
    queryset = Intern.intern.all()
    serializer_class = InternSerializer

class InternAccountDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Intern.intern.all()
    serializer_class = InternSerializer
    lookup_field = 'pk'

class HostEmployerAccounts(ListAPIView):
    queryset = HostEmployer.host_employer.all()
    serializer_class = HostEmployerSerializer

def get_students(request):
    # Hard-coded list of 30 students
    students = [
        {"student_number": "201234567", "first_name": "John", "last_name": "Doe"},
        {"student_number": "201234568", "first_name": "Jane", "last_name": "Smith"},
        {"student_number": "201234569", "first_name": "Michael", "last_name": "Johnson"},
        {"student_number": "220207445", "first_name": "Victor", "last_name": "Mahluza"},
        {"student_number": "201234570", "first_name": "Emily", "last_name": "Davis"},
        {"student_number": "201234571", "first_name": "Chris", "last_name": "Martinez"},
        {"student_number": "201234572", "first_name": "Jessica", "last_name": "Lopez"},
        {"student_number": "201234573", "first_name": "Daniel", "last_name": "Garcia"},
        {"student_number": "201234574", "first_name": "Sophia", "last_name": "Clark"},
        {"student_number": "201234575", "first_name": "James", "last_name": "Rodriguez"},
        {"student_number": "201234576", "first_name": "Olivia", "last_name": "Wilson"},
        {"student_number": "221234577", "first_name": "Liam", "last_name": "Anderson"},
        {"student_number": "221234578", "first_name": "Isabella", "last_name": "Thomas"},
        {"student_number": "221234579", "first_name": "William", "last_name": "Taylor"},
        {"student_number": "221234580", "first_name": "Mia", "last_name": "Moore"},
        {"student_number": "221234581", "first_name": "Benjamin", "last_name": "Jackson"},
        {"student_number": "221234582", "first_name": "Ava", "last_name": "White"},
        {"student_number": "221234583", "first_name": "Elijah", "last_name": "Harris"},
        {"student_number": "221234584", "first_name": "Charlotte", "last_name": "Martin"},
        {"student_number": "221234585", "first_name": "Lucas", "last_name": "Thompson"},
        {"student_number": "221234586", "first_name": "Amelia", "last_name": "Garcia"},
        {"student_number": "201234587", "first_name": "Henry", "last_name": "Martinez"},
        {"student_number": "201234588", "first_name": "Evelyn", "last_name": "Robinson"},
        {"student_number": "201234589", "first_name": "Alexander", "last_name": "Walker"},
        {"student_number": "201234590", "first_name": "Ella", "last_name": "Perez"},
        {"student_number": "201234591", "first_name": "Sebastian", "last_name": "Young"},
        {"student_number": "201234592", "first_name": "Grace", "last_name": "Allen"},
        {"student_number": "221234593", "first_name": "Matthew", "last_name": "King"},
        {"student_number": "221234594", "first_name": "Zoe", "last_name": "Scott"},
        {"student_number": "221234595", "first_name": "David", "last_name": "Green"},
        {"student_number": "221234596", "first_name": "Harper", "last_name": "Baker"}
    ]

    return JsonResponse({"students": students}, safe=False)
class UpdateApplicationStatusView(APIView):
    def patch(self, request, pk):
        try:
            application = Application.objects.get(pk=pk)
        except Application.DoesNotExist:
            return Response({"error": "Application not found"}, status=status.HTTP_404_NOT_FOUND)

        # Update only the status field
        new_status = request.data.get('status', None)
        if new_status:
            application.status = new_status
            application.save()
            return Response(ApplicationSerializer(application).data, status=status.HTTP_200_OK)
        return Response({"error": "Status not provided"}, status=status.HTTP_400_BAD_REQUEST)

class InternAccountsSetUpView(APIView):
    application = None
    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():

            secrete_key = serializer.validated_data.get("secreteKey")
            password = serializer.validated_data.get("password")

            print(secrete_key, password)
            # Find application by secreteKey
            application = get_object_or_404(Application, temporary_secret_key=secrete_key)

            if not application.intern:
                return Response({"message": "No intern linked to this application."},
                                status=status.HTTP_404_NOT_FOUND)
            # Retrieve the intern user associated with the application
            intern_user : Intern = application.intern
            intern_user.set_password(password)
            intern_user.save()

            # Remove temporary secret key after successful sign-up
            application.temporary_secret_key = None
            application.save()

            return Response({"message": "Account created successfully."}, status=status.HTTP_200_OK)