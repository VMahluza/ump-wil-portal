from django.shortcuts import render
from .models import User, Intern
from rest_framework.generics import CreateAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
class LogoutView(APIView):
    def get(self, request):
        try:
            # Get the refresh token from the request
            refresh_token = request.data.get('refresh_token')
            if refresh_token:
                # Decode the token
                token = RefreshToken(refresh_token)
                # Blacklist the token
                token.blacklist()
            return Response({"detail": "Successfully logged out."}, status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response({"detail": str(e)}, status=status.HTTP_400_BAD_REQUEST)

# List all job posts or create a new job post
