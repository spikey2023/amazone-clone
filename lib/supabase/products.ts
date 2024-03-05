import { createClient } from "@supabase/supabase-js";

//supbase needs RLDS security turned off to fech data or needs the secret private key
export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)