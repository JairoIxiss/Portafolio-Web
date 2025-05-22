const form = document.getElementById('formulario-contacto');
const mensajeEstado = document.getElementById('mensaje-estado');

function mostrarMensaje(texto, colorFondo, colorTexto) {
  mensajeEstado.textContent = texto;
  mensajeEstado.style.backgroundColor = colorFondo;
  mensajeEstado.style.color = colorTexto;
  mensajeEstado.classList.add('mostrar');

  setTimeout(() => {
    mensajeEstado.classList.remove('mostrar');
  }, 5000);
}

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/meogwlnn", {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json'
      }
    });

    if (response.ok) {
      form.reset();
      mostrarMensaje('Mensaje enviado con éxito!', '#d0f0d8', '#256029');
    } else {
      mostrarMensaje('Ocurrió un error. Intenta de nuevo.', '#f8d7da', '#842029');
    }
  } catch (error) {
    mostrarMensaje('Error de red. Intenta más tarde.', '#f8d7da', '#842029');
  }
});