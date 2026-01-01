document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");

  fetch("./data/anime.json")
  .then(res => res.json())
  .then(data => {
    // render anime
  })
  .catch(err => {
    console.error(err);
    document.getElementById("anime-list").innerHTML =
      "<p class='text-red-500'>Gagal load data</p>";
  });


      data.forEach(item => {
        html += `
          <a href="detail.html?id=${item.id}"
             class="block bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
            
            <img
              src="${item.cover}"
              alt="${item.title}"
              class="w-full h-48 object-cover"
            />

            <div class="p-4">
              <h3 class="font-bold text-sm text-white">${item.title}</h3>
              <p class="text-xs text-gray-400 mt-1">
                ${item.episodes.length} Episode
              </p>
            </div>
          </a>
        `;
      });

      list.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      list.innerHTML = "<p class='text-red-500'>Gagal load data</p>";
    });
});
