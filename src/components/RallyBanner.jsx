import React from 'react';

const RallyBanner = () => {
    return (
        <div className="w-screen flex justify-center p-24">
            <div className="w-[1024px]">
                <div className="relative">
                    <img src="/images/headers/bheader-1.jpg" alt="" className="w-full "/>
                    {/*<img src="/images/headers/bheader-cover.png" alt="" className="w-full absolute z-10 top-0"/>*/}
                    <div className="bg-rally-primary absolute text-white px-6 py-2 font-bold text-2xl rounded-[1px] -top-7 left-0 ml-14">
                        Rallijs Cēsis
                    </div>
                    <div className="bg-rally-accent absolute text-white px-8 py-1 font-semibold text-base rounded-[1px] -bottom-3 left-3">
                        2024
                    </div>
                    <div className="bg-rally-primary absolute text-white px-8 py-1 font-semibold text-base rounded-[1px] -bottom-3 left-1/2">
                        23.08. - 24.08.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RallyBanner;