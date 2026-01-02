const anime = {
  title: "Pertempuran Menembus Langit",
  episodes: [
    {
      ep: 1,
      title: "Episode 1",
      video: "https://anichin.stream/?id=v712kfq"
    },
    {
      ep: 2,
      title: "Episode 2",
      video: "https://anichin.stream/?id=v712kfq"
    }
  ]
};

const episodeList = document.getElementById("episodeList");
const videoPlayer = document.getElementById("videoPlayer");

// render episode list
anime.episodes.forEach((e, i) => {
  const btn = document.createElement("div");
  btn.className = "episode-item";
  btn.textContent = `EP ${e.ep}`;
  btn.onclick = () => playEpisode(i);
  episodeList.appendChild(btn);
});

// play episode function
function playEpisode(index) {
  videoPlayer.src = anime.episodes[index].video;

  document.querySelectorAll(".episode-item").forEach(el =>
    el.classList.remove("active")
  );

  episodeList.children[index].classList.add("active");
}

// auto play episode 1
playEpisode(0);
