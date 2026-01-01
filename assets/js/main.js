document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("list");

  container.innerHTML = "<p style='color:white'>JS MASUK ✅</p>";

  fetch("data/anime.json")
    .then(res => res.json())
    .then(data => {
      container.innerHTML = "<p style='color:white'>DATA ADA: " + data.length + "</p>";
    })
    .catch(err => {
      container.innerHTML = "<p style='color:red'>FETCH ERROR</p>";
      console.error(err);
    });
});
