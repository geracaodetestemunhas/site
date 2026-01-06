const targetDate = new Date("2026-01-07T18:00:00-03:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const daysBlock = document.getElementById("block-days");
  if (days <= 0) {
    daysBlock.style.display = "none";
  } else {
    document.getElementById("days").textContent = String(days).padStart(2, "0");
  }

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* PARALLAX LEVE */

const img = document.querySelector(".image-wrapper img");
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 6;
  const y = (e.clientY / window.innerHeight - 0.5) * 6;
  img.style.transform = `translate(${x}px, ${y}px)`;
});

/* EASTER EGG */

let clicks = 0;
const logo = document.getElementById("logo");
const easter = document.getElementById("easter");

logo.addEventListener("click", () => {
  clicks++;
  if (clicks === 5) {
    easter.classList.add("show");
    setTimeout(() => easter.classList.remove("show"), 1800);
    clicks = 0;
  }
});

document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

