import React from 'react';
import CalendarItem from "../elements/CalendarItem";
import {useParams} from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../elements/loaders/Loader";
import {addPlaceholdersToRallies} from "../../utils/rallyUtils";

const HomeCalendar = () => {
    const {lng} = useParams()

    const url = `/currentYearRallies`;
    const STORAGE_URL = process.env.REACT_APP_STORAGE_URL;

    const { data: currentYearRalliesData, loading, error } = useFetchData(url);

    const seasonYear = currentYearRalliesData?.season_year;
    const rallies = currentYearRalliesData?.rallies || [];

    const ralliesWithPlaceholders = addPlaceholdersToRallies(rallies);
    const fallbackImg = '/images/headers/default-header.png';

    return (
        <section className="w-full min-h-screen bg-white sm:px-14 px-10 pt-10 flex justify-center" id="calendar-section">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mx-4">{seasonYear}</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                {loading && <Loader />}
                {!loading && error && <div>Error loading data: {error.message}</div>}

                {!loading && !error && (
                    ralliesWithPlaceholders.length > 0 ? (
                        <div className="flex mt-10 w-full text-[#4e4e4e] justify-between flex-wrap max-[1060px]:justify-evenly">
                            {ralliesWithPlaceholders.map((rally, index) => {
                                const rallyImg = rally.rally_img ? `${STORAGE_URL}/${rally.rally_img}` : fallbackImg;

                                return (
                                    <div
                                        key={index}
                                        className={`${
                                            rally.invisible
                                                ? "invisible w-[300px] h-[300px] mx-2 max-[1060px]:hidden"
                                                : ""
                                        }`}
                                    >
                                        {!rally.invisible && (
                                            <CalendarItem
                                                rally_name={rally.rally_name}
                                                date_from={rally.date_from}
                                                date_to={rally.date_to}
                                                location={rally.location}
                                                rally_img={rallyImg}
                                                rally_tag={rally.rally_tag}
                                                road_surface={rally.road_surface}
                                                year={seasonYear}
                                            />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="mt-10 text-center text-gray-500">
                            Paslaik nav publicetu ralliju, saja sezona.
                        </div>
                    )
                )}

                <a href={`/${lng}/seasons`} className="flex items-center justify-center hover:scale-95 transition duration-200 mb-10 bg-black/80 hover:bg-rally-accent rounded px-4 py-2">
                    <h2 className="font-containerHeading font-bold text-white text-4xl mx-4">All Rallies</h2>
                </a>
            </div>
        </section>
    );
};

export default HomeCalendar;
