from django.shortcuts import render
from api.models import JobPost 
from django.views.generic.base import TemplateView
from django.views.generic import CreateView
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
    def form_valid(self, form):
        print("Form Is Valid")
        jobpost_id = int(self.kwargs["id"])
        jobpost = JobPost.objects.get(id=jobpost_id)
        form.instance.jobpost = jobpost
        return super().form_valid(form)
    def get_success_url(self):
        return reverse_lazy("home")