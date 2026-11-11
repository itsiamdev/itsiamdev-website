create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text,
  date date,
  read_time text,
  tags text,
  image text,
  author_name text,
  author_avatar text,
  related_posts text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  short_description text,
  full_description text,
  tech text,
  image text,
  github_url text,
  live_url text,
  featured boolean not null default false,
  category text not null default 'web',
  date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on public.blog_posts, public.projects to anon, authenticated;
grant insert, update, delete on public.blog_posts, public.projects to authenticated;

alter table public.blog_posts enable row level security;
alter table public.projects enable row level security;

drop policy if exists "Public can read blog posts" on public.blog_posts;
create policy "Public can read blog posts"
  on public.blog_posts for select
  to anon, authenticated
  using (true);

drop policy if exists "Admins can manage blog posts" on public.blog_posts;
create policy "Admins can manage blog posts"
  on public.blog_posts for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Only admins can insert blog posts" on public.blog_posts;
create policy "Only admins can insert blog posts"
  on public.blog_posts as restrictive for insert
  to public
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Only admins can update blog posts" on public.blog_posts;
create policy "Only admins can update blog posts"
  on public.blog_posts as restrictive for update
  to public
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Only admins can delete blog posts" on public.blog_posts;
create policy "Only admins can delete blog posts"
  on public.blog_posts as restrictive for delete
  to public
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Public can read projects" on public.projects;
create policy "Public can read projects"
  on public.projects for select
  to anon, authenticated
  using (true);

drop policy if exists "Admins can manage projects" on public.projects;
create policy "Admins can manage projects"
  on public.projects for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Only admins can insert projects" on public.projects;
create policy "Only admins can insert projects"
  on public.projects as restrictive for insert
  to public
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Only admins can update projects" on public.projects;
create policy "Only admins can update projects"
  on public.projects as restrictive for update
  to public
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');

drop policy if exists "Only admins can delete projects" on public.projects;
create policy "Only admins can delete projects"
  on public.projects as restrictive for delete
  to public
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin');
