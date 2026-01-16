const menuBtn = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', isOpen);
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', false);
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const nome = data.get('name');
  const telefone = data.get('phone');
  const negocio = data.get('business');
  const objetivo = data.get('message');

  const msg =
`Olá! Quero um orçamento para landing page.

👤 Nome: ${nome}
📞 WhatsApp: ${telefone}
🏢 Negócio: ${negocio}
🎯 Objetivo: ${objetivo}`;

  const phoneNumber = '5511914849538'; 
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

  window.open(url, '_blank');
});
