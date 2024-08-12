import React, {useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import {useDarkMode} from "../utils/HeaderUtils";

// TODO need to fix
const LinkButtonPhone = ({ name, currentPath }) => {
    const path = `/${name}`;
    const isActive = currentPath === path;

    return (
        <Link
            to={path}
            className={`flex items-center ${isActive ? ' underline decoration-pj-400 decoration-dotted' : ''} hover:bg-low-200 justify-center mx-2 transition-all duration-100 ease-in`}
        >
            <span className="text-lg uppercase font-medium whitespace-nowrap text-pj-400">{name}</span>
        </Link>
    );
};

const Header = () => {
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return (
            <>
                {hours}<span className="animate-flash">:</span>{minutes}
            </>
        );
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <div className="w-full bg-black/60">
            <nav className="py-5 px-10">
                <div className="flex justify-between items-center mx-auto">
                    <div className="flex">
                        <a href="/" className="flex mr-0 sm:mr-20 items-center">
                            <img src="/images/LRC-1.png" alt="LRC" className="mr-3 w-7" />
                            <span className="text-lg font-bold whitespace-nowrap text-white">
                                AutoRally
                            </span>
                        </a>
                        <div className="sm:flex hidden items-center">
                            <Link
                                to="#"
                                className="text-white font-medium mr-3"
                            >
                                Sezonas
                            </Link>
                            <Link
                                to="/news"
                                className="text-white font-medium mr-3"
                            >
                                News
                            </Link>
                        </div>
                    </div>

                    <div className="sm:flex hidden">
                        {/*<button*/}
                        {/*    className="flex transition-all duration-100 ease-in text-rally-accent mx-2"*/}
                        {/*    onClick={toggleDarkMode}*/}
                        {/*>*/}
                        {/*    {isDarkMode === "dark" ? (*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" fill="currentColor" />*/}
                        {/*        </svg>*/}
                        {/*    ) : (*/}
                        {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">*/}
                        {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />*/}
                        {/*        </svg>*/}
                        {/*    )}*/}
                        {/*</button>*/}
                        <div className="text-white font-medium mr-3 cursor-default">{formatTime(time)}</div>
                        <Link
                            to="#"
                            className="text-white font-medium mr-3"
                        >
                            Ienākt
                        </Link>
                        <button className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </button>
                    </div>

                    <button
                        onClick={handleMobileMenuToggle}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg sm:hidden"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>

                    {/*TODO phone header*/}
                    <div className={`sm:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-[200px]"} w-[200px] h-screen bg-interfaceBar-purple fixed top-0 right-0 p-5 transition-all duration-200 ease-in-out z-10`}>
                        <button
                            onClick={handleMobileMenuToggle}
                            className="text-pj-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <LinkButtonPhone name="Sezonas" currentPath={location.pathname} />
                        <LinkButtonPhone name="projects" currentPath={location.pathname} />
                        <LinkButtonPhone name="contact" currentPath={location.pathname} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
