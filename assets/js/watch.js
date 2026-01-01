const params = new URLSearchParams(location.search);
const id = params.get('id');
const ep = params.get('ep');

fetch('data/anime.json')
.then(res => res.json())
.then(data => {
  const anime = data.find(a => a.id === id);
  const episode = anime.episodes.find(e => e.ep == ep);
  document.getElementById('player').src = episode.url;
});
