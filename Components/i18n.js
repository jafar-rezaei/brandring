import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fetch from 'isomorphic-fetch';
import Backend from './main/i18next-universal-fetch';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'fa',
    backend: {
      /* translation file path */
      loadPath: '/static/i18n/{{ns}}/{{lng}}.json',
      fetch,
    },
    fallbackLng: 'fa',
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
    },
  });

export default i18n;
