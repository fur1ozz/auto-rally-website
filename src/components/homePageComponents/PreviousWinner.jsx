import React from 'react';

const PreviousWinner = () => {
    return (
        <section className="w-full bg-white sm:px-14 px-10 pt-10 flex justify-center">
            <div className="lg:w-[1024px] w-full">
                <div className="flex items-center w-full">
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mx-4">Previous Winners</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                <div className="flex w-full text-[#4e4e4e] md:flex-row flex-col items-center">
                    <div className="flex flex-col md:flex-row w-[300px] md:w-full items-center font-chakra mt-10 mx-2">
                        <div className="flex mr-4 mb-4 md:mb-0">
                            <img src="https://cdn-1.motorsport.com/images/amp/0L1EJya2/s1000/winners-ott-tanak-martin-jarve.jpg" alt="" className="h-52 w-96 rounded-sm object-cover shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]"/>
                        </div>
                        <div className="flex flex-col justify-between min-h-52">
                            <h3 className="text-2xl font-bold">Rallijs Cēsis</h3>
                            <div className="text-xl font-normal mb-2 md:mb-0">
                                <div>Tomass Vēveris</div>
                                <div>Reinis Artimovičs</div>
                            </div>
                            <div className="text-lg font-medium"><span className="font-semibold">Car:</span> Mitsubishi Lancer Evo IX</div>
                            <p className="font-light indent-4">Šīs bija tiešam labas sajūtas, paldies manam sturmanim par idealu sniegumu, bez viņa mēs šeit uz pjedestāļa nestāvētu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PreviousWinner;