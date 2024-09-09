import React from 'react';

const RallyBanner = () => {
    return (
            <div className="w-screen flex justify-center p-24">
                <div className="w-[1024px]">
                    <div className="relative">
                        <img src="/images/headers/rally-cesis-2024.png" alt="" className="w-full shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]"/>
                        <div className="absolute text-white px-6 py-2 font-bold text-2xl rounded-[1px] -top-7 left-0 ml-14"
                             style={{ backgroundImage: 'url(/images/long-tire-strip.png)' }}
                        >
                            Rallijs Cēsis
                        </div>
                        <div className="absolute text-white px-8 py-1 font-semibold text-base rounded-[1px] -bottom-3 left-3"
                             style={{ backgroundImage: 'url(/images/small-tire-strip.png)' }}
                        >
                            2024
                        </div>
                        <div className="absolute text-white px-8 py-1 font-semibold text-base rounded-[1px] -bottom-3 left-1/2"
                             style={{ backgroundImage: 'url(/images/long-tire-strip.png)' }}
                        >
                            23.08. - 24.08.
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default RallyBanner;