import React from 'react';

const HeroMenuBar = () => {
    return (
        <div className="w-full min-h-18 bg-black/60 justify-center flex text-white">
            <div className="w-[1024px] justify-center items-center flex">
                <button
                    className="cursor-pointer h-18 p-5 font-semibold transition duration-300 items-center justify-center flex hover:scale-105"
                >
                    Kalendārs
                    <div className="h-4 w-4 ml-1 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default HeroMenuBar;