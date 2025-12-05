-- Create storage buckets if they don't exist
insert into storage.buckets (id, name, public)
values ('project-files', 'project-files', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('project-thumbnails', 'project-thumbnails', true)
on conflict (id) do nothing;

-- Policy for public read access to project-files
create policy "Public Access to Project Files"
  on storage.objects for select
  using ( bucket_id = 'project-files' );

-- Policy for public read access to project-thumbnails
create policy "Public Access to Project Thumbnails"
  on storage.objects for select
  using ( bucket_id = 'project-thumbnails' );

-- Policy for authenticated uploads to project-files
create policy "Authenticated Users can Upload Project Files"
  on storage.objects for insert
  with check ( bucket_id = 'project-files' and auth.role() = 'authenticated' );

-- Policy for authenticated uploads to project-thumbnails
create policy "Authenticated Users can Upload Project Thumbnails"
  on storage.objects for insert
  with check ( bucket_id = 'project-thumbnails' and auth.role() = 'authenticated' );
