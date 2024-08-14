import React from 'react';

const HeroTitle = () => {
    return (
        <div className="flex-1 text-white w-full p-10 flex justify-center items-center">
            <div className="flex flex-col w-[1024px]">
                <h1 className="sm:text-6xl text-4xl font-bold">Latvijas Rallija Čempionāts</h1>
                <p className="text-lg font-normal my-10 md:w-1/2 sm:w-3/4 w-full text-justify">Latvijas autosporta tradīcija kopš 1958. gada. LRČ apvieno labākos braucējus un komandas, lai sacenstos pa Latvijas sarežģītākajiem ceļiem.</p>
                <button className="py-2 px-4 border-white border-[1px] w-fit hover:scale-105 transition duration-300 bg-white/20 rounded-[1px]">Nākamais pasākums</button>
            </div>
        </div>
    );
};

export default HeroTitle;