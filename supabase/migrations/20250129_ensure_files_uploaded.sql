-- Add files_uploaded column to projects table if it doesn't exist
ALTER TABLE projects ADD COLUMN IF NOT EXISTS files_uploaded BOOLEAN DEFAULT FALSE;
