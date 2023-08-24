
// Boton flotante funcional hacia arriba para ir al inicio del documento.
const scrollTopButton = document.getElementById('scrollTopButton');

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Cerrar el menú al hacer clic en un enlace
const navLinks = document.querySelectorAll('#nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('check').checked = false;
  });
});
