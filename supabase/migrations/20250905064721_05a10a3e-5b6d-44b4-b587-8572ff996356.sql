-- Add mobile_number column to profiles table for Bkash numbers
ALTER TABLE public.profiles 
ADD COLUMN mobile_number TEXT;

-- Add name column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN name TEXT;