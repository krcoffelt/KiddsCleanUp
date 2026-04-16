export interface LeadFormData {
  full_name: string;
  phone: string;
  email: string;
  service_type: string;
  project_address: string;
  project_details: string;
  preferred_date: string;
  preferred_time: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  landing_page: string;
  referrer_url: string;
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
