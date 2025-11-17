import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rjvvfqgriglasqzporat.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqdnZmcWdyaWdsYXNxenBvcmF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzODU2MzksImV4cCI6MjA3ODk2MTYzOX0.btAeQt5juu6L7Mzas6EM9c4JFc4sGP6WTbqxbBKrlp0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
