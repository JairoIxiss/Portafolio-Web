 document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2 // Se activa cuando el 20% del elemento esté visible
    });

    const elementosAnimar = document.querySelectorAll('.img-perfil, .presente, .descripcion, .titulo-edu');
    elementosAnimar.forEach(el => observer.observe(el));
  });