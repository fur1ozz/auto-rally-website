import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto pt-16 lg:w-[1024px] px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:gap-8 gap-4 justify-items-center">
                    <div className="flex flex-col flex-shrink-0 mb-5">
                        <div className="text-white">
                            <img src="/favicon.ico" alt="Favicon" />
                        </div>
                        <p className="text-sm leading-none mt-4 text-white">Copyright © 2024 autorally.lv</p>
                        <p className="text-sm leading-none mt-4 text-white">All rights reserved</p>
                        <div className="flex items-center gap-x-4 mt-12">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-amber-600 rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/images/social-icons/facebook-white-icon.png" alt=""/>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-amber-600 rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/images/social-icons/instagram-white-icon.png" alt=""/>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="bg-amber-600 rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/images/social-icons/youtube-app-white-icon.png" alt=""/>
                            </a>
                            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="bg-amber-600 rounded-full p-2 w-[32px] brightness-75 hover:brightness-100 transition duration-100">
                                <img src="/images/social-icons/x-social-media-white-icon.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">Navigācija</h2>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Sākums</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Jaunumi</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Dalībniekiem</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Dokumenti</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Skatītājiem</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Čempionāts</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Rezultāti</a>
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">Resursi</h2>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Galerija</a>
                    </div>
                    <div className="flex flex-col mb-10 items-center sm:items-start">
                        <h2 className="text-base font-semibold leading-4 text-rally-primary">Saziņa</h2>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">your@email.com</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">+371 23456789</a>
                        <a href="" className="hover:text-rally-primary text-base leading-4 mt-6 text-white cursor-pointer transition duration-100">Contact</a>
                    </div>
                </div>
                <div className="max-w-[1024px] w-full border-t-2 border-white py-8 mx-10 flex justify-center">
                    <a href="#fur1ozzPortfolio" target="_blank" className="text-white">
                        Made with ❤️ by
                        <span className="font-semibold"> fur1ozz</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
