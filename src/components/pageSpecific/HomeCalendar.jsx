import React from 'react';
import Flag from "react-flagkit";
import calendarData from '../../data/calendarData.json';

const getRallyStatus = (date_from, date_to) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateFromParts = date_from.split('.');
    const dateToParts = date_to.split('.');

    const fromDate = new Date(today.getFullYear(), dateFromParts[1] - 1, dateFromParts[0]);
    const toDate = new Date(today.getFullYear(), dateToParts[1] - 1, dateToParts[0]);

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(0, 0, 0, 0);

    if (toDate < today) {
        return "Completed";
    } else if (fromDate <= today && toDate >= today) {
        return "Happening";
    } else {
        const timeUntilStart = Math.ceil((fromDate - today) / (1000 * 60 * 60 * 24));
        return `Starting in ${timeUntilStart} day(s)`;
    }
};

const CalendarItem = ({ rally_name, date_from, date_to, location, rally_image_for_calendar }) => {
    const rallyStatus = getRallyStatus(date_from, date_to);

    return (
        <div className="w-[300px] h-[300px] rounded-md mt-10 group cursor-pointer flex flex-col font-chakra shadow-[0_3px_8px_0_rgba(0,0,0,0.24)]">
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
                <div>{date_from} - {date_to}</div>
                <div className="flex flex-col h-full justify-between">
                    <h3 className="font-bold text-2xl">{rally_name}</h3>
                    <div className="font-semibold text-black">{rallyStatus}</div>
                </div>
            </div>
        </div>
    );
};

const HomeCalendar = () => {
    return (
        <section className="w-full min-h-screen bg-white sm:p-14 p-10 flex justify-center">
            <div className="lg:w-[1024px]">
                <div className="flex items-center">
                    <h2 className="font-containerHeading font-bold text-[#4e4e4e] text-4xl mr-4">2024</h2>
                    <div className="flex-1 h-0.5 bg-[#4e4e4e]"></div>
                </div>
                <div className="flex mt-10 w-full text-[#4e4e4e] justify-between flex-wrap">
                    {calendarData.map((rally, index) => (
                        <CalendarItem
                            key={index}
                            rally_name={rally.rally_name}
                            date_from={rally.date_from}
                            date_to={rally.date_to}
                            location={rally.location}
                            rally_image_for_calendar={rally.rally_image_for_calendar}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCalendar;
