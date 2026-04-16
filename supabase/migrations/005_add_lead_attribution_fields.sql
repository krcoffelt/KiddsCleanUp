ALTER TABLE public.leads
  ADD COLUMN IF NOT EXISTS utm_source text CHECK (utm_source IS NULL OR char_length(utm_source) <= 255),
  ADD COLUMN IF NOT EXISTS utm_medium text CHECK (utm_medium IS NULL OR char_length(utm_medium) <= 255),
  ADD COLUMN IF NOT EXISTS utm_campaign text CHECK (utm_campaign IS NULL OR char_length(utm_campaign) <= 255),
  ADD COLUMN IF NOT EXISTS utm_term text CHECK (utm_term IS NULL OR char_length(utm_term) <= 255),
  ADD COLUMN IF NOT EXISTS utm_content text CHECK (utm_content IS NULL OR char_length(utm_content) <= 255),
  ADD COLUMN IF NOT EXISTS landing_page text CHECK (landing_page IS NULL OR char_length(landing_page) <= 500),
  ADD COLUMN IF NOT EXISTS referrer_url text CHECK (referrer_url IS NULL OR char_length(referrer_url) <= 500);
