import React, {useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {useCurrentTime} from "../../hooks/useCurrentTime";
import {formatTime} from "../../utils/formatTime";
import LanguageSwitcher from "../elements/LanguageSwitcher";
import {useTranslation} from "react-i18next";
import Sidebar from "./Sidebar";

// TODO need to fix
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const time = useCurrentTime();
    const {lng, year, rallyName} = useParams()
    const { t } = useTranslation();

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <div className="w-full bg-black/60">
            <nav className="py-2 px-10">
                <ul className="flex justify-between items-center mx-auto">
                    <div className="flex">
                        <a href="/" className="flex mr-0 sm:mr-20 items-center">
                            <img src="/icons/LRC-1.png" alt="LRC" className="mr-3 w-12" />
                        </a>
                        <div className="sm:flex hidden items-center">
                            <Link
                                to={`/${lng}/home`}
                                className="text-white font-medium mr-4"
                            >
                                Home
                            </Link>
                            <Link
                                to="/"
                                className="text-white font-medium mr-4"
                            >
                                Calendar
                            </Link>
                        </div>
                        <LanguageSwitcher />
                    </div>

                    <div className="sm:flex hidden">
                        <div className="text-white font-medium mr-3 cursor-default">{formatTime(time)}</div>
                        <Link
                            to="#"
                            className="text-white font-medium mr-3"
                        >
                            Ienākt
                        </Link>
                        <button className="text-rally-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </button>
                    </div>

                    <button
                        onClick={handleMobileMenuToggle}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-rally-primary rounded-lg sm:hidden"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </ul>
                <Sidebar
                    mobileMenuOpen={mobileMenuOpen}
                    handleMobileMenuToggle={handleMobileMenuToggle}
                    location={location}
                    lng={lng}
                    year={year}
                    rallyName={rallyName}
                    t={t}
                />
            </nav>
        </div>
    );
};

export default Header;
