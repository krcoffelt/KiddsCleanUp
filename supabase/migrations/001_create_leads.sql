-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost', 'spam')),

  -- Form fields
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  email text NOT NULL CHECK (char_length(email) <= 254),
  service_type text NOT NULL CHECK (char_length(service_type) > 0),
  project_address text CHECK (char_length(project_address) <= 300),
  project_details text CHECK (char_length(project_details) <= 2000),
  preferred_date text,
  preferred_time text,
  budget_range text,
  referral_source text,

  -- Audit columns
  source_page text,
  ip_hash text,
  user_agent text CHECK (char_length(user_agent) <= 500)
);

-- Index for dashboard queries
CREATE INDEX idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX idx_leads_status ON public.leads (status);

-- RLS: Disable public access entirely
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No public policies = no anonymous access
-- Only the service role key (used in the API route) can insert/read

-- Notification trigger function
-- This calls a Supabase Edge Function to send email notifications
CREATE OR REPLACE FUNCTION public.notify_new_lead()
RETURNS trigger AS $$
BEGIN
  PERFORM net.http_post(
    url := current_setting('app.settings.edge_function_url') || '/notify-lead',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')
    ),
    body := jsonb_build_object(
      'lead_id', NEW.id,
      'full_name', NEW.full_name,
      'phone', NEW.phone,
      'email', NEW.email,
      'service_type', NEW.service_type,
      'project_details', NEW.project_details
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_lead_created
  AFTER INSERT ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_lead();

COMMENT ON TABLE public.leads IS 'Quote request leads submitted via the website';
