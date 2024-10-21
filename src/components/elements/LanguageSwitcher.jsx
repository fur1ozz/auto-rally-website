import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        const path = location.pathname.split('/').slice(2).join('/');
        navigate(`/${lng}/${path}`);
    };

    return (
        <div className="text-white">
            <button className="mr-2" onClick={() => changeLanguage('lv')}>lv</button>
            <button className="mr-2" onClick={() => changeLanguage('en')}>en</button>
            <button className="mr-2" onClick={() => changeLanguage('ua')}>ua</button>
            <button className="mr-2" onClick={() => changeLanguage('lt')}>lt</button>
            <button className="mr-2" onClick={() => changeLanguage('ee')}>ee</button>
        </div>
    );
};

export default LanguageSwitcher;
