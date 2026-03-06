export interface LeadFormData {
  full_name: string;
  phone: string;
  email: string;
  service_type: string;
  project_address: string;
  project_details: string;
  preferred_date: string;
  preferred_time: string;
  budget_range: string;
  referral_source: string;
}

export interface QuoteSuccessResponse {
  ok: true;
  lead_id: string;
}

export interface QuoteErrorResponse {
  ok: false;
  code: "VALIDATION_ERROR" | "SERVER_ERROR";
  field_errors?: Record<string, string>;
}

export type QuoteResponse = QuoteSuccessResponse | QuoteErrorResponse;
