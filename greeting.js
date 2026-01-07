document.addEventListener("DOMContentLoaded", function () {
  const g = document.getElementById("greeting");
  if (!g) return;

  const hour = new Date().getHours();

  // hapus semua class warna dulu
  g.classList.remove(
    "greeting-pagi",
    "greeting-siang",
    "greeting-sore",
    "greeting-malam"
  );

  if (hour >= 5 && hour <= 11) {
    g.innerText = "Selamat Pagi";
    g.classList.add("greeting-pagi");
  } 
  else if (hour >= 12 && hour <= 14) {
    g.innerText = "Selamat Siang";
    g.classList.add("greeting-siang");
  } 
  else if (hour >= 15 && hour <= 17) {
    g.innerText = "Selamat Sore";
    g.classList.add("greeting-sore");
  } 
  else {
    g.innerText = "Selamat Malam";
    g.classList.add("greeting-malam");
  }
});
