<form action="" method="get" class="form-example">
  <div class="form-example">
    <p>Memorization</p>
    <div>
      <label for="memorization">Surah</label>
      <select name="memorization" id="memorization" onclick={handleMemorizationSurahChange}>
        {#each quran as surah}
          <option value={surah.number}>{surah.number} - {surah.name}</option>
        {/each}
      </select>
      <label for="memorization">Start Ayah</label>
      {#if memorizationSurahNumber}
        <select name="startAyah" id="startAyah">
          
            {#each {length: quran[memorizationSurahNumber - 1].ayahs} as _, ayahNumber}
              <option value={ayahNumber+1}>{ayahNumber+1}</option>
            {/each}
        </select>
      {/if}
      <label for="memorization">End Ayah</label>
      {#if memorizationSurahNumber}
        <select name="endAyah" id="endAyah">
          {#each {length: quran[memorizationSurahNumber - 1].ayahs} as _, ayahNumber}
            <option value={ayahNumber+1}>{ayahNumber+1}</option>
          {/each}
        </select>
      {/if}
    </div>
  </div>
  <div class="form-example">
    <p>Near Review</p>
    <div>
      <label for="nearReview">Surah</label>
      <select name="nearReview" id="nearReview" onclick={handleNearReviewSurahChange}>
        {#each quran as surah}
          <option value={surah.number}>{surah.number} - {surah.name}</option>
        {/each}
      </select>
      <label for="nearReview">Start Ayah</label>
      {#if nearReviewSurahNumber}
        <select name="startAyah" id="startAyah">
          {#each {length: quran[nearReviewSurahNumber - 1].ayahs} as _, ayahNumber}
            <option value={ayahNumber+1}>{ayahNumber+1}</option>
          {/each}
        </select>
      {/if}
      <label for="nearReview">End Ayah</label>
      {#if nearReviewSurahNumber}
        <select name="endAyah" id="endAyah">
          {#each {length: quran[nearReviewSurahNumber - 1].ayahs} as _, ayahNumber}
            <option value={ayahNumber+1}>{ayahNumber+1}</option>
          {/each}
        </select>
      {/if}
    </div>
  </div>
  <div class="form-example">
    <p>Far Review</p>
    <div>
      <label for="farReview">Surah</label>
      <select name="farReview" id="farReview" onclick={handleFarReviewSurahChange}>
        {#each quran as surah}
          <option value={surah.number}>{surah.number} - {surah.name}</option>
        {/each}
      </select>
      <label for="farReview">Start Ayah</label>
      {#if farReviewSurahNumber}
        <select name="startAyah" id="startAyah">
          {#each {length: quran[farReviewSurahNumber - 1].ayahs} as _, ayahNumber}
            <option value={ayahNumber+1}>{ayahNumber+1}</option>
          {/each}
        </select>
      {/if}
      <label for="farReview">End Ayah</label>
      {#if farReviewSurahNumber}
        <select name="endAyah" id="endAyah">
          {#each {length: quran[farReviewSurahNumber - 1].ayahs} as _, ayahNumber}
            <option value={ayahNumber+1}>{ayahNumber+1}</option>
          {/each}
        </select>
      {/if}
    </div>
  </div>
  <div class="form-example">
    <input type="submit" value="Submit" />
  </div>
</form>
<script lang="ts">
    import quran from "../utils/quran";

    console.log(quran);
    
    let memorizationSurahNumber = $state(0);
    let memorizationStartAyah = $state(0);
    let memorizationEndAyah = $state(0);
    let nearReviewSurahNumber = $state(0);
    let nearReviewStartAyah = $state(0);
    let nearReviewEndAyah = $state(0);
    let farReviewSurahNumber = $state(0);
    let farReviewStartAyah = $state(0);
    let farReviewEndAyah = $state(0);

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