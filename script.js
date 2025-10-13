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


// NAVBAR MOBILE TOGGLE
(function(){
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;

  if(!toggle || !navbar) return;

  toggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('nav-open');
    body.classList.toggle('nav-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // cerrar menú si se redimensiona a desktop
  window.addEventListener('resize', () => {
    if(window.innerWidth > 900 && navbar.classList.contains('nav-open')) {
      navbar.classList.remove('nav-open');
      body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // cerrar al click fuera del nav (opcional)
  document.addEventListener('click', (e) => {
    if(window.innerWidth <= 900 && navbar.classList.contains('nav-open')) {
      const inside = navbar.contains(e.target);
      if(!inside) {
        navbar.classList.remove('nav-open');
        body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
})();


// NAVBAR HAMBURGUESA
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
const body = document.body;

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('nav-open');
  body.classList.toggle('nav-open');
});

// MODAL DE IMÁGENES
const modal = document.getElementById('imageModal');
const modalImg = modal.querySelector('img');
const modalDesc = modal.querySelector('.modal-description');
const modalClose = modal.querySelector('.modal-close');

document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalDesc.textContent = img.dataset.description || img.alt;
  });
});

modalClose.addEventListener('click', () => modal.style.display = 'none');
modal.addEventListener('click', (e) => { if(e.target === modal) modal.style.display = 'none'; });
