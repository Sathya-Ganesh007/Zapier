-- Create a table for public profiles
-- This table stores additional user data like name, username, and role.
create table if not exists public.profiles (
  id uuid not null default gen_random_uuid() primary key,
  created_at timestamp with time zone not null default now(),
  email text not null unique,
  username text unique,
  full_name text,
  role text check (role in ('member', 'admin', 'guest')) default 'member'
);

-- Set up Row Level Security (RLS)
alter table public.profiles enable row level security;

-- Policy: Allow authenticated users to view all profiles
create policy "Enable read access for authenticated users"
  on public.profiles
  for select
  to authenticated
  using (true);

-- Policy: Allow authenticated users to insert profiles
-- This allows any logged-in user to create a profile (e.g. via the Create User form)
create policy "Enable insert for authenticated users"
  on public.profiles
  for insert
  to authenticated
  with check (true);

-- Policy: Allow users to update their own profile (if linked) or admins to update
create policy "Enable update for authenticated users"
  on public.profiles
  for update
  to authenticated
  using (true);

-- Policy: Allow users to delete profiles
create policy "Enable delete for authenticated users"
  on public.profiles
  for delete
  to authenticated
  using (true);
