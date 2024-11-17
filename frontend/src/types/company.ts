type Company = {
  id: number; // Assuming the Django model uses an auto-generated primary key
  host_employer?: number | null; // Foreign key reference (null if blank)
  name: string;
  description?: string;
  closing_date?: string; // Dates are typically represented as ISO 8601 strings in APIs
};

export default Company;
