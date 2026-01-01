document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("list");

  if (!container) {
    console.error("Element #list tidak ditemukan");
    return;
  }

  fetch("data/anime.json")
    .then(response => response.json())
    .then(data => {
      let html = "";

      data.forEach(item => {
        html += `
          <div class="bg-neutral-800 rounded-lg overflow-hidden shadow">
            <img
              src="${item.cover}"
              alt="${item.title}"
              class="w-full h-40 object-cover"
            />
            <div class="p-3">
              <h3 class="font-semibold text-sm">${item.title}</h3>
              <p class="text-xs text-neutral-400 mt-1">
                Episode: ${item.episodes.length}
              </p>
            </div>
          </div>
        `;
      });

      container.innerHTML = html;
    })
    .catch(error => {
      console.error("Gagal load data:", error);
      container.innerHTML =
        "<p class='text-red-500'>Gagal memuat data</p>";
    });
});
