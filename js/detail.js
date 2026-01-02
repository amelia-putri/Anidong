const id = new URLSearchParams(location.search).get("id");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {

    const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const episodeList = document.getElementById("episode-list");

const data = {
  btth: {
    title: "Battle Through The Heavens",
    episodes: 12
  }
};

if (!data[id]) {
  episodeList.innerHTML = "<p>Anime tidak ditemukan</p>";
} else {
  let html = "";
  for (let i = 1; i <= data[id].episodes; i++) {
    html += `<a class="episode">Episode ${i}</a>`;
  }
  episodeList.innerHTML = html;
}
