// assets/js/detail.js

const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");

if (!animeId) {
  document.body.innerHTML = "<p class='text-red-500 p-4'>Anime tidak ditemukan</p>";
  throw new Error("ID anime kosong");
}

fetch("data/anime.json")
  .then(res => {
    if (!res.ok) throw new Error("Gagal load anime.json");
    return res.json();
  })
  .then(data => {
    const anime = data.find(a => a.id === animeId);

    if (!anime) {
      document.body.innerHTML =
        "<p class='text-red-500 p-4'>Anime tidak ditemukan</p>";
      return;
    }

    // Set judul & cover
    document.getElementById("animeTitle").innerText = anime.title;
    document.getElementById("animeCover").src = anime.cover;

    const episodeList = document.getElementById("episodeList");
    episodeList.innerHTML = "";

    // 👉 episode terbaru di atas
    const episodes = [...anime.episodes].sort(
      (a, b) => b.episode - a.episode
    );

    episodes.forEach(ep => {
      const a = document.createElement("a");
      a.href = `watch.html?title=${encodeURIComponent(anime.title)}&ep=${ep.episode}&url=${encodeURIComponent(ep.url)}`;
      a.className =
        "block bg-neutral-800 hover:bg-neutral-700 rounded p-3 mb-2 transition";

      a.innerText = `Episode ${ep.episode}`;
      episodeList.appendChild(a);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("episodeList").innerHTML =
      "<p class='text-red-500'>Gagal load data</p>";
  });
