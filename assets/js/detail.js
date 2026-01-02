const id = new URLSearchParams(location.search).get("id");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {

    const animeData = {
  btth: {
    title: "Battle Through The Heavens",
    episodes: [
      { ep: 1, url: "https://anichin.stream/?id=v71c2em" },
      { ep: 2, url: "https://anichin.stream/?id=v71c2em" }
    ]
  }
};
    cover.src = anime.cover;
    title.innerText = anime.title;
    desc.innerText = anime.desc;

    anime.episodes
      .sort((a,b)=>b.ep-a.ep)
      .forEach(e => {
        episodeList.innerHTML += `
          <div class="episode"
            onclick="location.href='watch.html?id=${id}&ep=${e.ep}'">
            Episode ${e.ep}
          </div>
        `;
      });

    data.slice(0,6).forEach(a=>{
      sideList.innerHTML += `<p>${a.title}</p>`;
    });
  });
