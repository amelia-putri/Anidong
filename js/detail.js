const animeData = {
  btth: {
    title: "Battle Through the Heavens",
    episodes: [
      {
        ep: "EP 1",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        ep: "EP 2",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  },

  woc: {
    title: "Word of Coming Season 2",
    episodes: [
      {
        ep: "EP 1",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  },

  togh: {
    title: "Tales of Herding Gods",
    episodes: [
      {
        ep: "EP 1",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  }
};

// Ambil ID dari URL
const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");

const anime = animeData[animeId];

if (!anime) {
  document.getElementById("animeTitle").textContent = "Anime tidak ditemukan";
} else {
  document.getElementById("animeTitle").textContent = anime.title;

  const player = document.getElementById("videoPlayer");
  const list = document.getElementById("episodeList");

  // Load episode pertama
  player.src = anime.episodes[0].video;

  anime.episodes.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.textContent = item.ep;

    if (index === 0) btn.classList.add("active");

    btn.onclick = () => {
      document.querySelectorAll(".episode-list button")
        .forEach(b => b.classList.remove("active"));

      btn.classList.add("active");
      player.src = item.video;
    };

    list.appendChild(btn);
  });
}
