from django import forms
from api.models import Application
class ApplicationForm(forms.ModelForm):
    class Meta:
        model = Application
        fields = [
            "first_name",
            "last_name",
            "student_number",
            "email",
            "phone",
            "date_of_birth",
            "gender",
            "address",
            "resume_cv",
            "qualifications",
            "other_documents",
            "year_of_study",
        
        ]
    def __init__(self, *args, **kwargs):
        super(ApplicationForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.items():
            field.widget.attrs.update(
                {
                    "class": "form-control",
                    "placeholder": field.label,
                }
            )
        self.fields["date_of_birth"].widget = forms.DateInput(attrs={"type": "date", "class": "form-control",})
        self.fields["year_of_study"].widget = forms.DateInput(attrs={"type": "date", "class": "form-control",})

        