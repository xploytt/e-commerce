import { createClient } from "@supabase/supabase-js";

const {
  VITE_SUPABASE_CLIENT_URL: supaBaseUrl,
  VITE_SUPABASE_ANON_PUBK: supaBasePBK,
} = import.meta.env;

export const supabase = createClient(supaBaseUrl, supaBasePBK);
