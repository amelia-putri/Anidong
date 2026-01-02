const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {
    const anime = data.find(a => a.id === animeId);
    if (!anime) return;

    document.getElementById("title").textContent = anime.title;
    document.getElementById("status").textContent = anime.status;

    const episodeList = document.getElementById("episodeList");

    episodeList.innerHTML = [...anime.episodes]
      .sort((a, b) => b.ep - a.ep)
      .map(ep => `
        <a href="watch.html?id=${anime.id}&ep=${ep.ep}"
           class="ep-item">
          EP ${ep.ep}
        </a>
      `)
      .join("");
  });
