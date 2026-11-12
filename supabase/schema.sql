-- Run in the Supabase SQL editor to create the contact form's storage.
create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  message text not null check (char_length(message) between 1 and 3000),
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- Public visitors may submit a message. No public read, update, or delete access.
drop policy if exists "Anyone can submit a contact message" on public.contact_messages;
create policy "Anyone can submit a contact message"
  on public.contact_messages for insert to anon
  with check (
    char_length(trim(name)) between 1 and 120
    and char_length(email) between 3 and 254
    and char_length(trim(message)) between 1 and 3000
  );

-- Limit the Data API role to the one operation the portfolio needs.
revoke all privileges on table public.contact_messages from public, anon, authenticated;
grant insert on table public.contact_messages to anon;

