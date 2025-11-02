import { supabase } from "../supabase/supabaseClient";

async function updateQuranSession(
  sessionId: string,
  sessionType: string,
  surahNum: number,
  surahName: string,
  startAyah: number,
  endAyah: number
) {
  const { data, error } = await supabase
    .from("sessions")
    .update({
      session_type: sessionType,
      surah_num: surahNum,
      surah_name: surahName,
      start_ayah: startAyah,
      end_ayah: endAyah,
    })
    .eq("id", sessionId);
  if (error) {
    console.error("Error updating Quran session:", error);
    return;
  }
  return data;
}

export default updateQuranSession;
