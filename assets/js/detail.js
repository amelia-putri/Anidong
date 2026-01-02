const id = new URLSearchParams(location.search).get("id");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {
    const anime = data.find(a => a.id === id);

    document.getElementById("cover").src = anime.cover;
    document.getElementById("title").innerText = anime.title;
    document.getElementById("desc").innerText = anime.desc;

    const epList = document.getElementById("episodeList");

    anime.episodes
      .sort((a, b) => b.ep - a.ep) // EP BARU KE ATAS
      .forEach(ep => {
        epList.innerHTML += `
          <div class="episode"
            onclick="location.href='watch.html?id=${anime.id}&ep=${ep.ep}'">
            Episode ${ep.ep}
          </div>
        `;
      });

    // SIDEBAR
    const sidebar = document.getElementById("sidebarList");
    data.slice(0, 6).forEach(a => {
      sidebar.innerHTML += `<p>${a.title}</p>`;
    });
  });
