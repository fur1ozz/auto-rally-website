import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4 justify-items-center">
                    <div className="flex flex-col flex-shrink-0 mb-5">
                        <div className="text-white">
                            <img src="/favicon.ico" alt="Favicon" />
                        </div>
                        <p className="text-sm leading-none mt-4 text-white">Copyright © 2024 autorally.lv</p>
                        <p className="text-sm leading-none mt-4 text-white">All rights reserved</p>
                        <div className="flex items-center gap-x-4 mt-12">
                            {/*    Social svg icons*/}
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">Navigācija</h2>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Sākums</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Jaunumi</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Dalībniekiem</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Dokumenti</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Skatītājiem</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Čempionāts</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Rezultāti</a>
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">Resursi</h2>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Galerija</a>
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">Saziņa</h2>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">your@email.com</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">+371 23456789</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
