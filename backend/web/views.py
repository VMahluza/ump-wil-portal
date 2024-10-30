from django.http import HttpResponseForbidden
from django.shortcuts import render, get_object_or_404
from django.template.context_processors import request

from api.forms import ApplicationStatusForm
from api.models import JobPost 
from django.views.generic.base import TemplateView
from django.views.generic import CreateView, UpdateView
from django.urls import reverse_lazy
from api.models import JobPost, Application
from .forms import ApplicationForm
# Create your views here.
class HomeView(TemplateView):
    template_name = "web/pages/home/index.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "Home"
        job_posts = JobPost.objects.all()
        context["job_posts"] = job_posts[:6]  # Limit to 5 latest job posts
        return context
# Create your views here.
class ApplyingView(CreateView):
    model = Application
    form_class = ApplicationForm
    template_name = "web/pages/application/index.html"
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        jobpost_id = int(self.kwargs["id"])
        context["title"] = "Application Process"
        return context
    
    def form_invalid(self, form):
        print("Form Is Invalid")
        print("Form errors: ", form.errors)  # This prints form errors to the console (optional)
        return super().form_invalid(form)  

    def form_valid(self, form):
        print("Form Is Valid")
        jobpost_id = int(self.kwargs["id"])
        jobpost = JobPost.objects.get(id=jobpost_id)
        form.instance.jobpost = jobpost
        return super().form_valid(form)
    def get_success_url(self):
        return reverse_lazy("home")

class UpdateApplicationStatus(TemplateView):
    template_name = "web/pages/application/update-status.html"

    def get_context_data(self, **kwargs):
        # Get the existing context data and add custom context for application and questionnaire
        context = super().get_context_data(**kwargs)
        return context

    def get_object(self, queryset=None):
        # Fetch the application based on the ID in the URL
        temp_secrete_key = self.request.GET.get("secrete_key")
        print(temp_secrete_key)
        return get_object_or_404(Application, id=3)

    def get(self, request, *args, **kwargs):
        def get(self, request, *args, **kwargs):
            # Access the 'secrete_key' query parameter
            secret_key = self.request.GET.get("secrete_key")
            if not secret_key:
                return HttpResponseForbidden("Secret key is required.")

            # Additional logic to verify the secret key, if needed
            # For example, retrieve the application based on the secret key
            application = get_object_or_404(Application, temporary_secret_key=secret_key)
            if application:
                application.status = Application.Status.ACKNOWLEDGED
            return super().get(request, *args, **kwargs)
