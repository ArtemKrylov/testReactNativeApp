import {initReactI18next} from "react-i18next";
import i18n from "i18next";

import enTranslation from "../src/assets/locales/en.json";
import ukTranslation from "../src/assets/locales/uk.json";

const resources = {
  en: {translation: enTranslation},
  uk: {translation: ukTranslation},
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
