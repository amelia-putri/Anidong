fetch("./data/anime.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("anime-list");
    list.innerHTML = "";

    data.forEach(anime => {
      const lastEp = anime.episodes[0];

      list.innerHTML += `
        <a href="detail.html?id=${anime.id}" class="block bg-neutral-800 rounded overflow-hidden hover:scale-105 transition">
          <img src="${anime.cover}" class="w-full h-40 object-cover">
          <div class="p-3">
            <h3 class="font-bold">${anime.title}</h3>
            <p class="text-sm text-gray-400">Episode ${lastEp.episode}</p>
          </div>
        </a>
      `;
    });
  })
  .catch(() => {
    document.getElementById("anime-list").innerHTML =
      "<p class='text-red-500'>Gagal load data</p>";
  });
