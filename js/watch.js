const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");
const currentEp = parseInt(params.get("ep"));

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {
    const anime = data.find(a => a.id === animeId);
    if (!anime) return;

    const episode = anime.episodes.find(e => e.ep === currentEp);
    if (!episode) return;

    document.getElementById("player").src = episode.video;

    const next = anime.episodes.find(e => e.ep === currentEp + 1);
    if (next) {
      document.getElementById("nextBtn").onclick = () => {
        location.href = `watch.html?id=${animeId}&ep=${next.ep}`;
      };
    } else {
      document.getElementById("nextBtn").style.display = "none";
    }
  });
