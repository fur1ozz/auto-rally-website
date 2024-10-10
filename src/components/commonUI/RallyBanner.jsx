import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const RallyBanner = ({ rallyData }) => {
    const { year, rallyName } = useParams();
    const navigate = useNavigate();

    const selectedRally = rallyData.find(rally => rally.rally_tag === rallyName && rally.year === parseInt(year));

    useEffect(() => {
        if (!selectedRally) {
            navigate('/');
        }
    }, [selectedRally, navigate]);

    if (!selectedRally) {
        return null;
    }

    return (
        <div className="w-screen flex justify-center py-20">
            <div className="w-[1024px]">
                <div className="relative text-white font-chakra">
                    <img
                        src={`/images/headers/${rallyName}-${year}.png`}
                        alt={selectedRally.rally_name}
                        className="w-full shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]"
                    />
                    <div className="absolute text-white px-6 py-2 font-bold sm:text-2xl rounded-[1px] -top-7 left-0 ml-14"
                         style={{ backgroundImage: 'url(/images/long-tire-strip.png)' }}
                    >
                        {selectedRally.rally_name}
                    </div>
                    <div className="absolute text-white px-8 py-1 font-semibold sm:text-base text-xs rounded-[1px] -bottom-3 left-3"
                         style={{ backgroundImage: 'url(/images/small-tire-strip.png)' }}
                    >
                        {selectedRally.year}
                    </div>
                    <div className="absolute text-white px-8 py-1 font-semibold sm:text-base text-xs rounded-[1px] -bottom-3 left-1/2"
                         style={{ backgroundImage: 'url(/images/long-tire-strip.png)' }}
                    >
                        {`${selectedRally.date_from} - ${selectedRally.date_to}`}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RallyBanner;
