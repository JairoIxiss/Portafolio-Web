const sections = document.querySelectorAll('section');
let currentSection = 0;
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0) {
    // Scroll hacia abajo
    if (currentSection < sections.length - 1) {
      currentSection++;
      scrollToSection(currentSection);
    }
  } else {
    // Scroll hacia arriba
    if (currentSection > 0) {
      currentSection--;
      scrollToSection(currentSection);
    }
  }
});

function scrollToSection(index) {
  isScrolling = true;
  sections[index].scrollIntoView({ behavior: 'smooth' });

  // Evitar múltiples scrolls rápidos
  setTimeout(() => {
    isScrolling = false;
  }, 1000); // 1 segundo para permitir nuevo scroll
}