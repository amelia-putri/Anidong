const id = new URLSearchParams(location.search).get('id');

fetch('data/anime.json')
  .then(res => res.json())
  .then(data => {
    const anime = data.find(a => a.id === id);
    document.getElementById('title').textContent = anime.title;
    document.getElementById('cover').src = anime.cover;

    let eps = '';
    anime.episodes.forEach(e => {
      eps += `
        <a href="watch.html?id=${id}&ep=${e.ep}" class="bg-zinc-800 p-2 text-center rounded">
          EP ${e.ep}
        </a>
      `;
    });
    document.getElementById('episodes').innerHTML = eps;
  });
