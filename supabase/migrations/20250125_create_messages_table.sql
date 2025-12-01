-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable RLS
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for contact form submissions)
CREATE POLICY "Allow anonymous inserts" ON messages
  FOR INSERT
  WITH CHECK (true);

-- Allow read access to authenticated users only
CREATE POLICY "Allow authenticated read" ON messages
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create index on email for searching
CREATE INDEX IF NOT EXISTS messages_email_idx ON messages(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON messages(created_at DESC);
