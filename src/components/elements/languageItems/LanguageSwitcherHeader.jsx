import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Flag from "react-flagkit";

const languages = {
    lv: { name: 'Latviešu', country: 'LV' },
    en: { name: 'English', country: 'GB' },
    ua: { name: 'Українська', country: 'UA' },
    lt: { name: 'Lietuvių', country: 'LT' },
    ee: { name: 'Eesti', country: 'EE' },
};

const LanguageSwitcherHeader = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const currentLang = location.pathname.split('/')[1] || 'lv';
    const currentLanguage = languages[currentLang];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        const path = location.pathname.split('/').slice(2).join('/');
        navigate(`/${lng}/${path}`);
        setDropdownVisible(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative mr-3" ref={dropdownRef}>
            <div className="text-white font-medium w-36">
                <button
                    type="button"
                    className="flex w-full justify-center items-center text-sm"
                    onClick={toggleDropdown}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    {currentLanguage.name}
                    <svg className={`ml-3 h-5 w-5 text-gray-400 transition-all duration-300 ${isDropdownVisible ? '-rotate-180' : ''} `} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className={`absolute z-10 mt-3 top-full rounded bg-white shadow-lg w-full px-1 transition-opacity duration-200 ${isDropdownVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

                <div className="py-1 w-full">
                    {Object.entries(languages).map(([lng, { name, country }]) => (
                        lng !== currentLang && (
                            <button
                                key={lng}
                                onClick={() => changeLanguage(lng)}
                                className="flex py-2 px-2 text-sm text-black items-center hover:bg-gray-200 w-full rounded"
                            >
                                <Flag country={country} className="rounded-sm mr-1" />
                                {name}
                            </button>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcherHeader;
