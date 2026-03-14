CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost', 'spam')),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  email text NOT NULL CHECK (char_length(email) <= 254),
  service_type text NOT NULL
    CONSTRAINT leads_service_type_allowed_check
    CHECK (service_type IN (
      'Junk Removal',
      'Commercial Demo',
      'Residential Demo',
      'Lead Demo',
      'Water Mitigation'
    )),
  project_address text CHECK (char_length(project_address) <= 300),
  project_details text CHECK (char_length(project_details) <= 2000),
  preferred_date text,
  preferred_time text,
  source_page text,
  ip_hash text,
  user_agent text CHECK (char_length(user_agent) <= 500)
);

ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS project_address text,
  ADD COLUMN IF NOT EXISTS project_details text,
  ADD COLUMN IF NOT EXISTS preferred_date text,
  ADD COLUMN IF NOT EXISTS preferred_time text,
  ADD COLUMN IF NOT EXISTS source_page text,
  ADD COLUMN IF NOT EXISTS ip_hash text,
  ADD COLUMN IF NOT EXISTS user_agent text;

ALTER TABLE public.leads
  DROP COLUMN IF EXISTS budget_range,
  DROP COLUMN IF EXISTS referral_source;

ALTER TABLE public.leads
  DROP CONSTRAINT IF EXISTS leads_service_type_check,
  DROP CONSTRAINT IF EXISTS leads_service_type_allowed_check;

ALTER TABLE public.leads
  ADD CONSTRAINT leads_service_type_allowed_check
  CHECK (service_type IN (
    'Junk Removal',
    'Commercial Demo',
    'Residential Demo',
    'Lead Demo',
    'Water Mitigation'
  ));

DROP TRIGGER IF EXISTS on_lead_created ON public.leads;
DROP FUNCTION IF EXISTS public.notify_new_lead();

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
