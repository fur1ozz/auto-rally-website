import React from 'react';
import Flag from "react-flagkit";
import calendarData from '../../data/calendarData.json';
import {Link, useParams} from "react-router-dom";
import {getRallyStatus} from "../../utils/dateUtils";
import {getColorsForSurfaceType} from "../../utils/colorUtils";

const CalendarItem = ({ rally_name, date_from, date_to, location, rally_image_for_calendar, eng_name, road_surface }) => {
    const rallyStatus = getRallyStatus(date_from, date_to);
    const { backgroundColor, borderColor } = getColorsForSurfaceType(road_surface);
    const { lng } = useParams();

    return (
        <a href={`/${lng}/2024/${eng_name.replace(/\s+/g, '-').toLowerCase()}/news`}>
            <div className="w-[300px] h-[300px] rounded-md mb-10 mx-2 group cursor-pointer flex flex-col font-chakra shadow-[0_3px_8px_0_rgba(0,0,0,0.17)]">
                <div className="overflow-hidden h-[55%] flex justify-center items-center rounded-t-md relative">
                    <img
                        src={`/images/rally-images-for-calendar/${rally_image_for_calendar}`}
                        alt=""
                        className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-200"
                    />
                    <div className="absolute left-0 bottom-0 bg-white px-3 py-1">
                        <Flag country={location.toUpperCase()} className="" />
                    </div>
                </div>
                <div className="h-[45%] flex flex-col p-4">
                    <div className="flex justify-between">
                        <div>{date_from} - {date_to}</div>
                        <div
                            className="flex items-center capitalize text-sm border-[1px] rounded-xl px-2 text-black"
                            style={{ backgroundColor, borderColor }}
                        >
                            {road_surface}
                        </div>
                    </div>
                    <div className="flex flex-col h-full justify-between">
                        <h3 className="font-bold text-2xl">{rally_name}</h3>
                        <div className="font-semibold text-black">{rallyStatus}</div>
                    </div>
                </div>
            </div>
        </a>
    );
};

const HomeCalendar = () => {
    return (
        <section className="w-full min-h-screen bg-white sm:px-14 px-10 pt-10 flex justify-center" id="calendar-section">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mx-4">2024</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                <div className="flex mt-10 w-full text-[#4e4e4e] justify-between flex-wrap max-[1060px]:justify-evenly">
                    {calendarData.map((rally, index) => (
                        <CalendarItem
                            key={index}
                            rally_name={rally.rally_name}
                            date_from={rally.date_from}
                            date_to={rally.date_to}
                            location={rally.location}
                            rally_image_for_calendar={rally.rally_image_for_calendar}
                            eng_name={rally.eng_name}
                            road_surface={rally.road_surface}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCalendar;
