<script lang="ts">
  import { onMount } from "svelte";
  import getAllQuranSessions from "../api/getAllQuranSessions";

  let sessions = $state<any>([]);
  onMount(async () => {
    sessions = await getAllQuranSessions();
  });
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
{/each}
