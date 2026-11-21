// src/i18n.js - Master Internationalization & Language Switch Engine
(function () {
  'use strict';

  const STORAGE_KEY = 'lilian_portfolio_lang';
  const DEFAULT_LANG = 'en';

  // Get current language from localStorage or default to English
  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  // Set language and update document
  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ar') lang = DEFAULT_LANG;
    localStorage.setItem(STORAGE_KEY, lang);

    const isRTL = (lang === 'ar');
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

    if (isRTL) {
      document.body.classList.add('rtl-mode');
    } else {
      document.body.classList.remove('rtl-mode');
    }

    // Update active states on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Translate all static elements with data-i18n attribute
    if (typeof translations !== 'undefined' && translations[lang]) {
      const dict = translations[lang];

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
          el.innerHTML = dict[key];
        }
      });

      // Translate attributes (placeholders, titles, aria-labels)
      document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key] !== undefined) {
          el.setAttribute('placeholder', dict[key]);
        }
      });

      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key] !== undefined) {
          el.setAttribute('title', dict[key]);
        }
      });
    }

    // Dispatch global language change event for dynamic renderers
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  // Helper to extract localized string from bilingual objects: { en: "...", ar: "..." } or plain string
  function t(field, lang) {
    if (!field) return '';
    const current = lang || getLang();
    if (typeof field === 'object' && field !== null) {
      return field[current] || field['en'] || '';
    }
    return field;
  }

  // Initialize on DOMContentLoaded
  function init() {
    const lang = getLang();
    setLanguage(lang);

    // Attach click events to all lang switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang');
        setLanguage(targetLang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose to window
  window.i18n = {
    getLang,
    setLanguage,
    t
  };
})();
