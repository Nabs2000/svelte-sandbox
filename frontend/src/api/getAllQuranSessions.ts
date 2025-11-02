import { supabase } from "../supabase/supabaseClient";

async function getAllQuranSessions() {
  const { data, error } = await supabase.from("sessions").select("*");
  if (error) {
    console.error("Error fetching Quran sessions:", error);
    return;
  }
  return data;
}

export default getAllQuranSessions;
