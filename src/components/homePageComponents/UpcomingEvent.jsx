import React from 'react';

const UpcomingEvent = () => {
    return (
        <a href="/2024/samsonas-rally-utena/news">
            <div
                className="bg-cover bg-center cursor-pointer"
                style={{ backgroundImage: 'url(/images/parallax-backgrounds/gravel-3.jpg)' }}
            >
                <div className="w-full backdrop-blur-sm bg-black/20 flex justify-center items-center text-white sm:px-14 px-4 overflow-hidden">
                    <div className="w-[1024px] font-chakra hover:scale-[1.02] transition-all duration-300">
                        <div className="flex items-center pt-10">
                            <div className="font-semibold md:text-3xl sm:text-2xl text-xl mr-5">Upcoming Event</div>
                            <div className="flex-1 h-0.5 bg-white"></div>
                        </div>
                        <h2 className="flex items-center justify-center md:text-3xl sm:text-2xl text-lg font-semibold py-4">Samsonas Rally Utena</h2>
                        <img src="/images/headers/samsonas-rally-utena-2024.png" alt="" className="w-full shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]"/>
                        <div className="flex justify-between font-medium sm:text-lg text-[10px] sm:px-6 py-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:size-5 size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                </svg>
                                <div className="ml-2">20.08. - 21.08.</div>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:size-5 size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                                </svg>
                                <div className="ml-2">20d 14h 30m</div>
                            </div>
                        </div>

                        <div className="flex items-center sm:py-2 pt-6">
                            <div className="font-semibold md:text-3xl sm:text-2xl text-xl mr-5">Weather Forecast</div>
                            <div className="flex-1 h-0.5 bg-white"></div>
                        </div>
                        <div className="flex justify-between font-semibold font-poppins sm:px-6 sm:py-6 py-4">
                            <div className="flex flex-col">
                                <div className="flex items-center sm:text-2xl text-base">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:size-6 size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <div className="ml-1">Utena, Lithuania</div>
                                </div>
                                <div className="sm:ml-7 ml-6 sm:text-sm text-[10px] font-normal">Chance of rain: 16%</div>

                                <div className="sm:text-4xl text-2xl my-8">15° - 27°</div>
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default UpcomingEvent;