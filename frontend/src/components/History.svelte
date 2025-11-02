<script lang="ts">
  import { onMount } from "svelte";
  import getAllQuranSessions from "../api/getAllQuranSessions";
  import updateQuranSession from "../api/updateQuranSession";
  import deleteQuranSession from "../api/deleteQuranSession";

  let sessions = $state<any>([]);
  onMount(async () => {
    sessions = await getAllQuranSessions();
  });

  async function handleSessionUpdate(session: any) {
    console.log("Update session:", session);
    await updateQuranSession(
      session.id,
      session.session_type,
      session.surah_num,
      session.surah_name,
      session.start_ayah,
      session.end_ayah
    );
    console.log("Updated session:", session);
  }

  async function handleSessionDelete(session: any) {
    console.log("Delete session:", session);
    await deleteQuranSession(session.id);
    sessions = sessions.filter((s: any) => s.id !== session.id);
    console.log("Deleted session:", session);
  }
</script>

<h1>History</h1>
{#each sessions as session}
  <div class="session">
    <p>{session.id}</p>
    <p>{session.createdAt}</p>
    <p>{session.session_type}</p>
    <p>{session.surah_num}</p>
    <p>{session.surah_name}</p>
    <p>{session.start_ayah}</p>
    <p>{session.end_ayah}</p>
  </div>
  <button onclick={() => handleSessionUpdate(session)}>Update</button>
  <button onclick={() => handleSessionDelete(session)}>Delete</button>
{/each}
