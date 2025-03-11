import React from 'react';
import calendarData from '../../data/calendarData.json';
import CalendarItem from "../elements/CalendarItem";
import {Link, useParams} from "react-router-dom";

const HomeCalendar = () => {
    const {lng} = useParams()
    const currentYear = new Date().getFullYear();
    const displayedYear = calendarData[currentYear] ? currentYear : currentYear - 1;
    const rallies = calendarData[displayedYear] || [];

    return (
        <section className="w-full min-h-screen bg-white sm:px-14 px-10 pt-10 flex justify-center" id="calendar-section">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mx-4">{displayedYear}</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                <div
                    className="flex mt-10 w-full text-[#4e4e4e] justify-between flex-wrap max-[1060px]:justify-evenly">
                    {(() => {
                        const ralliesWithPlaceholders = [...rallies];
                        const remainder = ralliesWithPlaceholders.length % 3;

                        if (remainder !== 0) {
                            for (let i = 0; i < 3 - remainder; i++) {
                                ralliesWithPlaceholders.push({invisible: true});
                            }
                        }
                        console.log(ralliesWithPlaceholders);
                        return ralliesWithPlaceholders.map((rally, index) => (
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
                                        rally_image_for_calendar={rally.rally_image_for_calendar}
                                        eng_name={rally.eng_name}
                                        road_surface={rally.road_surface}
                                        year={displayedYear}
                                    />
                                )}
                            </div>
                        ));
                    })()}
                </div>
                <a href={`/${lng}/seasons`} className="flex items-center justify-center hover:scale-95 transition duration-200 mb-10 bg-black/80 hover:bg-rally-accent rounded px-4 py-2">
                    <h2 className="font-containerHeading font-bold text-white text-4xl mx-4">All Seasons</h2>
                </a>
            </div>
        </section>
    );
};

export default HomeCalendar;
