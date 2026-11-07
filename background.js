const video = document.querySelector('.logo-motion');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function syncBackground() {
  if (reducedMotion.matches) video.pause();
  else video.play().catch(() => {});
}

syncBackground();
reducedMotion.addEventListener('change', syncBackground);
