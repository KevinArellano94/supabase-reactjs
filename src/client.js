import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://lwnvwutsklnofoppxshk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjY5MDY2NiwiZXhwIjoxOTUyMjY2NjY2fQ.6p7S9787WCBOcesJ3sWymR_RhndWA4R4vMuuEolnPaA"
    // Sanitize tables
    // https://supabase.io/docs/learn/auth-deep-dive/auth-row-level-security
)