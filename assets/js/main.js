let animeData = [];

const list = document.getElementById("anime-list");
const search = document.getElementById("search");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("animeList");
    list.innerHTML = "";

    data.forEach(anime => {
      list.innerHTML += `
        <a href="detail.html?id=${anime.id}" class="block bg-neutral-800 rounded p-3">
          <img src="${anime.cover}" class="rounded mb-2">
          <h3 class="font-bold">${anime.title}</h3>
        </a>
      `;
    });
  })
  .catch(() => {
    document.getElementById("animeList").innerHTML =
      "<p class='text-red-500'>Gagal load data</p>";
  });


function renderAnime(data) {
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<p class='text-gray-400'>Anime tidak ditemukan</p>";
    return;
  }

  data.forEach(anime => {
    const lastEp = anime.episodes[0];

    list.innerHTML += `
      <a href="detail.html?id=${anime.id}"
        class="block bg-neutral-800 rounded overflow-hidden hover:scale-105 transition">
        <img src="${anime.cover}" class="w-full h-40 object-cover">
        <div class="p-3">
          <h3 class="font-bold">${anime.title}</h3>
          <p class="text-sm text-gray-400">Episode ${lastEp.episode}</p>
        </div>
      </a>
    `;
  });
}

// SEARCH LOGIC
search.addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();

  const filtered = animeData.filter(a =>
    a.title.toLowerCase().includes(keyword)
  );

  renderAnime(filtered);
});
