// script.js — lo mínimo indispensable, comentado paso a paso.

// 1) Menú hamburguesa: en mobile el <nav> empieza oculto (lo hace el CSS).
//    Al tocar el botón, le sumamos/sacamos la clase "abierto".
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const abierto = mainNav.classList.toggle('abierto');
  // aria-expanded le avisa a los lectores de pantalla si el menú está abierto
  navToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

// 2) Si el usuario toca un link del menú, lo cerramos (mejor experiencia mobile)
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('abierto');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// 3) Año automático en el footer, para no tener que actualizarlo a mano
document.getElementById('anio').textContent = new Date().getFullYear();
