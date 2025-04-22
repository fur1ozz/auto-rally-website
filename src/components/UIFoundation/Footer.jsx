import React from 'react';
import {Link, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import CopyText from "../elements/CopyText";

const LinkButton = ({ name, path }) => {
    return (
        <Link
            to={path}
            className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">
            {name}
        </Link>
    );
};

const Footer = () => {
    const {lng, year, rallyName} = useParams()
    const { t } = useTranslation();

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black">
            <div className="mx-auto sm:pt-16 pt-5 lg:w-[1024px] px-10 xl:px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:gap-8 gap-4 justify-items-center">
                    <div className="flex flex-col flex-shrink-0 mb-5">
                        <div className="text-white w-24">
                            <img src="/icons/LRC-1.png" alt="" />
                        </div>
                        <p className="text-sm leading-none mt-4 text-white">Copyright © 2024 autorally.lv</p>
                        <p className="text-sm leading-none mt-4 text-white">All rights reserved</p>
                        <div className="flex items-center gap-x-4 mt-12">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-rally-primary rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/icons/social-icons/facebook-white-icon.png" alt=""/>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-rally-primary rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/icons/social-icons/instagram-white-icon.png" alt=""/>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-rally-primary rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/icons/social-icons/youtube-app-white-icon.png" alt=""/>
                            </a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="bg-rally-primary rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/icons/social-icons/x-social-media-white-icon.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">{t('footer.navigation')}</h2>
                        {rallyName ? (
                            <>
                                <LinkButton name={t('rally-menu-bar.news')} path={`/${lng}/${year}/${rallyName}/news`} />
                                <LinkButton name={t('rally-menu-bar.participants')} path={`/${lng}/${year}/${rallyName}/participants`} />
                                <LinkButton name={t('rally-menu-bar.documents')} path={`/${lng}/${year}/${rallyName}/documents`} />
                                <LinkButton name={t('rally-menu-bar.spectators')} path={`/${lng}/${year}/${rallyName}/spectators`} />
                                <LinkButton name={t('rally-menu-bar.results')} path={`/${lng}/${year}/${rallyName}/results`} />
                                <LinkButton name={t('rally-menu-bar.gallery')} path={`/${lng}/${year}/${rallyName}/gallery`} />

                            </>
                        ) : (
                            <>
                                <LinkButton name={t('header.home')} path={`/${lng}/home`} />
                                <LinkButton name={t('header.calendar')} path={`/${lng}/home#calendar`} />
                                <LinkButton name={t('header.all-rallies')} path={`/${lng}/seasons`} />
                                <LinkButton name={t('header.championship')} path={`/${lng}/championship/${currentYear}/1`} />
                            </>
                        )}
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">{t('footer.resources')}</h2>
                        {/*<a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Galerija</a>*/}
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">{t('footer.contact')}</h2>
                        <CopyText text="your@email.com" className="hover:text-rally-primary text-base leading-4 mt-6 text-white"/>
                        <CopyText text="+371 23456789" className="hover:text-rally-primary text-base leading-4 mt-6 text-white"/>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Contact</a>
                    </div>
                </div>
                <div className="max-w-[1024px] w-full border-t-2 border-white py-8 flex justify-center">
                    <a href="https://fur1ozz-portfolio.vercel.app/about" target="_blank" className="text-white">
                        Made with ❤️ by
                        <span className="font-semibold"> fur1ozz</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
