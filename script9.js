// GESTIONE MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Aggiungiamo un controllo per evitare errori se l'elemento non esiste
if (menuBtn && mobileMenu) {
  menuBtn.onclick = () => {
    mobileMenu.classList.toggle("open");
  };
}

// ANIMAZIONI ALLO SCROLL (Intersection Observer)
const sections = document.querySelectorAll("section");

const observerOptions = {
  threshold: 0.1 // La sezione appare quando il 10% è visibile
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});