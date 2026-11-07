const video = document.querySelector('.logo-motion');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function syncBackground() {
  if (reducedMotion.matches) video.pause();
  else video.play().catch(() => {});
}

syncBackground();
reducedMotion.addEventListener('change', syncBackground);

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.getElementById('main-nav');

function setMenuOpen(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') === 'false');
});

mainNav.addEventListener('click', event => {
  if (event.target.closest('a') && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

document.querySelector('.mast').addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

menuToggle.hidden = false;
