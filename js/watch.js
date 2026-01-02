const p = new URLSearchParams(location.search);
const id = p.get("id");
const ep = parseInt(p.get("ep"));

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {

    const anime = data.find(a => a.id === id);
    const current = anime.episodes.find(e => e.ep === ep);

    epTitle.innerText = `${anime.title} Episode ${ep}`;
    video.innerHTML = current.video;

    anime.episodes.forEach(e=>{
      listEp.innerHTML += `
        <div class="episode"
          onclick="location.href='watch.html?id=${id}&ep=${e.ep}'">
          Episode ${e.ep}
        </div>
      `;
    });

    const next = anime.episodes.find(e=>e.ep===ep+1);
    if(next){
      nextEp.href = `watch.html?id=${id}&ep=${ep+1}`;
    } else {
      nextEp.style.display="none";
    }
  });
