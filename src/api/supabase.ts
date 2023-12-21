import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://trxxtpycgvhlhnchnngd.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyeHh0cHljZ3ZobGhuY2hubmdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNDcwMTcsImV4cCI6MjAxODcyMzAxN30.5zDySSt4gmTDhtsp4a05bj43ErzYGeY2rR-Nk4MQ7gE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})