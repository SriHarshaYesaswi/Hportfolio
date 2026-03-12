import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://nxdzkgtunodhbtovasgg.supabase.co"
const supabaseKey = "sb_publishable_vsOmCx5m7Q3bw4aYIxCYvA_nEe_HBAF"

export const supabase = createClient(supabaseUrl, supabaseKey)
