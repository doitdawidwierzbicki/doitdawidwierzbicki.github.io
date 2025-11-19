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

const footer = document.getElementsByTagName('footer')[0];
footer.innerHTML = `© ${new Date().getFullYear()} doIT Dawid Wierzbicki`;
