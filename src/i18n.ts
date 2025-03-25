import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, tr } from "./assets/locales";

const resources = {
    en: { translation: en },
    tr: { translation: tr },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
});

export default i18n;
