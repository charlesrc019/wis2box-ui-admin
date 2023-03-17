import { createI18n } from "vue-i18n";

function loadLocaleMessages() {
  const locales = require.context(".", true, /[A-Za-z0-9-_,\s]+\.json$/i);
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1 && matched[1] !== "_template") {
      const locale = matched[1];
      messages[locale] = locales(key).default;
    }
  });
  return messages;
}

export { loadLocaleMessages };

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'fr',
  formatFallbackMessages: true,
  messages: loadLocaleMessages(),
}); 

export default i18n;