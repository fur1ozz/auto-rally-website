import React from 'react';
import TitleWithLine from "../elements/titleWithLine";
import {useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/loaders/Loader";

const SponsorsItem = ({ name, image, type, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center py-6 px-10 mx-auto mb-4 cursor-pointer shadow-[0_3px_8px_0_rgba(0,0,0,0.07)] hover:scale-95 transition-all duration-200 bg-white"
        >
            <div className="text-center text-xs font-semibold mb-2">{type}</div>
            <img className="w-40 h-12 object-contain" src={image} alt={`${name} Logo`} />
        </a>
    );
};

const Sponsors = () => {
    const { year, rallyName } = useParams();
    const url = `/sponsors/${year}/${rallyName}/`;

    const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

    const { data: sponsorData, loading, error } = useFetchData(url);

    return (
        <section className="w-full bg-white sm:px-14 px-10 pt-10 flex justify-center">
            <div className="lg:w-[1024px] w-full">
                <TitleWithLine title="Mūsu partneri" />
                {loading && <Loader />}
                {!loading && error && <div>Error loading data: {error.message}</div>}

                {!loading && !error && (
                    sponsorData.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 my-10 text-[#4e4e4e] font-chakra">
                            {sponsorData.map((sponsor, index) => (
                                <SponsorsItem
                                    key={index}
                                    name={sponsor.name}
                                    image={STORAGE_URL + sponsor.image_url}
                                    type={sponsor.type}
                                    url={sponsor.url}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="mt-10 text-[#4e4e4e] text-center">
                            Pašlaik nav publicētu sponsoru.
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default Sponsors;
