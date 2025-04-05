import React from 'react';
import CalendarItem from "../elements/CalendarItem";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/loaders/Loader";
import {addPlaceholdersToRallies} from "../../utils/rallyUtils";

const AllSeasonsContainer = () => {
    const url = `/allRallies`;
    const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

    const { data: allRallies, loading, error } = useFetchData(url);

    const years = Object.keys(allRallies).sort((a, b) => b - a);

    return (
        <section className="w-full bg-white sm:px-14 px-10 pt-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="text-center mb-8">
                    <h1 className="font-containerHeading font-bold text-[#4e4e4e] text-5xl">
                        All Rallies
                    </h1>
                </div>
                {loading && <Loader />}
                {!loading && error && <div>Error loading data: {error.message}</div>}

                {!loading && !error && years.map(year => {
                    const rallies = allRallies[year] || [];

                    return (
                        <div key={year} className="mt-5">
                            <div className="flex items-center">
                                <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                                <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-5xl mx-4">{year}</h2>
                                <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                            </div>
                            <div className="flex mt-10 w-full text-[#4e4e4e] justify-between flex-wrap max-[1060px]:justify-evenly">
                                {(() => {
                                    const ralliesWithPlaceholders = addPlaceholdersToRallies(rallies);

                                    return ralliesWithPlaceholders.map((rally, index) => (
                                        <div
                                            key={index}
                                            className={`${rally.invisible ? "invisible w-[300px] h-[300px] mx-2 max-[1060px]:hidden" : ""}`}
                                        >
                                            {!rally.invisible && (
                                                <CalendarItem
                                                    rally_name={rally.rally_name}
                                                    date_from={rally.date_from}
                                                    date_to={rally.date_to}
                                                    location={rally.location}
                                                    rally_img={`${STORAGE_URL}/${rally.rally_img}`}
                                                    rally_tag={rally.rally_tag}
                                                    road_surface={rally.road_surface}
                                                    year={year}
                                                />
                                            )}
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AllSeasonsContainer;
