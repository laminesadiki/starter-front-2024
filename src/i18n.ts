import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import frJSON from './locales/fr.json';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      // debug: true,
      resources: {
         fr: { ...frJSON },
      }, // Where we're gonna put translations' files
      //   lng: 'fr', // Set the initial language of the App
      fallbackLng: 'fr',
      interpolation: {
         escapeValue: false,
      },
   });

export default i18n;
