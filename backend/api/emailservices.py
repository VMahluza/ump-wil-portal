from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from core.settings import EMAIL_HOST_USER

class ApplicationEmailService:
    def __init__(self, application):
        self.application = application
        self.from_email = EMAIL_HOST_USER
        self.to_email = application.email
        self.context = {
            "fullname": f"{application.first_name} {application.last_name}",
            "status" : application.status,

            "company_logo_url": "https://www.ump.ac.za/images/logo.png",
        }
    def send_email(self, subject: str, template: str):
        try:
            html_content = render_to_string(template, self.context)
            msg = EmailMultiAlternatives(subject, "", self.from_email, [self.to_email])
            msg.attach_alternative(html_content, "text/html")
            msg.send()
        except Exception as e:
            print(f"Failed to send email: {e}")

    def send_welcome_email(self):
        subject = "Application Received Successfully"
        self.send_email(subject, "api/email/application_received.html")

    def send_admission_email(self):
        subject = f"Admission status changed to {self.application.status}"
        self.send_email(subject, "api/email/admitted_email.html")
        self.context['temporary_secret_key'] = self.application.temporary_secret_key
        try:
            html_content = render_to_string(template_name="api/email/admitted_email.html", context=self.context)
            msg = EmailMultiAlternatives(subject, "", self.from_email, [self.to_email])
            msg.attach_alternative(html_content, "text/html")
            msg.send()
        except Exception as e:
            print(f"Failed to send email: {e}")

    def send_rejection_email(self):
        
        subject = f"Application status changed to {self.application.status}"
        self.send_email(subject, "api/email/rejected_email.html")

    def send_acknowledge_success_email(self):
        subject = f"Application {self.application.status}"
        self.context['temporary_secret_key'] = self.application.temporary_secret_key
        try:
            html_content = render_to_string(template_name="api/email/ackowledged_email.html", context=self.context)
            msg = EmailMultiAlternatives(subject, "", self.from_email, [self.to_email])
            msg.attach_alternative(html_content, "text/html")
            msg.send()
        except Exception as e:
            print(f"Failed to send email: {e}")


