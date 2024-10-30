export interface Application {
  id?: number; // Assuming there's an implicit id field in the Django model

  first_name: string;
  last_name: string;
  student_number: string;
  email: string;
  phone: string;
  date_of_birth: string; // DateField will be a string in the format 'YYYY-MM-DD'
  address: string;

  resume_cv?: string | null; // Represents a file field
  qualifications?: string | null; // Represents a file field
  other_documents?: string | null; // Represents a file field

  year_of_study: string; // DateField in Django corresponds to a date string in TypeScrip
  gender?: "MALE" | "FEMALE" | null; // Matches TextChoices for gender

  job_post?: number | null; // Assuming `JobPost` is referenced by its ID (ForeignKey)
  intern?: number | null; // Assuming `Intern` is referenced by its ID (ForeignKey)

  status: "ADMITTED" | "PENDING" | "REJECTED" | "ACKNOWLEDGED"; // Matches TextChoices for status
}
