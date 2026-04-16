CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost', 'spam')),

  -- Current quote form fields
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  email text CHECK (email IS NULL OR char_length(email) <= 254),
  service_type text
    CONSTRAINT leads_service_type_allowed_check
    CHECK (service_type IS NULL OR service_type IN (
      'Junk Removal',
      'Commercial Demo',
      'Residential Demo',
      'Lead Remediation',
      'Water Mitigation'
    )),
  project_address text CHECK (char_length(project_address) <= 300),
  project_details text CHECK (char_length(project_details) <= 2000),
  preferred_date text,
  preferred_time text,
  utm_source text CHECK (utm_source IS NULL OR char_length(utm_source) <= 255),
  utm_medium text CHECK (utm_medium IS NULL OR char_length(utm_medium) <= 255),
  utm_campaign text CHECK (utm_campaign IS NULL OR char_length(utm_campaign) <= 255),
  utm_term text CHECK (utm_term IS NULL OR char_length(utm_term) <= 255),
  utm_content text CHECK (utm_content IS NULL OR char_length(utm_content) <= 255),
  landing_page text CHECK (landing_page IS NULL OR char_length(landing_page) <= 500),
  referrer_url text CHECK (referrer_url IS NULL OR char_length(referrer_url) <= 500),

  -- Audit columns from the API route
  source_page text,
  ip_hash text,
  user_agent text CHECK (char_length(user_agent) <= 500)
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.leads IS 'Quote request leads submitted via the website';
