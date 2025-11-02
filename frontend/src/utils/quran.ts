// Obtain Qur'an data from API
const response = await fetch(
  "https://api.alquran.cloud/v1/quran/quran-uthmani"
);
const quran = await response.json();

const surahs = quran.data.surahs;
const formattedQuran = surahs.map((surah: any) => {
  return {
    number: surah.number,
    name: surah.englishName,
    ayahs: Object.keys(surah.ayahs).length,
  };
});

console.log(formattedQuran);

export default formattedQuran;
