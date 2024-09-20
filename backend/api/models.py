from django.db import models
from authentication.models import Intern

# Create your models here.

class JobPost(models.Model):
    name = models.CharField(max_length=255)
    descripton = models.CharField(max_length=255)
    closing_date = models.DateField()

def cv_directory_path(instance, filename):
    return "documents/cv/{0}/{1}".format(instance.student_number, filename)
def qualifications_directory_path(instance, filename):
    return "documents/qualifications/{0}/{1}".format(instance.student_number, filename)
def other_documents_directory_path(instance, filename):
    return "documents/other/{0}/{1}".format(instance.student_number, filename)
class Application(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    student_number = models.CharField(max_length=9)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=255)
    resume_cv = models.FileField(blank=True, null=True, upload_to=cv_directory_path)
    qualifications = models.FileField(blank=True, null=True, upload_to=qualifications_directory_path)
    other_documents = models.FileField(blank=True, null=True, upload_to=other_documents_directory_path)
    year_of_study = models.DateField()
    class Gender(models.TextChoices):
        MALE = "MALE", "Male"
        FEMALE = "FEMALE", "Female"

    gender = models.CharField(
        max_length=50, choices=Gender.choices, null=True, blank=True
    )
    job_post = models.ForeignKey(
        JobPost,
        on_delete=models.CASCADE,
        related_name="applications",
        null=True,
        blank=True,
    )
    intern = models.ForeignKey(
        Intern,
        on_delete=models.CASCADE,
        related_name="applications",
        null=True,
        blank=True,
        )
    class Status(models.TextChoices):
        ADMITTED = "ADMITTED", "Admitted"  # Accepted
        PENDING = "PENDING", "Pending"
        REJECTED = "REJECTED", "Rejected"
        ACKNOWLEDGED = (
            "ACKNOWLEDGED",
            "Acknowledged",
        )  # Used by Intern once a button is clicked
    base_status = Status.PENDING
    status = models.CharField(
        default=Status.PENDING,
        max_length=50,
        choices=Status.choices,
        null=True,
        blank=True,
    )