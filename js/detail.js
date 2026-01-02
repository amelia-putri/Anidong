const anime = {
  title: "Pertempuran Menembus Langit",
  episodes: [
    {
      ep: 1,
      video: "https://anichin.stream/?id=v712kfq"
    },
    {
      ep: 2,
      video: "https://anichin.stream/?id=v712kfq"
    }
  ]
};

const episodeList = document.getElementById("episodeList");
const videoPlayer = document.getElementById("videoPlayer");

anime.episodes.forEach((e, i) => {
  const div = document.createElement("div");
  div.className = "episode-item";
  div.innerText = "EP " + e.ep;
  div.onclick = () => playEpisode(i);
  episodeList.appendChild(div);
});

function playEpisode(index) {
  videoPlayer.src = anime.episodes[index].video;

  document.querySelectorAll(".episode-item")
    .forEach(el => el.classList.remove("active"));

  episodeList.children[index].classList.add("active");
}

playEpisode(0);
