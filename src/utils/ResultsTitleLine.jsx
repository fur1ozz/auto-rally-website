import React, {useEffect, useState} from 'react';

const ResultsTitleLine = () => {
    const [currentPath, setCurrentPath] = useState("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    const checkActive = (link) => {
        return currentPath === link ? "text-4xl text-rally-primary" : "text-xl";
    };
    return (
        <div className="flex items-center mb-10">
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <a
                href="/results"
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/results"
                )}`}
            >
                Rezultāti
            </a>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <a
                href="/results/splits"
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/results/splits"
                )}`}
            >
                Starplaiki
            </a>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <a
                href="/results/penalties"
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/results/penalties"
                )}`}
            >
                Sodi
            </a>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <a
                href="/results/retirements"
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/results/retirements"
                )}`}
            >
                Izstājušies
            </a>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <a
                href="/results/stage-winners"
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/results/stage-winners"
                )}`}
            >
                Posmu Uzvarētāji
            </a>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
        </div>
    );
};

export default ResultsTitleLine;