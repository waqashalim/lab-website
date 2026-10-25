const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.header-inner')) closeMenu();
});

const orbit = document.querySelector('#orbit-scene');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');

if (orbit && finePointer.matches && !reduceMotion.matches) {
  const orbitArea = orbit.parentElement;
  orbitArea.addEventListener('pointermove', (event) => {
    const bounds = orbitArea.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    orbit.style.transform = `rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translate3d(${x * 7}px, ${y * 7}px, 0)`;
  });
  orbitArea.addEventListener('pointerleave', () => {
    orbit.style.transform = 'rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
