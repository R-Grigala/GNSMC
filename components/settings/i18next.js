import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json';
import ka from './ka.json';

export const languageResources = {
    en: {translation: en},
    ka: {translation: ka},
};

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'ka',
    fallbackLng: 'ka',
    resources: languageResources,
});

export default i18next;