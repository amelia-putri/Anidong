fetch('data/anime.json')
  .then(res => res.json())
  .then(data => {
    let html = '';
    data.forEach(a => {
      html += `
        <a href="anime.html?id=${a.id}">
          <div class="hover:scale-105 transition">
            <img src="${a.cover}" class="rounded">
            <h3 class="mt-2 text-center">${a.title}</h3>
          </div>
        </a>
      `;
    });
    document.getElementById('list').innerHTML = html;
  })
  .catch(err => console.error(err));
