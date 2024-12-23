# Generated by Django 5.0.7 on 2024-11-17 05:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_application_temporary_secret_key'),
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='intern',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='applications', to='authentication.intern'),
        ),
        migrations.AlterField(
            model_name='application',
            name='temporary_secret_key',
            field=models.CharField(blank=True, default=None, help_text='A temporary secret key for verification purposes.', max_length=36, null=True),
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=255)),
                ('closing_date', models.DateField()),
                ('host_employer', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='companies', to='authentication.hostemployer')),
            ],
        ),
    ]
