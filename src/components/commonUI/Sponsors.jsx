import React from 'react';

//todo make this rally specific and put it below every page of the rally example - below news container
const SponsorsItem = ({ }) => {
    return(
        <div className="flex flex-col items-center py-6 px-10 mx-2 mb-4 cursor-pointer shadow-[0_3px_8px_0_rgba(0,0,0,0.07)]">
            <div className="flex text-center text-xs font-medium mb-3">Čempionata riepu piegadatajs</div>
            <img className="w-40" src="https://www.autorally.lv/files/r235/sponsors/pirelli.png?v=2" alt=""/>
        </div>
    )
}

const Sponsors = () => {
    return (
        <section className="w-full bg-white sm:px-14 px-10 pt-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mx-4">Our Sponsors</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                <div className="flex my-10 w-full text-[#4e4e4e] justify-between flex-wrap font-chakra">
                    <SponsorsItem />
                    <SponsorsItem />
                    <SponsorsItem />
                    <SponsorsItem />
                </div>
            </div>
        </section>
    );
};

export default Sponsors;