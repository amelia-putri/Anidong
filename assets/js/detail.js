const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");

const detailAnime = document.getElementById("detailAnime");
const episodeList = document.getElementById("episodeList");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {
    const anime = data.find(a => a.id === animeId);

    if (!anime) {
      detailAnime.innerHTML = "<p>Anime tidak ditemukan</p>";
      return;
    }

    // DETAIL ANIME
    detailAnime.innerHTML = `
      <img src="${anime.cover}" class="w-full rounded mb-3">
      <h1 class="text-xl font-bold">${anime.title}</h1>
      <p class="text-gray-400 text-sm">${anime.status}</p>
      <p class="mt-2">${anime.sinopsis}</p>
    `;

    // EPISODE (TERBARU DI ATAS)
    const episodes = anime.episodes.slice().reverse();

    episodeList.innerHTML = episodes.map(ep => `
      <a href="${ep.video}"
         target="_blank"
         class="block bg-zinc-800 p-3 rounded hover:bg-zinc-700">
        Episode ${ep.ep}
      </a>
    `).join("");
  })
  .catch(err => {
    console.error(err);
    detailAnime.innerHTML = "<p>Gagal load data</p>";
  });
