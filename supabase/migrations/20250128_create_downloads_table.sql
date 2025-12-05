-- Create downloads table
CREATE TABLE IF NOT EXISTS downloads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES projects(id),
  user_email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own downloads
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'downloads' AND policyname = 'Users can view their own downloads'
    ) THEN
        CREATE POLICY "Users can view their own downloads" ON downloads
          FOR SELECT USING (auth.email() = user_email);
    END IF;
END
$$;

-- Create storage bucket 'project-files' if not exists
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-files', 'project-files', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Policy: Public read access to project-files
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Public Access'
    ) THEN
        CREATE POLICY "Public Access" ON storage.objects
          FOR SELECT USING (bucket_id = 'project-files');
    END IF;
END
$$;

-- Policy: Authenticated users can upload
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Authenticated users can upload'
    ) THEN
        CREATE POLICY "Authenticated users can upload" ON storage.objects
          FOR INSERT TO authenticated WITH CHECK (bucket_id = 'project-files');
    END IF;
END
$$;

-- Add files_uploaded column to projects table
ALTER TABLE projects ADD COLUMN IF NOT EXISTS files_uploaded BOOLEAN DEFAULT FALSE;
