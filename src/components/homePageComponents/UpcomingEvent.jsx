import React from 'react';

const UpcomingEvent = () => {
    return (
        <div
            className="bg-cover bg-center cursor-pointer select-none group"
            style={{ backgroundImage: 'url(/images/headers/rally-utena-2024.png)' }}
            // onClick={sendTo}
            id="event"
        >
            <div className="w-full backdrop-blur-md bg-black/70 flex justify-center items-center text-white sm:px-10 px-7 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                <div className="w-[1024px] group-hover:scale-[0.98] transition duration-300">
                    <div className="font-bold md:text-3xl sm:text-2xl text-lg py-4">Upcoming event</div>
                    <img src="/images/headers/rally-utena-2024.png" alt="" className="w-full shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]"/>
                    <div className="flex justify-between  font-semibold sm:text-lg text-[10px]  sm:px-6 py-4">
                        <div className="">Pēc - 20d 14h 30m</div>
                        <div>20.08.24. - 21.08.24.</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default UpcomingEvent;