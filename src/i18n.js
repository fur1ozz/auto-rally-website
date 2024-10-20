import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationLV from './locales/lv/translation.json';
import translationEN from './locales/en/translation.json';
import translationUA from './locales/ua/translation.json';
import translationLT from './locales/lt/translation.json';
import translationEE from './locales/ee/translation.json';

const resources = {
    lv: { translation: translationLV },
    en: { translation: translationEN },
    ua: { translation: translationUA },
    lt: { translation: translationLT },
    ee: { translation: translationEE },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'lv',
        fallbackLng: 'lv',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
