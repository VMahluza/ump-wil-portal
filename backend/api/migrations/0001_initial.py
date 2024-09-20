# Generated by Django 5.0.7 on 2024-09-14 12:22

import api.models
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='JobPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('descripton', models.CharField(max_length=255)),
                ('closing_date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('student_number', models.CharField(max_length=9)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=15)),
                ('date_of_birth', models.DateField()),
                ('address', models.CharField(max_length=255)),
                ('resume_cv', models.FileField(blank=True, null=True, upload_to=api.models.cv_directory_path)),
                ('qualifications', models.FileField(blank=True, null=True, upload_to=api.models.qualifications_directory_path)),
                ('other_documents', models.FileField(blank=True, null=True, upload_to=api.models.other_documents_directory_path)),
                ('year_of_study', models.DateField()),
                ('gender', models.CharField(blank=True, choices=[('MALE', 'Male'), ('FEMALE', 'Female')], max_length=50, null=True)),
                ('status', models.CharField(blank=True, choices=[('ADMITTED', 'Admitted'), ('PENDING', 'Pending'), ('REJECTED', 'Rejected'), ('ACKNOWLEDGED', 'Acknowledged')], default='PENDING', max_length=50, null=True)),
                ('intern', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='applications', to='authentication.intern')),
                ('job_post', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='applications', to='api.jobpost')),
            ],
        ),
    ]
