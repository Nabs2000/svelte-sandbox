import { supabase } from "../supabase/supabaseClient";

async function addQuranSession(
  sessionType: "memorization" | "review",
  surahNumber: number,
  surahName: string,
  startAyah: number,
  endAyah: number
) {
  // TODO: Add Quran session to Supabase
  const { data, error } = await supabase.from("sessions").insert({
    session_type: sessionType,
    surah_num: surahNumber,
    surah_name: surahName,
    start_ayah: startAyah,
    end_ayah: endAyah,
  });

  if (error) {
    console.error("Error adding Quran session:", error);
    return;
  }
}

export default addQuranSession;
