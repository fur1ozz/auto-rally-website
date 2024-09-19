import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

const ResultsTitleLine = () => {
    const [currentPath, setCurrentPath] = useState("");
    const { year, rallyName } = useParams();

    useEffect(() => {
        const path = window.location.pathname;
        const lastPart = path.substring(path.lastIndexOf("/") + 1);
        setCurrentPath(lastPart);
    }, []);

    const checkActive = (link) => {
        const lastPartOfLink = link.substring(link.lastIndexOf("/") + 1);
        return currentPath === lastPartOfLink ? "text-4xl text-rally-primary" : "text-xl";
    };
    return (
        <div className="flex items-center mb-10">
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <Link
                to={`/${year}/${rallyName}/results`}
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/results"
                )}`}
            >
                Rezultāti
            </Link>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <Link
                to={`/${year}/${rallyName}/results/splits`}
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/splits"
                )}`}
            >
                Starplaiki
            </Link>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <Link
                to={`/${year}/${rallyName}/results/penalties`}
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/penalties"
                )}`}
            >
                Sodi
            </Link>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <Link
                to={`/${year}/${rallyName}/results/retirements`}
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/retirements"
                )}`}
            >
                Izstājušies
            </Link>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
            <Link
                to={`/${year}/${rallyName}/results/stage-winners`}
                className={`font-containerHeading font-bold text-[#4e4e4e] mx-4 capitalize ${checkActive(
                    "/stage-winners"
                )}`}
            >
                Posmu Uzvarētāji
            </Link>
            <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
        </div>
    );
};

export default ResultsTitleLine;