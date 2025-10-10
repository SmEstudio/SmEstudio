// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2800);
});

// Scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('.benefit, .galeria img').forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;
    if(pos < screen) el.classList.add('visible');
  });
});

// Scroll infinito testimonios
const track = document.querySelector('.testimonios-track');
const cards = Array.from(track.children);

// Duplicar para scroll infinito
track.innerHTML += track.innerHTML;

let scrollX = 0;
const speed = 0.5; // velocidad, ajustable

function animateCarousel() {
  scrollX += speed;
  if(scrollX >= track.scrollWidth / 2) scrollX = 0;
  track.style.transform = `translateX(${-scrollX}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();

