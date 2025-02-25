"use client"
import LanguageDetector  from 'i18next-browser-languagedetector';

import i18n from 'i18next';



import en from './locales/en/en.json'
import ka from './locales/ka/ka.json'
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ka: { translation: ka}
    },
    lng: "en", 
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;