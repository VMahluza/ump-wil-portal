from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django.db.models.signals import post_save
from django.dispatch import receiver
# from django.core.mail import send_mail

# Create your models here.

# By default the user is admin
class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = "ADMIN", "Admin"
        INTERN = "INTERN", "Intern"
        COORDINATOR = "COORDINATOR", "Coordinator"
        HOST_EMPLOYER = "HOST_EMPLOYER", "Host Employer"

    # The user will be assumed to be admin on add user
    base_role = Role.ADMIN
    role = models.CharField(max_length=50, choices=Role.choices, default=base_role)

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.username})"

# START OF INTERN
class InternManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(role=User.Role.INTERN)

class Intern(User):
    base_role = User.Role.INTERN
    intern = InternManager()
    class Meta:
        proxy = True

@receiver(post_save, sender=Intern)
def create_intern_profile_and_enrollment(sender, instance, created, **kwargs):
    user = instance
    if created and instance.role == "INTERN":
        print("Intern Profile created successfully:")

# END OF INTERN

# START OF HOST_EMPLOYER
class HostEmployerManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(role=User.Role.HOST_EMPLOYER)

class HostEmployer(User):
    base_role = User.Role.HOST_EMPLOYER
    host_employer = HostEmployerManager()
    class Meta:
        proxy = True

@receiver(post_save, sender=HostEmployer)
def create_host_emp_profile_and_enrollment(sender, instance, created, **kwargs):
    user = instance
    if created and instance.role == User.Role.HOST_EMPLOYER:
        print("Host emp profile created successfully!")
# END OF HOST_EMPLOYER
# START OF COORDINATOR
class CoordinatorManager(BaseUserManager):
    def get_queryset(self, *args, **kwargs):
        results = super().get_queryset(*args, **kwargs)
        return results.filter(role=User.Role.COORDINATOR)

class Coordinator(User):
    base_role = User.Role.COORDINATOR
    coordinator = CoordinatorManager()
    class Meta:
        proxy = True

@receiver(post_save, sender=Coordinator)
def create_coordinator_profile_and_enrollment(sender, instance, created, **kwargs):
    user = instance
    if created and instance.role == User.Role.COORDINATOR:
        print("Coordinator profile created successfully!")
# END OF HOST_EMPLOYER