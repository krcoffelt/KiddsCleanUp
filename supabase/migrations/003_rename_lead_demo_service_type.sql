UPDATE public.leads
SET service_type = 'Lead Remediation'
WHERE service_type = 'Lead Demo';

ALTER TABLE public.leads
  DROP CONSTRAINT IF EXISTS leads_service_type_allowed_check;

ALTER TABLE public.leads
  ADD CONSTRAINT leads_service_type_allowed_check
  CHECK (service_type IN (
    'Junk Removal',
    'Commercial Demo',
    'Residential Demo',
    'Lead Remediation',
    'Water Mitigation'
  ));
