<script lang="ts">
  import { onMount } from "svelte";
  import getAllQuranSessions from "../api/getAllQuranSessions";
  import updateQuranSession from "../api/updateQuranSession";
  import deleteQuranSession from "../api/deleteQuranSession";

  let sessions = $state<any>([]);
  let editingSession = $state<any>(null);
  let tempSession = $state<any>(null);

  onMount(async () => {
    await loadSessions();
  });

  async function loadSessions() {
    sessions = await getAllQuranSessions();
  }

  function startEditing(session: any) {
    editingSession = session.id;
    tempSession = { ...session }; // Create a copy for editing
  }

  function cancelEditing() {
    editingSession = null;
    tempSession = null;
  }

  async function saveChanges() {
    if (!tempSession) return;

    try {
      await updateQuranSession(
        tempSession.id,
        tempSession.session_type,
        tempSession.surah_num,
        tempSession.surah_name,
        tempSession.start_ayah,
        tempSession.end_ayah
      );

      // Update the sessions list
      sessions = sessions.map((s: any) =>
        s.id === tempSession.id ? { ...tempSession } : s
      );

      cancelEditing();
    } catch (error) {
      console.error("Error updating session:", error);
    }
  }

  async function handleSessionDelete(session: any) {
    if (confirm("Are you sure you want to delete this session?")) {
      await deleteQuranSession(session.id);
      sessions = sessions.filter((s: any) => s.id !== session.id);
    }
  }
</script>

<h1>Quran Study History</h1>

<div class="sessions-container">
  {#each sessions as session}
    <div class="session-card">
      {#if editingSession === session.id}
        <!-- Edit Mode -->
        <div class="edit-form">
          <div class="form-group">
            <label for="session_type">Session Type:</label>
            <input
              type="text"
              bind:value={tempSession.session_type}
              placeholder="Session Type"
            />
          </div>

          <div class="form-group">
            <label for="surah_num">Surah Number:</label>
            <input
              type="number"
              bind:value={tempSession.surah_num}
              placeholder="Surah Number"
            />
          </div>

          <div class="form-group">
            <label for="surah_name">Surah Name:</label>
            <input
              type="text"
              bind:value={tempSession.surah_name}
              placeholder="Surah Name"
            />
          </div>

          <div class="form-group">
            <label for="start_ayah">Start Ayah:</label>
            <input
              type="number"
              bind:value={tempSession.start_ayah}
              placeholder="Start Ayah"
            />
          </div>

          <div class="form-group">
            <label for="end_ayah">End Ayah:</label>
            <input
              type="number"
              bind:value={tempSession.end_ayah}
              placeholder="End Ayah"
            />
          </div>

          <div class="form-actions">
            <button onclick={saveChanges} class="save-btn">Save</button>
            <button onclick={cancelEditing} class="cancel-btn">Cancel</button>
          </div>
        </div>
      {:else}
        <!-- View Mode -->
        <div class="session-details">
          <h3>{session.session_type || "Untitled Session"}</h3>
          <p>Surah: {session.surah_name} ({session.surah_num})</p>
          <p>Ayahs: {session.start_ayah} - {session.end_ayah}</p>
          <p class="date">{new Date(session.createdAt).toLocaleDateString()}</p>
        </div>

        <div class="session-actions">
          <button onclick={() => startEditing(session)} class="edit-btn">
            Edit
          </button>
          <button
            onclick={() => handleSessionDelete(session)}
            class="delete-btn"
          >
            Delete
          </button>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .sessions-container {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
  }

  .session-card {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .session-details {
    flex-grow: 1;
  }

  .session-actions {
    display: flex;
    gap: 0.5rem;
  }

  .edit-form {
    width: 100%;
  }

  .form-group {
    margin-bottom: 0.75rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
  }

  .form-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
    justify-content: flex-end;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;
  }

  .edit-btn {
    background-color: #3b82f6;
    color: white;
  }

  .edit-btn:hover {
    background-color: #2563eb;
  }

  .delete-btn {
    background-color: #ef4444;
    color: white;
  }

  .delete-btn:hover {
    background-color: #dc2626;
  }

  .save-btn {
    background-color: #10b981;
    color: white;
  }

  .save-btn:hover {
    background-color: #059669;
  }

  .cancel-btn {
    background-color: #94a3b8;
    color: white;
  }

  .cancel-btn:hover {
    background-color: #64748b;
  }

  .date {
    color: #64748b;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
</style>
