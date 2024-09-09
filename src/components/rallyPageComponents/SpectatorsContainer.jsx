import React from 'react';

const SpectatorsContainer = () => {
    return (
        <section className="w-full min-h-20 bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mr-4">Skatītājiem</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                <div className="flex mt-10 w-full text-[#4e4e4e]">
                    <div className="w-full flex flex-col items-center">
                        <a href="#" target="_blank" className="mb-5 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                            <img src="/images/viewerImages/cesis-tickets.png" alt=""/>
                        </a>
                        <a href="#" target="_blank" className="mb-5 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                            <img src="/images/viewerImages/cesis-spectators-guide.png" alt=""/>
                        </a>
                        <a href="#" target="_blank" className="mb-5 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                            <img src="/images/viewerImages/cesis-interactive-map.png" alt=""/>
                        </a>
                        <a href="#" target="_blank" className="mb-5 shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
                            <img src="/images/viewerImages/cesis-ticket-exchange-points.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpectatorsContainer;