let emMenu = document.getElementById('emMenu');
let menu = document.getElementById('menuMobile');
let overlay = document.getElementById('overlayMenu');

emMenu.addEventListener('click', () => {
  menu.classList.add('abrirMenu');
});

menu.addEventListener('click', () => {
  menu.classList.remove('abrirMenu');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('abrirMenu');
});
