-- Add user_id to orders table to link purchases to users
ALTER TABLE orders ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id);

-- Update RLS policy to allow users to see only their own orders
DROP POLICY IF EXISTS "Enable read access for all users" ON orders;
CREATE POLICY "Users can see their own orders" ON orders FOR SELECT USING (auth.uid() = user_id);

-- Allow users to insert their own orders
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON orders;
CREATE POLICY "Users can insert their own orders" ON orders FOR INSERT WITH CHECK (auth.uid() = user_id);
