import { supabase } from "../supabase/supabaseClient";

async function deleteQuranSession(sessionId: string) {
  const { data, error } = await supabase
    .from("sessions")
    .delete()
    .eq("id", sessionId);
  if (error) {
    console.error("Error deleting Quran session:", error);
    return;
  }
  return data;
}

export default deleteQuranSession;
