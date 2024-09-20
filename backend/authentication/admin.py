from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Intern, HostEmployer, Coordinator

# Register the base User model
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    list_display = ('username', 'first_name', 'last_name', 'email', 'role')
    list_filter = ('role',)
    search_fields = ('username', 'first_name', 'last_name', 'email')
    ordering = ('username',)

# Custom admin class for Interns
@admin.register(Intern)
class InternAdmin(BaseUserAdmin):
    list_display = ('username', 'first_name', 'last_name', 'email', 'role')
    list_filter = ('role',)
    search_fields = ('username', 'first_name', 'last_name', 'email')
    ordering = ('username',)

# Custom admin class for Host Employers
@admin.register(HostEmployer)
class HostEmployerAdmin(BaseUserAdmin):
    list_display = ('username', 'first_name', 'last_name', 'email', 'role')
    list_filter = ('role',)
    search_fields = ('username', 'first_name', 'last_name', 'email')
    ordering = ('username',)

# Custom admin class for Coordinators
@admin.register(Coordinator)
class CoordinatorAdmin(BaseUserAdmin):
    list_display = ('username', 'first_name', 'last_name', 'email', 'role')
    list_filter = ('role',)
    search_fields = ('username', 'first_name', 'last_name', 'email')
    ordering = ('username',)
