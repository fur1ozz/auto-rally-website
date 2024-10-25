import React from 'react';
import { Link } from "react-router-dom";
import calendarData from '../../data/calendarData.json';

const LinkButtonPhone = ({ name, path, currentPath }) => {
    const isActive = currentPath === path;

    return (
        <li className="min-h-10 flex items-center capitalize text-[#2e2e2e] font-medium text-lg">
            <Link
                to={path}
                className={`flex items-center ${isActive ? 'text-rally-accent font-medium' : ''}`}
            >
                {name}
            </Link>
        </li>
    );
};

const LinkButtonPhoneRallyInfo = ({ name, path, currentPath, tag }) => {
    return (
        <li className="min-h-10 pl-4 flex items-center capitalize text-[#2e2e2e] text-lg">
            <Link
                to={path}
                className={`flex items-center ${currentPath.includes(`/${tag}`) ? 'text-rally-accent font-medium' : ''}`}
            >
                {name}
            </Link>
        </li>
    );
};
const LinkButtonPhoneRallies = ({ name, path, lng }) => {
    return (
        <li className="min-h-10 pl-4 flex items-center capitalize text-[#2e2e2e] text-lg">
            <a
                href={`/${lng}/2024/${path.replace(/\s+/g, '-').toLowerCase()}/news`}
                className={`flex items-center`}
            >
                {name}
            </a>
        </li>
    );
};

const Sidebar = ({ mobileMenuOpen, handleMobileMenuToggle, location, lng, year, rallyName, t }) => {
    return (
        <ul className={`sm:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full min-[400px]:translate-x-[250px]"} flex flex-col justify-start w-full min-[400px]:w-[250px] h-screen bg-white/55 backdrop-blur fixed top-0 right-0 px-5 py-3 transition-all duration-200 ease-in-out z-10 shadow-[-10px_0_10px_rgba(0,0,0,0.1)]`}>
            <li className="h-10 flex items-center capitalize text-black">
                <button onClick={handleMobileMenuToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </li>
            <LinkButtonPhone name="Home" path={`/${lng}/home`} currentPath={location.pathname} />
            <LinkButtonPhone name="Calendar" path={`/${lng}/home#calendar`} currentPath={location.pathname} />
            {year ? (
                <div>
                    <li className="mt-5 h-10 flex items-center capitalize text-black text-lg">
                        <a className="flex items-center font-medium">Rally Info</a>
                    </li>
                    <LinkButtonPhoneRallyInfo name={t('rally-menu-bar.news')} path={`/${lng}/${year}/${rallyName}/news`} currentPath={location.pathname} tag="news" />
                    <LinkButtonPhoneRallyInfo name={t('rally-menu-bar.participants')} path={`/${lng}/${year}/${rallyName}/participants`} currentPath={location.pathname} tag="participants" />
                    <LinkButtonPhoneRallyInfo name={t('rally-menu-bar.documents')} path={`/${lng}/${year}/${rallyName}/documents`} currentPath={location.pathname} tag="documents" />
                    <LinkButtonPhoneRallyInfo name={t('rally-menu-bar.spectators')} path={`/${lng}/${year}/${rallyName}/spectators`} currentPath={location.pathname} tag="spectators" />
                    <LinkButtonPhoneRallyInfo name={t('rally-menu-bar.results')} path={`/${lng}/${year}/${rallyName}/results`} currentPath={location.pathname} tag="results" />
                    <LinkButtonPhoneRallyInfo name={t('rally-menu-bar.championship')} path={`/${lng}/${year}/${rallyName}/championship`} currentPath={location.pathname} tag="championship" />
                    <LinkButtonPhoneRallyInfo name={t('rally-menu-bar.gallery')} path={`/${lng}/${year}/${rallyName}/gallery`} currentPath={location.pathname} tag="gallery" />
                </div>
            ) : (
                <div>
                    <li className="mt-5 h-10 flex items-center capitalize text-black text-lg">
                        <a className="flex items-center font-medium">2024</a>
                    </li>
                    {calendarData.map((rally, index) => (
                        <LinkButtonPhoneRallies
                            key={index}
                            name={rally.rally_name}
                            path={rally.eng_name}
                            lng={lng}
                        />
                    ))}
                </div>
            )}
        </ul>
    );
};

export default Sidebar;
