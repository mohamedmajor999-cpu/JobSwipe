const settingsToggle = document.querySelector('#settings-toggle');
const settingsPanel = document.querySelector('#settings-panel');
const settingsClose = document.querySelector('#settings-close');
const themeToggle = document.querySelector('#theme-toggle');
const langToggle = document.querySelector('#lang-toggle');

const translations = {
  fr: {
    liveDispatch: 'DISPATCH EN DIRECT',
    urgent: 'DÉMARRAGE IMMÉDIAT',
    district: 'Quartier de Marseille',
    lineCookAt: 'Cuisinier·e à',
    distance: '~1,4 km du centre-ville',
    walkTime: 'TEMPS À PIED',
    tomorrow: 'Demain',
    starts: 'DÉBUT',
    jobs: 'Jobs',
    chats: 'Discussions',
    shifts: 'Mes shifts',
    profile: 'Profil',
  },
  en: {
    liveDispatch: 'LIVE DISPATCH',
    urgent: 'IMMEDIATE START',
    district: 'Marseille District',
    lineCookAt: 'Line Cook at',
    distance: '~1.4 km from city center',
    walkTime: 'WALK TIME',
    tomorrow: 'Tomorrow',
    starts: 'STARTS',
    jobs: 'Jobs',
    chats: 'Chats',
    shifts: 'My Shifts',
    profile: 'Profile',
  },
};

function applyLanguage(lang) {
  document.documentElement.lang = lang === 'en' ? 'en' : 'fr';
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('jobswipe-lang', lang);
}

function applyTheme(theme) {
  document.body.classList.toggle('light-mode', theme === 'light');
  localStorage.setItem('jobswipe-theme', theme);
}

settingsToggle.addEventListener('click', () => {
  settingsPanel.classList.add('open');
  settingsPanel.setAttribute('aria-hidden', 'false');
});

settingsClose.addEventListener('click', () => {
  settingsPanel.classList.remove('open');
  settingsPanel.setAttribute('aria-hidden', 'true');
});

themeToggle.addEventListener('change', () => {
  applyTheme(themeToggle.checked ? 'light' : 'dark');
});

langToggle.addEventListener('change', () => {
  applyLanguage(langToggle.checked ? 'en' : 'fr');
});

const savedTheme = localStorage.getItem('jobswipe-theme') || 'dark';
const savedLang = localStorage.getItem('jobswipe-lang') || 'fr';

themeToggle.checked = savedTheme === 'light';
langToggle.checked = savedLang === 'en';
applyTheme(savedTheme);
applyLanguage(savedLang);
