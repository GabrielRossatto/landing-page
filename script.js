const menuBtn = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

// Fecha ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Fecha clicando fora (overlay "fake" sem HTML extra)
document.addEventListener('click', (e) => {
  const clickedToggle = menuBtn.contains(e.target);
  const clickedMenu = navLinks.contains(e.target);

  if (!clickedToggle && !clickedMenu) {
    navLinks.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Fecha no ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    navLinks.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});
