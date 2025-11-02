<script lang="ts">
  import quran from "../utils/quran";
  import addQuranSession from "../api/addQuranSession";

  let memorizationSurahNumber = $state(0);
  let memorizationStartAyah = $state(0);
  let memorizationEndAyah = $state(0);
  let nearReviewSurahNumber = $state(0);
  let nearReviewStartAyah = $state(0);
  let nearReviewEndAyah = $state(0);
  let farReviewSurahNumber = $state(0);
  let farReviewStartAyah = $state(0);
  let farReviewEndAyah = $state(0);

  async function handleSubmit(event: Event) {
    // Log all the memorization form data
    console.log("Memorization Surah Number:", memorizationSurahNumber);
    console.log("Memorization Start Ayah:", memorizationStartAyah);
    console.log("Memorization End Ayah:", memorizationEndAyah);
    if (
      !memorizationSurahNumber ||
      !memorizationStartAyah ||
      !memorizationEndAyah
    ) {
      console.error("Missing memorization form data!");
      return;
    }
    if (!nearReviewSurahNumber || !nearReviewStartAyah || !nearReviewEndAyah) {
      console.error("Missing near review form data!");
      return;
    }
    if (!farReviewSurahNumber || !farReviewStartAyah || !farReviewEndAyah) {
      console.error("Missing far review form data!");
      return;
    }
    await addQuranSession(
      "memorization",
      memorizationSurahNumber,
      quran[memorizationSurahNumber - 1].name,
      memorizationStartAyah,
      memorizationEndAyah
    );
    console.log("Submitted memorization form!");
    await addQuranSession(
      "review",
      nearReviewSurahNumber,
      quran[nearReviewSurahNumber - 1].name,
      nearReviewStartAyah,
      nearReviewEndAyah
    );
    console.log("Submitted near review form!");
    await addQuranSession(
      "review",
      farReviewSurahNumber,
      quran[farReviewSurahNumber - 1].name,
      farReviewStartAyah,
      farReviewEndAyah
    );
    console.log("Submitted far review form!");
    // Reset form
    event.preventDefault();
    memorizationSurahNumber = 0;
    memorizationStartAyah = 0;
    memorizationEndAyah = 0;
    nearReviewSurahNumber = 0;
    nearReviewStartAyah = 0;
    nearReviewEndAyah = 0;
    farReviewSurahNumber = 0;
    farReviewStartAyah = 0;
    farReviewEndAyah = 0;
  }

  function handleMemorizationSurahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    memorizationSurahNumber = parseInt(target.value);
  }

  function handleNearReviewSurahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    nearReviewSurahNumber = parseInt(target.value);
  }

  function handleFarReviewSurahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    farReviewSurahNumber = parseInt(target.value);
  }

  function handleMemorizationStartAyahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    memorizationStartAyah = parseInt(target.value);
  }

  function handleNearReviewStartAyahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    nearReviewStartAyah = parseInt(target.value);
  }

  function handleFarReviewStartAyahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    farReviewStartAyah = parseInt(target.value);
  }

  function handleMemorizationEndAyahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    memorizationEndAyah = parseInt(target.value);
  }

  function handleNearReviewEndAyahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    nearReviewEndAyah = parseInt(target.value);
  }

  function handleFarReviewEndAyahChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    farReviewEndAyah = parseInt(target.value);
  }
</script>

<h1>Form</h1>

<form action="" method="get" class="form-example" onsubmit={handleSubmit}>
  <div class="form-example">
    <p>Memorization</p>
    <div>
      <label for="memorization">Surah</label>
      <select
        name="memorization"
        id="memorization"
        onclick={handleMemorizationSurahChange}
      >
        <option value="">Select Surah</option>
        {#each quran as surah}
          <option value={surah.number}>{surah.number} - {surah.name}</option>
        {/each}
      </select>
      <label for="memorization">Start Ayah</label>
      {#if memorizationSurahNumber}
        <select name="startAyah" id="startAyah" onclick={handleMemorizationStartAyahChange}>
          <option value="">Select Ayah</option>
          {#each { length: quran[memorizationSurahNumber - 1].ayahs } as _, ayahNumber}
            <option value={ayahNumber + 1}>{ayahNumber + 1}</option>
          {/each}
        </select>
      {/if}
      <label for="memorization">End Ayah</label>
      {#if memorizationSurahNumber}
        <select name="endAyah" id="endAyah" onclick={handleMemorizationEndAyahChange}>
          <option value="">Select Ayah</option>
          {#each { length: quran[memorizationSurahNumber - 1].ayahs } as _, ayahNumber}
            <option value={ayahNumber + 1}>{ayahNumber + 1}</option>
          {/each}
        </select>
      {/if}
    </div>
  </div>
  <div class="form-example">
    <p>Near Review</p>
    <div>
      <label for="nearReview">Surah</label>
      <select
        name="nearReview"
        id="nearReview"
        onclick={handleNearReviewSurahChange}
      >
        <option value="">Select Surah</option>
        {#each quran as surah}
          <option value={surah.number}>{surah.number} - {surah.name}</option>
        {/each}
      </select>
      <label for="nearReview">Start Ayah</label>
      {#if nearReviewSurahNumber}
        <select name="startAyah" id="startAyah" onclick={handleNearReviewStartAyahChange}>
          <option value="">Select Ayah</option>
          {#each { length: quran[nearReviewSurahNumber - 1].ayahs } as _, ayahNumber}
            <option value={ayahNumber + 1}>{ayahNumber + 1}</option>
          {/each}
        </select>
      {/if}
      <label for="nearReview">End Ayah</label>
      {#if nearReviewSurahNumber}
        <select name="endAyah" id="endAyah" onclick={handleNearReviewEndAyahChange}>
          <option value="">Select Ayah</option>
          {#each { length: quran[nearReviewSurahNumber - 1].ayahs } as _, ayahNumber}
            <option value={ayahNumber + 1}>{ayahNumber + 1}</option>
          {/each}
        </select>
      {/if}
    </div>
  </div>
  <div class="form-example">
    <p>Far Review</p>
    <div>
      <label for="farReview">Surah</label>
      <select
        name="farReview"
        id="farReview"
        onclick={handleFarReviewSurahChange}
      >
        <option value="">Select Surah</option>
        {#each quran as surah}
          <option value={surah.number}>{surah.number} - {surah.name}</option>
        {/each}
      </select>
      <label for="farReview">Start Ayah</label>
      {#if farReviewSurahNumber}
        <select name="startAyah" id="startAyah" onclick={handleFarReviewStartAyahChange}>
          <option value="">Select Ayah</option>
          {#each { length: quran[farReviewSurahNumber - 1].ayahs } as _, ayahNumber}
            <option value={ayahNumber + 1}>{ayahNumber + 1}</option>
          {/each}
        </select>
      {/if}
      <label for="farReview">End Ayah</label>
      {#if farReviewSurahNumber}
        <select name="endAyah" id="endAyah" onclick={handleFarReviewEndAyahChange}>
          <option value="">Select Ayah</option>
          {#each { length: quran[farReviewSurahNumber - 1].ayahs } as _, ayahNumber}
            <option value={ayahNumber + 1}>{ayahNumber + 1}</option>
          {/each}
        </select>
      {/if}
    </div>
  </div>
  <div class="form-example">
    <input type="submit" value="Submit" />
  </div>
</form>
