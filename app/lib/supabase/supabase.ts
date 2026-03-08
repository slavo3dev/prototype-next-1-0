import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPPABASE_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;