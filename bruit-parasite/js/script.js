const header = document.querySelector('.site-header');
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = [...document.querySelectorAll('.main-nav a, .mobile-menu a')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('scroll', () => header?.classList.toggle('compact', window.scrollY > 24));

burger?.addEventListener('click', () => {
  const open = mobileMenu?.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
  mobileMenu?.setAttribute('aria-hidden', String(!open));
});

navLinks.forEach(link => link.addEventListener('click', () => {
  mobileMenu?.classList.remove('open');
  burger?.setAttribute('aria-expanded', 'false');
  mobileMenu?.setAttribute('aria-hidden', 'true');
}));

const here = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.main-nav a').forEach(a => {
  const href = a.getAttribute('href') || '';
  if ((here === 'spectacles.html' && href === 'spectacles.html') || (here === 'ateliers.html' && href === 'ateliers.html')) a.classList.add('active');
});

if (here === 'index.html' || here === '') {
  const sections = [...document.querySelectorAll('main section[id]')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const id = entry.target.id;
        document.querySelectorAll('.main-nav a').forEach(a => {
          const href = a.getAttribute('href');
          a.classList.toggle('active', href === `index.html#${id}` || href === `#${id}`);
        });
      }
    });
  }, { threshold: 0.2 });
  if (!reducedMotion) document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const form = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  feedback.textContent = 'Votre message est prêt. Vous pouvez aussi nous écrire directement à contact@bruitparasite.fr.';
  feedback.style.color = 'var(--color-yellow)';
  form.reset();
});
