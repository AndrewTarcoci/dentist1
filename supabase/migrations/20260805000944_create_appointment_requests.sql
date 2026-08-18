/*
# Create appointment_requests table (single-tenant, no auth)

1. New Tables
- `appointment_requests`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — patient's full name
  - `email` (text, not null) — contact email
  - `phone` (text, not null) — contact phone
  - `service_needed` (text, not null) — selected service
  - `preferred_date` (date, not null) — requested appointment date
  - `preferred_time` (text, not null) — requested time window
  - `additional_notes` (text, nullable) — optional patient notes
  - `status` (text, default 'pending') — request status for staff triage
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `appointment_requests`.
- This is a no-auth public landing page. Anyone (anon + authenticated) may submit a request.
- INSERT allowed for anon + authenticated (public form submission). No SELECT/UPDATE/DELETE for anon to protect submitted data.

3. Notes
- Only INSERT is granted to anon/authenticated so visitors can submit requests but cannot read or modify them.
- Staff manage submissions via the Supabase dashboard (service role bypasses RLS).
*/

CREATE TABLE IF NOT EXISTS appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service_needed text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  additional_notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointment_requests" ON appointment_requests;
CREATE POLICY "anon_insert_appointment_requests"
ON appointment_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
