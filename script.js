// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu after clicking a link
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the current section's nav link while scrolling
const sections = document.querySelectorAll('section[id]');
const navLinks = mainNav.querySelectorAll('a');

const highlightNav = () => {
  let currentId = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      currentId = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
  });
};

window.addEventListener('scroll', highlightNav);
highlightNav();

// Fade project cards in as they enter the viewport
const projectCards = document.querySelectorAll('.proj-card');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  projectCards.forEach((card) => observer.observe(card));
} else {
  // Fallback: just show them if IntersectionObserver isn't supported
  projectCards.forEach((card) => card.classList.add('in-view'));
}
