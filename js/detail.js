fetch("./data/anime.json")
  .then(res => res.json())
  .then(data => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const anime = data.find(a => a.id === id);
    const episodeList = document.getElementById("episodeList");

    if (!anime || !episodeList) {
      episodeList.innerHTML = "<p>Episode tidak ditemukan</p>";
      return;
    }

    // Episode terbaru di depan
    const episodes = [...anime.episodes].reverse();

    episodeList.innerHTML = episodes.map(ep => `
      <a href="watch.html?id=${anime.id}&ep=${ep.episode}"
         class="episode-item">
        EP ${ep.episode}
      </a>
    `).join("");
  })
  .catch(err => {
    console.error(err);
    document.getElementById("episodeList").innerHTML =
      "<p>Gagal memuat episode</p>";
  });
