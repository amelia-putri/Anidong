let animeData = [];

const list = document.getElementById("anime-list");
const search = document.getElementById("search");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {

    // BANNER (AMBIL 1 DATA)
    const b = data[0];
    document.getElementById("banner").innerHTML = `
      <img src="${b.cover}">
      <div class="banner-info">
        <h2>${b.title}</h2>
        <p>${b.desc}</p>
        <a class="btn" href="detail.html?id=${b.id}">Watch Now</a>
      </div>
    `;

    // POPULAR
    const list = document.getElementById("animeList");
    data.forEach(a => {
      list.innerHTML += `
        <div class="card" onclick="location.href='detail.html?id=${a.id}'">
          <img src="${a.cover}">
          <div class="card-title">${a.title}</div>
        </div>
      `;
    });
  });


// SEARCH LOGIC
search.addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();

  const filtered = animeData.filter(a =>
    a.title.toLowerCase().includes(keyword)
  );

  renderAnime(filtered);
});
