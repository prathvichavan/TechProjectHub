# Supabase Setup Instructions

## Creating the Messages Table

To fix the "Failed to send message" error, you need to create the `messages` table in your Supabase database.

### Option 1: Using Supabase Dashboard (Easiest)

1. Go to https://app.supabase.com/
2. Log in to your project
3. Navigate to the **SQL Editor** tab
4. Click **New Query**
5. Copy and paste the SQL below
6. Click **Run**

### SQL to Run:

```sql
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
```

### Option 2: Using Supabase CLI

```bash
supabase migration up
```

## What Gets Created

The migration creates:
- **messages table** with columns: id, name, email, phone, message, created_at, updated_at
- **Row Level Security (RLS)** policies:
  - Anyone can insert messages (for contact form submissions)
  - Only authenticated users can read messages
- **Indexes** for better query performance

## After Setup

The contact form should work immediately after the table is created!

## Troubleshooting

If messages still fail to send:

1. **Check the browser console** for the actual error message (now improved with better error reporting)
2. **Verify RLS policies** - make sure the "Allow anonymous inserts" policy is enabled
3. **Check CORS settings** - ensure your domain is added to Supabase CORS settings
4. **Verify API credentials** - make sure `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` are correct in `.env`
