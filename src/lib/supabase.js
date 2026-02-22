import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://thxummuxyzbroksktwsr.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_nAfm0Yl_-RQw7lOU3F720Q_ObAQJeDy'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Función para guardar un guest
export async function saveGuest(firstName, lastName, email, attendance) {
  try {
    const payload = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      attendance: attendance,
      created_at: new Date().toISOString()
    }

    const { data, error } = await supabase.from('guests').insert([payload]).select()
    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error al guardar guest:', error)
    return { success: false, error: error.message || String(error) }
  }
}