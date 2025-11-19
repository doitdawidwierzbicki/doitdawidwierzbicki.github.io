// Simple reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const onScroll = () => {
  for (const el of reveals) {
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight - 80) { el.classList.add('visible') }
  }
};
window.addEventListener('scroll', onScroll); onScroll();

// CTA scroll to contact
document.getElementById('contact-cta').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// Scroll down arrows
const animatedArrows = document.querySelector('.scroll-down');
animatedArrows.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// Footer
const footer = document.getElementsByTagName('footer')[0];
footer.innerHTML = `© ${new Date().getFullYear()} doIT Dawid Wierzbicki`;
