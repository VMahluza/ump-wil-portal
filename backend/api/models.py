import uuid

from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from .emailservices import ApplicationEmailService
from authentication.models import Intern, HostEmployer


class JobPost(models.Model):
    objects = None
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
        on_delete=models.SET_NULL,
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

    # Temporary Secret Key field
    temporary_secret_key = models.CharField(
        max_length=36,  # 36 characters for a UUID-based key
        blank=True,
        null=True,
        help_text="A temporary secret key for verification purposes.",
        default=None
    )

    def generate_secret_key(self):
        """Generates a unique temporary secret key."""
        self.temporary_secret_key = str(uuid.uuid4())
        self.save()


    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.status}"

def  create_intern_user(application):
    """
    This function creates an Intern Account Using Application Information
    """
    if application.temporary_secret_key and not application.intern_id:
        new_intern = Intern.objects.create_user(
            first_name = application.first_name,
            last_name = application.last_name,
            username = f"{application.student_number}@ump.ac.za",
            email = f"{application.student_number}@ump.ac.za",
            role = Intern.Role.INTERN
        )
        new_intern.set_password(application.temporary_secret_key)
        print("new Intern ID:", new_intern.id)
        print("Application ID", application.id)
        application_with_user = Application.objects.get(id=application.id)
        print("Found Application:", application_with_user)
        application_with_user.intern_id = new_intern.id
        print("Application Now to new Intern", application_with_user.intern_id)
        new_intern.save()
        application_with_user.save()
        print("Application Saved successfully")

@receiver(post_save, sender=Application)
def change_of_application_status(sender, instance : Application, created, **kwargs):
    email_service = ApplicationEmailService(instance)
    if created:
        email_service.send_welcome_email()

    if instance.status == Application.Status.ADMITTED:
        if instance.temporary_secret_key is None:
            instance.generate_secret_key()
            email_service.send_admission_email()

    if instance.status == Application.Status.ACKNOWLEDGED:
        print(instance.temporary_secret_key)
        print(instance.intern_id)
        if instance.intern_id is None:
            create_intern_user(instance)
        email_service.send_acknowledge_success_email()

    if instance.status == Application.Status.REJECTED:
        email_service.send_rejection_email()

    if instance.status == Application.Status.PENDING:
        if instance.temporary_secret_key is not None:
            instance.temporary_secret_key = None
            instance.save()


class Company(models.Model):
    host_employer = models.ForeignKey(
        HostEmployer,
        on_delete=models.SET_NULL,
        related_name="companies",
        null=True,
        blank=True,
    )

    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    closing_date = models.DateField()

