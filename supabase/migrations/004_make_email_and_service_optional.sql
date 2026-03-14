UPDATE public.leads
SET email = NULL
WHERE email IS NOT NULL AND btrim(email) = '';

UPDATE public.leads
SET service_type = NULL
WHERE service_type IS NOT NULL AND btrim(service_type) = '';

ALTER TABLE public.leads
  ALTER COLUMN email DROP NOT NULL,
  ALTER COLUMN service_type DROP NOT NULL;

ALTER TABLE public.leads
  DROP CONSTRAINT IF EXISTS leads_service_type_allowed_check;

ALTER TABLE public.leads
  ADD CONSTRAINT leads_service_type_allowed_check
  CHECK (service_type IS NULL OR service_type IN (
    'Junk Removal',
    'Commercial Demo',
    'Residential Demo',
    'Lead Remediation',
    'Water Mitigation'
  ));
