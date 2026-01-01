const episodes = [
  {
    ep: 1,
    servers: {
      "Server 1": "https://example.com/embed1",
      "Server 2": "https://example.com/embed2"
    }
  },
  {
    ep: 2,
    servers: {
      "Server 1": "https://example.com/embed3",
      "Server 2": "https://example.com/embed4"
    }
  },
  {
    ep: 3,
    servers: {
      "Server 1": "https://example.com/embed5"
    }
  }
];

const params = new URLSearchParams(location.search);
let currentEp = parseInt(params.get("ep")) || episodes[0].ep;

const episode = episodes.find(e => e.ep === currentEp);
const player = document.getElementById("videoPlayer");
const serverSelect = document.getElementById("serverSelect");

// SET SERVER
serverSelect.innerHTML = "";
Object.entries(episode.servers).forEach(([name, url]) => {
  const opt = document.createElement("option");
  opt.value = url;
  opt.textContent = name;
  serverSelect.appendChild(opt);
});
player.src = serverSelect.value;

serverSelect.onchange = () => {
  player.src = serverSelect.value;
};

// NAV
document.getElementById("prevEp").onclick = () => {
  if (currentEp > 1) location.href = `?ep=${currentEp - 1}`;
};
document.getElementById("nextEp").onclick = () => {
  if (currentEp < episodes.length) location.href = `?ep=${currentEp + 1}`;
};

document.getElementById("currentEp").innerText = currentEp;

// LIST EP
const list = document.getElementById("episodeList");
episodes.slice().reverse().forEach(e => {
  const div = document.createElement("div");
  div.className = "episode-card";
  div.innerHTML = `
    <img src="cover.jpg">
    <div>
      <h3>Episode ${e.ep}</h3>
      <p>Subtitle Indonesia</p>
    </div>
  `;
  div.onclick = () => location.href = `?ep=${e.ep}`;
  list.appendChild(div);
});
