const list = document.getElementById("animeList");

fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {
    list.innerHTML = "";
    data.forEach(anime => {
      list.innerHTML += `
        <a href="detail.html?id=${anime.id}" class="card">
          <img src="${anime.cover}" alt="${anime.title}">
          <h3>${anime.title}</h3>
        </a>
      `;
    });
  })
  .catch(err => {
    list.innerHTML = "<p style='color:red'>Gagal load data</p>";
    console.error(err);
  });
