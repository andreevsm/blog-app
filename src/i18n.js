import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './translations/en';
import RU from './translations/ru';

i18n.use(initReactI18next).init({
  lng: 'ru',
  fallbackLng: 'ru',
  debug: true, // TODO: remove
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: EN,
    },
    ru: {
      translation: RU,
    },
  },
});

export default i18n;
