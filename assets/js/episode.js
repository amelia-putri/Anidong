const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const ep = parseInt(params.get("ep"));

fetch("../../data/anime.json")
.then(res => res.json())
.then(data => {
  const anime = data.find(a => a.id === id);
  if (!anime) return;

  const index = anime.episodes.findIndex(e => e.episode === ep);
  const current = anime.episodes[index];

  document.getElementById("judul").textContent = anime.title;
  document.getElementById("eps").textContent = `Episode ${ep}`;
  document.getElementById("player").src = current.video;

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if (anime.episodes[index - 1]) {
    prev.href = `episode.html?id=${id}&ep=${ep - 1}`;
  } else {
    prev.classList.add("opacity-40","pointer-events-none");
  }

  if (anime.episodes[index + 1]) {
    next.href = `episode.html?id=${id}&ep=${ep + 1}`;
  } else {
    next.classList.add("opacity-40","pointer-events-none");
  }

  const list = document.getElementById("list");
  list.innerHTML = "";

  anime.episodes
    .slice().reverse()
    .forEach(e => {
      list.innerHTML += `
      <a href="episode.html?id=${id}&ep=${e.episode}"
       class="block p-3 rounded
       ${e.episode === ep ? "bg-purple-600" : "bg-neutral-800 hover:bg-neutral-700"}">
        Episode ${e.episode}
      </a>`;
    });
});
