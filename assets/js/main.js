document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("list");

  fetch("data/anime.json")
    .then(res => res.json())
    .then(data => {
      console.log("DATA ADA:", data.length);

      let html = "";

      data.forEach(item => {
        html += `
          <div class="bg-white text-black rounded-xl overflow-hidden shadow-lg border">
            <img
              src="${item.cover}"
              alt="${item.title}"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="font-bold text-sm">${item.title}</h3>
              <p class="text-xs text-gray-600 mt-1">
                ${item.episodes.length} Episode
              </p>
            </div>
          </div>
        `;
      });

      list.innerHTML = html;
    })
    .catch(err => {
      list.innerHTML = "<p class='text-red-500'>Gagal load data</p>";
      console.error(err);
    });
});
