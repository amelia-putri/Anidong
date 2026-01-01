fetch("data/anime.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      console.log(item);
    });
  });
      html += `
<a href="anime.html?id=${a.id}" class="group">
  <div class="bg-zinc-900 rounded-lg overflow-hidden shadow hover:shadow-xl transition">
    <div class="relative">
      <img src="${a.cover}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300">
      <span class="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">
        ONGOING
      </span>
    </div>
    <div class="p-2">
      <h3 class="text-sm font-semibold line-clamp-2 group-hover:text-red-500">
        ${a.title}
      </h3>
    </div>
  </div>
</a>
`;
