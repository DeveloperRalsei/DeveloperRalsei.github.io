import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import { en, tr } from "./assets/locales";

const resources = {
    en: { translation: en },
    tr: { translation: tr },
};

i18n.use(initReactI18next).use(detector).init({
    resources,
    fallbackLng: "en",
});

export default i18n;
