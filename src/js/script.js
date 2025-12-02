(function () {
  const translations = {
    en: {
      navAbout: 'Services',
      navContact: 'Contact',
      heroTitle: 'I turn ideas into polished, fast and striking interfaces',
      heroLead: 'I specialize in building websites, SPA apps and interactive systems crafted to keep users engaged.',
      ctaText: 'Order a project',
      aboutTitle: 'Services',
      serviceWebTitle: 'Websites',
      serviceWebCopy: 'Modern, responsive and fast websites and landing pages — designed to convert.',
      serviceAppsTitle: 'Interactive apps',
      serviceAppsCopy: 'I build dynamic SPA, PWA and front-end components in JavaScript, Vue and React.',
      serviceSeoTitle: 'Performance & SEO',
      serviceSeoCopy: 'Core Web Vitals optimization, audits, speed improvements and technical SEO.',
      serviceUxTitle: 'UX/UI',
      serviceUxCopy: 'I design intuitive interfaces and engaging animations that boost usability and delight.',
      serviceSupportTitle: 'Technical support',
      serviceSupportCopy: 'Evolving existing projects, bugfixes, updates and new feature delivery.',
      serviceIntegrationTitle: 'Integrations & automation',
      serviceIntegrationCopy: 'I integrate APIs, analytics and marketing tools. I automate processes to save your time.',
      contactTitle: 'Contact',
      contactCopy:
        'If you need support delivering a project, cost estimation or a technical consultation — feel free to reach out. I work with companies, software houses and entrepreneurs, delivering solid and on-time front-end solutions.',
      contactLinkedInLabel: 'LinkedIn',
      footer: '© 2025 doIT Dawid Wierzbicki',
      toggleLabel: 'PL'
    },
    pl: {
      navAbout: 'Usługi',
      navContact: 'Kontakt',
      heroTitle: 'Zamieniam pomysły w\u00A0dopracowane, szybkie i\u00A0efektowne interfejsy',
      heroLead:
        'Specjalizuję się w\u00A0tworzeniu stron, aplikacji SPA i\u00A0systemów interaktywnych stworzonych tak, by\u00A0użytkownicy zostali na\u00A0dłużej.',
      ctaText: 'Zamów projekt',
      aboutTitle: 'Usługi',
      serviceWebTitle: 'Strony WWW',
      serviceWebCopy:
        'Nowoczesne, responsywne i szybkie strony WWW oraz landing page’e – zaprojektowane, by konwertować.',
      serviceAppsTitle: 'Aplikacje interaktywne',
      serviceAppsCopy:
        'Tworzę dynamiczne SPA, PWA i komponenty front-endowe w JavaScript, Vue i React.',
      serviceSeoTitle: 'Wydajność & SEO',
      serviceSeoCopy:
        'Optymalizacja Core Web Vitals, audyty, poprawa szybkości działania i techniczne SEO.',
      serviceUxTitle: 'UX/UI',
      serviceUxCopy:
        'Projektuję intuicyjne interfejsy oraz angażujące animacje, które podnoszą użyteczność i wrażenia użytkownika.',
      serviceSupportTitle: 'Wsparcie techniczne',
      serviceSupportCopy:
        'Rozwój istniejących projektów, naprawa błędów, aktualizacje i wdrażanie nowych funkcjonalności.',
      serviceIntegrationTitle: 'Integracje & automatyzacja',
      serviceIntegrationCopy:
        'Integruję API, systemy analityczne i narzędzia marketingowe. Automatyzuję procesy, aby oszczędzać Twój czas.',
      contactTitle: 'Kontakt',
      contactCopy:
        'Jeżeli potrzebujesz wsparcia w realizacji projektu, wyceny prac lub konsultacji technicznej — zapraszam do kontaktu. Pracuję z firmami, software house’ami oraz przedsiębiorcami, dostarczając solidne i terminowe rozwiązania front-endowe.',
      contactLinkedInLabel: 'LinkedIn',
      footer: '© 2025 doIT Dawid Wierzbicki',
      toggleLabel: 'EN'
    }
  };

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function applyLang(lang) {
    const t = translations[lang] || translations.pl;
    setText('nav-about', t.navAbout);
    setText('nav-contact', t.navContact);
    setText('hero-title', t.heroTitle);
    setText('hero-lead', t.heroLead);
    setText('about-title', t.aboutTitle);
    setText('contact-cta', t.ctaText);
    setText('service-web-title', t.serviceWebTitle);
    setText('service-web-copy', t.serviceWebCopy);
    setText('service-apps-title', t.serviceAppsTitle);
    setText('service-apps-copy', t.serviceAppsCopy);
    setText('service-seo-title', t.serviceSeoTitle);
    setText('service-seo-copy', t.serviceSeoCopy);
    setText('service-ux-title', t.serviceUxTitle);
    setText('service-ux-copy', t.serviceUxCopy);
    setText('service-support-title', t.serviceSupportTitle);
    setText('service-support-copy', t.serviceSupportCopy);
    setText('service-integration-title', t.serviceIntegrationTitle);
    setText('service-integration-copy', t.serviceIntegrationCopy);
    setText('contact-title', t.contactTitle);
    setText('contact-copy', t.contactCopy);
    setText('contact-linkedin-label', t.contactLinkedInLabel);
    setText('footer', t.footer);
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = t.toggleLabel;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  }

  function detectInitialLang() {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'pl') return stored;
    const browser = (navigator.language || navigator.userLanguage || 'pl').toLowerCase();
    return browser.startsWith('pl') ? 'pl' : 'en';
  }

  document.addEventListener('DOMContentLoaded', function () {
    const initial = detectInitialLang();
    applyLang(initial);
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        const current = localStorage.getItem('lang') || initial;
        const next = current === 'pl' ? 'en' : 'pl';
        applyLang(next);
      });
    }
  });
})();

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
