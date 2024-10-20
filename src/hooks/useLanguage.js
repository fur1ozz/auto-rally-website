import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useLanguage = (lng) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lng) {
            i18n.changeLanguage(lng);
        }
    }, [lng, i18n]);
};

export default useLanguage;
