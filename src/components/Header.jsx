import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import {useDarkMode} from "../utils/HeaderUtils";

const LinkButton = ({ name, currentPath }) => {
    const path = `/${name}`;
    const isActive = currentPath === path;

    return (
        <Link
            to={path}
            className={`flex items-center px-3 py-1 ${isActive ? 'bg-rally-secondary underline decoration-white' : 'bg-rally-secondary'} rounded justify-center mx-2 transition-all duration-100 ease-in`}
        >
            <span className="text-sm capitalize font-normal whitespace-nowrap text-white">{name}</span>
        </Link>
    );
};

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

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    return (
        <div className="absolute w-full z-10">
            <nav className="p-6">
                <div className="flex justify-between items-center mx-auto">
                    <div className="flex">
                        <a href="/" className="flex items-center px-3 py-[2px] bg-rally-primary rounded justify-center">
                            <span className="text-lg uppercase font-extrabold whitespace-nowrap text-white">LRČ</span>
                        </a>
                        <div className="sm:flex hidden">
                            <LinkButton name="jaunumi" currentPath={location.pathname} />
                            <LinkButton name="dalibnieki" currentPath={location.pathname} />
                            <LinkButton name="dokumenti" currentPath={location.pathname} />
                            <LinkButton name="skatītājiem" currentPath={location.pathname} />
                            <LinkButton name="čempionāts" currentPath={location.pathname} />
                            <LinkButton name="rezultāti" currentPath={location.pathname} />
                            <LinkButton name="galerija" currentPath={location.pathname} />
                        </div>
                    </div>

                    <div className="sm:flex hidden">
                        <button
                            className="flex transition-all duration-100 ease-in text-rally-accent mx-2"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode === "dark" ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" fill="currentColor" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                </svg>
                            )}
                        </button>
                        <LinkButton name="time" currentPath={location.pathname} />
                        <LinkButton name="flags" currentPath={location.pathname} />
                        <LinkButton name="ienākt" currentPath={location.pathname} />
                    </div>

                    {/*TODO phone version burger*/}
                    <button
                        onClick={handleMobileMenuToggle}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>

                    {/*TODO phone header*/}
                    <div className={`sm:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-[200px]"} w-[200px] h-screen bg-pj-300 fixed top-0 right-0 p-5 transition-all duration-200 ease-in-out`}>
                        <button
                            onClick={handleMobileMenuToggle}
                            className="text-pj-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <LinkButtonPhone name="about" currentPath={location.pathname} />
                        <LinkButtonPhone name="projects" currentPath={location.pathname} />
                        <LinkButtonPhone name="contact" currentPath={location.pathname} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
